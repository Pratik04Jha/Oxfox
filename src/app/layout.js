import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Oxfox",
  description: "AI-powered chatbot for your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className="bg-zinc-900">{children}</body>
    </html>
  );
}
