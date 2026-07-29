"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function BuyerFeatures() {
  const features = [
    {
      emoji: "🛡️",
      title: "Money-Back Guarantee",
      description:
        "If your item never arrives or isn't as described, you get a full refund. No arguments.",
    },
    {
      emoji: "⚡",
      title: "Instant Release",
      description:
        "Confirm delivery on the app and payment reaches the seller in seconds.",
    },
    {
      emoji: "🤝",
      title: "Dispute Resolution",
      description:
        "Our team mediates any disagreements fairly and transparently.",
    },
    {
      emoji: "📱",
      title: "Works on Any Device",
      description:
        "Use SafeSwap from your phone, tablet, or computer. No app download needed.",
    },
    {
      emoji: "🏦",
      title: "Multiple Payment Methods",
      description:
        "Pay via bank transfer, USSD, card, or any Nigerian payment method.",
    },
    {
      emoji: "👁️",
      title: "Full Transparency",
      description:
        "Track every step of your transaction in real time.",
    },
  ];

  return (
    <section id="features" className="bg-[#0A2540] text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need to Buy Safely
          </h2>
          <p className="text-lg text-white/60 font-normal">
            Designed to protect your hard-earned money at every step
          </p>
        </div>

        {/* 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat, index) => (
            <AnimateOnScroll key={feat.title} delay={index * 0.08}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-[#00C896]/30 transition-all duration-200 group h-full">
                {/* Icon in bg-[#00C896]/20 circle text-[#00C896] */}
                <div className="w-12 h-12 rounded-full bg-[#00C896]/20 text-[#00C896] flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                  {feat.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
