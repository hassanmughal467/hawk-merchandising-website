import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { ServiceLanding } from "@/components/marketing/ServiceLanding";
import { buildFAQSchema } from "@/lib/seo/faq-schema";
import { buildBreadcrumbSchema, serviceBreadcrumbs } from "@/lib/seo/breadcrumb-schema";
import { buildServiceSchema } from "@/lib/seo/service-schema";
import { getServiceFAQItems } from "@/lib/content/service-shared";
import type { ServicePageContent } from "@/lib/content/service-pages";

type ServicePageShellProps = {
  content: ServicePageContent;
};

export function ServicePageShell({ content }: ServicePageShellProps) {
  const faqItems = getServiceFAQItems(content.slug);
  const breadcrumbs = serviceBreadcrumbs(content.metadata.title, content.path);

  return (
    <>
      <JsonLdScript
        data={[
          buildServiceSchema(content),
          buildBreadcrumbSchema(breadcrumbs),
          buildFAQSchema(faqItems),
        ]}
      />
      <ServiceLanding content={content} faqItems={faqItems} />
    </>
  );
}
