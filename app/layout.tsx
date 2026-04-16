import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "../lib/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Hugo Hemlin",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [
    {
      name: "Hugo Hemlin",
      url: "https://linkedin.com/in/hugo-hemlin/",
    },
  ],
  creator: "Hugo Hemlin",
  publisher: "Hugo Hemlin",
  keywords: [
    "Cloud Developer",
    "DevOps",
    "Backend Developer",
    "Full-Stack Developer",
    "AWS",
    "Kubernetes",
    "Next.js",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
