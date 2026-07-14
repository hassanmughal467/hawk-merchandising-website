/**
 * Analytics configuration.
 *
 * Set IDs in `.env.local` (see `.env.example`):
 * - NEXT_PUBLIC_META_PIXEL_ID — Meta (Facebook) Pixel ID
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID — Google Analytics 4 Measurement ID (G-XXXXXXXXXX)
 * - NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION — Google Search Console HTML meta verification code
 */

/** Meta Pixel ID. Requires NEXT_PUBLIC_ prefix for client-side loading. */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || undefined;

/** GA4 Measurement ID. Requires NEXT_PUBLIC_ prefix for client-side loading. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || undefined;

/** Google Search Console HTML tag verification content value. */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;

export const ANALYTICS_DEBUG_EVENT = "hawk:analytics-debug";

export type AnalyticsDebugDetail = {
  source: "meta-pixel" | "ga4";
  event: "initialized" | "page_view";
  path?: string;
};

export type ConversionAnalyticsDebugDetail = {
  platform: "meta-pixel" | "ga4";
  event: string;
  params?: Record<string, string>;
};

/** DEV-only console logging and debug panel events. Stripped from production bundles via NODE_ENV guard. */
export function logAnalytics(detail: AnalyticsDebugDetail) {
  if (process.env.NODE_ENV !== "development") return;

  const label = detail.source === "meta-pixel" ? "Meta Pixel" : "GA4";
  const message =
    detail.event === "initialized"
      ? `${label} initialized`
      : `${label} PageView → ${detail.path ?? "(unknown)"}`;

  console.log(`[Analytics] ${message}`);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(ANALYTICS_DEBUG_EVENT, { detail }));
  }
}

/** DEV-only logging for conversion / Lead events. */
export function logConversionAnalytics(detail: ConversionAnalyticsDebugDetail) {
  if (process.env.NODE_ENV !== "development") return;

  const label = detail.platform === "meta-pixel" ? "Meta Pixel" : "GA4";
  const params = detail.params ? ` ${JSON.stringify(detail.params)}` : "";
  const message = `${label} ${detail.event}${params}`;

  console.log(`[Analytics] ${message}`);

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(ANALYTICS_DEBUG_EVENT, {
        detail: { type: "conversion", ...detail },
      }),
    );
  }
}
