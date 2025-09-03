"use client";

import ChatForm from "@/components/ui/ChatForm";
import MessageList from "@/components/MessageList";
import { useChat } from "@/hooks/useChat";

export default function Chat() {
  const { messages, isPending, sendMessage } = useChat();

  return (
    <div>
      <ChatForm onSubmit={sendMessage} isPending={isPending} />
      <MessageList messages={messages} />
    </div>
  );
}
