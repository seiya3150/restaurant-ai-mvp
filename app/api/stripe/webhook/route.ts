import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    received: true,
    demo: true,
    message: "Stripe未接続のデモWebhookです。"
  });
}
