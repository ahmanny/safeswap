"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Check, TrendingUp, CheckCircle2 } from "lucide-react";

export function BuyerHero() {
  const scrollToSurvey = () => {
    document.getElementById("survey")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#F8FAFC] dark:bg-[#070F1A] py-12 md:py-20 overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(#0A2540 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20 rounded-full px-4 py-1.5 text-sm font-semibold">
              <Shield className="h-4 w-4 shrink-0" />
              <span>100% Secure Escrow Payments</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-black text-[#0A2540] dark:text-white leading-tight tracking-tight">
              Buy Anything Online <br className="hidden sm:inline" />
              Without the Fear of <br />
              <span className="relative inline-block">
                Getting Scammed
                {/* Green wavy underline SVG decoration */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#00C896]"
                  viewBox="0 0 250 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 14C50 4 100 22 150 8C185 -1 215 16 247 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed font-normal">
              SafeSwap holds your money safely until you confirm you've received exactly what you ordered. No delivery? Get your money back.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={scrollToSurvey}
                className="bg-[#00C896] text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-[#00B085] transition-all shadow-lg shadow-[#00C896]/30 text-center active:scale-95 cursor-pointer"
              >
                Take the Survey — 2 mins
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="text-[#0A2540] dark:text-white font-semibold underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity text-center py-2 cursor-pointer"
              >
                See How It Works →
              </button>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-gray-400 dark:text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-[#0A2540] dark:text-white" />
                <span>Funds held securely</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#00C896]" />
                <span>Free to use as a buyer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm">↩</span>
                <span>Full refund if undelivered</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Floating Cards Mockup */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 lg:py-0">
            
            {/* Card 1 (Main Card) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-white dark:bg-[#0D1B2E] rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-white/10 w-full max-w-md relative z-10"
            >
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-4 mb-5">
                <span className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Payment Protected</span>
                <span className="bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Lock className="h-3 w-3" /> In Escrow 🔒
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 dark:text-gray-400">Buyer</span>
                  <span className="font-bold text-[#0A2540] dark:text-white">Amaka O.</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 dark:text-gray-400">Seller</span>
                  <span className="font-bold text-[#0A2540] dark:text-white">Lagos Gadgets</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 dark:text-gray-400">Item</span>
                  <span className="font-bold text-[#0A2540] dark:text-white">iPhone 15 Pro Max</span>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-[#132036] rounded-2xl p-4 mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Amount</span>
                  <span className="text-xl font-extrabold text-[#0A2540] dark:text-white">₦850,000</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 (Floating Top Right) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="bg-[#00C896] text-white rounded-2xl p-4 shadow-lg absolute -top-4 -right-2 sm:right-4 z-20 flex items-center gap-3"
            >
              <div className="bg-white/20 p-2 rounded-xl">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/80 font-medium">Protected volume</p>
                <p className="text-sm font-extrabold">₦2.4B protected this month</p>
              </div>
            </motion.div>

            {/* Card 3 (Floating Bottom Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.2 }}
              className="bg-[#0A2540] text-white rounded-2xl p-4 shadow-lg absolute -bottom-6 -left-2 sm:left-4 z-20 flex items-center gap-3 max-w-[260px]"
            >
              <div className="bg-[#00C896]/20 text-[#00C896] p-2 rounded-xl shrink-0">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold leading-snug">
                Seller ships after seeing secured payment
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
