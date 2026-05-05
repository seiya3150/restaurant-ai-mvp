import { ArrowUpRight, BarChart3, CalendarDays, Lightbulb, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { aiSuggestions, demoReports, demoStore } from "@/lib/demo-data";

const latest = demoReports[demoReports.length - 1];
const previous = demoReports[demoReports.length - 2];

const metrics = [
  { icon: Users, label: "閲覧数", key: "page_views", value: latest.page_views },
  { icon: Phone, label: "電話クリック", key: "phone_clicks", value: latest.phone_clicks },
  { icon: MapPin, label: "地図クリック", key: "map_clicks", value: latest.map_clicks },
  { icon: MessageCircle, label: "LINEクリック", key: "line_clicks", value: latest.line_clicks },
  { icon: CalendarDays, label: "予約クリック", key: "reservation_clicks", value: latest.reservation_clicks }
] as const;

export default function ReportsPage() {
  const maxViews = Math.max(...demoReports.map((report) => report.page_views));

  return (
    <main className="min-h-screen bg-akari-paper text-akari-ink">
      <header className="bg-akari-red text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <p className="text-sm font-bold text-white/80">Monthly Report</p>
          <h1 className="mt-2 text-3xl font-black sm:text-5xl">{demoStore.name}の月次レポート</h1>
          <p className="mt-3 text-sm text-white/90">デモデータで閲覧、クリック、改善提案を表示しています。</p>
        </div>
      </header>

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
                <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-akari-soft px-2 py-1 text-xs font-bold text-akari-green">
                  <ArrowUpRight size={13} />
                  前月比 +{diff}%
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-5 flex items-center gap-2">
              <BarChart3 className="text-akari-red" size={22} />
              <h2 className="text-xl font-black">月別グラフ</h2>
            </div>
            <div className="grid gap-4">
              {demoReports.map((report) => (
                <div className="grid gap-2" key={report.month}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-akari-brown">{report.month}</span>
                    <span className="text-akari-muted">{report.page_views.toLocaleString("ja-JP")} views</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-akari-soft">
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
              <h2 className="text-xl font-black">AI改善提案</h2>
            </div>
            <div className="grid gap-3">
              {aiSuggestions.map((suggestion) => (
                <p className="rounded-lg bg-akari-soft p-3 text-sm leading-6 text-akari-brown" key={suggestion}>{suggestion}</p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
