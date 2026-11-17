import { PageHero } from "@/components/marketing/PageHero";
import { UploadForm } from "@/components/upload/UploadForm";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Upload your design",
  description:
    "Upload artwork for embroidery digitizing or vector conversion. Fast review and clear next steps from Hawk Merchandising.",
  path: "/upload",
});

type UploadPageProps = {
  searchParams: Promise<{ intent?: string | string[] }>;
};

export default async function UploadPage({ searchParams }: UploadPageProps) {
  const params = await searchParams;
  const intent = Array.isArray(params.intent) ? params.intent[0] : params.intent;

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
          <noscript>
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm text-zinc-300">
              <p>
                JavaScript is off, so the upload form cannot submit from this browser. Email your
                artwork to{" "}
                <a
                  className="font-semibold text-accent underline-offset-4 hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>{" "}
                instead.
              </p>
            </div>
          </noscript>
          <UploadForm intent={intent} />
        </div>
      </div>
    </div>
  );
}
