import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

interface Props {
    params: {
        id: string;
    };
}

const ChatPage = ({ params: { id } }: Props) => {
    return (
        <div className="flex flex-col h-screen overflow-hidden text-white">
            <Chat chatId={id} />
            <ChatInput chatId={id} />
        </div>
    );
};

export default ChatPage;
