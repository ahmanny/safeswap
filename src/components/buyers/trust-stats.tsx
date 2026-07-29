"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

function CountUpNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function BuyerTrustStats() {
  return (
    <section className="bg-[#00C896] py-14 md:py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          {/* Stat 1 */}
          <AnimateOnScroll delay={0}>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                <CountUpNumber value={0} prefix="₦" />
              </div>
              <div className="text-white font-bold text-base sm:text-lg">Lost to Scams</div>
              <div className="text-white/80 text-xs sm:text-sm mt-0.5 font-medium">"Since launch"</div>
            </div>
          </AnimateOnScroll>

          {/* Stat 2 */}
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                <CountUpNumber value={0} />
              </div>
              <div className="text-white font-bold text-base sm:text-lg">Disputes Unresolved</div>
              <div className="text-white/80 text-xs sm:text-sm mt-0.5 font-medium">"100% resolved"</div>
            </div>
          </AnimateOnScroll>

          {/* Stat 3 */}
          <AnimateOnScroll delay={0.2}>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                Free
              </div>
              <div className="text-white font-bold text-base sm:text-lg">For Buyers</div>
              <div className="text-white/80 text-xs sm:text-sm mt-0.5 font-medium">"No fees ever"</div>
            </div>
          </AnimateOnScroll>

          {/* Stat 4 */}
          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                <CountUpNumber value={2} suffix=" Minutes" />
              </div>
              <div className="text-white font-bold text-base sm:text-lg">To Complete</div>
              <div className="text-white/80 text-xs sm:text-sm mt-0.5 font-medium">"To complete a transaction"</div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
