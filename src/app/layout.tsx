import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Eagle$Win | High-Performance Web Development & Design",
  description: "I Build High-Performance Websites That Drive Revenue. Specializing in Business Websites, E-Commerce, Landing Pages, Dashboards & Booking Systems. 100% Satisfaction Guaranteed.",
  keywords: "web designer India, next.js developer, freelance web developer, e-commerce developer, business website designer, landing page expert, Eagle$Win",
  authors: [{ name: "Eagle$Win" }],
  openGraph: {
    title: "Eagle$Win | High-Performance Web Development",
    description: "I Build High-Performance Websites That Drive Revenue.",
    type: "website",
    url: "https://eagleswin-portfolio.vercel.app",
    siteName: "Eagle$Win Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle$Win | Web Development & Design",
    description: "Building websites that grow your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased relative selection:bg-[#00e5ff]/30 selection:text-[#00e5ff]">
        <CustomCursor />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
