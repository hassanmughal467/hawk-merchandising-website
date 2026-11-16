import { resourceFlags } from "@/lib/content/resource-flags";

/**
 * Free Downloads page content.
 * Controlled by resourceFlags.freeDownloads in resource-flags.ts.
 */
export const freeDownloadsPage = {
  enabled: resourceFlags.freeDownloads,
} as const;

export type FreeDownloadItem = {
  title: string;
  description: string;
  tag: string;
  href: string;
  note: string;
};

/** Populate with real asset URLs before setting enabled: true */
export const freeDownloads: FreeDownloadItem[] = [];
