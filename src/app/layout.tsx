import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { GoogleAdSense } from "@/components/ThirdPartyServices/google-adsense";
import { UmamiAnalytics } from "@/components/ThirdPartyServices/umami-analytics";

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
  title: "Sporting Hilites!",
  description:
    "All the premier league highlight from the latest gameweek, plus select bonus interest pieces!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <UmamiAnalytics />
        <GoogleAdSense />
      </body>
    </html>
  );
}
