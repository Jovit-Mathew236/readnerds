import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/medeups/navbar";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

const ttHoves = localFont({
  src: [
    {
      path: "./fonts/TTHoves-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/TTHoves-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/TT Hoves Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TT Hoves Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/TT Hoves DemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/TT Hoves Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tthoves",
});

export const metadata: Metadata = {
  title: "Red nerds",
  description: "Evobi automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${ttHoves.variable} font-sans w-screen bg-secondary overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
