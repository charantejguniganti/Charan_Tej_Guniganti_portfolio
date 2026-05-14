import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SocialSidebar from "@/components/SocialSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANTIGRAVITY | Charan Tej",
  description: "Futuristic Developer Portfolio - Building Systems Beyond Gravity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-neon-cyan/30 selection:text-white">
        <SmoothScroll>
          <SocialSidebar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
