"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReviewsData } from "@/lib/content/reviews";
import { cn } from "@/lib/cn";
import { GoogleBranding } from "@/components/ui/GoogleBranding";
import { GoogleReviewCard } from "@/components/ui/GoogleReviewCard";
import { StarRating } from "@/components/ui/StarRating";

type GoogleReviewsProps = {
  data: ReviewsData;
  /** Max review cards shown in the carousel/grid */
  maxReviews?: number;
  className?: string;
};

function CarouselNavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous reviews" : "Next reviews"}
      className={cn(
        "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white transition hover:bg-white/10 disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      {direction === "prev" ? "←" : "→"}
    </button>
  );
}

export function GoogleReviews({
  data,
  maxReviews,
  className,
}: GoogleReviewsProps) {
  const { summary, reviews } = data;
  const visibleReviews = maxReviews ? reviews.slice(0, maxReviews) : reviews;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(visibleReviews.length > 1);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scroll = useCallback((direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-review-card]")?.offsetWidth ?? 320;
    const gap = 12;
    el.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateScrollState, visibleReviews.length]);

  return (
    <div className={cn("flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between", className)}>
      <div className="max-w-md shrink-0">
        <GoogleBranding className="mb-4" />

        <h2
          id="google-reviews-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Rated by production teams worldwide
        </h2>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StarRating rating={summary.averageRating} />
          <p className="text-sm text-zinc-400">
            <span className="font-semibold text-white">
              {summary.averageRating.toFixed(1)}
            </span>
            <span aria-hidden> · </span>
            <span>
              {summary.totalReviewCount.toLocaleString()} reviews
            </span>
          </p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          Verified feedback from embroidery shops, apparel brands, and print teams
          who rely on Hawk for production-ready files.
        </p>

        <div className="mt-6">
          <Link
            href={summary.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            View All Reviews
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex items-center justify-end gap-2 lg:hidden">
          <CarouselNavButton
            direction="prev"
            onClick={() => scroll("prev")}
            disabled={!canScrollPrev}
          />
          <CarouselNavButton
            direction="next"
            onClick={() => scroll("next")}
            disabled={!canScrollNext}
          />
        </div>

        {/* Mobile / tablet: horizontal scroll carousel */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              data-review-card
              className="w-[min(100%,20rem)] shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <GoogleReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Desktop: responsive grid */}
        <div className="hidden gap-3 sm:grid-cols-2 lg:grid lg:grid-cols-2">
          {visibleReviews.map((review) => (
            <GoogleReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
