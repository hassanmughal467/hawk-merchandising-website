import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsOfService } from "@/lib/content/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${site.name} embroidery digitizing, custom patches, and print-ready artwork.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title={termsOfService.pageHeading}
      lastUpdated={termsOfService.lastUpdated}
      intro={termsOfService.intro}
      sections={termsOfService.sections}
      emailEventLocation="terms_page"
    />
  );
}
