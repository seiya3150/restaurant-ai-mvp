import { Check, Sparkles } from "lucide-react";
import { plans } from "@/lib/plans";

const ids = ["light", "standard", "premium"] as const;

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-akari-paper text-akari-ink">
      <header className="bg-akari-red text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
          <p className="text-sm font-bold text-white/80">Pricing</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            小さく始めて、AI活用の回数に合わせて育てる月額プラン。
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
            Stripe未接続のため、ボタンはデモ表示です。導入後はCheckoutへ接続できます。
          </p>
        </div>
      </header>
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 lg:grid-cols-3">
        {ids.map((id) => {
          const plan = plans[id];
          const featured = id === "standard";
          return (
            <article className={`relative grid gap-5 rounded-lg border bg-white p-5 shadow-warm ${featured ? "border-akari-red ring-2 ring-akari-red/15" : "border-akari-line"}`} key={id}>
              {featured ? <span className="absolute right-4 top-4 rounded-full bg-akari-red px-3 py-1 text-xs font-black text-white">おすすめ</span> : null}
              <div>
                <h2 className="text-2xl font-black">{plan.name}</h2>
                <p className="mt-2 text-sm leading-6 text-akari-muted">{plan.bestFor}</p>
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
              <button className={`mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg px-4 text-sm font-black shadow-warm ${featured ? "bg-akari-red text-white" : "border border-akari-line bg-akari-soft text-akari-brown"}`} type="button">
                <Sparkles size={18} />
                デモで申し込む
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}
