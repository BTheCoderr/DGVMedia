import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Da Grape Vine | News Media & Entertainment",
  description: "Da Grape Vine is a media and entertainment company amplifying the voices of inner-city, minority, and underrepresented communities in Rhode Island.",
  keywords: "Da Grape Vine, media company, Providence, Rhode Island, news, entertainment, minority voices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 