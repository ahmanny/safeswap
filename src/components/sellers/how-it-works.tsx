"use client";

import { motion } from "framer-motion";
import { Link2, BellRing, Truck, Wallet, ShieldCheck } from "lucide-react";

export function SellerHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Send Escrow Payment Link",
      description: "Generate a custom payment link in 10 seconds and share with your buyer on WhatsApp, Instagram DM, or bio.",
      icon: Link2,
      badge: "Fast Link Setup 🔗",
    },
    {
      number: "02",
      title: "Get Deposit Notification",
      description: "SafeSwap notifies you immediately when your customer deposits the funds into escrow vault.",
      icon: BellRing,
      badge: "Funds Verified 💳",
    },
    {
      number: "03",
      title: "Ship Item Risk-Free",
      description: "Hand over the item to GIG, Red Star, or your local dispatch rider without fear of fake alerts or unpaid returns.",
      icon: Truck,
      badge: "Guaranteed Payout 📦",
    },
    {
      number: "04",
      title: "Instant Bank Withdrawal",
      description: "Once delivery is confirmed, money is released straight into your GTBank, Access, Zenith, or Kuda account.",
      icon: Wallet,
      badge: "Instant Bank Credit ⚡",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0A2540]/5 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            <ShieldCheck className="h-4 w-4 text-[#00C896]" />
            <span>Seamless Vendor Workflow</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            How SafeSwap Streamlines Your Sales
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No technical knowledge required. Sell seamlessly while protecting your business revenue.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-7 shadow-xs hover:border-[#00C896]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-[#00C896] transition-colors">
                      {step.number}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-[#0A2540] border border-slate-200">
                      {step.badge}
                    </span>
                  </div>

                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0A2540] text-[#00C896] shadow-md group-hover:scale-105 transition-transform">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#00C896]">
                  <span>Zero Payment Risk</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
