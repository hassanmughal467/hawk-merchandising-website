import { portfolioSrc } from "@/lib/content/portfolio-assets";
import type { BeforeAfterCard } from "@/lib/content/homepage";
import { beforeAfterShowcase } from "@/lib/content/homepage";

/** Confirmed offer — keep identical site-wide when reused. */
export const freeTrialOffer = {
  stitches: "Unlimited stitches",
  revisions: "Unlimited revisions",
  trial: "Free trial for quality checking",
} as const;

export const freeTrialHeadline =
  "Unlimited stitches. Unlimited revisions. Free trial for quality checking.";

export const freeTrialSubheadline =
  "Try Hawk Merchandising on your own artwork—see stitch quality before you commit to a production run.";

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

/**
 * Trial terms are owner-blocked (size limits, one-per-business, sew-out).
 * Do not invent policy here — keep this honest placeholder until confirmed.
 */
export const freeTrialTermsNote =
  "Full free-trial terms will be confirmed by Hawk Merchandising before this offer is finalized. We will confirm eligibility and deliverables when we reply to your request.";

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
