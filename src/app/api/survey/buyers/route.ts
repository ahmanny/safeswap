import { NextResponse } from "next/server";
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import Mailjet from "node-mailjet";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Save to local JSON file for local demo
    const filePath = join(process.cwd(), "survey-responses-buyers.json");
    let existing = [];
    if (existsSync(filePath)) {
      try {
        existing = JSON.parse(readFileSync(filePath, "utf-8"));
      } catch {
        existing = [];
      }
    }

    const newRecord = {
      ...data,
      submittedAt: new Date().toISOString(),
    };

    existing.push(newRecord);
    writeFileSync(filePath, JSON.stringify(existing, null, 2));

    // 2. Email notification via Mailjet if API keys are set
    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;
    const recipientEmail = process.env.SURVEY_NOTIFICATION_EMAIL;

    if (apiKey && secretKey && recipientEmail) {
      const mailjet = new Mailjet({
        apiKey,
        apiSecret: secretKey,
      });

      await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_SENDER_EMAIL || recipientEmail,
              Name: "SafeSwap Buyer Survey",
            },
            To: [
              {
                Email: recipientEmail,
              },
            ],
            Subject: "New SafeSwap Buyer Survey Response",
            HTMLPart: `<h3>New Buyer Survey Response</h3><pre>${JSON.stringify(newRecord, null, 2)}</pre>`,
          },
        ],
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Buyer survey submit error:", error);
    return NextResponse.json({ success: false, error: "Failed to submit survey" }, { status: 500 });
  }
}
