import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { BuyerHero } from "@/components/buyers/hero";
import { BuyerHowItWorks } from "@/components/buyers/how-it-works";
import { BuyerFeatures } from "@/components/buyers/features";
import { BuyerFAQ } from "@/components/buyers/faq";
import { BuyerSurveyForm } from "@/components/buyers/survey-form";

export default function BuyerLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <BuyerHero />
        <BuyerHowItWorks />
        <BuyerFeatures />
        <BuyerFAQ />
        <BuyerSurveyForm />
      </main>
      <Footer />
    </div>
  );
}
