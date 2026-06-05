import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hawk Merchandising for quotes, rush jobs, and production questions—email, phone, or WhatsApp.",
};

export default function ContactPage() {
  const wa = `https://wa.me/${site.whatsappE164}`;

  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Contact"
        title="Let’s talk production"
        subtitle="Share your deadline, garment type, and desired outcome—we’ll respond with next steps."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
              Direct lines
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone (US)</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={`tel:${site.phoneUs.replace(/\s/g, "")}`}>
                    {site.phoneUs}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone (UK)</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={`tel:${site.phoneUk.replace(/\s/g, "")}`}>
                    {site.phoneUk}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">WhatsApp</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={wa} target="_blank" rel="noreferrer">
                    Message us
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Offices</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{site.addressUs}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{site.addressUk}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                Fastest path to a quote
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Upload your artwork with placement notes—our team can estimate complexity quickly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/upload"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
                >
                  Go to upload
                </Link>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
              <p className="mt-8 text-xs text-zinc-600">
                Typical response: same business day for most requests. Rush options available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
