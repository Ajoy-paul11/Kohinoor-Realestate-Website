import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";

const MarceFonts = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

export const metadata: Metadata = {
  title: "Kohinoor Real Estate",
  description: "Trusted property experts in UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MarceFonts.variable} ${MarceFonts.style} ${MarceFonts.className} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
