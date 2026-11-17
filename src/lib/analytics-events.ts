import { GA_MEASUREMENT_ID, META_PIXEL_ID, logConversionAnalytics } from "@/lib/analytics";

/**
 * Conversion event names for brief task 14.
 * LinkedIn / Pinterest counterparts wait on task 13 tag IDs.
 */
export const CONVERSION_EVENTS = {
  FREE_TRIAL_SUBMIT: "free_trial_submit",
  QUOTE_SUBMIT: "quote_submit",
  UPLOAD_SUBMIT: "upload_submit",
  WHATSAPP_CLICK: "whatsapp_click",
  EMAIL_CLICK: "email_click",
  SIGNUP_CLICK: "signup_click",
  /** GA4-only engagement clicks (not task-14 Meta conversions) */
  QUOTE_BUTTON_CLICK: "quote_button_click",
  UPLOAD_ARTWORK_CLICK: "upload_artwork_click",
  PHONE_CLICK: "phone_click",
  LOGIN: "login",
} as const;

export type ConversionEvent = (typeof CONVERSION_EVENTS)[keyof typeof CONVERSION_EVENTS];

export type ConversionEventParams = Record<string, string>;

/** Meta standard events mapped from GA4 conversion names (task 14). */
const META_STANDARD_BY_EVENT: Partial<Record<ConversionEvent, "Lead" | "Contact">> = {
  [CONVERSION_EVENTS.FREE_TRIAL_SUBMIT]: "Lead",
  [CONVERSION_EVENTS.QUOTE_SUBMIT]: "Lead",
  [CONVERSION_EVENTS.WHATSAPP_CLICK]: "Contact",
  [CONVERSION_EVENTS.EMAIL_CLICK]: "Contact",
};

const UTM_STORAGE_KEY = "hawk_utm_params";

type StoredUtms = {
  utm_source?: string;
  utm_medium?: string;
};

function readStoredUtms(): StoredUtms {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredUtms;
    return {
      ...(parsed.utm_source ? { utm_source: parsed.utm_source } : {}),
      ...(parsed.utm_medium ? { utm_medium: parsed.utm_medium } : {}),
    };
  } catch {
    return {};
  }
}

/** Persist utm_source / utm_medium from the current URL when present. */
export function captureUtmsFromLocation() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source")?.trim();
  const utmMedium = params.get("utm_medium")?.trim();
  if (!utmSource && !utmMedium) return;

  const existing = readStoredUtms();
  const next: StoredUtms = {
    utm_source: utmSource || existing.utm_source,
    utm_medium: utmMedium || existing.utm_medium,
  };

  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore quota / private-mode failures; URL params still apply at fire time.
  }
}

/** UTM source/medium from the current URL, falling back to session capture. */
export function getUtmParams(): ConversionEventParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: ConversionEventParams = {};
  const utmSource = params.get("utm_source")?.trim();
  const utmMedium = params.get("utm_medium")?.trim();
  if (utmSource) fromUrl.utm_source = utmSource;
  if (utmMedium) fromUrl.utm_medium = utmMedium;
  if (fromUrl.utm_source || fromUrl.utm_medium) return fromUrl;

  const stored = readStoredUtms();
  return {
    ...(stored.utm_source ? { utm_source: stored.utm_source } : {}),
    ...(stored.utm_medium ? { utm_medium: stored.utm_medium } : {}),
  };
}

function mergeParams(params?: ConversionEventParams): ConversionEventParams | undefined {
  const merged = { ...getUtmParams(), ...params };
  return Object.keys(merged).length > 0 ? merged : undefined;
}

function trackGa4(event: ConversionEvent, params?: ConversionEventParams) {
  if (typeof window !== "undefined" && typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("event", event, params);
  }
  logConversionAnalytics({ platform: "ga4", event, params });
}

function trackMetaStandard(standardEvent: "Lead" | "Contact", params?: ConversionEventParams) {
  if (typeof window !== "undefined" && typeof window.fbq === "function" && META_PIXEL_ID) {
    window.fbq("track", standardEvent, params);
  }
  logConversionAnalytics({ platform: "meta-pixel", event: standardEvent, params });
}

/**
 * Fire a conversion to GA4 and, when mapped, the matching Meta standard event.
 * Always merges available UTM source/medium. Call only on success (forms) or
 * actual outbound click (WhatsApp / email / signup).
 */
export function trackConversion(event: ConversionEvent, params?: ConversionEventParams) {
  const merged = mergeParams(params);
  trackGa4(event, merged);

  const metaEvent = META_STANDARD_BY_EVENT[event];
  if (metaEvent) {
    trackMetaStandard(metaEvent, {
      content_name: event,
      ...merged,
    });
  }
}

/** Successful free-trial / sample submission (Meta Lead). Ready for `/free-trial` when built. */
export function trackFreeTrialSubmit(params?: ConversionEventParams) {
  trackConversion(CONVERSION_EVENTS.FREE_TRIAL_SUBMIT, params);
}

/** Successful quote / contact form submission (Meta Lead). */
export function trackQuoteSubmit(params?: ConversionEventParams) {
  trackConversion(CONVERSION_EVENTS.QUOTE_SUBMIT, params);
}

/** Successful artwork upload submission (GA4). */
export function trackUploadSubmit(params?: ConversionEventParams) {
  trackConversion(CONVERSION_EVENTS.UPLOAD_SUBMIT, params);
}
