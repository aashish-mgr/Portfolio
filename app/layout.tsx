import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
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
  title: "Aashu Lopchan — Aspiring Data Analyst · Full-Stack Developer",
  description:
    "Portfolio of Aashu Lopchan, a Nepal-based MERN full-stack developer and self-taught data analyst working with Excel, SQL and Python.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${plexSans.variable} ${plexMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}