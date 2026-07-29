"use client";

import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

export function SellerPersonas() {
  const personas = [
    {
      emoji: "📱",
      title: "Instagram & WhatsApp Vendors",
      description:
        "Stop losing sales because buyers don't trust sending money first. SafeSwap closes the trust gap.",
    },
    {
      emoji: "🛒",
      title: "Jiji & Marketplace Sellers",
      description:
        "Stand out from other sellers by offering the security of SafeSwap escrow.",
    },
    {
      emoji: "👗",
      title: "Fashion & Beauty Vendors",
      description:
        "Ship clothes, wigs, and accessories confidently knowing payment is secured.",
    },
    {
      emoji: "💻",
      title: "Tech & Gadget Sellers",
      description:
        "Sell phones, laptops, and electronics without buyers ghosting after you ship.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Built for Every Nigerian Seller
          </h2>
          <p className="text-lg text-gray-500 font-normal">
            Whether you sell on Instagram, WhatsApp, or marketplaces, SafeSwap works for you.
          </p>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <AnimateOnScroll key={persona.title} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-200 border border-gray-100 flex flex-col justify-between h-full">
                <div>
                  <div className="text-3xl mb-4">{persona.emoji}</div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
