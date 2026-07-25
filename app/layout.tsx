import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});


const inter = Inter({ variable: "--font-inter", subsets: ["latin"], });


export const metadata: Metadata = {
  title: "Christar Lumina | Turning Ideas Into Reality",
  description:
    "Christar Lumina is a technology company creating innovative digital solutions through web development, mobile applications, UI/UX design, data science, and automation.",
  keywords: ["Web Development", "Software Development", "Mobile Applications", "UI UX Design", "Automation", "Data Science"]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={` ${geist.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <GoogleAnalytics
          gaId="YOUR_ID"
        />
      </body>
    </html>
  );
}
