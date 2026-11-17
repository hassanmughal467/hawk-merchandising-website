import { Suspense } from "react";
import { ConversionLink } from "@/components/analytics/ConversionLink";
import { PageHero } from "@/components/marketing/PageHero";
import { UploadForm } from "@/components/upload/UploadForm";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Upload your design",
  description:
    "Upload artwork for embroidery digitizing or vector conversion. Fast review and clear next steps from Hawk Merchandising.",
  path: "/upload",
});

function UploadFallback() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-zinc-400">
      <p>Loading form…</p>
      <p className="mt-3">
        Or email your artwork to{" "}
        <ConversionLink
          href={`mailto:${site.email}`}
          event={CONVERSION_EVENTS.EMAIL_CLICK}
          eventParams={{ location: "upload_fallback" }}
          className="text-white underline-offset-4 hover:underline"
        >
          {site.email}
        </ConversionLink>
        .
      </p>
    </div>
  );
}

export default function UploadPage() {
  return (
    <div className="border-b border-white/10 bg-background">
      <PageHero
        align="center"
        logoSize="lg"
        title="Upload your design"
        subtitle="Send your artwork with a few details—we’ll confirm scope, timeline, and pricing quickly."
      />

      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-2xl">
          <Suspense fallback={<UploadFallback />}>
            <UploadForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
