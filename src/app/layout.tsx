import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Extokened — Technology & Hackathon Team",
    template: "%s | Extokened",
  },
  description: siteConfig.description,
  keywords: [
    "Extokened",
    "Hackathon Team",
    "AI Engineers",
    "Full-Stack Developers",
    "Dhaka Hackathons",
    "National Hackathon Champions",
    "Google Gemini API",
    "Next.js 15",
    "FastAPI",
    "Software Engineering Team",
  ],
  authors: [{ name: "Extokened Team" }],
  creator: "Extokened",
  openGraph: {
    title: "Extokened — Technology & Hackathon Team",
    description: siteConfig.description,
    url: "https://extokened.dev",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Extokened — Technology & Hackathon Team",
    description: siteConfig.description,
    creator: "@extokened",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0B] text-[#F3F1EC] min-h-screen flex flex-col selection:bg-[#C6F36A]/25 selection:text-[#F3F1EC]`}
      >
        <InteractiveBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
