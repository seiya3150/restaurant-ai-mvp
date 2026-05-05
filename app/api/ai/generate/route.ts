import { NextResponse } from "next/server";
import { aiGenerateSchema } from "@/lib/validators";

const samples = {
  google_review_reply:
    "温かいお言葉をありがとうございます。ハンバーグやソースを楽しんでいただけて、スタッフ一同とても励みになります。これからも丁寧な仕込みと心地よい時間づくりに努めてまいります。またのお越しを心よりお待ちしております。",
  instagram_post:
    "本日のおすすめは、鉄板デミグラスハンバーグです。焼きたての香りと、毎朝仕込むソースの深い味わいをぜひお楽しみください。ご予約はプロフィールのリンクからどうぞ。",
  line_broadcast:
    "こんにちは、洋食キッチン あかりです。本日はディナータイムに少しお席の余裕があります。お仕事帰りに、あたたかい鉄板メニューでひと息つきませんか。",
  menu_copy:
    "肉汁を閉じ込めてふっくら焼き上げた、当店いちばん人気のハンバーグ。毎朝仕込むデミグラスソースの香りと、鉄板の音まで楽しめる一皿です。",
  job_posting:
    "洋食キッチン あかりでは、ホールスタッフを募集しています。料理と接客が好きな方、落ち着いた雰囲気のお店で一緒に働きませんか。未経験の方も丁寧にサポートします。"
};

export async function POST(request: Request) {
  const parsed = aiGenerateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "入力内容を確認してください。" }, { status: 400 });
  }

  const { task, storeInfo, tone } = parsed.data;
  return NextResponse.json({
    text: `${samples[task]}\n\n---\nデモ生成: OpenAI API未接続のため、${tone}なサンプル文章を返しています。\n店舗情報: ${storeInfo.split("\n")[0] ?? "デモ店舗"}`
  });
}
