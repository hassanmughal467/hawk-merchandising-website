import type { Locator, Page } from "@playwright/test";

export const TEST_ICON_PATH = "public/images/hawk-merchandising-icon.png";

type QuoteFormOverrides = Partial<{
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}>;

/** Fills the QuoteForm (used by ContactForm and the exit-intent modal) and returns its <form> locator. */
export async function fillValidQuoteForm(page: Page, overrides: QuoteFormOverrides = {}): Promise<Locator> {
  const form = page.locator("form").first();
  await form.locator('input[autocomplete="name"]').fill(overrides.name ?? "Playwright Test User");
  await form.locator('input[autocomplete="email"]').fill(overrides.email ?? "playwright.test@example.com");
  await form.locator('input[autocomplete="tel"]').fill(overrides.whatsapp ?? "+15550100199");
  await form.locator("select").selectOption({ index: 0 });
  await form
    .locator("textarea")
    .fill(overrides.message ?? "Automated Playwright end-to-end test submission message.");
  return form;
}

/** Fills the UploadForm's text fields (name/email/whatsapp/service). File and submit are left to the caller. */
export async function fillValidUploadForm(page: Page): Promise<void> {
  await page.locator('input[autocomplete="name"]').fill("Playwright Upload User");
  await page.locator('input[autocomplete="email"]').fill("playwright.upload@example.com");
  await page.locator('input[autocomplete="tel"]').fill("+15550100199");
  await page.locator("select").selectOption({ index: 0 });
}
