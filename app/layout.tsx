import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tieu Phung - DevOps → AI Engineer",
  description: "Portfolio of Tieu Phung — 4+ years in DevOps, now building AI systems. Specializing in MLOps, CVs, LLMs, and agentic workflows on cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#0a0a0a] text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
