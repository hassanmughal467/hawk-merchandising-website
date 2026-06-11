"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, logAnalytics } from "@/lib/analytics";

export function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    const track = () => {
      if (!window.gtag) return false;

      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
      logAnalytics({ source: "ga4", event: "page_view", path: pagePath });
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
