import { PortfolioCategoryNav } from "@/components/ui/PortfolioCategoryNav";
import { PortfolioGrid } from "@/components/ui/PortfolioGrid";
import {
  portfolioCategoryGroups,
  portfolioItems,
  type PortfolioCategoryId,
} from "@/lib/content/portfolio";

export function parsePortfolioCategory(value: string | null | undefined): PortfolioCategoryId {
  if (!value) return "all";
  const valid = portfolioCategoryGroups.some((g) => g.id === value);
  return valid ? (value as PortfolioCategoryId) : "all";
}

type PortfolioPageContentProps = {
  category?: PortfolioCategoryId;
};

export function PortfolioPageContent({ category = "all" }: PortfolioPageContentProps) {
  const group = portfolioCategoryGroups.find((g) => g.id === category);

  return (
    <>
      <PortfolioCategoryNav active={category} />
      {group ? (
        <p className="mt-6 text-sm text-zinc-500">
          Subcategories: {group.subcategories.join(" · ")}
        </p>
      ) : null}
      <div className="mt-10">
        <PortfolioGrid category={category} />
      </div>
      <p className="mt-10 text-center text-xs text-zinc-600">
        {portfolioItems.length} examples across embroidery digitizing, vector conversion, and custom
        patches.
      </p>
    </>
  );
}
