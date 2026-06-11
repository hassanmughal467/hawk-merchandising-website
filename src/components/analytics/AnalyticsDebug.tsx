"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ANALYTICS_DEBUG_EVENT,
  type AnalyticsDebugDetail,
  GA_MEASUREMENT_ID,
  META_PIXEL_ID,
} from "@/lib/analytics";

type DebugState = {
  metaPixelLoaded: boolean;
  gaLoaded: boolean;
  lastEvent: string;
};

const initialState: DebugState = {
  metaPixelLoaded: false,
  gaLoaded: false,
  lastEvent: "Waiting for analytics…",
};

export function AnalyticsDebug() {
  const pathname = usePathname();
  const [state, setState] = useState<DebugState>(initialState);

  useEffect(() => {
    const refreshLoaded = () => {
      setState((current) => ({
        ...current,
        metaPixelLoaded: typeof window.fbq === "function",
        gaLoaded: typeof window.gtag === "function",
      }));
    };

    const onDebugEvent = (event: Event) => {
      const detail = (event as CustomEvent<AnalyticsDebugDetail>).detail;
      const label = detail.source === "meta-pixel" ? "Meta Pixel" : "GA4";
      const message =
        detail.event === "initialized"
          ? `${label} initialized`
          : `${label} PageView → ${detail.path ?? pathname}`;

      setState((current) => ({
        ...current,
        metaPixelLoaded: detail.source === "meta-pixel" ? true : current.metaPixelLoaded,
        gaLoaded: detail.source === "ga4" ? true : current.gaLoaded,
        lastEvent: message,
      }));
    };

    refreshLoaded();
    const intervalId = window.setInterval(refreshLoaded, 500);
    window.addEventListener(ANALYTICS_DEBUG_EVENT, onDebugEvent);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener(ANALYTICS_DEBUG_EVENT, onDebugEvent);
    };
  }, [pathname]);

  return (
    <aside
      aria-label="Analytics debug panel (development only)"
      className="fixed bottom-4 left-4 z-[9999] max-w-xs rounded-lg border border-amber-500/40 bg-zinc-950/95 p-3 text-xs text-zinc-100 shadow-lg backdrop-blur"
    >
      <p className="mb-2 font-semibold text-amber-400">Analytics Debug (DEV)</p>
      <dl className="space-y-1">
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-400">Meta Pixel ID</dt>
          <dd>{META_PIXEL_ID ? "configured" : "missing"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-400">GA4 ID</dt>
          <dd>{GA_MEASUREMENT_ID ? "configured" : "missing"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-400">fbq loaded</dt>
          <dd>{state.metaPixelLoaded ? "yes" : "no"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-400">gtag loaded</dt>
          <dd>{state.gaLoaded ? "yes" : "no"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-400">Route</dt>
          <dd className="truncate">{pathname}</dd>
        </div>
      </dl>
      <p className="mt-2 border-t border-zinc-800 pt-2 text-zinc-300">{state.lastEvent}</p>
    </aside>
  );
}
