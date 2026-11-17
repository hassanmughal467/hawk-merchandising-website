import Image from "next/image";
import { cn } from "@/lib/cn";

/** Default sizes for a 2–4 column portfolio tile. */
export const PORTFOLIO_TILE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw";

/** Before/after panels sit two-across inside a card (≈ half a tile). */
export const BEFORE_AFTER_PANEL_SIZES =
  "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw";

/** Hero slider fills roughly half the content column on large screens. */
export const HERO_SLIDE_SIZES = "(max-width: 1024px) 92vw, 560px";

type PortfolioImageProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  /** Override next/image `sizes` to match rendered width. */
  sizes?: string;
};

export function PortfolioImage({
  src,
  alt,
  className,
  label,
  priority = false,
  fit = "cover",
  sizes = PORTFOLIO_TILE_SIZES,
}: PortfolioImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-zinc-900", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        sizes={sizes}
      />
      {label ? (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/60 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-200">
          {label}
        </span>
      ) : null}
    </div>
  );
}
