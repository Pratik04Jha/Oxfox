// src/context/ChatContext.js
"use client";

import { createContext, useContext } from "react";
import { useChat } from "@/hooks/useChat";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const chat = useChat();
  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
  return useContext(ChatContext);
}