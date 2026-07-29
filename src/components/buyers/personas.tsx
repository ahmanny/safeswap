"use client";

import { motion } from "framer-motion";

export function BuyerPersonas() {
  const personas = [
    {
      emoji: "🛍️",
      title: "Social Media Shoppers",
      description:
        "Tired of sending money to Instagram vendors and praying they deliver? SafeSwap protects every purchase.",
    },
    {
      emoji: "💻",
      title: "Tech Buyers",
      description:
        "Buying a phone, laptop, or gadget from someone you found online? Don't risk it without SafeSwap.",
    },
    {
      emoji: "👗",
      title: "Fashion Buyers",
      description:
        "Ordering clothes, shoes, or accessories from vendors you've never met? SafeSwap has you covered.",
    },
    {
      emoji: "🏠",
      title: "Marketplace Buyers",
      description:
        "Buying anything from Jiji, Facebook Marketplace, or WhatsApp groups? Use SafeSwap.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Perfect for Every Nigerian Buyer
          </h2>
          <p className="text-lg text-gray-500 font-normal">
            No matter where or what you buy online, SafeSwap keeps your money safe.
          </p>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-200 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4">{persona.emoji}</div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  {persona.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
