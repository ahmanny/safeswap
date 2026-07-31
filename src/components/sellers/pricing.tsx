"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function SellerPricing() {
  const features = [
    "Buyer trust and confidence",
    "Instant payment on confirmation",
    "Dispute resolution",
    "Real-time notifications",
    "Sales dashboard",
    "Customer support",
  ];

  return (
    <section className="bg-[#F8FAFC] dark:bg-[#070F1A] py-20 md:py-28 border-b border-gray-100 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-normal">
            Free for buyers. Small fee for sellers.
          </p>
        </div>

        {/* Centered Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-[#0D1B2E] rounded-3xl p-8 shadow-xl dark:shadow-none max-w-md mx-auto border border-gray-100 dark:border-white/10 text-center"
        >
          <span className="text-sm font-bold text-gray-400 dark:text-gray-400 uppercase tracking-wider block mb-3">
            Seller Transaction Fee
          </span>

          <div className="text-6xl font-black text-[#0A2540] dark:text-white mb-1 tracking-tight">
            1.5%
          </div>
          <span className="text-gray-400 dark:text-gray-400 text-sm font-medium block mb-6">
            per transaction
          </span>

          {/* Included Features */}
          <div className="text-left space-y-3 mb-8 border-t border-b border-gray-100 dark:border-white/10 py-6">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                <div className="bg-[#00C896]/15 text-[#00C896] p-1 rounded-full shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Example Calculation Box */}
          <div className="bg-[#F8FAFC] dark:bg-[#132036] rounded-xl p-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium mb-4 border border-gray-100 dark:border-white/10">
            Sell <span className="font-bold text-[#0A2540] dark:text-white">₦50,000</span> item → Fee: <span className="font-bold text-[#F59E0B]">₦750</span> <br />
            You receive: <span className="font-bold text-[#00C896]">₦49,250</span>
          </div>

          {/* Note */}
          <p className="text-xs text-gray-400 dark:text-gray-400 font-medium">
            * Fee percentage will be confirmed at launch based on survey feedback
          </p>

        </motion.div>

      </div>
    </section>
  );
}
