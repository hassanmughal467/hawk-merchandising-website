/** Real portfolio media under public/images/Portfolio */
export const PORTFOLIO_DIR = "/images/Portfolio";

export function portfolioSrc(filename: string): string {
  return `${PORTFOLIO_DIR}/${encodeURIComponent(filename)}`;
}
