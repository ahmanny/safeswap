"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, Smartphone, ChevronRight } from "lucide-react";

export function BuyerHero() {
  const scrollToSurvey = () => {
    document.getElementById("survey-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-emerald-50/20 to-[#F8FAFC] pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-gradient-to-tr from-[#00C896]/10 to-[#0A2540]/5 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#0A2540]">
              <span className="flex h-2 w-2 rounded-full bg-[#00C896] animate-pulse" />
              <span>Zero-Risk Online Shopping for Nigerians</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-5xl lg:text-6xl leading-[1.15]">
              Never lose money to{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00C896] to-[#0A2540]">
                "What I Ordered vs What I Got"
              </span>{" "}
              again.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              SafeSwap holds your payment safely in escrow. The Instagram or WhatsApp vendor only gets paid <span className="font-semibold text-[#0A2540]">after you inspect and confirm</span> delivery.
            </p>

            {/* Trust Badges List */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-[#00C896]" />
                <span>100% Money-Back Refund</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <Lock className="h-4 w-4 text-[#0A2540]" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-[#00C896]" />
                <span>No Pay On Delivery Hassles</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={scrollToSurvey}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#0A2540] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#0A2540]/20 hover:bg-[#071D33] hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                <span>Shape SafeSwap & Join Beta</span>
                <ArrowRight className="h-5 w-5 text-[#00C896]" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-700 border border-slate-200 shadow-xs hover:bg-slate-50 transition-all"
              >
                <span>See How It Works</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Escrow Live Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00C896]/15 text-[#00C896]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Active Escrow Order</p>
                    <p className="text-sm font-bold text-[#0A2540]">#SAF-84920-NG</p>
                  </div>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  Payment Held 🔒
                </span>
              </div>

              {/* Transaction details */}
              <div className="py-5 space-y-4">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">Item Description</p>
                  <p className="text-sm font-semibold text-slate-800">Designer Sneaker (Size 43) — Instagram Vendor</p>
                  <div className="mt-2 flex justify-between items-center text-xs">
                    <span className="text-slate-500">Escrow Amount:</span>
                    <span className="text-base font-extrabold text-[#0A2540]">₦48,500.00</span>
                  </div>
                </div>

                {/* Progress steps animation preview */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00C896] text-white">✓</div>
                    <span className="text-slate-700">Buyer deposited funds into SafeSwap Vault</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00C896] text-white">✓</div>
                    <span className="text-slate-700">Vendor dispatched item via courier</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-white animate-pulse">⏳</div>
                    <span className="text-slate-900 font-bold">Awaiting Buyer Delivery Inspection</span>
                  </div>
                </div>
              </div>

              {/* Action Button inside card preview */}
              <div className="pt-2">
                <div className="w-full py-3 px-4 rounded-xl bg-[#00C896] text-white text-center text-sm font-bold shadow-md flex items-center justify-center gap-2">
                  <span>Confirm Package & Release Payment</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Funds released instantly to vendor only when you click confirm.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
