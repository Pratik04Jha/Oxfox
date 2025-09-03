"use client";
import React, { useRef } from "react";
import { Menu, Search, BadgePlus, Compass, Settings } from "lucide-react";

const Ripple = ({ children, className = "", ...props }) => {
  const rippleRef = useRef(null);

  const createRipple = (event) => {
    const button = rippleRef.current;
    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <div
      ref={rippleRef}
      onClick={createRipple}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className=" w-65 h-screen fixed left-0 top-0 z-10000 px-2 bg-zinc-800">
      <div className="flex w-full justify-between items-center px-2 py-3">
        <Ripple className="rounded-full">
          <Menu
            className="text-white/70 cursor-pointer hover:bg-zinc-700 p-2 rounded-full transition-colors duration-200"
            size={35}
          />
        </Ripple>
        <Ripple className="rounded-full">
          <Search
            className="text-white/70 cursor-pointer hover:bg-zinc-700 p-2 rounded-full transition-colors duration-200"
            size={35}
          />
        </Ripple>
      </div>

      <div className="flex flex-col gap-1 mt-2 text-white/70 text-lg">
        <Ripple className="w-full rounded-3xl">
          <div className="flex justify-start items-center text-sm gap-5 cursor-pointer hover:bg-zinc-700 py-3 rounded-3xl px-4 transition-colors duration-300 select-none">
            <BadgePlus size={20} /> <p>New Chat</p>
          </div>
        </Ripple>
        <Ripple className="w-full rounded-3xl">
          <div className="flex justify-start items-center text-sm gap-5 cursor-pointer hover:bg-zinc-700 py-3 rounded-3xl px-4 transition-colors duration-300 select-none">
            <Compass size={20} /> <p>Explore</p>
          </div>
        </Ripple>
      </div>

          <p className="text-white/60 text-sm py-2 px-4">Recents</p>
          
          <Ripple className="fixed bottom-[-63%] left-0  w-full rounded-3xl text-white/70">
          <div className=" flex justify-start items-center text-sm gap-5 cursor-pointer hover:bg-zinc-700 py-3 rounded-3xl px-4 transition-colors duration-300 select-none">
            <Settings size={20} /> <p>Settings & Help</p>
          </div>
        </Ripple>
    </div>
  );
};

export default Sidebar;
