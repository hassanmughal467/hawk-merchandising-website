import { AnalyticsDebug } from "@/components/analytics/AnalyticsDebug";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";

/** Global analytics scripts — Meta Pixel and Google Analytics 4. */
export function Analytics() {
  return (
    <>
      <MetaPixel />
      <GoogleAnalytics />
      {process.env.NODE_ENV === "development" ? <AnalyticsDebug /> : null}
    </>
  );
}
