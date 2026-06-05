import { site } from "@/lib/site";

export function WhatsAppFloat() {
  const href = `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(
    "Hi Hawk Merchandising — I’d like a quote for digitizing / vector work.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:bg-[#20bd5a]"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M16.003 3C9.374 3 4 8.373 4 15c0 2.344.664 4.53 1.813 6.383L4.07 28.092l6.908-1.698A11.86 11.86 0 0 0 16.003 27C22.627 27 28 21.627 28 15S22.627 3 16.003 3zm0 21.2c-1.928 0-3.73-.506-5.291-1.387l-.38-.226-3.95.972.998-3.84-.248-.396A8.8 8.8 0 0 1 7.2 15c0-4.855 3.947-8.8 8.803-8.8 4.855 0 8.797 3.945 8.797 8.8 0 4.855-3.942 8.8-8.797 8.8z"
        />
        <path
          fill="currentColor"
          d="M12.79 10.55c-.198-.497-.407-.507-.595-.515-.154-.007-.33-.01-.506-.01-.176 0-.46.066-.702.332-.242.267-.925.902-.925 2.2 0 1.297.95 2.552 1.082 2.73.133.178 1.83 2.94 4.56 4.12 2.257.985 2.715 1.078 3.204 1.008.49-.07 1.58-.645 1.803-1.268.224-.623.224-1.16.157-1.27-.067-.11-.242-.178-.506-.312-.265-.133-1.565-.77-1.807-.858-.242-.088-.418-.133-.595.133-.177.267-.686.858-.84 1.035-.154.177-.31.2-.575.067-.265-.133-1.12-.413-2.133-1.317-.79-.705-1.323-1.575-1.477-1.84-.154-.267-.016-.412.116-.545.12-.12.265-.31.398-.465.133-.154.177-.267.266-.445.088-.178.044-.334-.022-.467-.067-.133-.595-1.435-.84-1.965z"
        />
      </svg>
    </a>
  );
}
