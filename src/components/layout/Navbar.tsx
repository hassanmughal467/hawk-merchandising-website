"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navPrimary, navResources } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const resourcesActive = navResources.some((l) => isNavActive(pathname, l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled ? "border-white/10 bg-surface/90 backdrop-blur-xl" : "bg-surface/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo variant="icon" size="sm" className="h-9 w-auto sm:h-10" priority />

        <nav
          aria-label="Main"
          className="hidden min-w-0 flex-1 justify-center lg:flex"
        >
          <div className="flex max-w-full items-center gap-0 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navPrimary.map((link) => {
              const active = isNavActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "focus-ring shrink-0 rounded-full px-2.5 py-2 text-xs font-medium text-zinc-300 transition hover:text-white xl:px-3 xl:text-sm",
                    active && "bg-white/5 text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="group relative shrink-0">
              <button
                type="button"
                className={cn(
                  "focus-ring flex items-center gap-1 rounded-full px-2.5 py-2 text-xs font-medium text-zinc-300 hover:text-white xl:px-3 xl:text-sm",
                  resourcesActive && "text-white",
                )}
                aria-haspopup="menu"
                aria-label="Open resources menu"
              >
                Resources
                <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={cn(
                  "pointer-events-none invisible absolute right-0 top-full z-50 pt-2 opacity-0 transition duration-150",
                  "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100",
                  "group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100",
                )}
              >
                <div className="min-w-[14rem] rounded-2xl border border-white/10 bg-surface-elevated/95 p-2 shadow-xl backdrop-blur-xl">
                  {navResources.map((link) => {
                    const active = isNavActive(pathname, link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "block rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white",
                          active && "bg-white/5 text-white",
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/upload"
            className="focus-ring hidden rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-gradient-hover sm:inline-flex"
          >
            Upload
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-surface/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-h-[min(70vh,520px)] max-w-6xl flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
          {navPrimary.map((link) => {
            const active = isNavActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-sm font-medium text-zinc-200 hover:bg-white/5",
                  active && "bg-white/5 text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <p className="mt-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
            Resources
          </p>
          {navResources.map((link) => {
            const active = isNavActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-sm font-medium text-zinc-200 hover:bg-white/5",
                  active && "bg-white/5 text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/upload"
            className="mt-2 rounded-xl bg-accent-gradient px-3 py-3 text-center text-sm font-semibold text-white"
          >
            Upload your design
          </Link>
        </div>
      </div>
    </header>
  );
}
