"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ArrowRight, Store, ChevronRight, TrendingUp, AlertTriangle } from "lucide-react";

export function SellerHero() {
  const scrollToSurvey = () => {
    document.getElementById("survey-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070F1A] via-[#0A2540] to-[#070F1A] text-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-[#00C896]/15 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00C896]/40 bg-[#00C896]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#00C896]">
              <Store className="h-4 w-4" />
              <span>Designed for Nigerian Instagram, WhatsApp & Online Vendors</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Stop losing money to{" "}
              <span className="text-[#00C896]">
                "Pay On Delivery"
              </span>{" "}
              & Fake Bank Alert Scams.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Send your buyers a SafeSwap escrow payment link. Buyer deposits upfront, money is guaranteed in escrow, and you ship items with zero risk of unpaid returns.
            </p>

            {/* Vendor Benefits Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-[#00C896]" />
                <span>Zero Fake Bank Alerts</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                <TrendingUp className="h-4 w-4 text-[#00C896]" />
                <span>+65% Higher Sales Conversion</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="h-4 w-4 text-[#00C896]" />
                <span>No Unpaid Courier Returns</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={scrollToSurvey}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#00C896] px-7 py-3.5 text-base font-bold text-[#0A2540] shadow-lg shadow-[#00C896]/25 hover:bg-[#00B085] hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                <span>Request Early Vendor Access</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href="#benefits"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-6 py-3.5 text-base font-semibold text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>See Merchant Benefits</span>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Seller Link Generator Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/15 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card Title */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00C896] text-[#0A2540] font-bold">
                    SS
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">SafeSwap Vendor Hub</p>
                    <p className="text-sm font-bold text-white">Create Order Link</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#00C896]/20 px-3 py-1 text-xs font-semibold text-[#00C896]">
                  Verified Seller ✅
                </span>
              </div>

              {/* Form Graphic inside preview */}
              <div className="py-4 space-y-3.5 text-left text-xs">
                <div>
                  <label className="text-slate-400 font-medium block mb-1">Product Name</label>
                  <div className="w-full rounded-xl bg-slate-800/90 border border-slate-700 p-2.5 text-slate-200 font-medium">
                    Human Hair Lace Frontal Wigs (24 inches)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Order Amount</label>
                    <div className="w-full rounded-xl bg-slate-800/90 border border-slate-700 p-2.5 text-[#00C896] font-bold">
                      ₦135,000.00
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-400 font-medium block mb-1">Delivery City</label>
                    <div className="w-full rounded-xl bg-slate-800/90 border border-slate-700 p-2.5 text-slate-200 font-medium">
                      Abuja, FCT
                    </div>
                  </div>
                </div>

                {/* Generated Link Box */}
                <div className="rounded-xl bg-emerald-950/60 border border-[#00C896]/40 p-3 space-y-1.5">
                  <p className="text-[11px] text-[#00C896] font-bold">Generated Escrow Link for Customer:</p>
                  <p className="text-xs text-white font-mono truncate select-all">
                    safeswap.ng/pay/vendor-glam/hair-wig-884
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="h-4 w-4 text-[#00C896]" />
                  <span>Buyer deposits ₦135k into escrow before you hand item to dispatch rider.</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
