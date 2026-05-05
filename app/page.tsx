import { ArrowRight, BarChart3, Bot, CheckCircle2, CreditCard, Store } from "lucide-react";
import Link from "next/link";

const cards = [
  { href: "/s/sample-bistro", icon: Store, title: "公式プロフィール", body: "写真、口コミ要約、地図、電話、LINE、予約まで来店前の不安を減らす店舗ページ。" },
  { href: "/admin", icon: Bot, title: "集客ダッシュボード", body: "今日やるべき口コミ返信、SNS投稿、LINE配信、メニュー改善をカードで整理。" },
  { href: "/admin/reports", icon: BarChart3, title: "月次レポート", body: "閲覧数、電話、LINE、予約クリックを前月比つきで見える化。" },
  { href: "/pricing", icon: CreditCard, title: "月額プラン", body: "ライト、スタンダード、プレミアムを比較し、継続価値を伝える料金表。" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-akari-paper">
      <section className="relative overflow-hidden bg-akari-red text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute left-[-110px] top-20 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute right-[-90px] top-[-80px] h-72 w-72 rounded-full bg-white/10" />
        <div className="relative mx-auto flex min-h-[76vh] w-full max-w-6xl flex-col justify-end px-4 pb-12 pt-24">
          <p className="mb-3 text-sm font-bold tracking-wide text-white/85">飲食店AI集客ダッシュボード</p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            口コミ、SNS、LINE、予約導線を毎月改善する。
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
            単なる文章生成ではなく、飲食店オーナーが「今日なにをすれば集客が伸びるか」まで見えるMVPです。未接続でもデモデータで全画面を確認できます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-black text-akari-red shadow-warm" href="/s/sample-bistro">
              店舗ページを見る
              <ArrowRight size={18} />
            </Link>
            <Link className="inline-flex h-12 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-black text-white" href="/admin">
              管理画面へ
            </Link>
          </div>
          <div className="mt-8 grid gap-2 sm:grid-cols-3">
            {["口コミ返信の放置を減らす", "LINE配信で当日来店を作る", "月次レポートで継続価値を見せる"].map((item) => (
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur" key={item}>
                <CheckCircle2 size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link className="rounded-lg border border-akari-line bg-white p-5 shadow-warm transition hover:-translate-y-0.5" href={card.href} key={card.href}>
              <Icon className="text-akari-red" size={26} />
              <h2 className="mt-4 text-xl font-black text-akari-ink">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-akari-muted">{card.body}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
