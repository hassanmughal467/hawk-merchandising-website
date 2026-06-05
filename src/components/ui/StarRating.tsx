import { cn } from "@/lib/cn";

type StarRatingProps = {
  rating: number;
  size?: "sm" | "md";
  className?: string;
};

export function StarRating({ rating, size = "md", className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const sizeClass = size === "sm" ? "text-sm" : "text-lg";

  return (
    <div
      className={cn("flex gap-0.5", sizeClass, className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < fullStars || (i === fullStars && hasHalf);
        return (
          <span
            key={i}
            className={cn(filled ? "text-amber-400" : "text-zinc-600")}
            aria-hidden
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
