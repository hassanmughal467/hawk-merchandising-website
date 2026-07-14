"use client";

import Link from "next/link";
import { type ConversionEvent, trackConversion } from "@/lib/analytics-events";

type ConversionLinkProps = {
  href: string;
  event: ConversionEvent;
  eventParams?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

/** Link or anchor that fires a GA4 conversion event on click. */
export function ConversionLink({
  href,
  event,
  eventParams,
  children,
  className,
  target,
  rel,
  "aria-label": ariaLabel,
  onClick,
}: ConversionLinkProps) {
  const handleClick = () => {
    trackConversion(event, eventParams);
    onClick?.();
  };

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
