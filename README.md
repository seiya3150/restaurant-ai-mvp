# 飲食店AI導入支援 MVP 強化版

Next.js App Router + TypeScript + Tailwind CSS で作った、飲食店向けAI導入支援MVPです。

Supabase、OpenAI、Stripeはまだ接続しなくても動きます。`.env.local` が未設定でも、デモデータだけで主要画面を確認できます。

## 画面

- `/s/sample-bistro`
  - 公開プロフィールページ
  - 店舗名、写真、営業時間、住所、Google Map、電話、LINE、予約、Instagram、人気メニュー、口コミ要約
- `/admin`
  - オーナー向け管理画面
  - 店舗情報、営業時間、写真、メニュー編集UI
  - Google口コミ返信、Instagram投稿文、LINE配信文、メニューコピーのAI生成デモ
- `/admin/reports`
  - 月次レポート
  - 閲覧数、電話クリック、地図クリック、LINEクリック、予約クリック
  - 前月比、グラフ、AI改善提案
- `/pricing`
  - ライト、スタンダード、プレミアムの料金表
  - Stripe未接続のためボタンはデモ表示

## ローカル起動

```powershell
npm install
npm run dev
```

起動後、ブラウザで開きます。

```text
http://localhost:3000
```

直接確認する場合はこちらです。

```text
http://localhost:3000/s/sample-bistro
http://localhost:3000/admin
http://localhost:3000/admin/reports
http://localhost:3000/pricing
```

## 補足

この環境で `npm` が見つからない場合は、Node.js LTSをインストールしてから上記コマンドを実行してください。
