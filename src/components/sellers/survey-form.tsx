"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send, Check, Sparkles, AlertCircle, Building2 } from "lucide-react";
import { submitSellerSurvey } from "@/lib/survey-actions";

const sellerSurveySchema = z.object({
  businessName: z.string().min(2, "Please enter your business or brand name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid WhatsApp phone number"),
  productCategory: z.string().min(1, "Please select your product category"),
  biggestHeadache: z.string().min(1, "Please select your biggest headache"),
  desiredFeatures: z.array(z.string()).min(1, "Please select at least 1 desired feature"),
  monthlyOrders: z.string().min(1, "Please select your monthly order volume"),
  additionalFeedback: z.string().optional(),
});

type SellerSurveyFormValues = z.infer<typeof sellerSurveySchema>;

export function SellerSurveyForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SellerSurveyFormValues>({
    resolver: zodResolver(sellerSurveySchema),
    defaultValues: {
      desiredFeatures: [],
      productCategory: "",
      biggestHeadache: "",
      monthlyOrders: "",
      businessName: "",
      email: "",
      phone: "",
      additionalFeedback: "",
    },
  });

  const selectedFeatures = watch("desiredFeatures") || [];
  const selectedHeadache = watch("biggestHeadache");
  const selectedCategory = watch("productCategory");
  const selectedVolume = watch("monthlyOrders");

  const headacheOptions = [
    { id: "fake_alerts", label: "Fake bank alerts / SMS receipt scams from buyers" },
    { id: "pod_cancellations", label: "Buyers refusing Pay-On-Delivery or ghosting riders at doorstep" },
    { id: "buyer_skepticism", label: "Loss of sales because new buyers don't trust Instagram vendors" },
    { id: "logistics_losses", label: "Losing money on courier fees when deliveries fail" },
  ];

  const featureOptions = [
    { id: "bio_link", label: "🔗 Custom Instagram Bio Checkout Link & Storefront" },
    { id: "whatsapp_bot", label: "🤖 WhatsApp Bot to create escrow links in 10 seconds" },
    { id: "video_proof", label: "📹 Packaging Video Proof upload to resolve disputes fast" },
    { id: "logistics_shield", label: "🛡️ Automated Delivery Fee Coverage if buyer cancels" },
  ];

  const categoryOptions = [
    { id: "fashion", label: "👗 Fashion, Clothing & Accessories" },
    { id: "tech", label: "📱 Phones, Laptops & Electronics" },
    { id: "beauty", label: "💅 Beauty, Skincare & Hair Wigs" },
    { id: "food", label: "🍲 Food, Cakes & Groceries" },
    { id: "other", label: "📦 Other Physical Products" },
  ];

  const volumeOptions = [
    { id: "starter", label: "1 - 20 orders/month" },
    { id: "growing", label: "21 - 50 orders/month" },
    { id: "established", label: "50+ orders/month (High Volume)" },
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

  const onSubmit = async (data: SellerSurveyFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await submitSellerSurvey(data);
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
    <section id="survey-section" className="py-20 bg-gradient-to-b from-[#F8FAFC] via-slate-100 to-[#F8FAFC]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-4 py-1.5 text-xs font-semibold text-[#00C896]">
            <Sparkles className="h-4 w-4" />
            <span>Co-Design SafeSwap For Merchants</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
            Tell Us What Features Your Business Needs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Participate in our vendor survey. Early merchants get <span className="font-bold text-[#0A2540]">0% Escrow Fees for 3 Months</span> + priority merchant badge!
          </p>
        </div>

        {/* Survey Card Container */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00C896]/15 text-[#00C896]">
                <Check className="h-10 w-10 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540]">Merchant Beta Application Received! 🚀</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                Thank you for applying! Our onboarding team will contact your brand on WhatsApp to set up your merchant link generator ahead of launch.
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
              
              {/* Question 1: Product Category */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0A2540]">
                  1. What category of items do you sell? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categoryOptions.map((opt) => {
                    const isSelected = selectedCategory === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("productCategory", opt.id, { shouldValidate: true })}
                        className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] font-bold shadow-2xs"
                            : "border-slate-200 bg-[#F8FAFC] text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                {errors.productCategory && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.productCategory.message}</span>
                  </p>
                )}
              </div>

              {/* Question 2: Biggest Headache */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0A2540]">
                  2. What is your biggest payment or delivery headache? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {headacheOptions.map((opt) => {
                    const isSelected = selectedHeadache === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("biggestHeadache", opt.id, { shouldValidate: true })}
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "border-[#0A2540] bg-[#0A2540] text-white shadow-xs"
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
                {errors.biggestHeadache && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.biggestHeadache.message}</span>
                  </p>
                )}
              </div>

              {/* Question 3: Desired Merchant Features */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0A2540]">
                  3. Which merchant features would help your business most? <span className="text-slate-400 font-normal">(Select all that apply)</span> <span className="text-red-500">*</span>
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
                            ? "border-[#00C896] bg-[#00C896]/15 text-[#0A2540] font-bold shadow-xs"
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

              {/* Question 4: Monthly Volume */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0A2540]">
                  4. Average monthly orders handled by your business? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {volumeOptions.map((opt) => {
                    const isSelected = selectedVolume === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setValue("monthlyOrders", opt.id, { shouldValidate: true })}
                        className={`p-3.5 rounded-xl border text-center text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? "border-[#00C896] bg-[#00C896]/15 text-[#0A2540] font-bold"
                            : "border-slate-200 bg-[#F8FAFC] text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                {errors.monthlyOrders && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.monthlyOrders.message}</span>
                  </p>
                )}
              </div>

              {/* Question 5: Additional Feedback */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#0A2540]">
                  5. Anything else you'd like SafeSwap to build for vendors? <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  {...register("additionalFeedback")}
                  rows={3}
                  placeholder="e.g. Integrate with GIG Logistics API, or support multi-item cart links..."
                  className="w-full rounded-xl border border-slate-200 p-3.5 text-sm focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20"
                />
              </div>

              {/* Merchant Contact Info */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#00C896]" />
                  <span>Merchant Onboarding Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brand / Business Name *</label>
                    <input
                      {...register("businessName")}
                      type="text"
                      placeholder="e.g. Glamour Wigs NG"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#00C896] focus:outline-none"
                    />
                    {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="sales@glamourwigs.ng"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#00C896] focus:outline-none"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Business Number *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="08098765432"
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
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#00C896] py-4 text-base font-bold text-[#0A2540] shadow-lg hover:bg-[#00B085] active:scale-98 disabled:opacity-50 transition-all"
              >
                {isSubmitting ? (
                  <span>Submitting Merchant Application...</span>
                ) : (
                  <>
                    <span>Submit & Claim 3 Months 0% Fee Beta</span>
                    <Send className="h-5 w-5" />
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
