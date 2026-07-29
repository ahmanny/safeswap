"use client";

import { motion } from "framer-motion";
import { CreditCard, PackageCheck, Banknote, ShieldCheck } from "lucide-react";

export function BuyerHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Deposit into SafeSwap Vault",
      description: "When ordering from a vendor, send payment safely into your SafeSwap escrow link. The seller sees that payment is secured.",
      icon: CreditCard,
      badge: "Money Locked 🔐",
    },
    {
      number: "02",
      title: "Receive & Inspect Package",
      description: "The vendor ships your item. Once it arrives, open the package and inspect it to ensure it matches what you ordered.",
      icon: PackageCheck,
      badge: "Inspection Period 📦",
    },
    {
      number: "03",
      title: "Release Payment to Vendor",
      description: "Satisfied with your purchase? Click 'Release Payment' on your phone. If it's defective or wrong, open a 1-click refund dispute.",
      icon: Banknote,
      badge: "Instant Release ⚡",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0A2540]/5 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            <ShieldCheck className="h-4 w-4 text-[#00C896]" />
            <span>Simple 3-Step Protection</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            How SafeSwap Protects Your Money
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No more anxiety after making bank transfers to unknown sellers. Here is how your shopping experience changes forever.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-8 shadow-xs hover:border-[#00C896]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-6">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-[#00C896] transition-colors">
                      {step.number}
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0A2540] border border-slate-200 shadow-2xs">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A2540] text-[#00C896] shadow-md group-hover:scale-105 transition-transform">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#00C896]">
                  <span>SafeSwap Guaranteed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
