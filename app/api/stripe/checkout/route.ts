import { NextResponse } from "next/server";
import { plans } from "@/lib/plans";
import type { PlanId } from "@/lib/types";

export async function POST(request: Request) {
  const form = await request.formData();
  const plan = String(form.get("plan") ?? "") as PlanId;

  if (!plans[plan]) {
    return NextResponse.json({ error: "プランを確認してください。" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    demo: true,
    message: `${plans[plan].name}プランのデモ申込を受け付けました。Stripe接続後はCheckoutへ遷移します。`
  });
}
