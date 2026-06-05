"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { portfolioCategoryGroups, type PortfolioCategoryId } from "@/lib/content/portfolio";
import { cn } from "@/lib/cn";

const tabs: { id: PortfolioCategoryId; label: string }[] = [
  { id: "all", label: "All work" },
  ...portfolioCategoryGroups.map((g) => ({ id: g.id, label: g.label })),
];

type PortfolioCategoryNavProps = {
  basePath?: string;
};

export function PortfolioCategoryNav({ basePath = "/portfolio" }: PortfolioCategoryNavProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = (searchParams.get("category") as PortfolioCategoryId) || "all";

  return (
    <nav
      className="flex flex-wrap gap-2"
      aria-label="Portfolio categories"
    >
      {tabs.map((tab) => {
        const href =
          tab.id === "all"
            ? basePath
            : `${basePath}?category=${tab.id}`;
        const isActive = pathname === basePath && active === tab.id;

        return (
          <Link
            key={tab.id}
            href={href}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
              isActive
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-white/15 bg-white/5 text-zinc-300 hover:border-white/25 hover:text-white",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
