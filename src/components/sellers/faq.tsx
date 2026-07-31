"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SellerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "How quickly do I get paid after delivery?",
      a: "Payment is released to your account within minutes of the buyer confirming delivery.",
    },
    {
      q: "What if the buyer never confirms delivery?",
      a: "If the buyer doesn't confirm or reject within the agreed timeframe, payment is automatically released to you.",
    },
    {
      q: "What if a buyer makes a false dispute?",
      a: "Our team reviews evidence from both sides fairly. We protect sellers from fraudulent claims with our dispute process.",
    },
    {
      q: "Do I need a special bank account?",
      a: "No. Payouts go straight to your regular Nigerian bank account.",
    },
    {
      q: "Can I use SafeSwap on Instagram/WhatsApp?",
      a: "Yes. Share your SafeSwap payment link anywhere — DMs, status, or chat.",
    },
  ];

  return (
    <section id="faq" className="bg-white dark:bg-[#070F1A] py-20 md:py-28 border-b border-gray-100 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Got questions about selling on SafeSwap? We've got answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-gray-200 dark:divide-white/10 border-t border-b border-gray-200 dark:border-white/10">
          {questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="py-5 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between text-left font-bold text-[#0A2540] dark:text-white text-lg hover:text-[#00C896] dark:hover:text-[#00C896] transition-colors cursor-pointer py-1"
                >
                  <span className="pr-4">{item.q}</span>
                  <div className="shrink-0 text-[#0A2540] dark:text-white">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-[#00C896]" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pb-2 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
