import Link from "next/link";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  className?: string;
};

export function ServiceCard({ title, description, href, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition hover:border-accent/30",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/15" />
      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
      <Link
        href={href}
        className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-gradient transition hover:opacity-80"
      >
        Learn more
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}
