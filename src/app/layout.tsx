import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Eagle$Win - Web Designer & Developer",
  description: "I Build Websites That Grow Your Business - Specializing in Business Websites, E-Commerce, Landing Pages, Portfolios, Dashboard UI & Booking Websites",
  keywords: "web designer, web developer, business websites, e-commerce, landing pages, portfolio, dashboard, booking websites",
  openGraph: {
    title: "Eagle$Win - Web Designer & Developer",
    description: "I Build Websites That Grow Your Business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="bg-gray-950 text-gray-100 font-sans antialiased">{children}</body>
    </html>
  );
}
