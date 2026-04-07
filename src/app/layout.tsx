import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maleek Taiwo — UI/UX Designer & Webflow Developer",
  description:
    "I design and build websites that work as hard as you do. Clean interfaces, solid code, real results. UI/UX Designer and Webflow Developer based in Lagos, Nigeria.",
  keywords: [
    "UI/UX Designer",
    "Webflow Developer",
    "Lagos",
    "Nigeria",
    "Portfolio",
    "Freelance",
    "Remote",
  ],
  authors: [{ name: "Maleek Taiwo" }],
  openGraph: {
    title: "Maleek Taiwo — UI/UX Designer & Webflow Developer",
    description:
      "I design and build websites that work as hard as you do. Clean interfaces, solid code, real results.",
    url: "https://maleektaiwo.com",
    siteName: "Maleek Taiwo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maleek Taiwo — UI/UX Designer & Webflow Developer",
    description:
      "I design and build websites that work as hard as you do. Clean interfaces, solid code, real results.",
    creator: "@_MasterMal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
