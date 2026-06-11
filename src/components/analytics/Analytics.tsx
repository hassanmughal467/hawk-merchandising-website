import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";

/** Global analytics scripts — Meta Pixel and Google Analytics 4. */
export function Analytics() {
  return (
    <>
      <MetaPixel />
      <GoogleAnalytics />
    </>
  );
}
