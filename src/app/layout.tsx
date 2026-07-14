import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExitIntentModal } from "@/components/layout/ExitIntentModal";
import { StickyQuoteBar } from "@/components/layout/StickyQuoteBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Analytics } from "@/components/analytics/Analytics";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { GOOGLE_SITE_VERIFICATION } from "@/lib/analytics";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/seo/organization-schema";
import { site } from "@/lib/site";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Digitizing & Vector Art`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "embroidery digitizing",
    "vector art",
    "logo digitizing",
    "cap digitizing",
    "custom patches",
    "DST",
    "PES",
    "embroidery file",
  ],
  openGraph: {
    title: `${site.name} | Digitizing & Vector Art`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: site.ogImage.src,
        width: site.ogImage.width,
        height: site.ogImage.height,
        alt: site.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Digitizing & Vector Art`,
    description: site.description,
    images: [site.ogImage.src],
  },
  icons: {
    icon: site.logo.src,
    apple: site.logo.src,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
  ...(GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-base text-foreground">
        <Analytics />
        <JsonLdScript data={[buildOrganizationSchema(), buildLocalBusinessSchema()]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyQuoteBar />
        <WhatsAppFloat />
        <ExitIntentModal />
      </body>
    </html>
  );
}
