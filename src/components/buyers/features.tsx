"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BellRing, UserCheck, Clock, RefreshCw } from "lucide-react";

export function BuyerFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Refund Protection",
      description: "If the seller sends a wrong, damaged, or fake product, your money is returned straight to your bank account with zero hassle.",
    },
    {
      icon: Clock,
      title: "Custom Inspection Window",
      description: "Take up to 24 hours after delivery to test gadget batteries, try on clothes, or verify items before confirming funds release.",
    },
    {
      icon: Zap,
      title: "Instant Vendor Payouts",
      description: "The moment you click approve, funds hit the vendor's bank account in under 3 seconds so nobody is kept waiting.",
    },
    {
      icon: BellRing,
      title: "Real-Time WhatsApp Alerts",
      description: "Get instant WhatsApp notifications when funds are locked, when the courier picks up, and when delivery is imminent.",
    },
    {
      icon: UserCheck,
      title: "Verified Vendor Ratings",
      description: "Check the vendor's SafeSwap completion rate, average dispatch speed, and buyer reviews before placing any order.",
    },
    {
      icon: RefreshCw,
      title: "Swift Dispute Resolution",
      description: "If a dispute arises, our local support team reviews video proof or rider receipts and resolves issues within 4 hours.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="rounded-full bg-[#00C896]/15 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            Built for peace of mind
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            Why Nigerian Shoppers Love SafeSwap
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Say goodbye to fake vendors, ghosting after payment, and endless pay-on-delivery arguments.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:shadow-md hover:border-[#00C896]/50 transition-all group"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00C896]/10 text-[#00C896] group-hover:bg-[#00C896] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
