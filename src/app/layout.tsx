import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upay Bharat - Digital Financial Services Platform",
  description:
    "Upay Bharat is a leading digital financial services platform offering loans, credit cards, and banking partnerships. Learn and earn by becoming our financial partner today.",
  keywords: [
    "Upay Bharat",
    "financial services",
    "loans",
    "credit cards",
    "banking partnerships",
    "DSA partners",
    "digital finance",
  ],
  authors: [{ name: "Upay Bharat" }],
  creator: "Upay Bharat",
  publisher: "Upay Bharat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://upaybharat.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Upay Bharat - Digital Financial Services Platform",
    description:
      "Upay Bharat is a leading digital financial services platform offering loans, credit cards, and banking partnerships. Learn and earn by becoming our financial partner today.",
    url: "https://upaybharat.online",
    siteName: "Upay Bharat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upay Bharat - Digital Financial Services Platform",
    description:
      "Upay Bharat is a leading digital financial services platform offering loans, credit cards, and banking partnerships. Learn and earn by becoming our financial partner today.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
