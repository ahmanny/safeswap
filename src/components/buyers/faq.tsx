"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BuyerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does SafeSwap hold my payment?",
      a: "When you pay via a SafeSwap link, your money goes directly into a secure CBN-compliant escrow pool account. Neither the vendor nor SafeSwap can touch those funds until you inspect and approve delivery.",
    },
    {
      q: "What if the seller disappears or doesn't deliver?",
      a: "If the seller fails to provide valid courier tracking or doesn't deliver within the agreed timeframe, your payment is automatically refunded 100% back to your bank account.",
    },
    {
      q: "What if the item delivered is broken or 'What I ordered vs what I got'?",
      a: "Simply click 'Dispute Order' on your phone and upload a quick photo or video. Our resolution team places the transaction on hold and issues a full refund once the item is returned.",
    },
    {
      q: "Does SafeSwap charge buyers any extra fee?",
      a: "No! SafeSwap is 100% free for buyers. You pay the exact price agreed with your vendor.",
    },
    {
      q: "How long do I have to inspect my item before funds auto-release?",
      a: "You get a standard 24-hour inspection window after delivery is logged. You can also request an extension if you need more time to inspect technical items.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0A2540]/5 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            <HelpCircle className="h-4 w-4 text-[#00C896]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about buying safely with SafeSwap.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-[#0A2540] hover:text-[#00C896] transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#00C896]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 pt-4">
                        {faq.a}
                      </div>
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
