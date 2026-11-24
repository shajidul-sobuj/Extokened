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
  title: `${siteConfig.name} — Hackathon Squad & Innovation Collective`,
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
  ],
  authors: [{ name: "Extokened Squad" }],
  creator: "Extokened",
  openGraph: {
    title: `${siteConfig.name} — We Hack. We Build. We Ship.`,
    description: siteConfig.description,
    url: "https://extokened.dev",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Hackathon Squad`,
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#08090C] text-[#F3F4F6] min-h-screen flex flex-col selection:bg-cyber-cyan/30 selection:text-cyber-cyan`}
      >
        <InteractiveBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
