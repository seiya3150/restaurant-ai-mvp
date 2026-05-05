"use client";

import { Copy, Sparkles } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

const samples = {
  google_review_reply:
    "この度はご来店いただき、また貴重なご意見をありがとうございます。お待たせしてしまい申し訳ございませんでした。混雑時のご案内と提供順の確認を見直し、より安心してお食事いただけるよう改善してまいります。また機会をいただけましたら幸いです。",
  instagram_post:
    "今夜のおすすめは、鉄板デミグラスハンバーグです。焼きたての香りと、毎朝仕込むソースの深い味わいをぜひお楽しみください。金曜の夜は19時台に少しお席があります。ご予約はプロフィールのリンクからどうぞ。",
  line_broadcast:
    "こんにちは、洋食キッチン あかりです。本日は雨の日限定で、ディナーご利用の方に自家製プリンを小さくサービスします。お仕事帰りに、あたたかい鉄板メニューでひと息つきませんか。",
  menu_copy:
    "肉汁を閉じ込めてふっくら焼き上げた、当店いちばん人気のハンバーグ。毎朝仕込むデミグラスソースの香りと、鉄板の音まで楽しめる一皿です。"
};

const labels = {
  google_review_reply: "Google口コミ返信",
  instagram_post: "Instagram投稿",
  line_broadcast: "LINE配信",
  menu_copy: "メニュー改善"
};

type Task = keyof typeof samples;

export function AiGenerator({ storeInfo }: { storeId: string; storeInfo: string }) {
  const [task, setTask] = useState<Task>("google_review_reply");
  const [output, setOutput] = useState(samples.google_review_reply);
  const [loading, setLoading] = useState(false);

  const hint = useMemo(() => {
    if (task === "google_review_reply") return "例: 待ち時間が長かった、料理が遅かった、接客は良かった";
    if (task === "instagram_post") return "例: 金曜夜の予約を増やしたい、雨の日の来店を増やしたい";
    if (task === "line_broadcast") return "例: 近隣のお客様に今日の空席を案内したい";
    return "例: ハンバーグの注文率を上げたい、単価を上げたい";
  }, [task]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setOutput(`${samples[task]}\n\n---\nデモ生成: ${storeInfo.split("\n")[0]} の集客文脈に合わせたサンプルです。`);
      setLoading(false);
    }, 360);
  }

  return (
    <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-akari-red">AI Growth Writer</p>
          <h2 className="text-xl font-black text-akari-ink">売上につながる文章を作る</h2>
          <p className="mt-1 text-xs leading-5 text-akari-muted">口コミ、SNS、LINE、メニュー改善を1つの流れで回します。</p>
        </div>
        <Sparkles className="text-akari-gold" size={26} />
      </div>
      <form className="grid gap-3" onSubmit={submit}>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(labels).map(([value, label]) => (
            <button
              className={`rounded-lg border px-3 py-2 text-xs font-black transition ${task === value ? "border-akari-red bg-akari-red text-white" : "border-akari-line bg-akari-soft text-akari-brown"}`}
              key={value}
              onClick={() => setTask(value as Task)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <label className="grid gap-1.5">
          <span className="text-xs font-bold text-akari-muted">目的・本文</span>
          <textarea className="min-h-24 resize-y rounded-lg border border-akari-line bg-white px-3 py-2.5 text-sm outline-none focus:border-akari-red focus:ring-2 focus:ring-akari-red/15" placeholder={hint} />
        </label>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-akari-red px-4 text-sm font-bold text-white shadow-warm transition hover:bg-akari-darkRed" type="submit">
          <Sparkles size={18} />
          {loading ? "生成中..." : "集客文を生成"}
        </button>
      </form>
      <div className="mt-4 rounded-lg border border-akari-line bg-akari-soft p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-sm font-black text-akari-brown">{labels[task]}の生成結果</p>
          <button className="inline-flex items-center gap-1 text-xs font-bold text-akari-red" type="button">
            <Copy size={14} />
            コピー
          </button>
        </div>
        <p className="whitespace-pre-wrap text-sm leading-7 text-akari-ink">{output}</p>
      </div>
    </section>
  );
}
