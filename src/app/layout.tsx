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
  metadataBase: new URL(
    "https://samuel-portfolio-omega-opal.vercel.app"
  ),

  title: "Samuel Maucaille | Full Stack Software Engineer",

  description:
    "Full Stack Software Engineer specializing in C#, .NET, React, and TypeScript. Based in Peru and open to remote opportunities.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Samuel Maucaille | Full Stack Software Engineer",
    description:
      "Building scalable software solutions with .NET, React, and TypeScript.",
    url: "/",
    siteName: "Samuel Maucaille Portfolio",
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
