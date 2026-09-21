import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aashish Magar —  Full-Stack Developer",
  description:
    "Portfolio of Aashish Magar, a Nepal-based MERN full-stack developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${plexSans.variable} ${plexMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-dvh flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}