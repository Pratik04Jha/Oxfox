"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChatForm from "../components/ui/ChatForm";
import { ChatProvider } from "@/context/ChatContext";

const LayoutWrapper = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ChatProvider>
      <Navbar isCollapsed={isSidebarCollapsed} />
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <main
        className={`transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "ml-15" : "ml-64"
        }`}
      >
        {children}
      </main>
      <ChatForm isCollapsed={isSidebarCollapsed} />
    </ChatProvider>
  );
};

export default LayoutWrapper;
