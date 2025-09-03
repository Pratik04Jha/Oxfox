"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
 

  return (
    <nav className="fixed top-0 left-0 w-full h-15 bg-zinc-900  flex items-center justify-between px-6 z-50 shadow-sm">
      
      {/* Left: Logo */}
      <Link href="/"  className="text-2xl font-semibold text-white/60">Oxfox</Link>
      
    

      {/* Right: Profile / User */}
      <div className="flex items-center gap-4">
        {/* Profile picture placeholder */}
        <div className="w-8 h-8 cursor-pointer rounded-full bg-gray-500 flex items-center justify-center text-white text-sm font-semibold">
          U
        </div>
      </div>
    </nav>
  );
}
