// layout.js (Corrected)
"use client";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChatForm from "../components/ui/ChatForm";
import { ChatProvider } from "@/context/ChatContext"; // Import the provider

export default function RootLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <html lang="en">
      <ChatProvider>
        <Navbar isCollapsed={isSidebarCollapsed} />
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        <body
          className={`bg-zinc-900 transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? "ml-15" : "ml-64"
          }`}
        >
          {children}
        </body>
        <ChatForm isCollapsed={isSidebarCollapsed} />
      </ChatProvider>
    </html>
  );
}