"use client";
import React, { useEffect, useRef } from "react";
import BotMessage from "./BotMessage";
import { motion, AnimatePresence } from "framer-motion";

export default function MessageList({ messages }) {
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); 

  return (
    <div className="flex flex-col gap-3 p-4 w-full pb-34 overflow-y-auto max-h-screen">
      <AnimatePresence>
        {messages.length === 0 ? (
          <motion.div
            key="hello"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center h-140 flex justify-center items-center cursor-default text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100"
          >
            Hello, Pratik
          </motion.div>
        ) : (
          <motion.div
            key="messages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 w-[50%] mx-auto mt-20"
          >
            {messages.map((message, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`flex w-full ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "user" ? (
                  <motion.div
                    className="px-5 py-3 rounded-2xl text-md bg-[#333537] text-white rounded-tr-none"
                   
                  >
                    {message.content}
                  </motion.div>
                ) : (
                  <div className="min-w-[144%]">
                    <BotMessage content={message.content} />
                  </div>
                )}
              </motion.div>
            ))}

            <div ref={endRef}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
