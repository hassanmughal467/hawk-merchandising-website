import { GA_MEASUREMENT_ID, META_PIXEL_ID, logConversionAnalytics } from "@/lib/analytics";

/** GA4 conversion event names */
export const CONVERSION_EVENTS = {
  QUOTE_BUTTON_CLICK: "quote_button_click",
  UPLOAD_ARTWORK_CLICK: "upload_artwork_click",
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  /** Task 5 / 14 — fire on successful free-trial form submit only */
  FREE_TRIAL_SUBMIT: "free_trial_submit",
  WHATSAPP_CLICK: "whatsapp_click",
  PHONE_CLICK: "phone_click",
  EMAIL_CLICK: "email_click",
  SIGNUP: "signup",
  LOGIN: "login",
} as const;

export type ConversionEvent = (typeof CONVERSION_EVENTS)[keyof typeof CONVERSION_EVENTS];

export type ConversionEventParams = Record<string, string>;

/** Fire a GA4 custom conversion event via gtag. */
export function trackConversion(event: ConversionEvent, params?: ConversionEventParams) {
  if (typeof window !== "undefined" && typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("event", event, params);
  }

  logConversionAnalytics({ platform: "ga4", event, params });
}

/** Fire a Meta Pixel Lead event for quote, contact, and upload conversions. */
export function trackMetaLead(params?: ConversionEventParams) {
  if (typeof window !== "undefined" && typeof window.fbq === "function" && META_PIXEL_ID) {
    window.fbq("track", "Lead", params);
  }

  logConversionAnalytics({ platform: "meta-pixel", event: "Lead", params });
}

/** Track a successful quote form submission. */
export function trackQuoteRequest(source: string) {
  trackMetaLead({ content_name: "quote_request", source });
}

/** Track a successful contact form submission. */
export function trackContactFormSubmit(source: string) {
  trackConversion(CONVERSION_EVENTS.CONTACT_FORM_SUBMIT, { source });
  trackMetaLead({ content_name: "contact_form", source });
}

/** Track a successful upload artwork form submission. */
export function trackUploadArtworkSubmit() {
  trackMetaLead({ content_name: "upload_artwork" });
}

/**
 * Track a successful free-trial form submission (task 5 / 14).
 * Pass utm_source / utm_medium when present. Hook for LinkedIn/Pinterest once task 13 IDs exist.
 */
export function trackFreeTrialSubmit(params?: ConversionEventParams) {
  trackConversion(CONVERSION_EVENTS.FREE_TRIAL_SUBMIT, params);
  trackMetaLead({ content_name: "free_trial", ...params });
}
