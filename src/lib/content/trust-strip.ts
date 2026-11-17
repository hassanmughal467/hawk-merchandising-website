import { patchesTurnaround, turnaround } from "@/lib/content/turnaround";

export const trustStripItems = [
  { label: "Unlimited Stitches" },
  { label: turnaround },
  { label: "Machine Sew-Out Available" },
  { label: "Production Ready Files" },
  { label: "Quality Guaranteed" },
] as const;

/** Trust strip for custom patch service pages — uses patch production timing. */
export const patchTrustStripItems = [
  { label: "Unlimited Stitches" },
  { label: patchesTurnaround },
  { label: "Production Ready Files" },
  { label: "Quality Guaranteed" },
] as const;
