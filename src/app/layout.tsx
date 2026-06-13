import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bemnet Sintayehu | Full Stack Developer",
  description: "Portfolio of Bemnet Sintayehu, a Full Stack Developer with 3+ years of experience building scalable web applications.",
  openGraph: {
    title: "Bemnet Sintayehu | Full Stack Developer",
    description: "Portfolio of Bemnet Sintayehu, a Full Stack Developer with 3+ years of experience building scalable web applications.",
    url: "https://bemnet-portfolio.vercel.app",
    siteName: "Bemnet Sintayehu Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bemnet Sintayehu | Full Stack Developer",
    description: "Portfolio of Bemnet Sintayehu, a Full Stack Developer with 3+ years of experience building scalable web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
