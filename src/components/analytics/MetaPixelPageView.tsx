"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.fbq) return;

    window.fbq("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}
