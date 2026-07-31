"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Share2, ArrowRight, ArrowLeft } from "lucide-react";

export function BuyerSurveyForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  // Form State
  const [q1Frequency, setQ1Frequency] = useState("");
  const [q2Scammed, setQ2Scammed] = useState("");
  const [q3Spend, setQ3Spend] = useState("");
  const [q4Concerns, setQ4Concerns] = useState<string[]>([]);
  const [q5EscrowUse, setQ5EscrowUse] = useState("");
  const [q6Features, setQ6Features] = useState<string[]>([]);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    if (currentStep === 1 && !q1Frequency) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 2 && !q2Scammed) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 3 && !q3Spend) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 4 && q4Concerns.length === 0) {
      setErrorMsg("Please select at least one concern to continue.");
      return;
    }
    if (currentStep === 5 && !q5EscrowUse) {
      setErrorMsg("Please select an option to continue.");
      return;
    }
    if (currentStep === 6 && q6Features.length === 0) {
      setErrorMsg("Please select at least one feature to continue.");
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
      shoppingFrequency: q1Frequency,
      scamHistory: q2Scammed,
      typicalSpend: q3Spend,
      biggestConcerns: q4Concerns,
      wouldUseEscrow: q5EscrowUse,
      mostImportantFeatures: q6Features,
      email: email || undefined,
      phone: phone || undefined,
      name: name || undefined,
    };

    try {
      const res = await fetch("/api/survey/buyers", {
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
        title: "SafeSwap - Buy Anything Online Without Fear",
        text: "Check out SafeSwap, an escrow platform keeping online buying safe in Nigeria!",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <section id="survey" className="bg-[#F8FAFC] dark:bg-[#070F1A] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            Help Us Build SafeSwap for You
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            2-minute survey — your answers shape what we build. No spam, ever.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white dark:bg-[#0D1B2E] rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-none border border-gray-100 dark:border-white/10 relative overflow-hidden">
          
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
                <h3 className="text-3xl font-black text-[#0A2540] dark:text-white">Thank you! 🎉</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-base">
                  You're on the early access list. We'll reach out when SafeSwap launches.
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
                <div className="flex justify-between items-center text-xs font-semibold text-gray-400 dark:text-gray-400 mb-2">
                  <span>Question {currentStep} of {totalSteps}</span>
                  <span>{Math.round(progressPercentage)}% Completed</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00C896]"
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="mb-6 p-3 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl text-sm font-medium">
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
                      <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                        How often do you shop from online vendors (Instagram, WhatsApp, Jiji, etc.)?
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Almost every week",
                          "A few times a month",
                          "Occasionally",
                          "Rarely",
                        ].map((option) => (
                          <label
                            key={option}
                            onClick={() => setQ1Frequency(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q1Frequency === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] dark:text-white"
                                : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#132036]"
                            }`}
                          >
                            <input
                              type="radio"
                              name="q1"
                              checked={q1Frequency === option}
                              onChange={() => {}}
                              className="accent-[#00C896] h-4 w-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
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
                      <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                        Have you ever been scammed or received a wrong item when buying online?
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Yes, more than once",
                          "Yes, once",
                          "No, but I know someone who has",
                          "No, never",
                        ].map((option) => (
                          <label
                            key={option}
                            onClick={() => setQ2Scammed(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q2Scammed === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] dark:text-white"
                                : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#132036]"
                            }`}
                          >
                            <input
                              type="radio"
                              name="q2"
                              checked={q2Scammed === option}
                              onChange={() => {}}
                              className="accent-[#00C896] h-4 w-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
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
                      <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                        How much do you typically spend per online transaction?
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
                            onClick={() => setQ3Spend(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q3Spend === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] dark:text-white"
                                : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#132036]"
                            }`}
                          >
                            <input
                              type="radio"
                              name="q3"
                              checked={q3Spend === option}
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
                      <div>
                        <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                          What is your biggest concern when buying from an unknown online seller?
                        </h3>
                        <p className="text-xs text-gray-400 dark:text-gray-400 mt-1 font-medium">Select all that apply</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Not receiving the item",
                          "Receiving a different/fake item",
                          "No way to get a refund",
                          "Seller disappearing after payment",
                          "Poor quality item",
                        ].map((option) => {
                          const isChecked = q4Concerns.includes(option);
                          return (
                            <label
                              key={option}
                              onClick={() => handleCheckboxToggle(q4Concerns, setQ4Concerns, option)}
                              className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                isChecked
                                  ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] dark:text-white"
                                  : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#132036]"
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
                      <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                        Would you use an escrow service that holds your money until you confirm delivery?
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Absolutely — I need this now",
                          "Yes, for large purchases",
                          "Maybe, depends on the fees",
                          "Probably not",
                        ].map((option) => (
                          <label
                            key={option}
                            onClick={() => setQ5EscrowUse(option)}
                            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                              q5EscrowUse === option
                                ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] dark:text-white"
                                : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#132036]"
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
                      <div>
                        <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                          What features matter most to you?
                        </h3>
                        <p className="text-xs text-gray-400 dark:text-gray-400 mt-1 font-medium">Select all that apply</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Instant refund if undelivered",
                          "Real-time tracking updates",
                          "Dispute resolution support",
                          "Works with WhatsApp vendors",
                          "No fees for buyers",
                          "Mobile app",
                        ].map((option) => {
                          const isChecked = q6Features.includes(option);
                          return (
                            <label
                              key={option}
                              onClick={() => handleCheckboxToggle(q6Features, setQ6Features, option)}
                              className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                isChecked
                                  ? "border-[#00C896] bg-[#00C896]/10 text-[#0A2540] dark:text-white"
                                  : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#132036]"
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

                  {/* QUESTION 7 (FINAL) */}
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
                        <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                          Drop your email to get early access when we launch:
                        </h3>
                        <p className="text-xs text-gray-400 dark:text-gray-400 mt-1 font-medium">
                          Your details will only be used to notify you about SafeSwap launch. We hate spam.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#0A2540] dark:text-white mb-1">
                            Email Address <span className="text-gray-400 dark:text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full rounded-2xl border border-gray-200 dark:border-white/10 p-4 text-sm focus:border-[#00C896] focus:outline-none bg-[#F8FAFC] dark:bg-[#132036] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#0A2540] dark:text-white mb-1">
                            Phone Number <span className="text-gray-400 dark:text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="08012345678"
                            className="w-full rounded-2xl border border-gray-200 dark:border-white/10 p-4 text-sm focus:border-[#00C896] focus:outline-none bg-[#F8FAFC] dark:bg-[#132036] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#0A2540] dark:text-white mb-1">
                            Name <span className="text-gray-400 dark:text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Amaka Okonkwo"
                            className="w-full rounded-2xl border border-gray-200 dark:border-white/10 p-4 text-sm focus:border-[#00C896] focus:outline-none bg-[#F8FAFC] dark:bg-[#132036] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* FORM NAVIGATION BUTTONS */}
                <div className="mt-10 flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-[#0A2540] dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-[#0A2540] dark:bg-[#00C896] text-white dark:text-[#0A2540] rounded-full px-7 py-3 text-sm font-semibold hover:bg-[#071D33] dark:hover:bg-[#00B085] transition-all cursor-pointer"
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
