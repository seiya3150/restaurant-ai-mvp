import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "飲食店AI導入支援 MVP",
  description: "飲食店向け店舗ページ、AI文章生成、月次レポート、料金表のMVP"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
