/**
 * Draft Terms of Service and Privacy Policy (Appendix A of the website fixes brief).
 * For owner review before deploy — do not describe as lawyer-approved.
 */

export const LEGAL_CONTACT_EMAIL = "sales@hawkmerchandising.com" as const;

export const LEGAL_LAST_UPDATED = "17 November 2026" as const;

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export const termsOfService = {
  title: "Terms of Service",
  pageHeading: "Hawk Merchandising — Terms of Service",
  lastUpdated: LEGAL_LAST_UPDATED,
  intro:
    "These terms govern orders and enquiries made through hawkmerchandising.com and related email or messaging channels. By requesting a quote, submitting a free trial, placing an order or using this website, you agree to these terms.",
  sections: [
    {
      title: "1. Who we are",
      paragraphs: [
        "Hawk Merchandising provides embroidery digitizing (including cap, jacket back and 3D puff), custom patch artwork (embroidered, woven, PVC, chenille and leather) and print-ready artwork (vector conversion, logo redraw, DTF and sublimation artwork) for embroidery shops, uniform suppliers, promotional product distributors, apparel and clothing brands, designers, teams and organizations.",
        "Hawk Merchandising LLC. London office: 22 Wenlock Rd, London N1 7GU, UK. United States office: Durham, NC 27713, USA. Public email: sales@hawkmerchandising.com. Support available 24/7, 7 days a week.",
      ],
    },
    {
      title: "2. Orders and quotes",
      paragraphs: [
        "A request for a quote or a free trial is not an order until we confirm that we have accepted the work and, where payment is required, payment terms have been agreed. Please send clear artwork and tell us the garment, size, placement and the file format you need. We may ask for more detail before we start. Quotes are based on the artwork and instructions you supply. Complex vector art is quoted according to the level of detail.",
      ],
    },
    {
      title: "3. Prices and payment",
      paragraphs: [
        'Current standard rates, which may be updated on the pricing page, are: $4 flat rate for embroidery designs up to 5"; $8 flat rate for embroidery designs from 5" to 12"; $4 flat rate for simple vector art; complex vector art quoted based on detail. Any other work is priced on quote. Invoices and payment instructions are sent by email. Unless we agree otherwise in writing, work is delivered after the agreed payment has been received. You are responsible for any bank or card fees on your side.',
      ],
    },
    {
      title: "4. Turnaround and delivery",
      paragraphs: [
        "Our standard turnaround is a 2–3 hour turnaround, measured on the files and instructions we have accepted and starting when we have everything we need to begin. There is no separate rush tier. We will tell you if a job cannot reasonably be completed in that window (for example unusually large or unclear artwork). Finished files are delivered electronically to the email or account you give us.",
      ],
    },
    {
      title: "5. What you receive with every file",
      paragraphs: [
        "Every production file is checked by a person before delivery. A running sheet and a stitch preview come with every file. A sew-out is available on request and is not automatically included unless we agree it for that job.",
      ],
    },
    {
      title: "6. Revisions",
      paragraphs: [
        "We offer unlimited revisions so the file matches the artwork and instructions you supplied. Please send revision requests in one place, with clear notes. Revisions that change the original scope (a new logo, a different garment type, a new size or a new design) may be treated as new work and quoted separately.",
      ],
    },
    {
      title: "7. Free trial",
      paragraphs: [
        "We offer a free trial design to check our quality. The trial is intended for quality checking before you place paid work with us. We may decline a trial request that is not a genuine quality check, or that we cannot reasonably complete from the artwork provided. A sew-out is available on request and is not automatically part of the trial unless we agree it.",
      ],
    },
    {
      title: "8. Artwork, confidentiality and ownership",
      paragraphs: [
        "You must have the right to use the artwork you send us. You remain responsible for the underlying logo and design rights. We keep your artwork confidential and do not use it in our marketing without your permission. We own the working methods, digitizing techniques and tools we use. After full payment, you receive a licence to use the delivered files for your production of the design we were asked to prepare. You may not resell our files as stock digitizing or stock artwork.",
      ],
    },
    {
      title: "9. Refunds",
      paragraphs: [
        "Because this is custom digital work, we do not offer a refund once files have been delivered and you have had a reasonable chance to review them, except where the files we delivered do not match the artwork and instructions we accepted and we have not been given a fair opportunity to revise them under section 6. If we have not yet started your paid work, we will refund the amount you paid for that job. Free trial work is provided at no charge and has no refund. If you believe a charge is wrong, email sales@hawkmerchandising.com and we will look into it.",
      ],
    },
    {
      title: "10. Acceptable use of this website",
      paragraphs: [
        "Do not misuse the site, attempt to gain unauthorised access, or submit content that you do not have the right to use. We may refuse, pause or cancel work that appears unlawful, that infringes someone else's rights, or that falls outside the services we offer.",
      ],
    },
    {
      title: "11. Limitation of liability",
      paragraphs: [
        "The files we deliver are production-ready artwork and stitch files prepared from the materials you supply. You are responsible for testing files on your equipment and for your own production. To the fullest extent permitted by law, we are not liable for lost profits, production waste, or indirect or consequential loss, and our total liability for a job is limited to the amount you paid us for that job. Nothing in these terms limits liability that cannot legally be limited.",
      ],
    },
    {
      title: "12. Changes",
      paragraphs: [
        'We may update these terms from time to time. The "Last updated" date will change when we do. The terms in place when you place an order apply to that order.',
      ],
    },
    {
      title: "13. Contact",
      paragraphs: [
        "Questions about these terms or an order: sales@hawkmerchandising.com. Support available 24/7, 7 days a week. London: 22 Wenlock Rd, London N1 7GU, UK.",
      ],
    },
  ] satisfies LegalSection[],
} as const;

export const privacyPolicy = {
  title: "Privacy Policy",
  pageHeading: "Hawk Merchandising — Privacy Policy",
  lastUpdated: LEGAL_LAST_UPDATED,
  intro:
    "This policy explains what personal information we collect, how we use it, and the choices you have. It applies to hawkmerchandising.com and to enquiries you send us by email, form, WhatsApp or other channels we publish.",
  sections: [
    {
      title: "1. Who we are",
      paragraphs: [
        "Hawk Merchandising LLC is the business responsible for this information. London office: 22 Wenlock Rd, London N1 7GU, UK. United States office: Durham, NC 27713, USA. Privacy and data questions: sales@hawkmerchandising.com.",
      ],
    },
    {
      title: "2. Information we collect",
      paragraphs: [
        "We collect information you give us when you request a quote, start a free trial, place an order, create a client-portal account, email us or contact us another way. This typically includes your name, email address, company name, country, phone number if you provide one, the service you need, file-format preferences, notes, and the artwork files you upload. We also collect limited technical information such as your IP address, browser type, device type, pages visited, referring site, and any marketing campaign tags (UTM source and medium) that arrive with your visit or form submission.",
      ],
    },
    {
      title: "3. How we use this information",
      paragraphs: [
        "We use this information to respond to enquiries, prepare quotes, deliver files, provide revisions and support, process payments, operate the client portal, improve our website and services, measure advertising and conversions, and meet legal or accounting duties. We do not sell your personal information.",
      ],
    },
    {
      title: "4. Artwork and confidentiality",
      paragraphs: [
        "Artwork you send us is used to prepare your files and to communicate with you about the job. We keep client artwork confidential and do not publish your name, logo or files in our portfolio or marketing without your permission.",
      ],
    },
    {
      title: "5. Cookies and analytics",
      paragraphs: [
        "We use Google Analytics 4 (measurement ID G-YL3F9DP032) and the Meta Pixel (pixel ID 3152708474920495) to understand how the site is used and to measure enquiries and conversions. If a LinkedIn Insight Tag or a Pinterest Tag is added later, this policy will be updated to name those tags. These tools may set cookies or similar technologies and may collect technical information of the kind described above. You can control cookies through your browser settings and, where we add a cookie-consent tool, through that tool.",
      ],
    },
    {
      title: "6. Who we share information with",
      paragraphs: [
        "We share information with service providers who help us host the website, process forms and payments, store files, send email, and run analytics or advertising tags, only as needed for those purposes. We may also share information if the law requires it, or if we must protect our rights. We do not share your artwork with other customers.",
      ],
    },
    {
      title: "7. How long we keep information",
      paragraphs: [
        "We keep enquiry, order and file records for as long as we need them to deliver the work, handle revisions, keep financial records and resolve disputes, and then for a reasonable period afterwards as required by law or good record-keeping. We keep analytics data according to the settings of the tools named above. You can ask us to delete information we no longer need to retain.",
      ],
    },
    {
      title: "8. Your rights",
      paragraphs: [
        "Depending on where you live, you may have the right to ask for a copy of the personal information we hold about you, to ask us to correct it, to ask us to delete it, to object to or restrict certain uses, or to complain to a data-protection authority. To make a request, email sales@hawkmerchandising.com. We may need to confirm your identity before we respond.",
      ],
    },
    {
      title: "9. Security and international transfers",
      paragraphs: [
        "We take reasonable technical and organisational steps to protect personal information and artwork files. We serve clients worldwide, so information may be processed in the United Kingdom, the United States or other countries where we or our providers operate. We take care to handle that information consistently with this policy.",
      ],
    },
    {
      title: "10. Children",
      paragraphs: [
        "Our services are offered to businesses and are not directed at children. We do not knowingly collect personal information from children.",
      ],
    },
    {
      title: "11. Changes",
      paragraphs: [
        'We may update this policy from time to time. The "Last updated" date will change when we do. The current version will always be posted on this page.',
      ],
    },
    {
      title: "12. Contact",
      paragraphs: [
        "Privacy questions and requests: sales@hawkmerchandising.com. Support available 24/7, 7 days a week. London: 22 Wenlock Rd, London N1 7GU, UK.",
      ],
    },
  ] satisfies LegalSection[],
} as const;
