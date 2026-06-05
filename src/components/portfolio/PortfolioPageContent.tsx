"use client";

import { useSearchParams } from "next/navigation";
import { PortfolioCategoryNav } from "@/components/ui/PortfolioCategoryNav";
import { PortfolioGrid } from "@/components/ui/PortfolioGrid";
import {
  portfolioCategoryGroups,
  type PortfolioCategoryId,
} from "@/lib/content/portfolio";

function parseCategory(value: string | null): PortfolioCategoryId {
  if (!value) return "all";
  const valid = portfolioCategoryGroups.some((g) => g.id === value);
  return valid ? (value as PortfolioCategoryId) : "all";
}

export function PortfolioPageContent() {
  const searchParams = useSearchParams();
  const category = parseCategory(searchParams.get("category"));
  const group = portfolioCategoryGroups.find((g) => g.id === category);

  return (
    <>
      <PortfolioCategoryNav />
      {group ? (
        <p className="mt-6 text-sm text-zinc-500">
          Subcategories: {group.subcategories.join(" · ")}
        </p>
      ) : null}
      <div className="mt-10">
        <PortfolioGrid category={category} />
      </div>
      <p className="mt-10 text-center text-xs text-zinc-600">
        {category === "all"
          ? "36 examples shown — add real photography over time (target 30–50+)."
          : "Swap gradient placeholders for project photos when assets are ready."}
      </p>
    </>
  );
}
