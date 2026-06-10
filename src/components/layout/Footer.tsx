import Link from "next/link";
import {
  navLegal,
  navPrimary,
  navResources,
  seoServicePages,
  site,
} from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

const footerServices = [
  ...seoServicePages,
  { href: "/promotional-products", label: "Promotional Products" },
  { href: "/portfolio/videos", label: "Portfolio Videos" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "All Services" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-elevated">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" size="md" className="h-12 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {footerServices.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Resources
            </p>
            <ul className="mt-4 space-y-2">
              {navResources.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {navPrimary
                .filter((l) => l.href === "/about" || l.href === "/contact" || l.href === "/portfolio")
                .map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-300 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              <li>
                <a
                  href={site.clientSignup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  {site.clientSignup.label}
                </a>
              </li>
              <li>
                <a
                  href={site.clientPortal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  {site.clientPortal.label}
                </a>
              </li>
              {navLegal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>
                <a className="hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`tel:${site.phoneUs.replace(/\s/g, "")}`}>
                  {site.phoneUs}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`tel:${site.phoneUk.replace(/\s/g, "")}`}>
                  {site.phoneUk}
                </a>
              </li>
              <li className="text-zinc-500">{site.addressUs}</li>
              <li className="text-zinc-500">{site.addressUk}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-zinc-600">Secure payments • Production-ready files • Worldwide delivery</p>
        </div>
      </div>
    </footer>
  );
}
