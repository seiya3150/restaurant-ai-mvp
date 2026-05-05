import type { MenuItem, MonthlyReport, Store } from "./types";

export const demoStore: Store = {
  id: "demo-store",
  slug: "sample-bistro",
  name: "洋食キッチン あかり",
  description:
    "鉄板ハンバーグと季節野菜を楽しめる、恵比寿の小さな洋食店。毎朝仕込むソースと、肩の力が抜ける接客で、近隣のお客様に長く選ばれています。",
  address: "東京都渋谷区恵比寿1-2-3",
  phone: "03-1234-5678",
  reservation_url: "https://example.com/reserve",
  instagram_url: "https://instagram.com/",
  line_url: "https://line.me/",
  google_maps_embed_url:
    "https://www.google.com/maps?q=%E6%81%B5%E6%AF%94%E5%AF%BF&output=embed",
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
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
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
  { month: "2026-05", page_views: 2840, phone_clicks: 132, map_clicks: 365, line_clicks: 238, reservation_clicks: 196 }
];

export const reviewSummary = {
  score: 4.6,
  count: 128,
  highlights: ["看板ハンバーグの満足度が高い", "接客が丁寧で初来店でも安心", "週末ランチの待ち時間に改善余地"],
  aiSummary:
    "料理と接客は強い来店理由になっています。週末の混雑案内をLINEとInstagramで先回りすると、低評価を減らしながら予約率を伸ばせます。"
};

export const todayTasks = [
  {
    title: "低評価口コミへ誠実に返信",
    label: "最優先",
    impact: "第三者に見られる信頼感を守る",
    body: "待ち時間に関する口コミへ、謝罪・改善策・再来店への控えめな案内を入れて返信しましょう。"
  },
  {
    title: "金曜夜向けInstagram投稿",
    label: "予約促進",
    impact: "ディナー予約を増やす",
    body: "鉄板ハンバーグの湯気が伝わる写真に、空席時間と予約導線を添えて投稿します。"
  },
  {
    title: "雨の日LINE配信",
    label: "近隣集客",
    impact: "当日来店の理由を作る",
    body: "徒歩圏のお客様へ、雨の日限定の小さな特典を配信して来店の背中を押します。"
  },
  {
    title: "人気メニューコピー改善",
    label: "単価改善",
    impact: "注文率を上げる",
    body: "看板メニューの説明に、仕込み・鉄板・ソースのこだわりを足して選ばれやすくします。"
  }
];

export const aiSuggestions = [
  "Google口コミの返信率を今月中に80%まで上げると、初来店前の不安を減らせます。",
  "Instagramは料理単体よりも、湯気・鉄板・店内の温度感が伝わる写真の方が予約導線に向いています。",
  "LINE配信は全員向けの割引より、雨の日・平日夜・近隣客向けの理由づけを入れると継続来店につながります。"
];
