import Link from "next/link";
import { redirect } from "next/navigation";
import { PageHero } from "@/components/marketing/PageHero";
import { freeDownloads, freeDownloadsPage } from "@/lib/content/free-downloads";

import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Free Downloads",
  description:
    "Free digitizing and vector resources: checklists, format guides, and production brief templates from Hawk Merchandising.",
  path: "/free-downloads",
});

export default function FreeDownloadsPage() {
  if (!freeDownloadsPage.enabled) {
    redirect("/tips-and-tricks");
  }

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Free downloads"
        title="Resources to brief jobs like a pro"
        subtitle="Production briefs, format guides, and checklists for embroidery and vector workflows."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {freeDownloads.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {freeDownloads.map((d) => (
                <article
                  key={d.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {d.tag}
                  </span>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {d.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{d.description}</p>
                  <p className="mt-4 text-xs text-zinc-500">{d.note}</p>
                  <Link
                    href={d.href}
                    className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-gradient-hover"
                  >
                    Get resource
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <p className="text-sm text-zinc-400">
                Resources are being prepared. Contact us for production briefs and format guides.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Contact us →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
