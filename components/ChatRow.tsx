import { useEffect, useState } from "react";
import Link from "next/link";
import { BsChatRight } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

interface Props {
    id: string;
}

const ChatRow = ({ id }: Props) => {
    const pathName = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState<boolean>(false);

    const [messages] = useCollection(
        collection(db, "users", session?.user?.email!, "chats", id, "messages")
    );

    const removeChat = async () => {
        await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
        router.replace("/");
    };

    useEffect(() => {
        if (!pathName) return;

        setActive(pathName.includes(id));
    }, [pathName]);

    return (
        <Link
            href={`/chat/${id}`}
            className={`flex items-center sidebarRows bg-black  ${
                active
                    ? "bg-gradient-to-r from-black to-emerald-700/20 border-emerald-500"
                    : "border-transparent"
            }`}
        >
            <BsChatRight size={17} />
            <p className="flex-1 hidden md:inline-flex truncate">
                {messages?.docs[messages?.docs.length - 1]?.data().text ||
                    "New Chat"}
            </p>
            <AiOutlineDelete
                size={20}
                className="hover:text-red-500"
                onClick={removeChat}
            />
        </Link>
    );
};

export default ChatRow;
