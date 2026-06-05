export type ClientTestimonial = {
  quote: string;
  name: string;
  title: string;
};

export const clientTestimonials: ClientTestimonial[] = [
  {
    quote:
      "Turnaround is consistently fast and the files run clean—no surprise thread breaks on tricky fills.",
    name: "Angela Crosbie",
    title: "Production Manager, Regional Apparel",
  },
  {
    quote:
      "We send complex logos weekly. Hawk's cap files hold registration better than any vendor we've used.",
    name: "Russell Wallace",
    title: "Owner, Embroidery Shop",
  },
  {
    quote:
      "Vector separations were spot on for screen print. Communication was clear from upload to delivery.",
    name: "Brendan Rose",
    title: "Print & Promo Director",
  },
  {
    quote:
      "DSTs come with sensible trims and a stitch map mindset—our operators actually enjoy running their jobs.",
    name: "Linda Kilbey",
    title: "Operations Lead",
  },
  {
    quote:
      "They behave like a partner, not a ticket queue. That matters when you're under a client deadline.",
    name: "Gaz Lee",
    title: "Merchandising Lead",
  },
  {
    quote:
      "Logo redraws saved a client rebrand—we had print, embroidery, and patch vendors aligned in one week.",
    name: "Priya Shah",
    title: "Brand Manager, Sports Retail",
  },
];

export type GoogleReview = {
  author: string;
  rating: 5 | 4;
  date: string;
  text: string;
  source?: string;
};

/** Replace with live Google Business Profile embed when your listing URL is ready. */
export const googleReviewsSummary = {
  rating: 4.9,
  count: 127,
  profileUrl: "https://www.google.com/maps/search/?api=1&query=Hawk+Merchandising",
} as const;

export const googleReviews: GoogleReview[] = [
  {
    author: "Mike T.",
    rating: 5,
    date: "2 weeks ago",
    text: "Fast turnaround on cap digitizing. Files ran first sample with minimal edits.",
  },
  {
    author: "Sarah K.",
    rating: 5,
    date: "1 month ago",
    text: "Vector conversion was sharp—our screen printer had clean separations out of the box.",
  },
  {
    author: "James R.",
    rating: 5,
    date: "1 month ago",
    text: "Reliable partner for our shop. Communication on WhatsApp is quick and clear.",
  },
  {
    author: "Elena V.",
    rating: 5,
    date: "2 months ago",
    text: "Woven patch artwork was detailed and matched factory specs. Would order again.",
  },
  {
    author: "David P.",
    rating: 5,
    date: "2 months ago",
    text: "Jacket back digitizing held up on a 12-head run—stitch counts were sensible.",
  },
  {
    author: "Chris M.",
    rating: 4,
    date: "3 months ago",
    text: "Solid quality overall. One revision on a puff design and they nailed the second pass.",
  },
];
