import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";

import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Free Downloads",
  description:
    "Free digitizing and vector resources: checklists, format guides, and production brief templates from Hawk Merchandising.",
  path: "/free-downloads",
});

type DownloadItem = {
  title: string;
  description: string;
  tag: string;
  href: string;
  note: string;
};

const downloads: DownloadItem[] = [
  {
    title: "Production brief template",
    description:
      "A one-page PDF to capture garment, stabilizer, thread, size, and deadline—reduces back-and-forth on new jobs.",
    tag: "PDF",
    href: "/contact",
    note: "Request via email—we’ll send the latest version",
  },
  {
    title: "Accepted file formats",
    description:
      "Quick reference: raster vs vector uploads, packaging tips, and how to name files for fastest routing.",
    tag: "Guide",
    href: "/upload",
    note: "Also printed on the upload page—bookmark for your team",
  },
  {
    title: "Stitch-friendly artwork checklist",
    description:
      "Design habits that make digitizing faster: minimum text heights, outlines, and effects that need special handling.",
    tag: "Checklist",
    href: "/tips-and-tricks",
    note: "See Tips & Tricks for the expanded version",
  },
];

export default function FreeDownloadsPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Free downloads"
        title="Resources to brief jobs like a pro"
        subtitle="Placeholders below mirror the resource hub pattern used on leading digitizing sites—swap in your real PDFs and gated downloads when ready."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {downloads.map((d) => (
              <article
                key={d.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
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

          <div className="mt-14 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
            <p className="text-sm font-semibold text-white">Hosting real files</p>
            <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-400">
              Add static PDFs under <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">public/downloads/</code>{" "}
              and link them here, or connect a CMS for versioned assets.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Request a custom resource pack →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
