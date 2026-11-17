"use client";

import { ConversionLink } from "@/components/analytics/ConversionLink";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";
import { HeroImageSlider } from "@/components/ui/HeroImageSlider";

const trustBadges = [
  "24/7 Support",
  "Fast Turnaround",
  "Global Clients",
  "Quality Guaranteed",
] as const;

/**
 * Hero LCP fix: H1, subtext, CTAs, and badges are plain SSR-visible markup
 * (no opacity:0 / translateY initial hide). Motion lives only in the slider
 * transitions after the first slide, and respects prefers-reduced-motion there.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-brand-dark-gradient">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,198,249,0.14),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Premium Embroidery Digitizing, Vector Art &amp; Custom Patch Solutions
            </h1>

            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Trusted by embroidery shops, apparel brands, uniform suppliers and promotional
              product companies worldwide.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ConversionLink
                href="/upload?intent=sample"
                event={CONVERSION_EVENTS.QUOTE_BUTTON_CLICK}
                eventParams={{ location: "hero" }}
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
              >
                Get Free Quote
              </ConversionLink>
              <ConversionLink
                href="/upload"
                event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
                eventParams={{ location: "hero" }}
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Upload Artwork
              </ConversionLink>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-6">
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 12.5L10 17.5L19 7.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <HeroImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
