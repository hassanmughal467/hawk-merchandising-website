/**
 * Shared turnaround claims — use site-wide for consistency.
 * Digitizing / artwork file delivery vs custom patch production are separate.
 */
export const turnaround = "2–3 hour turnaround" as const;

export const patchesTurnaround = "10–12 business days after design approval" as const;

/** Structured helpers for digitizing / artwork file delivery. */
export const turnaroundTimes = {
  claim: turnaround,
  label: "Turnaround",
  badge: turnaround,
  note: "Complex jobs or heavy revision rounds may require a quoted timeline upfront.",
} as const;

/** Structured helpers for custom patch production. */
export const patchesTurnaroundTimes = {
  claim: patchesTurnaround,
  label: "Patch production",
  badge: patchesTurnaround,
  note: "Production timing starts after design approval. Artwork prep follows our digitizing turnaround when applicable.",
} as const;

export const machineSewOutMessage =
  "We can provide a machine sew-out sample before production to ensure quality, accuracy, and complete customer satisfaction." as const;
