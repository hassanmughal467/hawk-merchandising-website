/** Central turnaround messaging — use site-wide for consistency */
export const turnaroundTimes = {
  fastest: "3–4 Hours",
  fastestLabel: "Fastest Turnaround",
  fastestBadge: "⚡ Fastest Turnaround: 3–4 Hours",
  standard: "Within 12 Hours",
  standardLabel: "Standard Delivery",
  standardBadge: "✓ Standard Delivery: Within 12 Hours",
  rush: "Available in 2 Hours",
  rushLabel: "Rush Orders",
  rushBadge: "🚀 Rush Service: 2 Hours",
  note: "Complex jobs or heavy revision rounds may require a quoted timeline upfront.",
} as const;

export const machineSewOutMessage =
  "We can provide a machine sew-out sample before production to ensure quality, accuracy, and complete customer satisfaction." as const;
