/** Real portfolio media under public/images/Portfolio/NEW WEBSITE PORTFOLIO */
export const PORTFOLIO_DIR = "/images/Portfolio/NEW WEBSITE PORTFOLIO";

export function portfolioSrc(filename: string): string {
  return `${PORTFOLIO_DIR}/${encodeURIComponent(filename)}`;
}
