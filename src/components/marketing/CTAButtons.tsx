import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type CTAButtonsProps = {
  className?: string;
  showLogin?: boolean;
};

export function CTAButtons({ className = "", showLogin = true }: CTAButtonsProps) {
  return (
    <div className={cn("mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <Link
        href="/upload?intent=sample"
        className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
      >
        Get free quote
      </Link>
      <Link
        href="/upload"
        className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
      >
        Upload artwork
      </Link>
      {showLogin ? (
        <a
          href={site.clientPortal.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
        >
          {site.clientPortal.label}
        </a>
      ) : null}
    </div>
  );
}
