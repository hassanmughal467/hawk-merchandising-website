"use client";

import { ConversionLink } from "@/components/analytics/ConversionLink";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";
import {
  freeTrialHref,
  googleRatingLabel,
  offerLine,
  startFreeTrialLabel,
  uploadArtworkHref,
  uploadArtworkLabel,
} from "@/lib/content/offer";
import { reviewsSummary } from "@/lib/content/reviews";
import { cn } from "@/lib/cn";

type OfferTrustBlockProps = {
  /** Analytics location label, e.g. "hero", "pricing_hero", "service_hero". */
  location: string;
  className?: string;
};

/**
 * Reusable above-the-fold offer + CTA + Google trust row (brief task 20).
 * Identical copy on home, pricing, and service page heroes.
 */
export function OfferTrustBlock({ location, className }: OfferTrustBlockProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <p className="text-sm font-medium tracking-wide text-zinc-300 sm:text-base">
        {offerLine}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <ConversionLink
          href={freeTrialHref}
          event={CONVERSION_EVENTS.QUOTE_BUTTON_CLICK}
          eventParams={{ location }}
          className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
        >
          {startFreeTrialLabel}
        </ConversionLink>
        <ConversionLink
          href={uploadArtworkHref}
          event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
          eventParams={{ location }}
          className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
        >
          {uploadArtworkLabel}
        </ConversionLink>
        <a
          href={reviewsSummary.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center justify-center gap-1.5 self-center text-sm font-semibold text-zinc-300 underline-offset-4 transition hover:text-white hover:underline sm:ml-1"
        >
          <svg
            className="h-4 w-4 text-accent"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2.5l2.76 5.59 6.17.9-4.46 4.35 1.05 6.13L12 16.9l-5.52 2.9 1.05-6.13-4.46-4.35 6.17-.9L12 2.5z" />
          </svg>
          {googleRatingLabel}
        </a>
      </div>
    </div>
  );
}
