import type { MenuItem, MonthlyReport, Store } from "./types";

export const demoStore: Store = {
  id: "demo-store",
  slug: "sample-bistro",
  name: "洋食キッチン あかり",
  description:
    "鉄板ハンバーグと季節野菜の小さな洋食店。毎朝仕込むソースと、肩の力が抜ける接客を大切にしています。",
  address: "東京都渋谷区恵比寿1-2-3",
  phone: "03-1234-5678",
  reservation_url: "https://example.com/reserve",
  instagram_url: "https://instagram.com/",
  line_url: "https://line.me/",
  google_maps_embed_url: "https://www.google.com/maps?q=%E6%81%B5%E6%AF%94%E5%AF%BF&output=embed",
  regular_holiday: "月曜日",
  opening_hours: {
    火: "11:30-15:00 / 17:30-22:00",
    水: "11:30-15:00 / 17:30-22:00",
    木: "11:30-15:00 / 17:30-22:00",
    金: "11:30-15:00 / 17:30-22:30",
    土: "11:30-22:30",
    日: "11:30-21:00"
  },
  photos: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  ],
  plan: "standard"
};

export const demoMenu: MenuItem[] = [
  {
    id: "m1",
    store_id: demoStore.id,
    name: "鉄板デミグラスハンバーグ",
    description: "肉汁を閉じ込めた看板メニュー。毎朝仕込む濃厚デミグラスで仕上げます。",
    price: 1480,
    image_url: demoStore.photos[0],
    is_recommended: true
  },
  {
    id: "m2",
    store_id: demoStore.id,
    name: "季節野菜のグリル",
    description: "近郊野菜を香ばしく焼き、塩とオリーブオイルでシンプルに。",
    price: 980,
    image_url: demoStore.photos[1],
    is_recommended: true
  },
  {
    id: "m3",
    store_id: demoStore.id,
    name: "自家製クラシックプリン",
    description: "卵の香りを残した、少し固めの昔ながらのプリンです。",
    price: 520,
    image_url: null,
    is_recommended: false
  }
];

export const demoReports: MonthlyReport[] = [
  { month: "2026-02", page_views: 1620, phone_clicks: 74, map_clicks: 218, line_clicks: 96, reservation_clicks: 88 },
  { month: "2026-03", page_views: 1840, phone_clicks: 86, map_clicks: 244, line_clicks: 139, reservation_clicks: 112 },
  { month: "2026-04", page_views: 2312, phone_clicks: 104, map_clicks: 301, line_clicks: 176, reservation_clicks: 148 },
  { month: "2026-05", page_views: 2688, phone_clicks: 126, map_clicks: 348, line_clicks: 224, reservation_clicks: 181 }
];

export const reviewSummary = {
  score: 4.6,
  count: 128,
  highlights: ["ハンバーグの肉汁とソースが好評", "スタッフの声かけが丁寧", "週末ランチは混みやすい"],
  aiSummary:
    "料理の満足度と接客への評価が高く、特に看板メニューへの再来店意向が強い傾向です。待ち時間への不満が一部あるため、混雑時間の案内を強化すると安心感が増します。"
};

export const aiSuggestions = [
  "低評価口コミには、謝罪と改善予定を短く添えた返信を当日中に返すと信頼感が上がります。",
  "Instagramでは金曜夕方にハンバーグの湯気が見える写真を投稿すると予約導線につながりやすいです。",
  "LINE配信は雨の日限定の小さな特典を入れると、近隣客の来店理由を作れます。"
];
