import React from "react";
import { Menu, Search, BadgePlus, Compass, Settings } from "lucide-react";

const mainButtons = [
  { icon: <BadgePlus size={20} />, label: "New Chat" },
  { icon: <Search size={20} />, label: "Search" },
  { icon: <Compass size={20} />, label: "Explore" },
];
const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-10000 h-screen overflow-hidden transition-all duration-300 ease-in-out border-r-1 border-zinc-700/50 ${
          isCollapsed
            ? "w-15 bg-transparent "
            : "w-64 bg-zinc-800 "
        }`}
      >
        <div
          className={`flex w-full items-center px-2 py-3 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div
            className={`text-white/70 cursor-pointer hover:bg-zinc-700 p-2 rounded-full transition-colors duration-200 ${
              isCollapsed ? "hidden" : "opacity-100 visible"
            }`}
          >
            <Settings
              className={`flex w-full justify-end transition-all duration-300 ease-in-out `}
              size={20}
            />
          </div>

          <div
            className="text-white/70 cursor-pointer hover:bg-zinc-700  rounded-full transition-colors duration-200"
            onClick={toggleSidebar}
          >
            <Menu
              className="text-white/70 cursor-pointer hover:bg-zinc-700 p-2 rounded-full transition-colors duration-200"
              size={35}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-2 text-white/70 text-lg">
          {mainButtons.map((items, index) => (
            <div className={`w-full rounded-full ${ isCollapsed ? "px-3" : "px-1"}`} key={index}>
              <div
                className={`flex items-center text-sm  cursor-pointer hover:bg-zinc-700 rounded-full  transition-colors duration-300 select-none ${
                  isCollapsed ? "gap-0 py-2 justify-center" : "py-3 gap-5 px-3"
                }`}
              >
                {items.icon}
                <p
                  className={`whitespace-nowrap transition-all duration-300 ease-in-out ${
                    isCollapsed ? "hidden" : "visible"
                  }`}
                >
                  {items.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className={`text-white/60 text-sm py-2 px-4 transition-all duration-300 ease-in-out ${
            isCollapsed
              ? "hidden"
              : "visible"
          }`}
        >
          Recents
        </p>
      </div>
    </>
  );
};

export default Sidebar;
