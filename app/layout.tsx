import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Murad Abdulkadyrov",
    template: "%s | Murad Abdulkadyrov",
  },
  description: "Exploring AI, tech, and product building.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Murad Abdulkadyrov",
    description: "Exploring AI, tech, and product building.",
    url: baseUrl,
    siteName: "Murad Abdulkadyrov",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murad Abdulkadyrov",
    description: "Exploring AI, tech, and product building.",
    images: ["/api/og"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-xl mx-4 lg:mx-auto flex flex-col min-h-screen`}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
