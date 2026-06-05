import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  tone?: "dark" | "light";
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  title,
  tone = "dark",
  className,
}: TestimonialCardProps) {
  const isLight = tone === "light";

  return (
    <figure
      className={cn(
        "relative h-full rounded-2xl border p-6",
        isLight
          ? "border-zinc-200 bg-white text-zinc-950 shadow-sm"
          : "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]",
        className,
      )}
    >
      <div className={cn("text-accent", isLight && "text-accent-secondary")} aria-hidden>
        “
      </div>
      <blockquote
        className={cn("mt-2 text-sm leading-relaxed", isLight ? "text-zinc-700" : "text-zinc-300")}
      >
        {quote}
      </blockquote>
      <figcaption className={cn("mt-5 border-t pt-5", isLight ? "border-zinc-200" : "border-white/10")}>
        <p className={cn("text-sm font-semibold", isLight ? "text-zinc-950" : "text-white")}>
          {name}
        </p>
        <p className={cn("mt-1 text-xs", isLight ? "text-zinc-500" : "text-zinc-500")}>{title}</p>
      </figcaption>
    </figure>
  );
}
