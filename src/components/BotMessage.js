import React from "react";
import { ThumbsUp, ThumbsDown, Repeat, Copy, Share } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BotMessage = ({ content }) => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <div className="max-w-[70%] px-2 rounded-2xl text-md text-white prose prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
      <div className="flex gap-1 text-white text-lg mt-1">
        {/* Like Button */}
        <div className="relative group">
          <button className="p-2 cursor-pointer rounded-2xl hover:bg-zinc-800 transition-colors duration-200">
            <ThumbsUp size={18} />
          </button>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-zinc-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Like
          </span>
        </div>

        {/* Dislike Button */}
        <div className="relative group">
          <button className="p-2 cursor-pointer rounded-2xl hover:bg-zinc-800 transition-colors duration-200">
            <ThumbsDown size={18} />
          </button>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-zinc-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Dislike
          </span>
        </div>

        {/* Regenerate Button */}
        <div className="relative group">
          <button className="p-2 cursor-pointer rounded-2xl hover:bg-zinc-800 transition-colors duration-200">
            <Repeat size={18} />
          </button>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-zinc-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Regenerate
          </span>
        </div>

        {/* Copy Button */}
        <div className="relative group">
          <button className="p-2 cursor-pointer rounded-2xl hover:bg-zinc-800 transition-colors duration-200">
            <Copy size={18} />
          </button>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-zinc-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Copy
          </span>
        </div>

        {/* Share Button */}
        <div className="relative group">
          <button className="p-2 cursor-pointer rounded-2xl hover:bg-zinc-800 transition-colors duration-200">
            <Share size={18} />
          </button>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-zinc-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Share
          </span>
        </div>
      </div>
    </div>
  );
};
export default BotMessage;
