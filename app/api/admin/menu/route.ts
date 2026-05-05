import { NextResponse } from "next/server";
import { menuUpdateSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const parsed = menuUpdateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "入力内容を確認してください。" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    demo: true,
    message: "メニューをデモ保存しました。Supabase接続後はDBへ保存できます。"
  });
}
