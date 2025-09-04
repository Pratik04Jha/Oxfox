import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

export const metadata = {
  title: "Oxfox – AI-Powered Assistant for Smarter Conversations",
  description:
    "Oxfox is an advanced AI assistant that helps you think, create, and solve problems effortlessly. From answering complex questions to generating creative ideas, Oxfox is designed to assist in every part of your journey.",
  keywords: [
    "AI assistant",
    "Oxfox",
    "AI chatbot",
    "AI conversations",
    "productivity AI",
    "AI tools",
    "virtual assistant",
    "AI-powered search",
    "intelligent chatbot",
  ],
  authors: [{ name: "Oxfox Team" }],
  creator: "Oxfox",
  publisher: "Oxfox",
  metadataBase: new URL("https://oxfox.vercel.app"), 
  openGraph: {
    title: "Oxfox – AI-Powered Assistant for Smarter Conversations",
    description:
      "Think better, create faster, and explore smarter with Oxfox – your AI-powered assistant.",
    url: "https://oxfox.vercel.app",
    siteName: "Oxfox",
    images: [
      {
        url: "/Oxfox Logo.png",
        width: 1200,
        height: 630,
        alt: "Oxfox AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxfox – AI-Powered Assistant",
    description:
      "Your intelligent AI companion for conversations, problem-solving, and creativity.",
    images: ["/Oxfox Logo.png"],
    creator: "@pratikthejha",
  },
  icons: {
    icon: "/Oxfox Logo.png",
    shortcut: "/Oxfox Logo.png",
    apple: "/Oxfox Logo.png",
  },
  themeColor: "#09090b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
