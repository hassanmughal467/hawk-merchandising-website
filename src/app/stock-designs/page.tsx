import Link from "next/link";
import { redirect } from "next/navigation";
import { ConversionLink } from "@/components/analytics/ConversionLink";
import { PageHero } from "@/components/marketing/PageHero";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";
import { stockDesignCategories, stockDesignsPage } from "@/lib/content/stock-designs";

import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Stock Designs",
  description:
    "Browse curated stock embroidery and vector starter designs—customize colors and layouts for your client programs.",
  path: "/stock-designs",
});

export default function StockDesignsPage() {
  if (!stockDesignsPage.enabled) {
    redirect("/tips-and-tricks");
  }

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Stock designs"
        title="Starter artwork you can deploy fast"
        subtitle="Curated embroidery and vector starters you can customize for client programs."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {stockDesignCategories.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stockDesignCategories.map((c) => (
                <article
                  key={c.slug}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6"
                >
                  <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 ring-1 ring-white/10" />
                  <h2 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {c.name}
                  </h2>
                  {c.countLabel ? (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {c.countLabel}
                    </p>
                  ) : null}
                  <Link
                    href={c.href ?? "/contact"}
                    className="mt-5 inline-flex text-sm font-semibold text-accent opacity-80 transition group-hover:opacity-100"
                  >
                    Browse category →
                  </Link>
                </article>
              ))}
            </div>
          ) : null}

          <div className="mt-14 rounded-2xl border border-white/10 bg-zinc-950/60 p-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Need something custom instead?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-zinc-400">
              Most clients start from their own brand marks. Upload what you have and we’ll advise the
              fastest path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ConversionLink
                href="/upload"
                event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
                eventParams={{ location: "stock_designs_page" }}
                className="focus-ring inline-flex justify-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white hover:bg-accent-gradient-hover"
              >
                Upload brief
              </ConversionLink>
              <Link
                href="/embroidery-digitizing"
                className="focus-ring inline-flex justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Digitizing services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
