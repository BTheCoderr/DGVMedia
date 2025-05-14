import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Da Grapevine - Where The Truth And The Juice Gets Told",
  description: "Raw. Real. Unfiltered news and stories from the communities that mainstream media overlooks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
