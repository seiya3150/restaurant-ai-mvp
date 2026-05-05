"use client";

import { ImagePlus, Save } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import type { Store } from "@/lib/types";

const fieldClass =
  "w-full rounded-lg border border-akari-line bg-white px-3 py-2.5 text-sm text-akari-ink outline-none transition focus:border-akari-red focus:ring-2 focus:ring-akari-red/15";

export function StoreEditor({ store }: { store: Store }) {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("デモ保存しました。Supabase接続後はこの内容をDBへ保存できます。");
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="店舗名">
          <input className={fieldClass} name="name" defaultValue={store.name} required />
        </Field>
        <Field label="定休日">
          <input className={fieldClass} name="regular_holiday" defaultValue={store.regular_holiday} />
        </Field>
      </div>
      <Field label="店舗説明">
        <textarea className={`${fieldClass} min-h-24 resize-y`} name="description" defaultValue={store.description} />
      </Field>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="住所">
          <input className={fieldClass} name="address" defaultValue={store.address} />
        </Field>
        <Field label="電話番号">
          <input className={fieldClass} name="phone" defaultValue={store.phone} />
        </Field>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="予約URL">
          <input className={fieldClass} name="reservation_url" defaultValue={store.reservation_url} />
        </Field>
        <Field label="Instagram URL">
          <input className={fieldClass} name="instagram_url" defaultValue={store.instagram_url} />
        </Field>
        <Field label="LINE URL">
          <input className={fieldClass} name="line_url" defaultValue={store.line_url} />
        </Field>
        <Field label="Google Map 埋め込みURL">
          <input className={fieldClass} name="google_maps_embed_url" defaultValue={store.google_maps_embed_url} />
        </Field>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(store.opening_hours).map(([day, hours]) => (
          <Field label={`${day}曜日`} key={day}>
            <input className={fieldClass} name={`hours_${day}`} defaultValue={hours} />
          </Field>
        ))}
      </div>
      <Field label="写真URL">
        <textarea className={`${fieldClass} min-h-24 resize-y`} name="photos" defaultValue={store.photos.join("\n")} />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-akari-red px-4 text-sm font-bold text-white shadow-warm transition hover:bg-akari-darkRed" type="submit">
          <Save size={18} />
          デモ保存
        </button>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-akari-line bg-white px-4 text-sm font-bold text-akari-brown transition hover:bg-akari-soft" type="button">
          <ImagePlus size={18} />
          写真を追加
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
