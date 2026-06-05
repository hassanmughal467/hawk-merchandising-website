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

export function Logo({
  size = "md",
  variant = "full",
  className,
  priority = false,
  href = "/",
}: LogoProps) {
  const asset = getLogoAsset(variant);

  const image = (
    <Image
      src={asset.src}
      alt={site.logo.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
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
