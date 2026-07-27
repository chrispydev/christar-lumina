import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Christar Lumina | Digital Solutions & Software Development",
    template: "%s | Christar Lumina",
  },
  description:
    "Christar Lumina builds modern websites, web applications, mobile solutions, and digital experiences for businesses and organizations.",
  keywords: [
    "Web Development",
    "Software Development",
    "Next.js Developer",
    "Django Developer",
    "React Developer",
    "Mobile Applications",
    "UI UX Design",
    "Digital Solutions",
    "Ghana Software Developer",
  ],
  authors: [{ name: "Christar Lumina" }],
  creator: "Christar Lumina",
  openGraph: {
    title: "Christar Lumina | Digital Solutions & Software Development",
    description:
      "Building modern websites, applications, and digital products that help businesses grow.",
    url: "https://christarlumina.com",
    siteName: "Christar Lumina",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Christar Lumina Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christar Lumina | Digital Solutions",
    description: "Modern websites, software applications and digital experiences.",
    images: ["/og-image.png"],
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
    <html lang="en">
      <body className={`${geist.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <GoogleAnalytics gaId="YOUR_ID" />
      </body>
    </html>
  );
}
