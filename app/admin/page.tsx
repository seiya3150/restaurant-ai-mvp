import { ArrowUpRight, Camera, CheckCircle2, Clock, Instagram, MessageCircle, Star, Utensils } from "lucide-react";
import Image from "next/image";
import { AiGenerator } from "@/components/AiGenerator";
import { MenuEditor } from "@/components/MenuEditor";
import { StoreEditor } from "@/components/StoreEditor";
import { demoMenu, demoReports, demoStore, todayTasks } from "@/lib/demo-data";

const latest = demoReports[demoReports.length - 1];

export default function AdminPage() {
  const store = demoStore;
  const menu = demoMenu;
  const storeInfo = `${store.name}\n${store.description}\n住所: ${store.address}\nメニュー: ${menu
    .map((item) => `${item.name} ${item.price}円 ${item.description}`)
    .join(" / ")}`;

  return (
    <main className="min-h-screen bg-akari-paper text-akari-ink">
      <header className="relative overflow-hidden bg-akari-red text-white">
        <div className="absolute left-[-100px] top-12 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-white/10" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-10">
          <p className="text-sm font-bold text-white/80">Restaurant Growth Dashboard</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            今日の集客タスクを、AIと一緒に終わらせる。
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
            口コミ返信、SNS投稿、LINE配信、メニュー改善を1画面に集約。オーナーが毎日開きたくなる運用ダッシュボードです。
          </p>
        </div>
      </header>

      <section className="mx-auto -mt-6 grid w-full max-w-6xl gap-3 px-4 sm:grid-cols-4">
        {[
          ["今月の閲覧", latest.page_views.toLocaleString("ja-JP"), "+23%"],
          ["電話クリック", latest.phone_clicks.toLocaleString("ja-JP"), "+27%"],
          ["LINEクリック", latest.line_clicks.toLocaleString("ja-JP"), "+35%"],
          ["予約クリック", latest.reservation_clicks.toLocaleString("ja-JP"), "+32%"]
        ].map(([label, value, diff]) => (
          <div className="relative rounded-lg border border-akari-line bg-white p-4 shadow-warm" key={label}>
            <p className="text-xs font-bold text-akari-muted">{label}</p>
            <p className="mt-1 text-2xl font-black text-akari-ink">{value}</p>
            <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-akari-soft px-2 py-1 text-xs font-black text-akari-green">
              <ArrowUpRight size={13} />
              前月比 {diff}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[1fr_0.86fr]">
        <div className="grid gap-4">
          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-akari-red">Today</p>
                <h2 className="text-xl font-black">今日やるべき集客タスク</h2>
              </div>
              <span className="rounded-full bg-akari-soft px-3 py-1 text-xs font-black text-akari-brown">4件</span>
            </div>
            <div className="grid gap-3">
              {todayTasks.map((task, index) => (
                <article className="rounded-lg border border-akari-line bg-akari-paper/70 p-4" key={task.title}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-akari-red text-sm font-black text-white">{index + 1}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-black">{task.title}</h3>
                        <span className="rounded-full bg-white px-2 py-1 text-[11px] font-black text-akari-red">{task.label}</span>
                      </div>
                      <p className="mt-1 text-xs font-bold text-akari-green">{task.impact}</p>
                      <p className="mt-2 text-sm leading-6 text-akari-muted">{task.body}</p>
                    </div>
                    <CheckCircle2 className="shrink-0 text-akari-gold" size={21} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Star, title: "口コミ返信", body: "低評価への返信を放置せず、信頼されるお店に見せる。" },
              { icon: Instagram, title: "SNS投稿", body: "空席時間と人気メニューを、予約につながる投稿に変える。" },
              { icon: MessageCircle, title: "LINE配信", body: "近隣客に今日来る理由を作り、当日売上を底上げする。" },
              { icon: Utensils, title: "メニュー改善", body: "注文率を上げるコピーで、客単価をじわっと伸ばす。" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article className="rounded-lg border border-akari-line bg-white p-4 shadow-warm" key={item.title}>
                  <Icon className="text-akari-red" size={24} />
                  <h3 className="mt-3 font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-akari-muted">{item.body}</p>
                </article>
              );
            })}
          </section>
        </div>

        <div className="grid content-start gap-4">
          <AiGenerator storeId={store.id} storeInfo={storeInfo} />
          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <Camera className="text-akari-red" size={22} />
              <h2 className="text-xl font-black">今月使う写真</h2>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {store.photos.map((photo) => (
                <Image alt="店舗写真" className="aspect-square rounded-lg object-cover" height={220} key={photo} src={photo} width={220} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-8 lg:grid-cols-2">
        <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="text-akari-red" size={22} />
            <h2 className="text-xl font-black">店舗ページ設定</h2>
          </div>
          <StoreEditor store={store} />
        </section>
        <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <Utensils className="text-akari-red" size={22} />
            <h2 className="text-xl font-black">メニュー改善</h2>
          </div>
          <MenuEditor storeId={store.id} menu={menu} />
        </section>
      </section>
    </main>
  );
}
