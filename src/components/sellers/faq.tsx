"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SellerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does SafeSwap cost vendors?",
      a: "SafeSwap charges a tiny transaction fee (1.5% capped at ₦2,000) only when a sale is successfully completed. Creating payment links and listing items is 100% free.",
    },
    {
      q: "How quickly do I get paid after delivery?",
      a: "As soon as the buyer confirms package inspection on their phone, funds are instantly released and transferred straight into your registered Nigerian bank account in under 5 seconds.",
    },
    {
      q: "What if the buyer receives the package but forgets to click 'Confirm'?",
      a: "SafeSwap features an Automated Auto-Release timer. Once courier delivery status is logged, if the buyer doesn't raise a dispute within 24 hours, funds are automatically released to your bank account.",
    },
    {
      q: "How do I send a SafeSwap payment link to my Instagram or WhatsApp customers?",
      a: "You can generate a link in 10 seconds via our Web Dashboard or WhatsApp Bot by entering product title and price. Copy the link and send it directly in DM or paste in your bio.",
    },
    {
      q: "Which Nigerian banks are supported for seller payouts?",
      a: "All licensed commercial banks (GTBank, Zenith, Access, First Bank, UBA, Stanbic, etc.) and licensed digital banks (Kuda, Moniepoint, OPay, Palmpay) are fully supported with instant NIBSS settlement.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0A2540]/5 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            <HelpCircle className="h-4 w-4 text-[#00C896]" />
            <span>Merchant Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            Frequently Asked Questions for Vendors
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about accepting escrow payments with SafeSwap.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
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
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
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
