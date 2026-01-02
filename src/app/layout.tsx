import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Github } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anispace",
  description: "Watch Anime and read Manga for free without ads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>

        <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-background text-foreground/60">
          <p>
            Copyright © {year} Skunktank69. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/skunktank69"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
