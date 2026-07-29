"use server";

export interface BuyerSurveyInput {
  name: string;
  email: string;
  phone?: string;
  biggestFear: string;
  desiredFeatures: string[];
  shoppingFrequency: string;
  additionalFeedback?: string;
}

export interface SellerSurveyInput {
  businessName: string;
  email: string;
  phone?: string;
  productCategory: string;
  biggestHeadache: string;
  desiredFeatures: string[];
  monthlyOrders: string;
  additionalFeedback?: string;
}

export async function submitBuyerSurvey(data: BuyerSurveyInput) {
  // Simulate database delay or integration (e.g. Firebase, Supabase, Airtable)
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.log("Buyer Survey Submitted:", data);

  return {
    success: true,
    message: "Thank you! You've been added to the SafeSwap Buyer Waitlist.",
  };
}

export async function submitSellerSurvey(data: SellerSurveyInput) {
  // Simulate database delay or integration
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.log("Seller Survey Submitted:", data);

  return {
    success: true,
    message: "Welcome aboard! You've been added to the SafeSwap Merchant Waitlist.",
  };
}
