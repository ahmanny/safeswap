"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ShieldCheck, Send, Check, Sparkles, AlertCircle } from "lucide-react";
import { submitBuyerSurvey } from "@/lib/survey-actions";

const buyerSurveySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid WhatsApp phone number"),
  biggestFear: z.string().min(1, "Please select your main frustration"),
  desiredFeatures: z.array(z.string()).min(1, "Please select at least 1 feature you want"),
  shoppingFrequency: z.string().min(1, "Please select your shopping frequency"),
  additionalFeedback: z.string().optional(),
});

type BuyerSurveyFormValues = z.infer<typeof buyerSurveySchema>;

export function BuyerSurveyForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BuyerSurveyFormValues>({
    resolver: zodResolver(buyerSurveySchema),
    defaultValues: {
      desiredFeatures: [],
      biggestFear: "",
      shoppingFrequency: "",
      name: "",
      email: "",
      phone: "",
      additionalFeedback: "",
    },
  });

  const selectedFeatures = watch("desiredFeatures") || [];
  const selectedFear = watch("biggestFear");
  const selectedFrequency = watch("shoppingFrequency");

  const fearOptions = [
    { id: "vendor_disappearing", label: "Vendor taking money & blocking me on Instagram/WhatsApp" },
    { id: "what_i_ordered_vs_got", label: "Receiving 'What I ordered vs what I got' (wrong/cheap item)" },
    { id: "pod_scams", label: "Pay On Delivery scams (rider demanding money before opening package)" },
    { id: "no_refunds", label: "Vendors refusing refunds when items arrive broken or defective" },
  ];

  const featureOptions = [
    { id: "inspection_timer", label: "⏳ 24-Hour Item Inspection window before seller gets paid" },
    { id: "whatsapp_updates", label: "💬 Real-Time WhatsApp tracking alerts for every order step" },
    { id: "verified_badges", label: "🛡️ Verified Seller Trust Ratings & past buyer reviews" },
    { id: "instant_refund_btn", label: "⚡ 1-Click Instant Refund button if wrong item arrives" },
  ];

  const frequencyOptions = [
    { id: "rare", label: "1 - 2 times a month" },
    { id: "regular", label: "3 - 6 times a month" },
    { id: "heavy", label: "7+ times a month (Heavy Shopper)" },
  ];

  const toggleFeature = (featureId: string) => {
    const current = selectedFeatures;
    if (current.includes(featureId)) {
      setValue(
        "desiredFeatures",
        current.filter((item) => item !== featureId),
        { shouldValidate: true }
      );
    } else {
      setValue("desiredFeatures", [...current, featureId], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: BuyerSurveyFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await submitBuyerSurvey(data);
      if (res.success) {
        toast.success(res.message);
        setIsSubmitted(true);
      }
    } catch (err) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="survey-section" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-emerald-50/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00C896]/15 px-4 py-1.5 text-xs font-semibold text-[#0A2540]">
            <Sparkles className="h-4 w-4 text-[#00C896]" />
            <span>Help Us Build SafeSwap For You</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            Have Your Say & Get Priority Beta Access
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tell us your biggest shopping headaches and what features you want in SafeSwap. Early respondents get <span className="font-bold text-[#00C896]">Zero Escrow Fees</span> on their first 5 orders!
          </p>
        </div>

        {/* Survey Card Container */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00C896]/15 text-[#00C896]">
                <Check className="h-10 w-10 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540]">You're On The VIP List! 🎉</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                Thank you for sharing your feedback. We're actively building SafeSwap around your input and will invite you to the private beta on WhatsApp soon.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="rounded-full bg-[#0A2540] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#071D33] transition-colors"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Question 1: Biggest Fear / Headache */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0A2540]">
                  1. What is your biggest frustration when buying online in Nigeria? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fearOptions.map((opt) => {
                    const isSelected = selectedFear === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("biggestFear", opt.id, { shouldValidate: true })}
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] shadow-xs"
                            : "border-slate-200 bg-[#F8FAFC] text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div
                          className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? "border-[#00C896] bg-[#00C896]" : "border-slate-400"
                          }`}
                        >
                          {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                        </div>
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.biggestFear && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.biggestFear.message}</span>
                  </p>
                )}
              </div>

              {/* Question 2: Desired Features */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0A2540]">
                  2. Which features do you want MOST in SafeSwap? <span className="text-slate-400 font-normal">(Select all that apply)</span> <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featureOptions.map((opt) => {
                    const isSelected = selectedFeatures.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleFeature(opt.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "border-[#0A2540] bg-[#0A2540] text-white shadow-xs"
                            : "border-slate-200 bg-[#F8FAFC] text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div
                          className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                            isSelected ? "border-[#00C896] bg-[#00C896]" : "border-slate-400"
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3 text-white stroke-[3]" />}
                        </div>
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.desiredFeatures && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.desiredFeatures.message}</span>
                  </p>
                )}
              </div>

              {/* Question 3: Frequency */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0A2540]">
                  3. How often do you buy from Instagram / WhatsApp vendors? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {frequencyOptions.map((opt) => {
                    const isSelected = selectedFrequency === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("shoppingFrequency", opt.id, { shouldValidate: true })}
                        className={`p-3.5 rounded-xl border text-center text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] font-bold"
                            : "border-slate-200 bg-[#F8FAFC] text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                {errors.shoppingFrequency && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.shoppingFrequency.message}</span>
                  </p>
                )}
              </div>

              {/* Additional Feedback */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#0A2540]">
                  4. What else should we add to make online shopping 100% safe for you? <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  {...register("additionalFeedback")}
                  rows={3}
                  placeholder="e.g. I want riders to wait while I fit the shoe, or instant bank transfer support..."
                  className="w-full rounded-xl border border-slate-200 p-3.5 text-sm focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20"
                />
              </div>

              {/* Personal Details */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#00C896]" />
                  <span>Where should we send your Early Access Beta Invite?</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="e.g. Funke Adeleke"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#00C896] focus:outline-none"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="funke@gmail.com"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#00C896] focus:outline-none"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Phone Number *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="08012345678"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#00C896] focus:outline-none"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0A2540] py-4 text-base font-bold text-white shadow-lg hover:bg-[#071D33] active:scale-98 disabled:opacity-50 transition-all"
              >
                {isSubmitting ? (
                  <span>Submitting Feedback...</span>
                ) : (
                  <>
                    <span>Submit & Claim Beta Access</span>
                    <Send className="h-5 w-5 text-[#00C896]" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
