"use client";

import { Copy, Sparkles } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

const samples = {
  google_review_reply:
    "温かいお言葉をありがとうございます。ハンバーグはご来店直前に丁寧に成形し、鉄板で焼き上げています。ソースまで楽しんでいただけて、とても励みになります。またのお越しを心よりお待ちしております。",
  instagram_post:
    "本日のおすすめは、鉄板デミグラスハンバーグです。湯気までおいしい焼きたてを、季節野菜と一緒にご用意しています。お席は夕方が少しゆったりめです。ご予約はプロフィールのリンクからどうぞ。",
  line_broadcast:
    "こんにちは、洋食キッチン あかりです。本日は雨の日限定で、ディナーご利用の方に自家製プリンを小さくサービスします。お仕事帰りに、あたたかい鉄板メニューでひと息つきませんか。",
  menu_copy:
    "肉汁を閉じ込めてふっくら焼き上げた、当店いちばん人気のハンバーグ。毎朝仕込むデミグラスソースの香りと、鉄板の音まで楽しめる一皿です。"
};

const labels = {
  google_review_reply: "Google口コミ返信",
  instagram_post: "Instagram投稿文",
  line_broadcast: "LINE配信文",
  menu_copy: "メニューコピー"
};

type Task = keyof typeof samples;

export function AiGenerator({ storeInfo }: { storeId: string; storeInfo: string }) {
  const [task, setTask] = useState<Task>("google_review_reply");
  const [output, setOutput] = useState(samples.google_review_reply);
  const [loading, setLoading] = useState(false);

  const hint = useMemo(() => {
    if (task === "google_review_reply") return "口コミ本文を入れると、炎上しにくい返信の型で作れます。";
    if (task === "instagram_post") return "投稿目的と料理名を入れると、来店導線のある文章になります。";
    if (task === "line_broadcast") return "雨の日、平日夜、記念日などの目的を入れると配信に使いやすくなります。";
    return "料理名と特徴を入れると、メニュー表にそのまま使えるコピーになります。";
  }, [task]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setOutput(`${samples[task]}\n\n---\nデモ生成: ${storeInfo.split("\n")[0]} の店舗情報をもとにしたサンプルです。`);
      setLoading(false);
    }, 420);
  }

  return (
    <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-akari-red">AI Demo</p>
          <h2 className="text-xl font-black text-akari-ink">AI文章生成</h2>
        </div>
        <Sparkles className="text-akari-gold" size={24} />
      </div>
      <form className="grid gap-3" onSubmit={submit}>
        <label className="grid gap-1.5">
          <span className="text-xs font-bold text-akari-muted">生成タイプ</span>
          <select
            className="rounded-lg border border-akari-line bg-white px-3 py-2.5 text-sm outline-none focus:border-akari-red focus:ring-2 focus:ring-akari-red/15"
            name="task"
            onChange={(event) => setTask(event.target.value as Task)}
            value={task}
          >
            {Object.entries(labels).map(([value, label]) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-akari-muted">料理名</span>
            <input className="rounded-lg border border-akari-line bg-white px-3 py-2.5 text-sm outline-none focus:border-akari-red focus:ring-2 focus:ring-akari-red/15" placeholder="鉄板ハンバーグ" />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-akari-muted">口調</span>
            <input className="rounded-lg border border-akari-line bg-white px-3 py-2.5 text-sm outline-none focus:border-akari-red focus:ring-2 focus:ring-akari-red/15" defaultValue="温かく誠実" />
          </label>
        </div>
        <label className="grid gap-1.5">
          <span className="text-xs font-bold text-akari-muted">口コミ本文・投稿目的</span>
          <textarea className="min-h-24 resize-y rounded-lg border border-akari-line bg-white px-3 py-2.5 text-sm outline-none focus:border-akari-red focus:ring-2 focus:ring-akari-red/15" placeholder={hint} />
        </label>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-akari-red px-4 text-sm font-bold text-white shadow-warm transition hover:bg-akari-darkRed" type="submit">
          <Sparkles size={18} />
          {loading ? "生成中..." : "サンプル生成"}
        </button>
      </form>
      <div className="mt-4 rounded-lg border border-akari-line bg-akari-soft p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-akari-brown">生成結果</p>
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
