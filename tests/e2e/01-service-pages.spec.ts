import { expect, test } from "@playwright/test";
import { seoServicePages } from "../../src/lib/site";

test.describe("Service pages", () => {
  for (const { href } of seoServicePages) {
    test(`${href} loads with 200 and renders hero + key sections`, async ({ page }) => {
      const response = await page.goto(href);
      expect(response?.status(), `${href} should respond 200`).toBe(200);

      // Hero (PageHero renders a single <h1>)
      await expect(page.locator("h1")).toBeVisible();

      // Sections common to every service page via ServiceLanding
      await expect(page.getByRole("heading", { name: "Service overview" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Benefits" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "What you get" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Request a quote" })).toBeVisible();
    });
  }
});
