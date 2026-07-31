"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function SellerHowItWorks() {
  const steps = [
    {
      number: "1",
      emoji: "🔗",
      title: "Share Your SafeSwap Link",
      description:
        "Send buyers your SafeSwap payment link instead of your bank account. They pay SafeSwap — not you directly.",
    },
    {
      number: "2",
      emoji: "📦",
      title: "Ship When Payment is Secured",
      description:
        "You get notified the moment the buyer's payment is locked in. Ship your item knowing you WILL get paid.",
    },
    {
      number: "3",
      emoji: "💰",
      title: "Get Paid Automatically",
      description:
        "Buyer confirms delivery → money hits your account instantly. No waiting. No chasing. No excuses.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white dark:bg-[#070F1A] py-20 md:py-28 border-b border-gray-100 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            How SafeSwap Works for Sellers
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-normal">
            Three simple steps to guaranteed payment on every sale
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Vertical connecting line on mobile */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-white/10 -translate-x-1/2 md:hidden z-0" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col z-10">
              
              <AnimateOnScroll delay={index * 0.1}>
                <div className="bg-[#F8FAFC] dark:bg-[#0D1B2E] rounded-2xl p-6 md:p-8 relative overflow-hidden flex-1 border border-gray-100 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow">
                  {/* Large step number */}
                  <span className="text-8xl font-black text-[#F59E0B]/20 dark:text-[#F59E0B]/30 absolute top-4 right-4 pointer-events-none select-none leading-none">
                    {step.number}
                  </span>

                  {/* Icon Circle */}
                  <div className="bg-[#0A2540]/10 dark:bg-white/10 w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6 relative z-10">
                    {step.emoji}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#0A2540] dark:text-white text-xl mb-3 relative z-10">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Desktop Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 bg-white dark:bg-[#0D1B2E] p-1.5 rounded-full border border-gray-200 dark:border-white/10 shadow-xs text-gray-400">
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
