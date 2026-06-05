import { Logo, type LogoSize, type LogoVariant } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  logoSize?: LogoSize | false;
  logoVariant?: LogoVariant;
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
  logoSize = "md",
  logoVariant = "light",
  align = "left",
  children,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className={cn("border-b border-white/10", className)}>
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20",
          centered && "text-center",
        )}
      >
        {logoSize !== false ? (
          <Logo
            variant={logoVariant}
            size={logoSize}
            href={null}
            className={cn("mb-6 h-12 w-auto sm:h-14", centered && "mx-auto")}
          />
        ) : null}
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">{eyebrow}</p>
        ) : null}
        <h1
          className={cn(
            "max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl",
            eyebrow ? "mt-4" : logoSize !== false ? "mt-2" : undefined,
            centered && "mx-auto",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400",
              centered && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {children ? <div className={cn("mt-10", centered && "flex flex-col items-center")}>{children}</div> : null}
      </div>
    </section>
  );
}
