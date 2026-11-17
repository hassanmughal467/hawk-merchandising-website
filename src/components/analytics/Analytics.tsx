import { Suspense } from "react";
import { AnalyticsDebug } from "@/components/analytics/AnalyticsDebug";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { UtmCapture } from "@/components/analytics/UtmCapture";

/** Global analytics scripts — Meta Pixel and Google Analytics 4. */
export function Analytics() {
  return (
    <>
      <MetaPixel />
      <GoogleAnalytics />
      <Suspense fallback={null}>
        <UtmCapture />
      </Suspense>
      {process.env.NODE_ENV === "development" ? <AnalyticsDebug /> : null}
    </>
  );
}
