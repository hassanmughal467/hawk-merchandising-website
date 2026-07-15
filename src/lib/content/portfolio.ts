import { portfolioSrc } from "@/lib/content/portfolio-assets";

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
  imageSrc: string;
};

const embroiderySubcats = portfolioCategoryGroups[0].subcategories;
const vectorSubcats = portfolioCategoryGroups[1].subcategories;
const patchSubcats = portfolioCategoryGroups[2].subcategories;

function titleFromFile(filename: string): string {
  return filename.replace(/\.[^.]+$/, "");
}

function idFromFile(filename: string): string {
  return titleFromFile(filename)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function patchSubcategory(filename: string, index: number): string {
  const lower = filename.toLowerCase();
  if (lower.includes("pvc")) return "PVC";
  if (lower.includes("woven")) return "Woven";
  if (lower.includes("chenille")) return "Chenille";
  if (lower.includes("leather")) return "Embroidered";
  return patchSubcats[index % patchSubcats.length];
}

function buildItems(
  files: readonly string[],
  category: Exclude<PortfolioCategoryId, "all">,
  subcats: readonly string[],
  description: (subcategory: string) => string,
  subcategoryForFile?: (filename: string, index: number) => string,
): PortfolioItem[] {
  return files.map((file, index) => {
    const subcategory = subcategoryForFile
      ? subcategoryForFile(file, index)
      : subcats[index % subcats.length];

    return {
      id: idFromFile(file),
      title: titleFromFile(file),
      category,
      subcategory,
      layout: "single",
      description: description(subcategory),
      imageSrc: portfolioSrc(file),
    };
  });
}

const embroideryFiles = [
  "Embroidery project 01.jpeg",
  "Embroidery project 01(1).jpeg",
  "Embroidery project 01(2).jpeg",
  "Embroidery project 02.jpeg",
  "Embroidery project 03.jpg",
  "Embroidery project 04.jpeg",
  "Embroidery project 04(1).jpeg",
  "Embroidery project 04(2).jpeg",
  "Embroidery project 05.jpeg",
  "Embroidery project 06.jpg",
  "Embroidery project 07.jpg",
  "Embroidery project 07(1).jpg",
  "Embroidery project 08.jpeg",
  "Embroidery project 09.jfif",
  "embroidery project 11(1).jpg",
  "EmbroIdery project 11.jpg",
  "Embroidery project 12.jpg",
  "Embroidery project 14.jpg",
  "Embroidery project 14(1).jpg",
  "3D puff cap embroidery.png",
  "BEFORE AND AFTER DIGITIZING.png",
  "Corporate Polo Left Chest.jpeg",
  "embroidered polo shirt .png",
  "Healthcare Uniform Program.jfif",
  "military design logo.png",
  "Restaurant Logo .png",
  "Raised Foam Cap Mark.png",
  "school logo.png",
  "Sports Team Logo .png",
  "Structured Cap Logo.png",
  "Team Jacket Full Back.png",
  "Uniform Left Chest Program.png",
  "Uniform Woven Shoulder Mark.jpeg",
  "Trade Show Promo Tote.png",
] as const;

const vectorFiles = [
  "Vector conversion 01.jpg",
  "Vector conversion 02.jpg",
  "Vector conversion 03.jpg",
  "Vector conversion 04.jpg",
  "Vector conversion 05.jpeg",
  "Vector conversion 06.jpg",
  "Vector conversion 07.jpg",
  "Vector conversion 08.jpg",
  "Vector conversion 09.jpg",
  "Vector conversion 10.jpg",
  "Vector conversion 11.PNG",
  "Screen Print Vector Master.jpeg",
  "Fashion Brand Artwork.png",
  "Promotional Brand Artwork.png",
  "Construction Company Logo.png",
  "CORPORATE LOGO .png",
] as const;

const patchFiles = [
  "Custom patch 01.PNG",
  "Custom patch 02.png",
  "Custom patch 03.png",
  "Custom patch 04.png",
  "Custom patch 05.png",
  "Custom patch 06.png",
  "Custom patch 07.png",
  "Custom patch 09.png",
  "Custom patch 10.png",
  "Custom patch 11.png",
  "custom PVC patch.png",
  "Outdoor Brand PVC Badge.png",
  "Premium Leather Deboss Patch.png",
  "Varsity Chenille Letter.png",
  "woven patch program.png",
] as const;

export const portfolioItems: PortfolioItem[] = [
  ...buildItems(
    embroideryFiles,
    "embroidery-digitizing",
    embroiderySubcats,
    (sub) => `${sub} — production-tested for caps, polos, and jacket backs.`,
  ),
  ...buildItems(
    vectorFiles,
    "vector-conversion",
    vectorSubcats,
    (sub) => `${sub} — clean nodes, print-ready separations, embroidery-friendly paths.`,
  ),
  ...buildItems(
    patchFiles,
    "custom-patches",
    patchSubcats,
    (sub) => `${sub} patch program — borders, color breaks, and factory-ready artwork.`,
    patchSubcategory,
  ),
];

export function getPortfolioCategoryLabel(id: PortfolioCategoryId): string {
  if (id === "all") return "All work";
  return portfolioCategoryGroups.find((g) => g.id === id)?.label ?? id;
}
