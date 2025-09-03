import { useState } from "react";
import { ChatCompletionStream } from "together-ai/lib/ChatCompletionStream";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isPending, setIsPending] = useState(false);

  async function sendMessage(prompt) {
    setIsPending(true);
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [...messages, { role: "user", content: prompt }],
      }),
    });

    if (!res.body) return;

    ChatCompletionStream.fromReadableStream(res.body)
      .on("content", (delta, content) => {
        setMessages((prev) => {
          const last = prev.at(-1);
          if (last?.role !== "assistant") {
            return [...prev, { role: "assistant", content }];
          }
          return [...prev.slice(0, -1), { ...last, content }];
        });
      })
      .on("end", () => setIsPending(false));
  }

  return { messages, isPending, sendMessage };
}
