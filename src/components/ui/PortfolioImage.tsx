import Image from "next/image";
import { cn } from "@/lib/cn";

type PortfolioImageProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  priority?: boolean;
};

export function PortfolioImage({
  src,
  alt,
  className,
  label,
  priority = false,
}: PortfolioImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-zinc-900", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {label ? (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/60 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-200">
          {label}
        </span>
      ) : null}
    </div>
  );
}
