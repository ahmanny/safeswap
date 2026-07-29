"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBuyer = pathname.startsWith("/buyers");
  const isSeller = pathname.startsWith("/sellers");

  const scrollToSurvey = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById("survey-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/buyers" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A2540] text-[#00C896] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <ShieldCheck className="h-5.5 w-5.5 stroke-[2.5]" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-[#0A2540]">Safe</span>
            <span className="text-[#00C896]">Swap</span>
          </span>
        </Link>

        {/* Center: Desktop Switcher Pills */}
        <nav className="hidden md:flex items-center p-1 bg-slate-100/80 border border-slate-200/60 rounded-full">
          <Link
            href="/buyers"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              isBuyer
                ? "bg-[#0A2540] text-white shadow-sm font-semibold"
                : "text-slate-600 hover:text-[#0A2540]"
            }`}
          >
            For Buyers
          </Link>
          <Link
            href="/sellers"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              isSeller
                ? "bg-[#0A2540] text-white shadow-sm font-semibold"
                : "text-slate-600 hover:text-[#0A2540]"
            }`}
          >
            For Sellers
          </Link>
        </nav>

        {/* Right: Join Waitlist Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={scrollToSurvey}
            className="flex items-center gap-2 rounded-full bg-[#00C896] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#00C896]/20 transition-all duration-200 hover:bg-[#00B085] hover:shadow-lg hover:shadow-[#00C896]/30 active:scale-95"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden hover:bg-slate-50 active:scale-95"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-200 bg-white md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-5 sm:px-6">
              <div className="flex rounded-xl bg-slate-100 p-1">
                <Link
                  href="/buyers"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 rounded-lg py-2.5 text-center text-sm font-semibold transition-all ${
                    isBuyer ? "bg-[#0A2540] text-white shadow-sm" : "text-slate-600"
                  }`}
                >
                  For Buyers
                </Link>
                <Link
                  href="/sellers"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 rounded-lg py-2.5 text-center text-sm font-semibold transition-all ${
                    isSeller ? "bg-[#0A2540] text-white shadow-sm" : "text-slate-600"
                  }`}
                >
                  For Sellers
                </Link>
              </div>

              <button
                onClick={scrollToSurvey}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C896] py-3 text-sm font-semibold text-white shadow-md shadow-[#00C896]/20 active:scale-98"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
