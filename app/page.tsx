import { ArrowRight, BarChart3, Bot, CreditCard, Store } from "lucide-react";
import Link from "next/link";

const cards = [
  { href: "/s/sample-bistro", icon: Store, title: "公開店舗ページ", body: "写真、口コミ要約、地図、電話、LINE、予約までスマホで見やすく表示。" },
  { href: "/admin", icon: Bot, title: "管理画面", body: "店舗情報、営業時間、写真、メニューを編集し、AI文章生成をデモ体験。" },
  { href: "/admin/reports", icon: BarChart3, title: "月次レポート", body: "閲覧数とクリックをカードとグラフで確認し、改善提案まで表示。" },
  { href: "/pricing", icon: CreditCard, title: "料金ページ", body: "ライト、スタンダード、プレミアムの料金表とデモ申込ボタン。" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-akari-paper">
      <section className="relative overflow-hidden bg-akari-red text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-25" />
        <div className="relative mx-auto flex min-h-[66vh] w-full max-w-6xl flex-col justify-end px-4 pb-12 pt-24">
          <p className="mb-3 text-sm font-bold">飲食店AI導入支援 MVP</p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            店舗ページ、AI文章生成、月次レポートをすぐ見えるデモに。
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
            Supabase、OpenAI、Stripeが未設定でも主要画面を確認できます。まずは営業提案やMVP検証に使える見た目と導線を整えています。
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
