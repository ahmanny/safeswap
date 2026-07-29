"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function SellerBenefits() {
  const comparisons = [
    {
      issue: "Fake Bank Alerts & SMS Scams",
      oldWay: "Loss of expensive goods to fake transfer receipts or SMS alerts.",
      safeSwap: "100% direct bank verification via SafeSwap webhooks before dispatch.",
    },
    {
      issue: "Pay On Delivery (POD) Losses",
      oldWay: "Riders return items because buyer changed their mind or didn't answer calls.",
      safeSwap: "Buyers deposit 100% upfront into escrow. No more wasted courier fees.",
    },
    {
      issue: "Low Conversion from Skeptical Buyers",
      oldWay: "First-time buyers hesitate to send ₦50k+ to an unknown Instagram account.",
      safeSwap: "SafeSwap trust badge gives buyers 100% confidence to pay instantly.",
    },
    {
      issue: "Dispute & Fraud Resolution",
      oldWay: "Buyers post false reviews online claiming wrong item was delivered.",
      safeSwap: "SafeSwap requires packaging video proof from both parties before resolving.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00C896]/15 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            <TrendingUp className="h-4 w-4 text-[#00C896]" />
            <span>Why Vendors Switch To SafeSwap</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            The Old Way vs The SafeSwap Way
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how switching to SafeSwap escrow protects your business revenue and skyrockets your sales conversion.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {comparisons.map((item, idx) => (
            <motion.div
              key={item.issue}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F8FAFC] shadow-xs"
            >
              <div className="bg-[#0A2540] px-6 py-3 text-white text-sm font-bold flex items-center justify-between">
                <span>{item.issue}</span>
                <span className="text-xs text-[#00C896] font-semibold">Vendor Comparison</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 p-6 gap-6 md:gap-0">
                {/* Old Way */}
                <div className="space-y-2 md:pr-6">
                  <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-wider">
                    <XCircle className="h-4 w-4" />
                    <span>Traditional POD / Direct Bank Transfer</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.oldWay}
                  </p>
                </div>

                {/* SafeSwap Way */}
                <div className="space-y-2 md:pl-6 pt-4 md:pt-0">
                  <div className="flex items-center gap-2 text-[#00C896] text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>SafeSwap Escrow Link</span>
                  </div>
                  <p className="text-slate-900 font-medium text-sm leading-relaxed">
                    {item.safeSwap}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="mt-14 max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-r from-[#0A2540] to-[#070F1A] p-8 text-white shadow-xl">
          <div className="flex items-center justify-center gap-2 text-[#00C896] font-bold text-sm mb-2">
            <Zap className="h-5 w-5" />
            <span>Instant Merchant Onboarding</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Boost your Instagram & WhatsApp sales by 3x
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Give your shoppers the confidence to pay without hesitation. Join our merchant early access list below.
          </p>
        </div>

      </div>
    </section>
  );
}
