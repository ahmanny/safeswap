"use client";

import { motion } from "framer-motion";
import { TrendingUp, Check, CheckCircle2, ShieldCheck } from "lucide-react";

export function SellerHero() {
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
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 rounded-full px-4 py-1.5 text-sm font-semibold">
              <TrendingUp className="h-4 w-4 shrink-0 text-[#F59E0B]" />
              <span>Get Paid. Every Time.</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-black text-[#0A2540] dark:text-white leading-tight tracking-tight">
              Sell to Anyone. <br />
              <span className="text-[#00C896]">Get Paid</span> Without <br />
              the Stress.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed font-normal">
              SafeSwap tells buyers their money is secured before you ship. You get paid automatically the moment they confirm delivery. Zero risk. Zero chasing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={scrollToSurvey}
                className="bg-[#0A2540] dark:bg-[#00C896] text-white dark:text-[#0A2540] rounded-full px-8 py-4 text-base font-semibold hover:bg-[#071D33] dark:hover:bg-[#00B085] transition-all shadow-lg shadow-[#0A2540]/20 text-center active:scale-95 cursor-pointer"
              >
                Take the Seller Survey
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="text-[#0A2540] dark:text-white font-semibold underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity text-center py-2 cursor-pointer"
              >
                See How It Works →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#00C896]" />
                <span>Get paid on delivery confirmation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#00C896]" />
                <span>No more payment disputes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#00C896]" />
                <span>Sell to buyers who trust you</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Mockup Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 lg:py-0">
            
            {/* Card 1 (Main Card) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-white dark:bg-[#0D1B2E] rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-white/10 w-full max-w-md relative z-10"
            >
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-4 mb-5">
                <span className="text-sm font-bold text-[#0A2540] dark:text-white">Your Sales Dashboard</span>
                <span className="bg-[#00C896]/10 text-[#00C896] text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  Active Vendor
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-[#F8FAFC] dark:bg-[#132036] rounded-2xl p-4 border border-gray-100 dark:border-white/10">
                  <span className="text-xs text-gray-400 dark:text-gray-400 font-medium block mb-1">Today's Earnings</span>
                  <span className="text-3xl font-black text-[#0A2540] dark:text-white">₦127,500</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-[#F8FAFC] dark:bg-[#132036] rounded-xl p-3 border border-gray-100 dark:border-white/10">
                    <span className="text-xs text-gray-400 dark:text-gray-400 block">Pending release</span>
                    <span className="font-bold text-[#F59E0B]">₦43,000</span>
                  </div>
                  <div className="bg-[#F8FAFC] dark:bg-[#132036] rounded-xl p-3 border border-gray-100 dark:border-white/10">
                    <span className="text-xs text-gray-400 dark:text-gray-400 block">Completed</span>
                    <span className="font-bold text-[#0A2540] dark:text-white">8 sales</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#00C896]">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Payment secured by SafeSwap ✓</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 (Floating Top Right - Gold Accent) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="bg-[#F59E0B] text-white rounded-2xl p-4 shadow-lg absolute -top-4 -right-2 sm:right-4 z-20 flex items-center gap-3 max-w-[240px]"
            >
              <div className="bg-white/20 p-2 rounded-xl shrink-0">
                <span className="text-lg">💰</span>
              </div>
              <div>
                <p className="text-sm font-extrabold leading-tight">₦43,000 being released now</p>
                <p className="text-[11px] text-white/90 font-medium mt-0.5">Buyer confirmed delivery ✅</p>
              </div>
            </motion.div>

            {/* Card 3 (Floating Bottom Left - Emerald Accent) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.2 }}
              className="bg-[#00C896] text-white rounded-2xl p-4 shadow-lg absolute -bottom-6 -left-2 sm:left-4 z-20 flex items-center gap-3 max-w-[260px]"
            >
              <div className="bg-white/20 p-2 rounded-xl shrink-0">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <p className="text-xs font-semibold leading-snug">
                Ship with confidence — payment already secured
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
