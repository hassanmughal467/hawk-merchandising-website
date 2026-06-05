import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";

type RelatedService = {
  href: string;
  title: string;
  description: string;
};

type RelatedServicesSectionProps = {
  services: RelatedService[];
  title?: string;
};

export function RelatedServicesSection({
  services,
  title = "Related services",
}: RelatedServicesSectionProps) {
  if (services.length === 0) return null;

  return (
    <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          One partner for digitizing, vector conversion, logo redraw, and patch artwork—consistent quality across every output.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              title={service.title}
              description={service.description}
              href={service.href}
              variant="light"
            />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="focus-ring text-sm font-semibold text-accent-secondary hover:text-accent"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
