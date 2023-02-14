import { useSession } from "next-auth/react";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
// Use "next/navigation" for NextJS version 13+
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const NewChat = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const createNewChat = async () => {
        const doc = await addDoc(
            collection(db, "users", session?.user?.email!, "chats"),
            {
                userId: session?.user?.email!,
                createdAt: serverTimestamp(),
            }
        );

        router.push(`/chat/${doc.id}`);
    };

    return (
        <button onClick={createNewChat} className="sidebarRows w-full">
            <AiOutlinePlusCircle size={18} />
            <p>New Chat</p>
        </button>
    );
};

export default NewChat;
