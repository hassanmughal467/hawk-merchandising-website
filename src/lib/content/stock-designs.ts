import { resourceFlags } from "@/lib/content/resource-flags";

/**
 * Stock Designs page content.
 * Controlled by resourceFlags.stockDesigns in resource-flags.ts.
 */
export const stockDesignsPage = {
  enabled: resourceFlags.stockDesigns,
} as const;

export type StockDesignCategory = {
  name: string;
  slug: string;
  /** Omit or leave empty until the category has real designs */
  countLabel?: string;
  href?: string;
};

/** Populate with real categories before setting enabled: true */
export const stockDesignCategories: StockDesignCategory[] = [];
