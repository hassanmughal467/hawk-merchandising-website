export const portfolioCategoryGroups = [
  {
    id: "embroidery-digitizing",
    label: "Embroidery Digitizing",
    subcategories: ["Original logo", "Digitized preview", "Final embroidered result"],
  },
  {
    id: "vector-conversion",
    label: "Vector Conversion",
    subcategories: ["Before", "After"],
  },
  {
    id: "custom-patches",
    label: "Custom Patches",
    subcategories: ["Embroidered", "PVC", "Woven", "Chenille"],
  },
] as const;

export type PortfolioCategoryId =
  | (typeof portfolioCategoryGroups)[number]["id"]
  | "all";

export type PortfolioLayout = "before-after" | "triple" | "single";

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategoryId, "all">;
  subcategory: string;
  layout: PortfolioLayout;
  description: string;
};

const embroiderySubcats = portfolioCategoryGroups[0].subcategories;
const vectorSubcats = portfolioCategoryGroups[1].subcategories;
const patchSubcats = portfolioCategoryGroups[2].subcategories;

function embroideryItems(start: number, count: number): PortfolioItem[] {
  const layouts: PortfolioLayout[] = ["triple", "before-after", "single"];
  return Array.from({ length: count }, (_, i) => {
    const n = start + i;
    const sub = embroiderySubcats[i % embroiderySubcats.length];
    return {
      id: `emb-${n}`,
      title: `Embroidery project ${String(n).padStart(2, "0")}`,
      category: "embroidery-digitizing" as const,
      subcategory: sub,
      layout: layouts[i % layouts.length],
      description: `${sub} — production-tested for caps, polos, and jacket backs.`,
    };
  });
}

function vectorItems(start: number, count: number): PortfolioItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = start + i;
    const sub = vectorSubcats[i % vectorSubcats.length];
    return {
      id: `vec-${n}`,
      title: `Vector conversion ${String(n).padStart(2, "0")}`,
      category: "vector-conversion" as const,
      subcategory: sub,
      layout: "before-after" as const,
      description: `${sub} — clean nodes, print-ready separations, embroidery-friendly paths.`,
    };
  });
}

function patchItems(start: number, count: number): PortfolioItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = start + i;
    const sub = patchSubcats[i % patchSubcats.length];
    return {
      id: `patch-${n}`,
      title: `Custom patch ${String(n).padStart(2, "0")}`,
      category: "custom-patches" as const,
      subcategory: sub,
      layout: "single" as const,
      description: `${sub} patch program — borders, color breaks, and factory-ready artwork.`,
    };
  });
}

/** 36 examples — swap gradient placeholders for real photography over time (target 30–50). */
export const portfolioItems: PortfolioItem[] = [
  ...embroideryItems(1, 14),
  ...vectorItems(1, 11),
  ...patchItems(1, 11),
];

export function getPortfolioCategoryLabel(id: PortfolioCategoryId): string {
  if (id === "all") return "All work";
  return portfolioCategoryGroups.find((g) => g.id === id)?.label ?? id;
}
