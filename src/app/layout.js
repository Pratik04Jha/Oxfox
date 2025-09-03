import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Oxfox",
  description: "AI-powered chatbot for your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <Sidebar />
      <body className="bg-zinc-900 ml-65">{children}</body>
    </html>
  );
}
