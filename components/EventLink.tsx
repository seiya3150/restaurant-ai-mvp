"use client";

import type { ReactNode } from "react";

type Props = {
  href: string;
  storeId: string;
  eventType: "phone_click" | "map_click" | "line_click" | "reservation_click";
  className?: string;
  children: ReactNode;
};

export function EventLink({ href, storeId, eventType, className, children }: Props) {
  function track() {
    if (!storeId) return;
    navigator.sendBeacon?.(
      "/api/events",
      new Blob([JSON.stringify({ storeId, eventType })], { type: "application/json" })
    );
  }

  return (
    <a
      className={className}
      href={href}
      onClick={track}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
