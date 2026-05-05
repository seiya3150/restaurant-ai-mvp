import type { PlanId } from "./types";

export const plans: Record<
  PlanId,
  { name: string; price: string; aiLimit: number; bestFor: string; features: string[] }
> = {
  light: {
    name: "ライト",
    price: "4,980円/月",
    aiLimit: 30,
    bestFor: "まず店舗ページと口コミ返信を試したい個人店",
    features: ["公開店舗ページ", "月次レポート", "AI生成 30回/月", "電話・LINE・予約のCTA"]
  },
  standard: {
    name: "スタンダード",
    price: "9,800円/月",
    aiLimit: 120,
    bestFor: "SNSとLINE配信まで日常運用したい店舗",
    features: ["写真ギャラリー", "SNS/LINE導線", "AI生成 120回/月", "改善提案レポート"]
  },
  premium: {
    name: "プレミアム",
    price: "19,800円/月",
    aiLimit: 400,
    bestFor: "複数施策をしっかり回したい成長店舗",
    features: ["複数店舗運用", "求人票生成", "AI生成 400回/月", "優先サポート"]
  }
};
