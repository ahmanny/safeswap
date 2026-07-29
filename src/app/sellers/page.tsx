import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { SellerHero } from "@/components/sellers/hero";
import { SellerHowItWorks } from "@/components/sellers/how-it-works";
import { SellerBenefits } from "@/components/sellers/benefits";
import { SellerPersonas } from "@/components/sellers/personas";
import { SellerPricing } from "@/components/sellers/pricing";
import { SellerFAQ } from "@/components/sellers/faq";
import { SellerSurveyForm } from "@/components/sellers/survey-form";

export const metadata: Metadata = {
  title: "SafeSwap for Sellers — Get Paid Every Time",
  description:
    "SafeSwap guarantees your payment before you ship. Sell to any buyer with confidence.",
  openGraph: {
    title: "SafeSwap — Get Paid Every Time",
    description:
      "SafeSwap guarantees your payment before you ship. Sell to any buyer with confidence.",
    url: "https://safeswap-sellers.vercel.app",
    type: "website",
  },
};

export default function SellerLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <SellerHero />
        <SellerHowItWorks />
        <SellerBenefits />
        <SellerPersonas />
        <SellerPricing />
        <SellerFAQ />
        <SellerSurveyForm />
      </main>
      <Footer />
    </div>
  );
}
