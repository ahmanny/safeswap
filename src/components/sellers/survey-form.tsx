"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Share2, ArrowRight, ArrowLeft } from "lucide-react";

export function SellerSurveyForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  // Form States
  const [q1Platforms, setQ1Platforms] = useState<string[]>([]);
  const [q2Challenges, setQ2Challenges] = useState<string[]>([]);
  const [q3MonthlyOrders, setQ3MonthlyOrders] = useState("");
  const [q4AverageValue, setQ4AverageValue] = useState("");
  const [q5EscrowUse, setQ5EscrowUse] = useState("");
  const [q6AcceptableFee, setQ6AcceptableFee] = useState("");
  const [q7Features, setQ7Features] = useState<string[]>([]);
  
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [productType, setProductType] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCheckboxToggle = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleNext = () => {
    setErrorMsg("");
    if (currentStep === 1 && q1Platforms.length === 0) {
      setErrorMsg("Please select at least one platform.");
      return;
    }
    if (currentStep === 2 && q2Challenges.length === 0) {
      setErrorMsg("Please select at least one challenge.");
      return;
    }
    if (currentStep === 3 && !q3MonthlyOrders) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 4 && !q4AverageValue) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 5 && !q5EscrowUse) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 6 && !q6AcceptableFee) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 7 && q7Features.length === 0) {
      setErrorMsg("Please select at least one feature.");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const payload = {
      platforms: q1Platforms,
      challenges: q2Challenges,
      monthlyOrders: q3MonthlyOrders,
      averageValue: q4AverageValue,
      wouldUseEscrow: q5EscrowUse,
      acceptableFee: q6AcceptableFee,
      mostImportantFeatures: q7Features,
      businessName: businessName || undefined,
      email: email || undefined,
      phone: phone || undefined,
      productType: productType || undefined,
    };

    try {
      const res = await fetch("/api/survey/sellers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "SafeSwap for Sellers - Guaranteed Payment",
        text: "Check out SafeSwap for vendors — get paid automatically without payment disputes!",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <section id="survey" className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Tell Us What You Need as a Seller
          </h2>
          <p className="text-gray-500 text-lg">
            2 minutes. Your feedback shapes SafeSwap.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
          
          {isSubmitted ? (
            /* SUCCESS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-20 h-20 bg-[#00C896]/15 text-[#00C896] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-12 w-12" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-[#0A2540]">Thank you! 🎉</h3>
                <p className="text-gray-600 max-w-md mx-auto text-base">
                  You're on the seller early access list. We'll reach out when SafeSwap launches.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 bg-[#00C896] text-white rounded-full px-8 py-3.5 text-base font-semibold hover:bg-[#00B085] transition-all shadow-md shadow-[#00C896]/30 cursor-pointer"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Share with a Friend</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* MULTI-STEP FORM */
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-2">
                  <span>Question {currentStep} of {totalSteps}</span>
                  <span>{Math.round(progressPercentage)}% Completed</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00C896]"
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="mb-6 p-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              {/* QUESTIONS */}
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  
                  {/* QUESTION 1 */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-[#0A2540]">
                          What platform do you primarily sell on?
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 font-medium">Select all that apply</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Instagram",
                          "WhatsApp",
                          "Jiji",
                          "Facebook Marketplace",
                          "My own website",
                          "Physical shop + online",
                          "Other",
                        ].map((option) => {
                          const isChecked = q1Platforms.includes(option);
                          return (
                            <label
                              key={option}
                              onClick={() => handleCheckboxToggle(q1Platforms, setQ1Platforms, option)}
                              className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                isChecked
                                  ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540]"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}}
                                className="accent-[#00C896] h-4 w-4 rounded"
                              />
                              <span>{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTION 2 */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-[#0A2540]">
                          What is your biggest challenge as an online seller?
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 font-medium">Select all that apply</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Buyers not trusting me to send first",
                          "Buyers disputing after receiving item",
                          "Delayed or failed payments",
                          "Buyers ghosting after I ship",
                          "Managing many transactions manually",
                        ].map((option) => {
                          const isChecked = q2Challenges.includes(option);
                          return (
                            <label
                              key={option}
                              onClick={() => handleCheckboxToggle(q2Challenges, setQ2Challenges, option)}
                              className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                isChecked
                                  ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540]"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}}
                                className="accent-[#00C896] h-4 w-4 rounded"
                              />
                              <span>{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTION 3 */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-[#0A2540]">
                        How many online transactions do you complete per month?
                      </h3>
                      <div className="space-y-3">
                        {["1 — 5", "6 — 20", "21 — 50", "50+"].map((option) => (
                          <label
                            key={option}
                            onClick={() => setQ3MonthlyOrders(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q3MonthlyOrders === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540]"
                                : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="q3"
                              checked={q3MonthlyOrders === option}
                              onChange={() => {}}
                              className="accent-[#00C896] h-4 w-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTION 4 */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-[#0A2540]">
                        What is your average transaction value?
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Under ₦10,000",
                          "₦10,000 — ₦50,000",
                          "₦50,000 — ₦200,000",
                          "Over ₦200,000",
                        ].map((option) => (
                          <label
                            key={option}
                            onClick={() => setQ4AverageValue(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q4AverageValue === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540]"
                                : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="q4"
                              checked={q4AverageValue === option}
                              onChange={() => {}}
                              className="accent-[#00C896] h-4 w-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTION 5 */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-[#0A2540]">
                        Would you use an escrow service that guarantees payment before you ship?
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Yes — I need this immediately",
                          "Yes — if the fee is reasonable",
                          "Maybe — need to know more",
                          "No — I prefer my current method",
                        ].map((option) => (
                          <label
                            key={option}
                            onClick={() => setQ5EscrowUse(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q5EscrowUse === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540]"
                                : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="q5"
                              checked={q5EscrowUse === option}
                              onChange={() => {}}
                              className="accent-[#00C896] h-4 w-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTION 6 */}
                  {currentStep === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-[#0A2540]">
                        What fee would you consider acceptable per transaction?
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Under 1%",
                          "1% — 2%",
                          "2% — 3%",
                          "Over 3% if features are good",
                        ].map((option) => (
                          <label
                            key={option}
                            onClick={() => setQ6AcceptableFee(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q6AcceptableFee === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540]"
                                : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="q6"
                              checked={q6AcceptableFee === option}
                              onChange={() => {}}
                              className="accent-[#00C896] h-4 w-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTION 7 */}
                  {currentStep === 7 && (
                    <motion.div
                      key="step7"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-[#0A2540]">
                          What features are most important to you?
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 font-medium">Select all that apply</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Instant payout on confirmation",
                          "Protection from false disputes",
                          "Simple shareable payment link",
                          "Sales dashboard and reports",
                          "WhatsApp/Instagram integration",
                          "Bulk transaction management",
                        ].map((option) => {
                          const isChecked = q7Features.includes(option);
                          return (
                            <label
                              key={option}
                              onClick={() => handleCheckboxToggle(q7Features, setQ7Features, option)}
                              className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                isChecked
                                  ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540]"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}}
                                className="accent-[#00C896] h-4 w-4 rounded"
                              />
                              <span>{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* QUESTION 8 (FINAL) */}
                  {currentStep === 8 && (
                    <motion.div
                      key="step8"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-[#0A2540]">
                          Get early access as a seller:
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 font-medium">
                          We will notify you first when SafeSwap launches for merchants.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#0A2540] mb-1">
                            Business Name <span className="text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            placeholder="e.g. Lagos Luxury Wigs"
                            className="w-full rounded-2xl border border-gray-200 p-4 text-sm focus:border-[#00C896] focus:outline-none bg-[#F8FAFC]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#0A2540] mb-1">
                            Email <span className="text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="vendor@example.com"
                            className="w-full rounded-2xl border border-gray-200 p-4 text-sm focus:border-[#00C896] focus:outline-none bg-[#F8FAFC]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#0A2540] mb-1">
                            Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="08012345678"
                            className="w-full rounded-2xl border border-gray-200 p-4 text-sm focus:border-[#00C896] focus:outline-none bg-[#F8FAFC]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#0A2540] mb-1">
                            What type of products do you sell? <span className="text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            value={productType}
                            onChange={(e) => setProductType(e.target.value)}
                            placeholder="e.g. Sneakers, Gadgets, Women Fashion"
                            className="w-full rounded-2xl border border-gray-200 p-4 text-sm focus:border-[#00C896] focus:outline-none bg-[#F8FAFC]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* FORM NAVIGATION BUTTONS */}
                <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[#0A2540] transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-[#0A2540] text-white rounded-full px-7 py-3 text-sm font-semibold hover:bg-[#071D33] transition-all cursor-pointer"
                    >
                      <span>Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-[#00C896] text-white rounded-full px-8 py-3.5 text-base font-bold hover:bg-[#00B085] transition-all shadow-md shadow-[#00C896]/30 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Survey 🎉"}
                    </button>
                  )}
                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
