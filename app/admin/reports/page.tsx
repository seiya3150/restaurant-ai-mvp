import { ArrowUpRight, BarChart3, CalendarDays, Lightbulb, MapPin, MessageCircle, Phone, TrendingUp, Users } from "lucide-react";
import { aiSuggestions, demoReports, demoStore } from "@/lib/demo-data";

const latest = demoReports[demoReports.length - 1];
const previous = demoReports[demoReports.length - 2];

const metrics = [
  { icon: Users, label: "閲覧数", key: "page_views", value: latest.page_views, note: "来店前の検討数" },
  { icon: Phone, label: "電話クリック", key: "phone_clicks", value: latest.phone_clicks, note: "即時問い合わせ" },
  { icon: MapPin, label: "地図クリック", key: "map_clicks", value: latest.map_clicks, note: "来店意欲の高い行動" },
  { icon: MessageCircle, label: "LINEクリック", key: "line_clicks", value: latest.line_clicks, note: "再来店導線" },
  { icon: CalendarDays, label: "予約クリック", key: "reservation_clicks", value: latest.reservation_clicks, note: "売上に近い反応" }
] as const;

export default function ReportsPage() {
  const maxViews = Math.max(...demoReports.map((report) => report.page_views));
  const totalActions = latest.phone_clicks + latest.line_clicks + latest.reservation_clicks;
  const conversion = Math.round((totalActions / latest.page_views) * 1000) / 10;

  return (
    <main className="min-h-screen bg-akari-paper text-akari-ink">
      <header className="relative overflow-hidden bg-akari-red text-white">
        <div className="absolute left-[-100px] top-12 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-10">
          <p className="text-sm font-bold text-white/80">Monthly Growth Report</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            今月の集客成果が、数字で見える。
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
            {demoStore.name} の閲覧、電話、LINE、予約を月次で可視化。継続するほど改善ポイントが見えてきます。
          </p>
        </div>
      </header>

      <section className="mx-auto -mt-6 grid w-full max-w-6xl gap-3 px-4 sm:grid-cols-3">
        {[
          ["今月の反応数", totalActions.toLocaleString("ja-JP"), "電話・LINE・予約の合計"],
          ["来店導線率", `${conversion}%`, "閲覧から行動した割合"],
          ["AI改善提案", "3件", "今すぐ実行できる施策"]
        ].map(([label, value, note]) => (
          <div className="relative rounded-lg border border-akari-line bg-white p-4 shadow-warm" key={label}>
            <p className="text-xs font-bold text-akari-muted">{label}</p>
            <p className="mt-1 text-3xl font-black text-akari-red">{value}</p>
            <p className="mt-2 text-xs leading-5 text-akari-muted">{note}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const prev = previous[metric.key];
            const diff = Math.round(((metric.value - prev) / prev) * 100);
            return (
              <div className="rounded-lg border border-akari-line bg-white p-4 shadow-warm" key={metric.key}>
                <Icon className="text-akari-red" size={22} />
                <p className="mt-3 text-xs font-bold text-akari-muted">{metric.label}</p>
                <p className="mt-1 text-3xl font-black">{metric.value.toLocaleString("ja-JP")}</p>
                <p className="mt-1 text-xs text-akari-muted">{metric.note}</p>
                <p className="mt-3 inline-flex items-center gap-1 rounded-full bg-akari-soft px-2 py-1 text-xs font-black text-akari-green">
                  <ArrowUpRight size={13} />
                  前月比 +{diff}%
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="text-akari-red" size={22} />
                <h2 className="text-xl font-black">成長推移</h2>
              </div>
              <span className="rounded-full bg-akari-soft px-3 py-1 text-xs font-black text-akari-brown">4か月連続改善</span>
            </div>
            <div className="grid gap-5">
              {demoReports.map((report) => (
                <div className="grid gap-2" key={report.month}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-akari-brown">{report.month}</span>
                    <span className="text-akari-muted">{report.page_views.toLocaleString("ja-JP")} views</span>
                  </div>
                  <div className="h-5 overflow-hidden rounded-full bg-akari-soft">
                    <div className="h-full rounded-full bg-akari-red" style={{ width: `${(report.page_views / maxViews) * 100}%` }} />
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs text-akari-muted">
                    <span>電話 {report.phone_clicks}</span>
                    <span>地図 {report.map_clicks}</span>
                    <span>LINE {report.line_clicks}</span>
                    <span>予約 {report.reservation_clicks}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="text-akari-gold" size={22} />
              <h2 className="text-xl font-black">来月のAI改善提案</h2>
            </div>
            <div className="grid gap-3">
              {aiSuggestions.map((suggestion) => (
                <p className="rounded-lg bg-akari-soft p-3 text-sm leading-6 text-akari-brown" key={suggestion}>{suggestion}</p>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-akari-red p-4 text-white">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} />
                <p className="font-black">継続すると見えること</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/90">
                口コミ返信、LINE配信、SNS投稿の実行後に、どの導線が伸びたかを毎月比較できます。
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
