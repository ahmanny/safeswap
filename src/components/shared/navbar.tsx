"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBuyer = pathname.startsWith("/buyers");
  const isSeller = pathname.startsWith("/sellers");

  const scrollToSurvey = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById("survey");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#070F1A]/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/buyers" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A2540] dark:bg-[#00C896] text-[#00C896] dark:text-[#0A2540] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <ShieldCheck className="h-5.5 w-5.5 stroke-[2.5]" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-[#0A2540] dark:text-white">Safe</span>
            <span className="text-[#00C896]">Swap</span>
          </span>
        </Link>

        {/* Center: Desktop Switcher Pills */}
        <nav className="hidden md:flex items-center p-1 bg-slate-100/80 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 rounded-full">
          <Link
            href="/buyers"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              isBuyer
                ? "bg-[#0A2540] text-white shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-300 hover:text-[#0A2540] dark:hover:text-white"
            }`}
          >
            For Buyers
          </Link>
          <Link
            href="/sellers"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              isSeller
                ? "bg-[#0A2540] text-white shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-300 hover:text-[#0A2540] dark:hover:text-white"
            }`}
          >
            For Sellers
          </Link>
        </nav>

        {/* Right: Theme Toggle & Join Waitlist Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={scrollToSurvey}
            className="flex items-center gap-2 rounded-full bg-[#00C896] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#00C896]/20 transition-all duration-200 hover:bg-[#00B085] hover:shadow-lg hover:shadow-[#00C896]/30 active:scale-95 cursor-pointer"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D1B2E] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 active:scale-95 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#070F1A] md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-5 sm:px-6">
              <div className="flex rounded-xl bg-slate-100 dark:bg-white/10 p-1">
                <Link
                  href="/buyers"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 rounded-lg py-2.5 text-center text-sm font-semibold transition-all ${
                    isBuyer ? "bg-[#0A2540] text-white shadow-sm" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  For Buyers
                </Link>
                <Link
                  href="/sellers"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 rounded-lg py-2.5 text-center text-sm font-semibold transition-all ${
                    isSeller ? "bg-[#0A2540] text-white shadow-sm" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  For Sellers
                </Link>
              </div>

              <button
                onClick={scrollToSurvey}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C896] py-3 text-sm font-semibold text-white shadow-md shadow-[#00C896]/20 active:scale-98 cursor-pointer"
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
