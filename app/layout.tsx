import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MouseTheme from "@/components/mouse-theme";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap", weight: ["400", "500", "600", "700", "800", "900"] });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Student OS — School operations, rebuilt",
  description: "A focused operating system for administrators, teachers and students.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${geistMono.variable}`}><MouseTheme />{children}</body></html>;
}
