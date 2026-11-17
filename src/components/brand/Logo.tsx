import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export const logoSizes = {
  xs: "h-8",
  sm: "h-9",
  md: "h-11",
  lg: "h-16",
  xl: "h-20",
  "2xl": "h-28",
} as const;

/** Approximate displayed height in CSS pixels for each size token. */
const logoDisplayHeightPx: Record<keyof typeof logoSizes, number> = {
  xs: 32,
  sm: 36,
  md: 44,
  lg: 64,
  xl: 80,
  "2xl": 112,
};

export type LogoSize = keyof typeof logoSizes;
export type LogoVariant = "full" | "icon" | "light";

type LogoProps = {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
  /** Pass `null` to render without a home link. Default links to `/`. */
  href?: string | null;
};

function getLogoAsset(variant: LogoVariant) {
  switch (variant) {
    case "icon":
      return site.logo.icon;
    case "light":
      return site.logo.light;
    default:
      return site.logo;
  }
}

/**
 * Encode width/height near 2× the displayed size so next/image does not
 * request the full intrinsic asset (e.g. 2048w for a ~40px-tall header logo).
 */
function displayDimensions(
  asset: { width: number; height: number },
  size: LogoSize,
  className?: string,
) {
  let displayH = logoDisplayHeightPx[size];
  // Navbar overrides size with h-9 / sm:h-10 — prefer the larger breakpoint.
  if (className?.includes("sm:h-10")) displayH = 40;
  else if (className?.includes("h-12") || className?.includes("sm:h-14")) displayH = 56;
  else if (className?.includes("h-14")) displayH = 56;

  const ratio = asset.width / asset.height;
  const displayW = Math.round(displayH * ratio);
  // 2× for retina, capped so we never upscale past the source.
  const width = Math.min(asset.width, displayW * 2);
  const height = Math.min(asset.height, displayH * 2);
  return { width, height, sizes: `${displayW}px` };
}

export function Logo({
  size = "md",
  variant = "full",
  className,
  priority = false,
  href = "/",
}: LogoProps) {
  const asset = getLogoAsset(variant);
  const { width, height, sizes } = displayDimensions(asset, size, className);

  const image = (
    <Image
      src={asset.src}
      alt={site.logo.alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={cn("w-auto object-contain", logoSizes[size], className)}
    />
  );

  if (href === null) {
    return <span className="inline-flex shrink-0">{image}</span>;
  }

  return (
    <Link href={href} className="focus-ring inline-flex shrink-0 rounded-md" aria-label={site.name}>
      {image}
    </Link>
  );
}
