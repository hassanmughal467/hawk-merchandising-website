import { ConversionLink } from "@/components/analytics/ConversionLink";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";

type CTAButtonsProps = {
  className?: string;
  showLogin?: boolean;
};

export function CTAButtons({ className = "", showLogin = true }: CTAButtonsProps) {
  return (
    <div className={cn("mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <ConversionLink
        href="/upload?intent=sample"
        event={CONVERSION_EVENTS.QUOTE_BUTTON_CLICK}
        eventParams={{ location: "cta_buttons" }}
        className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
      >
        Get free quote
      </ConversionLink>
      <ConversionLink
        href="/upload"
        event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
        eventParams={{ location: "cta_buttons" }}
        className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
      >
        Upload artwork
      </ConversionLink>
      {showLogin ? (
        <ConversionLink
          href={site.clientPortal.url}
          event={CONVERSION_EVENTS.LOGIN}
          eventParams={{ location: "cta_buttons" }}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
        >
          {site.clientPortal.label}
        </ConversionLink>
      ) : null}
    </div>
  );
}
