"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import { db } from "../firebase";
import toast from "react-hot-toast";

interface Props {
    chatId: string;
}

const ChatInput = ({ chatId }: Props) => {
    const [prompt, setPrompt] = useState<string>("");
    const { data: session } = useSession();

    const model = "text-davinci-003";

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;
        const input = prompt.trim();
        setPrompt("");
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar:
                    session?.user?.image! ||
                    `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            },
        };

        await addDoc(
            collection(
                db,
                "users",
                session?.user?.email!,
                "chats",
                chatId,
                "messages"
            ),
            message
        );

        const notification = toast.loading("BrodyGPT is thinking...");

        await fetch("/api/askQuestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session,
            }),
        }).then(() => {
            toast.success("BrodyGPT has responded!", {
                id: notification,
            });
        });
    };

    return (
        <div className="bg-text-sm bg-[#1d1d1d] text-emerald-20 rounded-lg m-2 px-2">
            <form
                onSubmit={sendMessage}
                className="p-5 space-x-5 flex items-center justify-center gap-2"
            >
                <textarea
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                    disabled={!session}
                    className="bg-black rounded-lg h-16 p-3 flex-1 text-sm text-emerald-300 disabled:text-gray-300 focus:outline-none  disabled:cursor-not-allowed resize-none"
                    placeholder="Type Something..."
                />
                <button
                    disabled={!prompt || !session}
                    className="relative flex items-center disabled:opacity-30 disabled:cursor-not-allowed justify-center"
                    type="submit"
                    title="Submit"
                >
                    <div className="bg-emerald-300/50 h-8 w-8 flex items-center justify-center rounded-full animate-pulse absolute blur-sm z-10" />
                    <ImSpinner10
                        size={28}
                        className="absolute z-20 hover:animate-spin rounded-full bg-black hover:bg-black/50 fill-emerald-500/90"
                    />
                </button>
            </form>
            <div>{/* Model Selection */}</div>
        </div>
    );
};

export default ChatInput;
