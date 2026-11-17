import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/lib/content/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} — how we handle uploads, contact details, analytics, and communications.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacyPolicy.pageHeading}
      lastUpdated={privacyPolicy.lastUpdated}
      intro={privacyPolicy.intro}
      sections={privacyPolicy.sections}
      emailEventLocation="privacy_page"
    />
  );
}
