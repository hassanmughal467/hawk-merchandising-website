import type { Review } from "@/lib/content/reviews";
import { cn } from "@/lib/cn";
import { GoogleBranding } from "@/components/ui/GoogleBranding";
import { StarRating } from "@/components/ui/StarRating";

type GoogleReviewCardProps = {
  review: Review;
  className?: string;
};

export function GoogleReviewCard({ review, className }: GoogleReviewCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5",
        className,
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">
            {review.reviewerName}
          </p>
          <time
            dateTime={review.date}
            className="mt-1 block text-[10px] uppercase tracking-wide text-zinc-500"
          >
            {review.dateDisplay}
          </time>
        </div>
        <GoogleBranding showLabel={false} className="shrink-0 opacity-80" />
      </header>

      <StarRating rating={review.rating} size="sm" className="mt-3" />

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {review.reviewText}
      </p>

      <footer className="mt-4 border-t border-white/10 pt-3">
        <p className="text-[10px] uppercase tracking-wide text-zinc-600">
          Posted on {review.source === "google" ? "Google" : review.source}
        </p>
      </footer>
    </article>
  );
}
