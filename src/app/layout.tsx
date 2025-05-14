import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import dynamic from 'next/dynamic';

const FloatingNewsletter = dynamic(() => import('@/components/FloatingNewsletter'), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

// Replace with your Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export const metadata: Metadata = {
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your_google_verification_code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <FloatingNewsletter />
      </body>
    </html>
  );
}
