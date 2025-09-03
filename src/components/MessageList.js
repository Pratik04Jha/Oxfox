import React from "react";
import BotMessage from "./BotMessage";

export default function MessageList({ messages }) {
  return (
    <div className="flex flex-col gap-3 p-4 w-full pb-34">
      {messages.length === 0 ? (
        <div className="text-center h-140 flex justify-center items-center cursor-default text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100">
          Hello, Pratik
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-[50%] mx-auto mt-20">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex w-full ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "user" ? (
                <div
                  className={` px-5 py-3 rounded-2xl text-md bg-[#333537] text-white rounded-tr-none`}
                >
                  {message.content}
                </div>
              ) : (
                <div className="min-w-[144%]">
                  {" "}
                  <BotMessage content={message.content} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
