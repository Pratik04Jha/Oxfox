"use client";
import React, { useRef } from "react";
import { Menu, Search, BadgePlus, Compass, Settings } from "lucide-react";

// Ripple Component
const Ripple = ({ children, className = "", ...props }) => {
  const rippleRef = useRef(null);

  const createRipple = (event) => {
    const button = rippleRef.current;
    if (!button) return;
    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
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
const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-10000 h-screen overflow-hidden transition-all duration-300 ease-in-out bg-zinc-800 ${
          isCollapsed ? "w-[65px]" : "w-64"
        }`}
      >
        <div className="flex w-full items-center px-2 py-3">
          <Ripple className="rounded-full">
            <Menu
              onClick={toggleSidebar}
              className="text-white/70 cursor-pointer hover:bg-zinc-700 p-2 rounded-full transition-colors duration-200"
              size={35}
            />
          </Ripple>
          <div
            className={`flex w-full justify-end transition-all duration-300 ease-in-out ${
              isCollapsed ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            <Ripple className="rounded-full">
              <Search
                className="text-white/70 cursor-pointer hover:bg-zinc-700 p-2 rounded-full transition-colors duration-200"
                size={35}
              />
            </Ripple>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-2 text-white/70 text-lg">
          <Ripple className="w-full rounded-3xl">
            <div className="flex items-center text-sm gap-5 cursor-pointer hover:bg-zinc-700 py-3 rounded-3xl px-4 transition-colors duration-300 select-none">
              <BadgePlus size={20} />
              <p
                className={`whitespace-nowrap transition-all duration-300 ease-in-out ${
                  isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                New Chat
              </p>
            </div>
          </Ripple>
          <Ripple className="w-full rounded-3xl">
            <div className="flex items-center text-sm gap-5 cursor-pointer hover:bg-zinc-700 py-3 rounded-3xl px-4 transition-colors duration-300 select-none">
              <Compass size={20} />
              <p
                className={`whitespace-nowrap transition-all duration-300 ease-in-out ${
                  isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                }`}
              >
                Explore
              </p>
            </div>
          </Ripple>
        </div>

        <p
          className={`text-white/60 text-sm py-2 px-4 transition-all duration-300 ease-in-out ${
            isCollapsed ? "opacity-0 h-0 invisible" : "opacity-100 h-auto visible"
          }`}
        >
          Recents
        </p>

        <Ripple
          className={`fixed bottom-0 left-0 rounded-3xl text-white/70 px-2 transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-[65px]" : "w-64"
          }`}
        >
          <div className="flex items-center text-sm gap-5 cursor-pointer hover:bg-zinc-700 py-3 rounded-3xl px-4 transition-colors duration-300 select-none">
            <Settings size={20} />
            <p
              className={`whitespace-nowrap transition-all duration-300 ease-in-out ${
                isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
            >
              Settings & Help
            </p>
          </div>
        </Ripple>
      </div>
    </>
  );
};

export default Sidebar;