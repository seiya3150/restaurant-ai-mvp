import { Check, Crown, Sparkles } from "lucide-react";
import { plans } from "@/lib/plans";

const ids = ["light", "standard", "premium"] as const;

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-akari-paper text-akari-ink">
      <header className="relative overflow-hidden bg-akari-red text-white">
        <div className="absolute left-[-100px] top-12 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-12">
          <p className="text-sm font-bold text-white/80">Pricing</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            文章生成だけで終わらない。集客を毎月改善するための料金プラン。
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
            店舗ページ、口コミ返信、SNS、LINE、月次レポートをまとめて運用。まずはスタンダードから始めるのがおすすめです。
          </p>
        </div>
      </header>
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 lg:grid-cols-3">
        {ids.map((id) => {
          const plan = plans[id];
          const featured = id === "standard";
          return (
            <article className={`relative grid gap-5 rounded-lg border bg-white p-5 shadow-warm ${featured ? "border-akari-red ring-4 ring-akari-red/15 lg:-mt-4" : "border-akari-line"}`} key={id}>
              {featured ? (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-akari-red px-3 py-1 text-xs font-black text-white">
                  <Crown size={14} />
                  一番おすすめ
                </span>
              ) : null}
              <div>
                <h2 className="text-2xl font-black">{plan.name}</h2>
                <p className="mt-2 min-h-12 text-sm leading-6 text-akari-muted">{plan.bestFor}</p>
              </div>
              <div>
                <p className="text-4xl font-black text-akari-red">{plan.price}</p>
                <p className="mt-1 text-sm font-bold text-akari-brown">AI生成 {plan.aiLimit}回/月</p>
              </div>
              <ul className="grid gap-3">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-2 text-sm text-akari-brown" key={feature}>
                    <Check className="text-akari-green" size={17} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg bg-akari-soft p-3 text-sm leading-6 text-akari-brown">
                {featured ? "口コミ返信、SNS、LINE、レポートまで一通り回すならこのプラン。" : "まずは小さく試して、効果を見ながら拡張できます。"}
              </div>
              <button className={`mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg px-4 text-sm font-black shadow-warm ${featured ? "bg-akari-red text-white" : "border border-akari-line bg-white text-akari-brown"}`} type="button">
                <Sparkles size={18} />
                {featured ? "スタンダードで始める" : "デモで申し込む"}
              </button>
            </article>
          );
        })}
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-10">
        <div className="rounded-lg border border-akari-line bg-white p-5 shadow-warm">
          <h2 className="text-xl font-black">料金に含まれる価値</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["集客導線", "店舗ページから電話・LINE・予約へ自然に誘導します。"],
              ["日次運用", "今日やるべき口コミ返信や投稿をAIが整理します。"],
              ["月次改善", "数字を見ながら、来月の施策を決められます。"]
            ].map(([title, body]) => (
              <div className="rounded-lg bg-akari-soft p-4" key={title}>
                <p className="font-black text-akari-red">{title}</p>
                <p className="mt-2 text-sm leading-6 text-akari-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
