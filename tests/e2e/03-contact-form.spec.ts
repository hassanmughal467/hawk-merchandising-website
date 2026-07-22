import { expect, test } from "@playwright/test";
import { fillValidQuoteForm } from "./helpers";

test.describe("Contact / Quote form", () => {
  test("valid submission shows success state with a reference ID", async ({ page }) => {
    await page.goto("/contact");
    const form = await fillValidQuoteForm(page);
    await form.getByRole("button", { name: "Get free quote" }).click();

    await expect(page.getByText("Quote request received")).toBeVisible();
    await expect(page.getByText(/Reference:\s*HMK-/)).toBeVisible();
  });

  test("invalid email shows the correct inline error and does not submit", async ({ page }) => {
    await page.goto("/contact");
    const form = await fillValidQuoteForm(page, { email: "not-an-email" });

    let requestMade = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/contact")) requestMade = true;
    });

    await form.getByRole("button", { name: "Get free quote" }).click();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    expect(requestMade, "no network request should fire for a client-side validation failure").toBe(false);
  });

  test("missing required fields show field-level errors and do not submit", async ({ page }) => {
    await page.goto("/contact");
    const form = page.locator("form").first();

    let requestMade = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/contact")) requestMade = true;
    });

    await form.getByRole("button", { name: "Get free quote" }).click();

    await expect(page.getByText("Enter your full name.")).toBeVisible();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Enter a WhatsApp number we can reach you on.")).toBeVisible();
    await expect(page.getByText("Tell us about your project (min. 10 characters).")).toBeVisible();
    expect(requestMade, "no network request should fire when required fields are missing").toBe(false);
  });
});
