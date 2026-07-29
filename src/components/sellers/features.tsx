"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, Video, Smartphone, BarChart3 } from "lucide-react";

export function SellerFeatures() {
  const features = [
    {
      icon: Lock,
      title: "Eliminate Fake Alert Fraud",
      description: "SafeSwap directly verifies bank deposits via automated banking webhooks before confirming payment to you.",
    },
    {
      icon: Video,
      title: "Vendor Proof Vault",
      description: "Upload packaging photos or video proof before dispatching to safeguard your business against dishonest claims.",
    },
    {
      icon: Smartphone,
      title: "Instagram Bio Storefront",
      description: "Turn your Instagram bio or WhatsApp link into a professional checkout store where customers pay into escrow in 1 click.",
    },
    {
      icon: Zap,
      title: "Instant Bank Withdrawals",
      description: "Direct payouts to GTB, Zenith, Access, Kuda, Moniepoint, or OPay accounts with zero delay after approval.",
    },
    {
      icon: ShieldCheck,
      title: "Fair Seller Protection",
      description: "If a buyer refuses delivery without a valid reason, SafeSwap releases your delivery fees so you never lose logistics money.",
    },
    {
      icon: BarChart3,
      title: "Sales & Order Dashboard",
      description: "Track total revenue, pending escrows, completed orders, and export monthly statements effortlessly.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="rounded-full bg-[#00C896]/15 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            Powering Honest Businesses
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            Everything You Need To Grow Your Online Store
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Focus on sourcing quality inventory while SafeSwap guarantees your payments and logistics peace of mind.
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
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2540] text-[#00C896] group-hover:bg-[#00C896] group-hover:text-white transition-colors">
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
