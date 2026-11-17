/**
 * Public resource page flags.
 * Flip to true when real content is ready; redirects, nav, footer, and sitemap follow these.
 *
 * Re-enable checklist:
 * - videos: add real clips in videos.ts, set videos: true
 * - freeDownloads: add PDF items in free-downloads.ts, set freeDownloads: true
 * - stockDesigns: add categories in stock-designs.ts, set stockDesigns: true
 */
export const resourceFlags = {
  videos: false,
  freeDownloads: false,
  stockDesigns: false,
} as const;
