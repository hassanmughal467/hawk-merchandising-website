import Link from "next/link";
import { CTAButtons } from "@/components/marketing/CTAButtons";
import { PageHero } from "@/components/marketing/PageHero";
import type { ServicePageContent } from "@/lib/content/service-pages";

type ServiceLandingProps = {
  content: ServicePageContent;
};

export function ServiceLanding({ content }: ServiceLandingProps) {
  return (
    <div className="bg-background">
      <PageHero eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <CTAButtons />
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            What you get
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {content.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.deliverables ? (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              Deliverable formats
            </h2>
            <ul className="mt-10 flex flex-wrap gap-2">
              {content.deliverables.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content.processSteps ? (
        <section className="border-b border-white/10 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              Process
            </h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-3">
              {content.processSteps.map((row) => (
                <li key={row.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs font-semibold text-accent">{row.step}</p>
                  <p className="mt-3 font-semibold text-white">{row.title}</p>
                  <p className="mt-2 text-sm text-zinc-400">{row.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {content.relatedLinks ? (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Related</p>
            <ul className="mt-4 flex flex-wrap gap-4">
              {content.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  );
}
