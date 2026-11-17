import Image from "next/image";
import { FreeTrialForm } from "@/components/free-trial/FreeTrialForm";
import { GoogleReviewCard } from "@/components/ui/GoogleReviewCard";
import { PageHero } from "@/components/marketing/PageHero";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import {
  freeTrialBeforeAfter,
  freeTrialFeaturedReviewIds,
  freeTrialHeadline,
  freeTrialOgImage,
  freeTrialOffer,
  freeTrialSubheadline,
  freeTrialTermsNote,
  freeTrialWhatHappensNext,
} from "@/lib/content/free-trial";
import { mockReviewsData } from "@/lib/content/reviews";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Free Trial — Unlimited Stitches & Revisions",
  description:
    "Start a free trial with Hawk Merchandising. Unlimited stitches, unlimited revisions, and a free trial for quality checking on your embroidery digitizing or artwork.",
  path: "/free-trial",
  ogImage: freeTrialOgImage,
});

export default function FreeTrialPage() {
  const featuredReviews = freeTrialFeaturedReviewIds
    .map((id) => mockReviewsData.reviews.find((review) => review.id === id))
    .filter((review): review is NonNullable<typeof review> => Boolean(review));

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Free Trial", path: "/free-trial" },
  ];

  return (
    <div className="bg-background">
      <JsonLdScript data={[buildBreadcrumbSchema(breadcrumbs)]} />

      <PageHero
        eyebrow="Free trial"
        title={freeTrialHeadline}
        subtitle={freeTrialSubheadline}
        logoSize={false}
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-300">
          <li className="flex items-center gap-2">
            <span className="text-accent" aria-hidden>
              ✓
            </span>
            {freeTrialOffer.stitches}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent" aria-hidden>
              ✓
            </span>
            {freeTrialOffer.revisions}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent" aria-hidden>
              ✓
            </span>
            {freeTrialOffer.trial}
          </li>
        </ul>
      </PageHero>

      <section className="border-b border-white/10" aria-labelledby="free-trial-examples">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2
            id="free-trial-examples"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Real before &amp; after
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Examples from our portfolio—artwork in, production-ready files out.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {freeTrialBeforeAfter.map((card) => (
              <article
                key={card.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="grid grid-cols-[1fr_auto_1fr] items-stretch">
                  <div className="relative aspect-[4/3] bg-zinc-900">
                    {card.before.imageSrc ? (
                      <Image
                        src={card.before.imageSrc}
                        alt={`${card.title} — before`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
                        className="object-cover"
                      />
                    ) : null}
                    <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {card.before.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-white/5 px-1.5">
                    <span className="text-lg font-bold text-accent" aria-hidden>
                      →
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] bg-zinc-900">
                    {card.after.imageSrc ? (
                      <Image
                        src={card.after.imageSrc}
                        alt={`${card.title} — after`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
                        className="object-cover"
                      />
                    ) : null}
                    <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {card.after.label}
                    </span>
                  </div>
                </div>
                <div className="border-t border-white/10 p-4">
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10" aria-labelledby="free-trial-form-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-5">
            <h2
              id="free-trial-form-heading"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Request your free trial
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Send your artwork with a few details. We reply with eligibility and next steps for your
              free trial.
            </p>

            <div className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                What happens next
              </h3>
              <ol className="mt-4 space-y-4">
                {freeTrialWhatHappensNext.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="mt-10 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Trial terms
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{freeTrialTermsNote}</p>
            </aside>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:col-span-7">
            {/* Client form still SSR-renders fields — no Suspense fallback */}
            <FreeTrialForm />
          </div>
        </div>
      </section>

      {featuredReviews.length > 0 ? (
        <section className="border-b border-white/10" aria-labelledby="free-trial-reviews">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2
              id="free-trial-reviews"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              What clients say on Google
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Verbatim quotes from our Google reviews.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {featuredReviews.map((review) => (
                <GoogleReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
