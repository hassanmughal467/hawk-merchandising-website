import Link from "next/link";

type CTAButtonsProps = {
  className?: string;
};

export function CTAButtons({ className = "" }: CTAButtonsProps) {
  return (
    <div className={`mt-10 flex flex-col gap-3 sm:flex-row ${className}`}>
      <Link
        href="/upload"
        className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
      >
        Upload your design
      </Link>
      <Link
        href="/contact"
        className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
      >
        Get a quote
      </Link>
    </div>
  );
}
