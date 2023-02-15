"use client";

import React from "react";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

const SideBar = () => {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session &&
            query(
                collection(db, "users", session.user?.email!, "chats"),
                orderBy("createdAt", "asc")
            )
    );

    return (
        <div className="p-2 flex flex-col h-screen bg-[#1d1d1d] text-white">
            <div className="flex-1">
                <div>
                    <NewChat />
                    <div className="flex flex-col gap-1 mt-4">
                        {chats?.docs.map((chat) => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                </div>
            </div>
            {session && (
                <div
                    className="flex gap-2 opacity-70 hover:opacity-100 cursor-pointer items-center"
                    onClick={() => signOut()}
                    title="Sign Out"
                >
                    <img
                        onClick={() => signOut()}
                        src={"/BrodyGPT.png" || session?.user?.image!}
                        alt="Google Photo"
                        className="h-12 w-12 rounded-full shadow-lg border-[2px] border-emerald-500"
                    />
                    <div className="flex flex-col">
                        <span className="text-emerald-300 text-sm font-semibold">
                            {session.user?.name!}
                        </span>
                        <span className="text-emerald-500 text-xs">
                            {session.user?.email!}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;
