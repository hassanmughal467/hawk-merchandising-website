import { portfolioSrc } from "@/lib/content/portfolio-assets";
import type { BeforeAfterCard } from "@/lib/content/homepage";
import { beforeAfterShowcase } from "@/lib/content/homepage";

/**
 * Confirmed offer / headline (brief task 5 — exact owner copy).
 * Reuse this string wherever the full offer line is needed.
 */
export const freeTrialOfferLine =
  "Unlimited stitches · 2–3 hour turnaround · Unlimited revisions · Free trial design to check our quality.";

/** Supporting line under the offer (exact owner copy). */
export const freeTrialSupportingLine =
  "Every file comes with a running sheet and a stitch preview.";

export const freeTrialHeadline = freeTrialOfferLine;

export const freeTrialSubheadline = freeTrialSupportingLine;

/** Services offered on the free-trial form (brief task 5). */
export const freeTrialServiceOptions = [
  "Embroidery digitizing",
  "3D puff",
  "Custom patch",
  "Vector",
  "DTF or sublimation artwork",
] as const;

/** Common production file formats clients ask for. */
export const freeTrialFileFormatOptions = [
  "DST",
  "EMB",
  "PES",
  "EXP",
  "JEF",
  "VP3",
  "XXX",
  "AI / EPS / PDF (vector)",
  "Other / not sure",
] as const;

/** Trial terms (exact owner copy; no invented size / one-per-business rules). */
export const freeTrialTermsNote = "Free trial design to check our quality.";

/** Optional second terms line (exact owner copy). */
export const freeTrialTermsSewOut = "A sew-out is available on request.";
export const freeTrialWhatHappensNext = [
  {
    title: "You send artwork",
    body: "Upload your logo or design with the service and file format you need.",
  },
  {
    title: "We review the file",
    body: "A specialist checks scope, suitability for a free trial, and any questions on placement or fabric.",
  },
  {
    title: "You receive a trial file",
    body: "We return a production-ready sample so you can quality-check stitch path and detail before ordering more.",
  },
] as const;

/** Three real before/after pairs from existing Portfolio images. */
const FREE_TRIAL_SHOWCASE_IDS = [
  "corporate-polo",
  "sports-cap-puff",
  "construction-workwear",
] as const;

export const freeTrialBeforeAfter: BeforeAfterCard[] = FREE_TRIAL_SHOWCASE_IDS.map((id) => {
  const card = beforeAfterShowcase.find((item) => item.id === id);
  if (!card) {
    throw new Error(`Missing before/after showcase card: ${id}`);
  }
  return card;
});

/** Review IDs to feature on the free-trial page (verbatim Google quotes). */
export const freeTrialFeaturedReviewIds = [
  "gr-gaz-lee",
  "gr-russell-wallace",
  "gr-angela-crosbie",
] as const;

export const freeTrialOgImage = portfolioSrc("BEFORE AND AFTER DIGITIZING.png");
