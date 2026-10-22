import type { Metadata, Viewport } from "next";
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
  title: "Samuel Maucaille | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in C#, .NET, React, and TypeScript. Experienced in enterprise software, REST APIs, and cloud integrations. Based in Peru and open to remote opportunities.",
  keywords: [
    "Samuel Maucaille",
    "Full Stack Software Engineer",
    ".NET Developer",
    "C# Developer",
    "React Developer",
    "TypeScript",
    "Backend Developer",
    "Software Engineer Peru",
    "Remote Software Engineer",
  ],
  openGraph: {
    title: "Samuel Maucaille | Full Stack Software Engineer",
    description:
      "Building reliable software with .NET, React, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
