"use client";

import Link from "next/link";
import { ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#070F1A] text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00C896] text-[#0A2540]">
                <ShieldCheck className="h-5.5 w-5.5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Safe</span>
                <span className="text-[#00C896]">Swap</span>
              </span>
            </div>

            <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
              Buy and sell with total confidence. SafeSwap holds payment securely in escrow until delivery is confirmed.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pt-2">
              <span>Verified Escrow Architecture</span>
              <span>•</span>
              <span>Bank-Grade Encryption</span>
            </div>
          </div>

          {/* Nav Links Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-6">
            {/* Buyer Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#00C896] uppercase tracking-wider">
                For Buyers
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors"
                  >
                    Buyer Protection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="hover:text-white transition-colors"
                  >
                    Buyer FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("survey-section")}
                    className="hover:text-[#00C896] transition-colors"
                  >
                    Join Waitlist
                  </button>
                </li>
              </ul>
            </div>

            {/* Seller Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#00C896] uppercase tracking-wider">
                For Sellers
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link
                    href="/sellers#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    Vendor Workflow
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sellers#benefits"
                    className="hover:text-white transition-colors"
                  >
                    Merchant Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sellers#faq"
                    className="hover:text-white transition-colors"
                  >
                    Vendor FAQ
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("survey-section")}
                    className="hover:text-[#00C896] transition-colors"
                  >
                    Merchant Early Access
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SafeSwap. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-medium text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            <span>for Nigerian buyers and sellers</span>
            <span className="text-base">🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
