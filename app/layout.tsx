import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Hugo Hemlin | Luunom";
const description =
  "Portfolio of Hugo Hemlin, focused on backend systems, cloud infrastructure, DevOps workflows, and modern full-stack applications.";

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
    default: title,
    template: "%s | Hugo Hemlin",
  },
  description,
  applicationName: "Luunom Portfolio",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hugo Hemlin | Luunom Portfolio",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
