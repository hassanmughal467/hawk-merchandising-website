import { expect, test } from "@playwright/test";
import { navPrimary, navResources, seoServicePages } from "../../src/lib/site";

test.describe("Navbar", () => {
  test("renders every primary nav link and navigates correctly", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator('nav[aria-label="Main"]');
    for (const link of navPrimary) {
      await expect(nav.getByRole("link", { name: link.label, exact: true })).toBeVisible();
    }

    await nav.getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test("resources dropdown exposes every resource link", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open resources menu" }).hover();
    for (const link of navResources) {
      await expect(page.getByRole("link", { name: link.label, exact: true }).first()).toBeVisible();
    }
  });
});

test.describe("Footer", () => {
  test("renders service, resource, company, and legal links", async ({ page }) => {
    await page.goto("/");
    // Scoped: GoogleReviewCard also renders a <footer> for attribution, so a
    // bare `footer` locator matches many elements on the homepage.
    const footer = page.locator("footer").filter({ hasText: "All rights reserved" });
    await expect(footer).toBeVisible();

    for (const svc of seoServicePages) {
      await expect(footer.getByRole("link", { name: svc.label, exact: true })).toBeVisible();
    }
    await expect(footer.getByRole("link", { name: "Terms & Conditions" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "About", exact: true })).toBeVisible();
  });
});

test.describe("Floating UI", () => {
  test("WhatsApp float button is always visible and links to wa.me", async ({ page }) => {
    await page.goto("/");
    const waLink = page.getByRole("link", { name: "Chat on WhatsApp" });
    await expect(waLink).toBeVisible();
    await expect(waLink).toHaveAttribute("href", /^https:\/\/wa\.me\//);
  });

  test("sticky quote bar appears after scrolling past the threshold and becomes keyboard-focusable", async ({
    page,
  }) => {
    await page.goto("/");
    // data-testid, not text: several other CTAs on the homepage share the
    // exact "Get Free Quote" copy, and the wrapper is aria-hidden while
    // closed, which excludes it (and its link) from the accessibility tree
    // that getByRole queries against.
    const barWrapper = page.getByTestId("sticky-quote-bar-desktop");
    const barLink = barWrapper.locator("a").first();

    await expect(barWrapper).toHaveAttribute("aria-hidden", "true");
    // inert must also block keyboard focus while hidden — aria-hidden alone
    // doesn't stop Tab from landing on an invisible link.
    const focusableWhileHidden = await barLink.evaluate((el) => {
      (el as HTMLElement).focus();
      return document.activeElement === el;
    });
    expect(focusableWhileHidden, "hidden bar link must not be keyboard-focusable").toBe(false);

    await page.mouse.wheel(0, 800);
    await expect(barWrapper).toHaveAttribute("aria-hidden", "false");

    const focusableWhileVisible = await barLink.evaluate((el) => {
      (el as HTMLElement).focus();
      return document.activeElement === el;
    });
    expect(focusableWhileVisible, "visible bar link must be keyboard-focusable").toBe(true);
  });

  test("exit-intent modal opens on desktop mouse-leave and shows a quote form", async ({ page }) => {
    await page.goto("/");
    // Wait for hydration to finish so the component's mouseleave listener is
    // actually attached before we dispatch the synthetic event. A raw
    // mouse.move past the viewport edge is unreliable to trigger a real
    // mouseleave under headless CDP, so dispatch directly instead.
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => {
      document.dispatchEvent(new MouseEvent("mouseleave", { clientY: 0 }));
    });

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(page.getByText("Get a free quote in minutes")).toBeVisible();
    await expect(dialog.locator("form")).toBeVisible();

    await page.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
  });
});
