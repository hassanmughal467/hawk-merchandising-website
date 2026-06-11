import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { ServicePageContent } from "@/lib/content/service-pages";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  /** Use for pages that should not use the root title template (e.g. homepage). */
  absoluteTitle?: boolean;
};

function pageUrl(path: string): string {
  const base = site.url.replace(/\/$/, "");
  return path === "/" ? base : `${base}${path}`;
}

function fullTitle(title: string): string {
  return `${title} | ${site.name}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = pageUrl(path);
  const image = ogImage ?? site.ogImage.src;
  const imageAlt = site.ogImage.alt;
  const imageWidth = site.ogImage.width;
  const imageHeight = site.ogImage.height;
  const ogTitle = absoluteTitle ? title : fullTitle(title);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function buildServicePageMetadata(content: ServicePageContent): Metadata {
  return buildPageMetadata({
    title: content.metadata.title,
    description: content.metadata.description,
    path: content.path,
  });
}
