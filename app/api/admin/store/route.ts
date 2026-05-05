import { NextResponse } from "next/server";
import { storeUpdateSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const parsed = storeUpdateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "入力内容を確認してください。" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    demo: true,
    message: "店舗情報をデモ保存しました。Supabase接続後はDBへ保存できます。"
  });
}
