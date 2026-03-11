import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HAN Competitive Robotics | HCR",
    template: "%s | HCR",
  },
  description:
    "HAN Competitive Robotics (HCR) - A student engineering team building featherweight combat robots at HAN University of Applied Sciences, Netherlands.",
  keywords: [
    "HAN Competitive Robotics",
    "HCR",
    "combat robots",
    "featherweight",
    "robotics team",
    "HAN University",
    "engineering",
    "student team",
    "robot combat",
    "Netherlands",
  ],
  authors: [{ name: "HAN Competitive Robotics" }],
  creator: "HAN Competitive Robotics",
  metadataBase: new URL("https://hcr-han.nl"),
  openGraph: {
    type: "website",
    locale: "en_NL",
    url: "https://hcr-han.nl",
    siteName: "HAN Competitive Robotics",
    title: "HAN Competitive Robotics | Engineering Combat Robots",
    description:
      "Student engineering team building featherweight combat robots at HAN University of Applied Sciences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HAN Competitive Robotics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAN Competitive Robotics | HCR",
    description: "Engineering Combat Robots at HAN University",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} text-foreground min-h-screen bg-[#121212] font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
