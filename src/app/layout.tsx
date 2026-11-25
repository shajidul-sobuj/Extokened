import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
    apple: "/apple-touch-icon.png",
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
        className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#08090E] text-[#FFFFFF] min-h-screen flex flex-col selection:bg-[#8B9BF7]/35 selection:text-[#FFFFFF]`}
      >
        <InteractiveBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
