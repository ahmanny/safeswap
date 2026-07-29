import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SafeSwap — Secure Escrow Payments in Nigeria",
  description:
    "Buy and sell with confidence. SafeSwap holds your payment securely until you confirm delivery.",
  keywords: [
    "escrow Nigeria",
    "safe online payment",
    "Instagram seller escrow",
    "pay on delivery alternative",
    "SafeSwap",
    "secure buyer payment",
    "vendor escrow",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} min-h-screen bg-[#F8FAFC] text-slate-900 antialiased selection:bg-[#00C896]/20 selection:text-[#0A2540]`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
