"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

type SewOutImageProps = {
  src: string;
  alt: string;
  label?: string;
  badges?: readonly string[];
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
  showApprovedBadge?: boolean;
};

export function SewOutImage({
  src,
  alt,
  label,
  badges,
  className,
  aspectClassName = "aspect-[4/3]",
  priority = false,
  showApprovedBadge = false,
}: SewOutImageProps) {
  return (
    <div className={cn("group/img relative overflow-hidden rounded-2xl", className)}>
      <div className={cn("relative overflow-hidden", aspectClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.04]"
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/img:opacity-100" />
      </div>

      {label ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {label}
        </span>
      ) : null}

      {showApprovedBadge ? (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12.5L10 17.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Approved
        </span>
      ) : null}

      {badges && badges.length > 0 ? (
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-black/60 px-2 py-0.5 text-xs font-semibold text-zinc-100 backdrop-blur-sm"
            >
              ✓ {badge}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
