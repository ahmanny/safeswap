import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { BuyerHero } from "@/components/buyers/hero";
import { BuyerHowItWorks } from "@/components/buyers/how-it-works";
import { BuyerFeatures } from "@/components/buyers/features";
import { BuyerPersonas } from "@/components/buyers/personas";
import { BuyerTrustStats } from "@/components/buyers/trust-stats";
import { BuyerFAQ } from "@/components/buyers/faq";
import { BuyerSurveyForm } from "@/components/buyers/survey-form";

export const metadata: Metadata = {
  title: "SafeSwap for Buyers — Buy Online Without Fear",
  description:
    "SafeSwap holds your payment until you confirm delivery. Shop safely from any Nigerian online vendor.",
  openGraph: {
    title: "SafeSwap — Buy Without Fear",
    description:
      "SafeSwap holds your payment until you confirm delivery. Shop safely from any Nigerian online vendor.",
    url: "https://safeswap-buyers.vercel.app",
    type: "website",
  },
};

export default function BuyerLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <BuyerHero />
        <BuyerHowItWorks />
        <BuyerFeatures />
        <BuyerPersonas />
        <BuyerTrustStats />
        <BuyerFAQ />
        <BuyerSurveyForm />
      </main>
      <Footer />
    </div>
  );
}
