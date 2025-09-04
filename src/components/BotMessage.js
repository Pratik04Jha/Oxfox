import React from "react";
import { ThumbsUp, ThumbsDown, Repeat, Copy, Share } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const buttons = [
  { icon: <ThumbsUp size={18} />, label: "Like" },
  { icon: <ThumbsDown size={18} />, label: "Dislike" },
  { icon: <Repeat size={18} />, label: "Regenerate" },
  { icon: <Copy size={18} />, label: "Copy" },
  { icon: <Share size={18} />, label: "Share" },
];

const BotMessage = ({ content }) => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <div className="max-w-[70%] px-2 rounded-2xl text-md text-white prose prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
      <div className="flex gap-1 text-white text-lg mt-1">
        {buttons.map((items, index) => (
          <div className="relative group" key={index}>
            <button className="p-2 cursor-pointer rounded-2xl hover:bg-zinc-800 transition-colors duration-200">
              {items.icon}
            </button>
            <span className="absolute top-full left-1/2 -translate-x-1/2 z-1000000 mt-2 px-2 py-1 bg-zinc-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {items.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BotMessage;
