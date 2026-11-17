"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { captureUtmsFromLocation } from "@/lib/analytics-events";

/** Persist utm_source / utm_medium from landing URLs for later conversion events. */
export function UtmCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    captureUtmsFromLocation();
  }, [pathname, searchParams]);

  return null;
}
