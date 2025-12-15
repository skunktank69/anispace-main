import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/nav-bar";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Github, GithubIcon } from "lucide-react";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-background text-foreground/60 mt-50 bottom-0  -z-100">
          <p>
            Copyright © {new Date().getFullYear()} Skunktank69. All rights
            reservered.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/skunktank69"
              className="hover:text-white transition-all"
            >
              <Github />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
