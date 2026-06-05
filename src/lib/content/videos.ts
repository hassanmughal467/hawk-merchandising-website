export type PortfolioVideo = {
  id: string;
  title: string;
  description: string;
  category: "digitizing" | "vector" | "patches" | "customer";
  /** YouTube or Vimeo embed URL — add when clips are ready */
  embedUrl?: string;
  duration?: string;
};

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: "machine-stitch",
    title: "Embroidery machine stitching — cap logo run",
    description: "Watch a production cap job from first needle to trim—registration and density tuned for curved panels.",
    category: "digitizing",
    duration: "2:14",
  },
  {
    id: "vector-before-after",
    title: "Before / after vector conversion",
    description: "Raster logo rebuilt as clean vector art with separations ready for screen print and vinyl.",
    category: "vector",
    duration: "1:45",
  },
  {
    id: "patch-production",
    title: "Custom patch production overview",
    description: "From approved artwork through embroidered, woven, and PVC patch samples.",
    category: "patches",
    duration: "3:02",
  },
  {
    id: "jacket-back",
    title: "Jacket back — large format embroidery",
    description: "Large-fill sequencing and underlay strategy for a multi-head production run.",
    category: "digitizing",
    duration: "2:38",
  },
  {
    id: "customer-uniform",
    title: "Customer project — corporate uniform program",
    description: "Left-chest and name-badge consistency across a 500-piece uniform rollout.",
    category: "customer",
    duration: "2:05",
  },
  {
    id: "pvc-patch",
    title: "PVC patch color breaks & molding prep",
    description: "Vector color breaks and layer structure aligned to PVC vendor specifications.",
    category: "patches",
    duration: "1:52",
  },
];

export const videoCategoryLabels: Record<PortfolioVideo["category"], string> = {
  digitizing: "Digitizing",
  vector: "Vector",
  patches: "Patches",
  customer: "Customer projects",
};
