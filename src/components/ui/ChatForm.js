"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useChatContext } from "@/context/ChatContext";

export default function ChatForm({ isCollapsed }) {
  const { sendMessage, isPending } = useChatContext();

  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    sendMessage(prompt);
    setPrompt("");
    autoResize();
  };


  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    autoResize();
  }, [prompt]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-zinc-900 z-1000 px-4 py-3 transition-all duration-300 ease-in-out ${
        isCollapsed ? "pl-20" : "pl-64"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto flex items-end border-1 border-zinc-700/50 rounded-4xl bg-zinc-800 px-4"
      >
        <textarea
          ref={textareaRef}
          placeholder="Send a message..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          className="flex-1 bg-transparent min-h-30 text-white placeholder:text-gray-400 px-4 py-5 outline-none text-base resize-none overflow-hidden"
        />
        <button
          type="submit"
          disabled={isPending} // Use isPending from context
          className={`p-2 rounded-full bg-white cursor-pointer mb-4 ${
            isPending ? "text-gray-500" : "text-black "
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}