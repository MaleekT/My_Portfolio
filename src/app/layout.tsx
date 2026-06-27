import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
