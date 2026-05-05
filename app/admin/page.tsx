import { Camera, Clock, Utensils } from "lucide-react";
import Image from "next/image";
import { AiGenerator } from "@/components/AiGenerator";
import { MenuEditor } from "@/components/MenuEditor";
import { StoreEditor } from "@/components/StoreEditor";
import { demoMenu, demoStore } from "@/lib/demo-data";

export default function AdminPage() {
  const store = demoStore;
  const menu = demoMenu;
  const storeInfo = `${store.name}\n${store.description}\n住所: ${store.address}\nメニュー: ${menu
    .map((item) => `${item.name} ${item.price}円 ${item.description}`)
    .join(" / ")}`;

  return (
    <main className="min-h-screen bg-akari-paper text-akari-ink">
      <header className="bg-akari-red text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <p className="text-sm font-bold text-white/80">Owner Dashboard</p>
          <h1 className="mt-2 text-3xl font-black sm:text-5xl">店舗管理</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
            接続なしで動くデモ管理画面です。店舗情報、営業時間、写真、メニュー編集とAI生成の操作感を確認できます。
          </p>
        </div>
      </header>
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4">
          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="text-akari-red" size={22} />
              <h2 className="text-xl font-black">店舗情報・営業時間・写真</h2>
            </div>
            <StoreEditor store={store} />
          </section>
          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <Utensils className="text-akari-red" size={22} />
              <h2 className="text-xl font-black">メニュー編集</h2>
            </div>
            <MenuEditor storeId={store.id} menu={menu} />
          </section>
        </div>
        <div className="grid content-start gap-4">
          <AiGenerator storeId={store.id} storeInfo={storeInfo} />
          <section className="rounded-lg border border-akari-line bg-white p-4 shadow-warm sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <Camera className="text-akari-red" size={22} />
              <h2 className="text-xl font-black">写真プレビュー</h2>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {store.photos.map((photo) => (
                <Image alt="店舗写真" className="aspect-square rounded-lg object-cover" height={220} key={photo} src={photo} width={220} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
