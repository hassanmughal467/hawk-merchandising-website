"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { VisualType } from "@/lib/content/homepage";

type PlaceholderVisualProps = {
  type: VisualType;
  label?: string;
  className?: string;
  showLabel?: boolean;
};

function LogoOriginal() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
      <div className="relative flex h-[55%] w-[55%] items-center justify-center rounded-lg bg-white shadow-md">
        <svg viewBox="0 0 120 80" className="h-[70%] w-[70%] opacity-80 blur-[0.5px]">
          <polygon points="60,8 95,72 25,72" fill="#1e3a5f" />
          <text x="60" y="58" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
            BRAND
          </text>
        </svg>
        <span className="absolute bottom-1 right-1 rounded bg-zinc-400/60 px-1 text-[8px] font-medium text-white">
          JPG
        </span>
      </div>
    </div>
  );
}

function LowResLogo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-300">
      <div className="relative flex h-[50%] w-[50%] items-center justify-center rounded bg-white/80">
        <svg viewBox="0 0 100 60" className="h-[80%] w-[80%] opacity-60 blur-[1.5px]">
          <circle cx="50" cy="30" r="22" fill="#888" />
          <text x="50" y="35" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="sans-serif">
            LOGO
          </text>
        </svg>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-medium text-red-600">
          72 DPI
        </span>
      </div>
    </div>
  );
}

function DigitizedResult() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
      <svg viewBox="0 0 160 120" className="h-[75%] w-[75%]">
        <defs>
          <pattern id="stitch" width="4" height="4" patternUnits="userSpaceOnUse">
            <line x1="0" y1="4" x2="4" y2="0" stroke="#09c6f9" strokeWidth="0.5" opacity="0.6" />
          </pattern>
        </defs>
        <polygon points="80,15 130,100 30,100" fill="url(#stitch)" stroke="#09c6f9" strokeWidth="1.5" />
        <path d="M45,85 Q80,70 115,85" fill="none" stroke="#045de9" strokeWidth="2" strokeDasharray="3,2" />
        <text x="80" y="82" textAnchor="middle" fill="#09c6f9" fontSize="11" fontWeight="bold" fontFamily="monospace">
          STITCH
        </text>
      </svg>
      <span className="absolute bottom-2 right-2 rounded bg-accent/20 px-1.5 py-0.5 text-[8px] font-semibold text-accent">
        DST
      </span>
    </div>
  );
}

function VectorArt() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white">
      <svg viewBox="0 0 160 120" className="h-[75%] w-[75%]">
        <polygon points="80,12 128,95 32,95" fill="none" stroke="#045de9" strokeWidth="2" />
        <circle cx="80" cy="55" r="18" fill="none" stroke="#09c6f9" strokeWidth="1.5" />
        <path d="M62,75 L98,75" stroke="#045de9" strokeWidth="2" />
        <circle cx="62" cy="75" r="3" fill="#09c6f9" />
        <circle cx="98" cy="75" r="3" fill="#09c6f9" />
        <circle cx="80" cy="12" r="3" fill="#045de9" />
        <circle cx="128" cy="95" r="3" fill="#045de9" />
        <circle cx="32" cy="95" r="3" fill="#045de9" />
      </svg>
      <span className="absolute bottom-2 right-2 rounded bg-blue-100 px-1.5 py-0.5 text-[8px] font-semibold text-blue-700">
        AI / EPS
      </span>
    </div>
  );
}

function PoloMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center bg-gradient-to-b from-zinc-100 to-zinc-200 pb-[8%]">
      <svg viewBox="0 0 200 240" className="h-[90%] w-[70%]">
        <path d="M60,40 L100,20 L140,40 L155,55 L145,65 L130,55 L130,220 L70,220 L70,55 L55,65 L45,55 Z" fill="#1a365d" />
        <path d="M85,40 L100,30 L115,40 L115,55 L85,55 Z" fill="#0f2744" />
        <rect x="88" y="72" width="24" height="20" rx="2" fill="none" stroke="#09c6f9" strokeWidth="1" strokeDasharray="2,1" />
        <polygon points="100,76 112,88 88,88" fill="#09c6f9" opacity="0.9" />
        <text x="100" y="86" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">LOGO</text>
      </svg>
    </div>
  );
}

function CapMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900">
      <svg viewBox="0 0 200 160" className="h-[80%] w-[80%]">
        <ellipse cx="100" cy="130" rx="85" ry="18" fill="#111" />
        <path d="M30,90 Q100,20 170,90 L170,110 Q100,100 30,110 Z" fill="#1e293b" />
        <path d="M30,110 Q100,125 170,110 L175,115 Q100,135 25,115 Z" fill="#0f172a" />
        <ellipse cx="100" cy="72" rx="28" ry="22" fill="none" stroke="#09c6f9" strokeWidth="0.8" strokeDasharray="2,1" />
        <text x="100" y="76" textAnchor="middle" fill="#09c6f9" fontSize="10" fontWeight="bold" fontFamily="sans-serif">HAWK</text>
      </svg>
    </div>
  );
}

function CapPuff() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-600 to-zinc-800">
      <svg viewBox="0 0 200 160" className="h-[80%] w-[80%]">
        <ellipse cx="100" cy="130" rx="85" ry="18" fill="#111" />
        <path d="M30,90 Q100,20 170,90 L170,110 Q100,100 30,110 Z" fill="#374151" />
        <path d="M30,110 Q100,125 170,110 L175,115 Q100,135 25,115 Z" fill="#1f2937" />
        <ellipse cx="100" cy="68" rx="32" ry="26" fill="#09c6f9" opacity="0.15" />
        <ellipse cx="100" cy="65" rx="26" ry="20" fill="#045de9" opacity="0.3" />
        <text x="100" y="70" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">3D</text>
        <text x="100" y="82" textAnchor="middle" fill="#09c6f9" fontSize="7" fontWeight="bold">PUFF</text>
      </svg>
    </div>
  );
}

function PvcPatch() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
      <div className="relative">
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-lg">
          <path d="M10,15 L110,15 L115,85 L5,85 Z" fill="#1a1a2e" stroke="#333" strokeWidth="2" />
          <path d="M20,25 L100,25 L103,75 L17,75 Z" fill="#045de9" />
          <polygon points="60,35 80,65 40,65" fill="#09c6f9" />
          <text x="60" y="62" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">PVC</text>
        </svg>
      </div>
    </div>
  );
}

function WovenPatch() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
      <svg viewBox="0 0 130 90" className="h-24 w-36">
        <rect x="5" y="5" width="120" height="80" rx="4" fill="#f5f5f4" stroke="#d4d4d4" strokeWidth="2" />
        <rect x="5" y="5" width="120" height="80" rx="4" fill="url(#weave)" opacity="0.3" />
        <defs>
          <pattern id="weave" width="3" height="3" patternUnits="userSpaceOnUse">
            <rect width="3" height="3" fill="#e7e5e4" />
            <line x1="0" y1="0" x2="3" y2="3" stroke="#a8a29e" strokeWidth="0.3" />
          </pattern>
        </defs>
        <text x="65" y="40" textAnchor="middle" fill="#1e3a5f" fontSize="10" fontWeight="bold" fontFamily="serif">WOVEN</text>
        <text x="65" y="55" textAnchor="middle" fill="#045de9" fontSize="7" fontFamily="sans-serif">Fine Detail</text>
        <rect x="5" y="5" width="120" height="80" rx="4" fill="none" stroke="#78716c" strokeWidth="3" />
      </svg>
    </div>
  );
}

function ChenillePatch() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900">
      <svg viewBox="0 0 120 100" className="h-28 w-32">
        <ellipse cx="60" cy="50" rx="52" ry="42" fill="#1e40af" />
        <ellipse cx="60" cy="50" rx="48" ry="38" fill="#2563eb" opacity="0.8" />
        <text x="60" y="48" textAnchor="middle" fill="#fbbf24" fontSize="22" fontWeight="bold" fontFamily="serif" style={{ filter: "blur(0.3px)" }}>
          V
        </text>
        <text x="60" y="62" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif">VARSITY</text>
        <ellipse cx="60" cy="50" rx="52" ry="42" fill="none" stroke="#fbbf24" strokeWidth="3" />
      </svg>
    </div>
  );
}

function LeatherPatch() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-600 to-zinc-800">
      <svg viewBox="0 0 110 80" className="h-24 w-32">
        <rect x="8" y="8" width="94" height="64" rx="6" fill="#92400e" />
        <rect x="8" y="8" width="94" height="64" rx="6" fill="url(#leather)" />
        <defs>
          <pattern id="leather" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.5" fill="#78350f" opacity="0.4" />
          </pattern>
        </defs>
        <text x="55" y="48" textAnchor="middle" fill="#451a03" fontSize="12" fontWeight="bold" fontFamily="serif">BRAND</text>
        <rect x="8" y="8" width="94" height="64" rx="6" fill="none" stroke="#451a03" strokeWidth="2" />
      </svg>
    </div>
  );
}

function JacketBack() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-zinc-300 to-zinc-400">
      <svg viewBox="0 0 180 220" className="h-[85%] w-[65%]">
        <path d="M50,30 L90,15 L130,30 L145,50 L140,210 L40,210 L35,50 Z" fill="#111827" />
        <path d="M75,30 L90,22 L105,30 L105,210 L75,210 Z" fill="#0f172a" />
        <rect x="55" y="55" width="70" height="55" rx="3" fill="none" stroke="#09c6f9" strokeWidth="0.8" strokeDasharray="2,1" />
        <polygon points="90,62 115,95 65,95" fill="#045de9" opacity="0.8" />
        <text x="90" y="88" textAnchor="middle" fill="#09c6f9" fontSize="8" fontWeight="bold">TEAM</text>
        <text x="90" y="130" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">HAWKS</text>
      </svg>
    </div>
  );
}

function EmbroiderySample() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
      <div className="relative h-[70%] w-[70%] rounded-lg bg-white shadow-inner">
        <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full p-4">
          <rect x="10" y="10" width="80" height="60" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
          <circle cx="50" cy="40" r="18" fill="none" stroke="#045de9" strokeWidth="1.5" />
          <text x="50" y="44" textAnchor="middle" fill="#045de9" fontSize="9" fontWeight="bold">LOGO</text>
        </svg>
      </div>
    </div>
  );
}

function PromoProduct() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-200">
      <svg viewBox="0 0 140 120" className="h-[75%] w-[75%]">
        <path d="M30,40 L110,40 L120,100 L20,100 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M55,40 L55,25 L85,25 L85,40" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="55" y="55" width="30" height="25" rx="2" fill="none" stroke="#045de9" strokeWidth="1" strokeDasharray="2,1" />
        <text x="70" y="72" textAnchor="middle" fill="#045de9" fontSize="7" fontWeight="bold">PROMO</text>
      </svg>
    </div>
  );
}

const visualMap: Record<VisualType, () => ReactNode> = {
  "logo-original": LogoOriginal,
  "low-res-logo": LowResLogo,
  "digitized-result": DigitizedResult,
  "vector-art": VectorArt,
  "polo-mockup": PoloMockup,
  "cap-mockup": CapMockup,
  "cap-puff": CapPuff,
  "pvc-patch": PvcPatch,
  "woven-patch": WovenPatch,
  "chenille-patch": ChenillePatch,
  "leather-patch": LeatherPatch,
  "jacket-back": JacketBack,
  "embroidery-sample": EmbroiderySample,
  "promo-product": PromoProduct,
};

export function PlaceholderVisual({ type, label, className, showLabel = true }: PlaceholderVisualProps) {
  const Visual = visualMap[type];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {Visual()}
      {showLabel && label ? (
        <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-200 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
