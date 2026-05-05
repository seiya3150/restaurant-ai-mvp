import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Crown,
  LineChart,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Store,
  Utensils
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { demoReports, demoStore, todayTasks } from "@/lib/demo-data";

const latest = demoReports[demoReports.length - 1];

const actions = [
  { icon: Star, label: "口コミ返信", count: "12件", body: "低評価を放置せず、信頼される返信へ" },
  { icon: MessageCircle, label: "LINE配信", count: "238クリック", body: "近隣客に今日来る理由を届ける" },
  { icon: CalendarCheck, label: "予約導線", count: "196クリック", body: "予約までの迷いを減らす" },
  { icon: Utensils, label: "メニュー改善", count: "+18%", body: "人気料理の注文率を伸ばす" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-akari-ink">
      <section className="relative overflow-hidden bg-[#b93027] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_88%_0%,rgba(255,255,255,0.14),transparent_22%)]" />
        <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-8 px-4 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-6">
          <div className="relative z-10 pb-4 pt-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-black backdrop-blur">
              <Crown size={15} />
              飲食店のための月額集客ダッシュボード
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] sm:text-7xl">
              今日やる集客が、ひと目でわかる。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90">
              口コミ返信、Instagram投稿、LINE配信、予約導線、月次レポートを1つに。単なるAI文章生成ではなく、飲食店オーナーが毎月払い続けたくなる運用画面として見せます。
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-black text-[#b93027] shadow-warm" href="/admin">
                集客ダッシュボードを見る
                <ArrowRight size={18} />
              </Link>
              <Link className="inline-flex h-12 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-black text-white" href="/s/sample-bistro">
                店舗ページを見る
              </Link>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {["口コミ対応を毎日化", "LINEで当日来店を作る", "月次で継続価値を提示"].map((item) => (
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur" key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid gap-4">
            <div className="overflow-hidden rounded-lg border border-white/25 bg-white p-3 text-akari-ink shadow-2xl">
              <div className="relative h-44 overflow-hidden rounded-lg sm:h-56">
                <Image alt={demoStore.name} className="object-cover" fill sizes="(min-width: 1024px) 520px, 100vw" src={demoStore.photos[0]} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold text-white/80">Official Profile Preview</p>
                  <h2 className="text-2xl font-black">{demoStore.name}</h2>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <Link className="inline-flex h-10 items-center justify-center gap-1 rounded-lg bg-akari-red text-xs font-black text-white" href="/s/sample-bistro">
                  <CalendarCheck size={15} />
                  予約
                </Link>
                <Link className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-akari-line bg-white text-xs font-black text-akari-brown" href="/s/sample-bistro">
                  <Phone size={15} />
                  電話
                </Link>
                <Link className="inline-flex h-10 items-center justify-center gap-1 rounded-lg bg-akari-green text-xs font-black text-white" href="/s/sample-bistro">
                  <MessageCircle size={15} />
                  LINE
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["閲覧数", latest.page_views.toLocaleString("ja-JP"), "+23%"],
                ["LINE", latest.line_clicks.toLocaleString("ja-JP"), "+35%"],
                ["予約", latest.reservation_clicks.toLocaleString("ja-JP"), "+32%"]
              ].map(([label, value, diff]) => (
                <div className="rounded-lg border border-white/20 bg-white/95 p-4 text-akari-ink shadow-warm" key={label}>
                  <p className="text-xs font-bold text-akari-muted">{label}</p>
                  <p className="mt-1 text-2xl font-black">{value}</p>
                  <p className="mt-2 text-xs font-black text-akari-green">前月比 {diff}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
        <div className="rounded-lg border border-akari-line bg-white p-5 shadow-warm">
          <div className="flex items-center gap-2 text-akari-red">
            <ClipboardList size={23} />
            <h2 className="text-2xl font-black">今日やるべき集客タスク</h2>
          </div>
          <div className="mt-5 grid gap-3">
            {todayTasks.map((task, index) => (
              <article className="rounded-lg border border-akari-line bg-akari-paper p-4" key={task.title}>
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-akari-red text-sm font-black text-white">{index + 1}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-black">{task.title}</h3>
                      <span className="rounded-full bg-white px-2 py-1 text-[11px] font-black text-akari-red">{task.label}</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-akari-green">{task.impact}</p>
                    <p className="mt-2 text-sm leading-6 text-akari-muted">{task.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {actions.map((item) => {
              const Icon = item.icon;
              return (
                <Link className="rounded-lg border border-akari-line bg-white p-5 shadow-warm transition hover:-translate-y-0.5" href="/admin" key={item.label}>
                  <Icon className="text-akari-red" size={25} />
                  <p className="mt-4 text-sm font-bold text-akari-muted">{item.label}</p>
                  <p className="mt-1 text-2xl font-black">{item.count}</p>
                  <p className="mt-2 text-sm leading-6 text-akari-muted">{item.body}</p>
                </Link>
              );
            })}
          </div>
          <div className="rounded-lg border border-akari-line bg-white p-5 shadow-warm">
            <div className="flex items-center gap-2">
              <LineChart className="text-akari-red" size={24} />
              <h2 className="text-2xl font-black">月額で続けたくなるレポート</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-akari-muted">
              閲覧数、電話、地図、LINE、予約クリックを毎月比較。数字が伸びる理由と、来月やるべき施策まで提示します。
            </p>
            <Link className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-akari-red px-4 text-sm font-black text-white" href="/admin/reports">
              レポートを見る
              <BarChart3 size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-akari-soft py-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-3 lg:px-6">
          {[
            ["ライト", "まず店舗ページと口コミ返信を試す"],
            ["スタンダード", "SNS・LINE・レポートまで回すおすすめ"],
            ["プレミアム", "複数施策を本格的に改善する"]
          ].map(([title, body], index) => (
            <Link className={`rounded-lg border bg-white p-5 shadow-warm ${index === 1 ? "border-akari-red ring-4 ring-akari-red/15" : "border-akari-line"}`} href="/pricing" key={title}>
              <p className="text-xl font-black">{title}</p>
              <p className="mt-2 text-sm leading-6 text-akari-muted">{body}</p>
              {index === 1 ? <p className="mt-4 inline-flex rounded-full bg-akari-red px-3 py-1 text-xs font-black text-white">おすすめ</p> : null}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
