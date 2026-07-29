"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BuyerHowItWorks() {
  const steps = [
    {
      number: "1",
      emoji: "💸",
      title: "Send Payment to SafeSwap",
      description:
        "Instead of paying the seller directly, send your money to SafeSwap. We hold it safely until you're happy.",
    },
    {
      number: "2",
      emoji: "📦",
      title: "Seller Ships Your Order",
      description:
        "The seller can see your payment is secured and ready for release. They ship your item with confidence.",
    },
    {
      number: "3",
      emoji: "✅",
      title: "Confirm and Release",
      description:
        "Received your item? Confirm on the app and we instantly release the payment to the seller. Not satisfied? Open a dispute.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            How SafeSwap Protects You
          </h2>
          <p className="text-lg text-gray-500 font-normal">
            Three simple steps between you and a safe purchase
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 relative overflow-hidden flex-1 border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Large step number in background top right */}
                <span className="text-8xl font-black text-[#00C896]/20 absolute top-4 right-4 pointer-events-none select-none leading-none">
                  {step.number}
                </span>

                {/* Icon Circle */}
                <div className="bg-[#0A2540]/10 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 relative z-10">
                  {step.emoji}
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#0A2540] text-xl mb-3 relative z-10">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </motion.div>

              {/* Desktop Arrow Connector between cards */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 bg-white p-1.5 rounded-full border border-gray-200 shadow-xs text-gray-400">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
