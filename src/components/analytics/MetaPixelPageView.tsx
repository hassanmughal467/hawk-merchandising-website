"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { logAnalytics } from "@/lib/analytics";

export function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    const track = () => {
      if (!window.fbq) return false;

      window.fbq("track", "PageView");
      logAnalytics({ source: "meta-pixel", event: "page_view", path: pagePath });
      return true;
    };

    if (track()) return;

    const intervalId = window.setInterval(() => {
      if (track()) window.clearInterval(intervalId);
    }, 100);

    return () => window.clearInterval(intervalId);
  }, [pathname, searchParams]);

  return null;
}
