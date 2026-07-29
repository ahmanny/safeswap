import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Directory path to store submissions locally
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "seller_surveys.json");

    let existingData: any[] = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch {
      // File doesn't exist yet or is empty
      existingData = [];
    }

    const newEntry = {
      id: `seller_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      submittedAt: new Date().toISOString(),
      ...body,
    };

    existingData.push(newEntry);
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), "utf-8");

    console.log("Saved Seller Survey to data/seller_surveys.json:", newEntry);

    return NextResponse.json({
      success: true,
      message: "Survey submitted successfully!",
      data: newEntry,
    });
  } catch (error) {
    console.error("Error saving seller survey response:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit survey." },
      { status: 500 }
    );
  }
}
