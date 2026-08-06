import type { Metadata } from "next";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "../lib/site";
import "./globals.css";

const themeInitScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("theme");
    const theme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

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
    "Junior Fullstack Developer",
    "Fullstack Developer",
    "Backend Developer",
    "Cloud Developer",
    ".NET Developer",
    "React Developer",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "ASP.NET Core",
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
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
