"use client";

import { Plus, Save } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import type { MenuItem } from "@/lib/types";

const inputClass =
  "w-full rounded-lg border border-akari-line bg-white px-3 py-2.5 text-sm text-akari-ink outline-none transition focus:border-akari-red focus:ring-2 focus:ring-akari-red/15";

export function MenuEditor({ menu }: { storeId: string; menu: MenuItem[] }) {
  const [status, setStatus] = useState("");
  const rows = Array.from({ length: 4 }, (_, index) => menu[index]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("メニューをデモ保存しました。");
  }

  return (
    <form className="grid gap-4" onSubmit={submit}>
      {rows.map((item, index) => (
        <div className="grid gap-3 rounded-lg border border-akari-line bg-akari-paper/60 p-3" key={item?.id ?? index}>
          <div className="grid gap-3 sm:grid-cols-[1.2fr_0.6fr]">
            <Field label="料理名">
              <input className={inputClass} defaultValue={item?.name ?? ""} />
            </Field>
            <Field label="価格">
              <input className={inputClass} defaultValue={item?.price ?? ""} inputMode="numeric" />
            </Field>
          </div>
          <Field label="説明">
            <textarea className={`${inputClass} min-h-20 resize-y`} defaultValue={item?.description ?? ""} />
          </Field>
          <label className="inline-flex items-center gap-2 text-sm font-bold text-akari-muted">
            <input className="h-4 w-4 accent-akari-red" defaultChecked={item?.is_recommended ?? false} type="checkbox" />
            人気メニューに表示
          </label>
        </div>
      ))}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-akari-red px-4 text-sm font-bold text-white shadow-warm transition hover:bg-akari-darkRed" type="submit">
          <Save size={18} />
          デモ保存
        </button>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-akari-line bg-white px-4 text-sm font-bold text-akari-brown transition hover:bg-akari-soft" type="button">
          <Plus size={18} />
          行を追加
        </button>
      </div>
      {status ? <p className="rounded-lg bg-akari-soft px-3 py-2 text-sm text-akari-brown">{status}</p> : null}
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-bold text-akari-muted">{label}</span>
      {children}
    </label>
  );
}
