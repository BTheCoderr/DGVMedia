import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNewsletterWrapper from '@/components/FloatingNewsletterWrapper';
import NavigationWrapper from '@/components/NavigationWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: "Da Grapevine - Where The Truth And The Juice Gets Told",
  description: "Raw. Real. Unfiltered news and stories from the communities that mainstream media overlooks.",
  keywords: "community news, Providence news, local stories, community journalism, urban news",
  openGraph: {
    title: "Da Grapevine - Where The Truth And The Juice Gets Told",
    description: "Raw. Real. Unfiltered news and stories from the communities that mainstream media overlooks.",
    url: "https://dgvmedia.netlify.app",
    siteName: "Da Grapevine",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Da Grapevine - Community News and Stories"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Grapevine - Where The Truth And The Juice Gets Told",
    description: "Raw. Real. Unfiltered news and stories from the communities that mainstream media overlooks.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <NavigationWrapper>
          {children}
        </NavigationWrapper>
      </body>
    </html>
  );
}
