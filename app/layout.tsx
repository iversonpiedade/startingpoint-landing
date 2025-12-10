import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starting Point",
  description: "Premier Venture Studio em Angola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={cn(inter.className, "min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden selection:bg-blue-500/30")}>
        {children}
      </body>
    </html>
  );
}
