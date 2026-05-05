import { CalendarCheck, Clock, Instagram, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import Image from "next/image";
import { EventLink } from "@/components/EventLink";
import { demoMenu, demoStore, reviewSummary } from "@/lib/demo-data";

export default function StorePage() {
  const store = demoStore;
  const menu = demoMenu;

  return (
    <main className="min-h-screen bg-akari-paper pb-24 text-akari-ink">
      <section className="relative min-h-[72vh] overflow-hidden text-white">
        <Image alt={store.name} className="object-cover" fill priority sizes="100vw" src={store.photos[0]} />
        <div className="absolute inset-0 bg-gradient-to-t from-akari-ink via-akari-ink/50 to-akari-ink/10" />
        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-end px-4 pb-10 pt-24">
          <p className="mb-3 text-sm font-bold text-white/85">Restaurant Profile</p>
          <h1 className="text-5xl font-black leading-none sm:text-7xl">{store.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">{store.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex">
            <EventLink className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-akari-red px-4 text-sm font-black text-white shadow-warm" href={store.reservation_url} storeId={store.id} eventType="reservation_click">
              <CalendarCheck size={18} />
              予約
            </EventLink>
            <EventLink className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-black text-akari-red shadow-warm" href={`tel:${store.phone}`} storeId={store.id} eventType="phone_click">
              <Phone size={18} />
              電話
            </EventLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-akari-line bg-white p-5 shadow-warm">
          <div className="flex items-center gap-2 text-akari-red">
            <Clock size={20} />
            <h2 className="text-xl font-black">営業時間</h2>
          </div>
          <div className="mt-4 grid gap-2">
            {Object.entries(store.opening_hours).map(([day, hours]) => (
              <div className="grid grid-cols-[48px_1fr] border-b border-akari-line pb-2 text-sm" key={day}>
                <span className="font-black text-akari-darkRed">{day}</span>
                <span>{hours}</span>
              </div>
            ))}
            <div className="grid grid-cols-[48px_1fr] text-sm">
              <span className="font-black text-akari-darkRed">定休</span>
              <span>{store.regular_holiday}</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-akari-line bg-white p-5 shadow-warm">
          <div className="flex items-center gap-2 text-akari-red">
            <MapPin size={20} />
            <h2 className="text-xl font-black">アクセス</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-akari-muted">{store.address}</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <EventLink className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-akari-line bg-white text-sm font-bold text-akari-brown" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`} storeId={store.id} eventType="map_click">
              <MapPin size={17} />
              地図
            </EventLink>
            <EventLink className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-akari-green text-sm font-bold text-white" href={store.line_url} storeId={store.id} eventType="line_click">
              <MessageCircle size={17} />
              LINE
            </EventLink>
            <a className="col-span-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-akari-line bg-akari-soft text-sm font-bold text-akari-brown" href={store.instagram_url} rel="noreferrer" target="_blank">
              <Instagram size={17} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="bg-akari-soft py-8">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-akari-red">Popular Menu</p>
              <h2 className="text-2xl font-black">人気メニュー</h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-akari-brown">税込表示</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {menu.map((item) => (
              <article className="overflow-hidden rounded-lg border border-akari-line bg-white shadow-warm" key={item.id}>
                {item.image_url ? <Image alt={item.name} className="h-44 w-full object-cover" height={320} src={item.image_url} width={520} /> : <div className="h-44 bg-akari-line" />}
                <div className="grid gap-2 p-4">
                  {item.is_recommended ? <span className="inline-flex w-fit items-center gap-1 text-xs font-black text-akari-gold"><Star fill="currentColor" size={14} />人気</span> : null}
                  <h3 className="text-lg font-black">{item.name}</h3>
                  <p className="text-sm leading-6 text-akari-muted">{item.description}</p>
                  <strong>{item.price.toLocaleString("ja-JP")}円</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-akari-line bg-white p-5 shadow-warm">
          <div className="flex items-center gap-2 text-akari-gold">
            <Star fill="currentColor" size={22} />
            <h2 className="text-xl font-black">口コミ要約</h2>
          </div>
          <p className="mt-3 text-4xl font-black text-akari-red">{reviewSummary.score}</p>
          <p className="text-sm text-akari-muted">Google口コミ {reviewSummary.count}件のデモ要約</p>
          <ul className="mt-4 grid gap-2 text-sm text-akari-brown">
            {reviewSummary.highlights.map((item) => <li className="rounded-lg bg-akari-soft px-3 py-2" key={item}>{item}</li>)}
          </ul>
          <p className="mt-4 text-sm leading-7 text-akari-muted">{reviewSummary.aiSummary}</p>
        </div>
        <div className="overflow-hidden rounded-lg border border-akari-line bg-white shadow-warm">
          <iframe className="h-80 w-full border-0" loading="lazy" src={store.google_maps_embed_url} title={`${store.name} Google Map`} />
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-akari-line bg-white/95 px-4 py-3 shadow-warm backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
          <EventLink className="inline-flex h-11 items-center justify-center gap-1 rounded-lg bg-akari-red text-xs font-black text-white" href={store.reservation_url} storeId={store.id} eventType="reservation_click">
            <CalendarCheck size={16} />
            予約
          </EventLink>
          <EventLink className="inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-akari-line bg-white text-xs font-black text-akari-brown" href={`tel:${store.phone}`} storeId={store.id} eventType="phone_click">
            <Phone size={16} />
            電話
          </EventLink>
          <EventLink className="inline-flex h-11 items-center justify-center gap-1 rounded-lg bg-akari-green text-xs font-black text-white" href={store.line_url} storeId={store.id} eventType="line_click">
            <MessageCircle size={16} />
            LINE
          </EventLink>
        </div>
      </div>
    </main>
  );
}
