"use client";

import { motion } from "framer-motion";

export function BuyerTrustStats() {
  const stats = [
    {
      value: "₦0",
      label: "Lost to Scams",
      subtext: "Since launch",
    },
    {
      value: "0",
      label: "Disputes Unresolved",
      subtext: "100% resolved",
    },
    {
      value: "Free",
      label: "For Buyers",
      subtext: "No fees ever",
    },
    {
      value: "2 Minutes",
      label: "To Complete",
      subtext: "To complete a transaction",
    },
  ];

  return (
    <section className="bg-[#00C896] py-14 md:py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center ${index > 0 ? "pt-6 md:pt-0" : ""}`}
            >
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-white font-bold text-base sm:text-lg">
                {stat.label}
              </div>
              <div className="text-white/80 text-xs sm:text-sm mt-0.5 font-medium">
                "{stat.subtext}"
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
