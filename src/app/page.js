"use client";

import MessageList from "@/components/MessageList";
import { useChatContext } from "@/context/ChatContext";

export default function Chat() {
  const { messages } = useChatContext();

  return (
    <div>
      <MessageList messages={messages} />
    </div>
  );
}