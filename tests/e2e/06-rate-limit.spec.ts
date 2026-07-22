import fs from "node:fs";
import { expect, test } from "@playwright/test";
import { fillValidQuoteForm, fillValidUploadForm, TEST_ICON_PATH } from "./helpers";

// This file must run last (file name sorts after 01-05, and the suite runs
// with workers: 1 / fullyParallel: false) — it deliberately exhausts the
// real 5-per-10-minute bucket on each route. Sending 6 direct requests
// guarantees the bucket is over the cap regardless of how much budget
// earlier specs already used, so this test doesn't need to know that count.

test.describe("Rate limit UX", () => {
  test("contact form shows a clear 'too many requests' message once the limit is hit", async ({
    page,
    request,
    baseURL,
  }) => {
    for (let i = 0; i < 6; i++) {
      await request.post(`${baseURL}/api/contact`, {
        multipart: {
          name: "Rate Limit Setup",
          email: "ratelimit@example.com",
          whatsapp: "+15550100199",
          service: "Embroidery Digitizing",
          message: "Filling the rate limit bucket ahead of the UI assertion.",
          source: "playwright",
        },
      });
    }

    await page.goto("/contact");
    const form = await fillValidQuoteForm(page);
    await form.getByRole("button", { name: "Get free quote" }).click();

    await expect(page.getByText("Too many requests. Please try again later.")).toBeVisible();
    // Not a raw/broken state: the form is still interactive, not stuck loading.
    await expect(form.getByRole("button", { name: "Get free quote" })).toBeEnabled();
  });

  test("upload form shows a clear 'too many requests' message once the limit is hit", async ({
    page,
    request,
    baseURL,
  }) => {
    const iconBuffer = fs.readFileSync(TEST_ICON_PATH);

    for (let i = 0; i < 6; i++) {
      await request.post(`${baseURL}/api/upload`, {
        multipart: {
          name: "Rate Limit Setup",
          email: "ratelimit@example.com",
          whatsapp: "+15550100199",
          service: "Embroidery Digitizing",
          instructions: "Filling the rate limit bucket ahead of the UI assertion.",
          file: {
            name: "icon.png",
            mimeType: "image/png",
            buffer: iconBuffer,
          },
        },
      });
    }

    await page.goto("/upload");
    await fillValidUploadForm(page);
    await page.locator('input[type="file"]').setInputFiles(TEST_ICON_PATH);
    await page.getByRole("button", { name: "Submit request" }).click();

    await expect(page.getByText("Too many requests. Please try again later.")).toBeVisible();
    // Not a raw/broken state: the form is still interactive, not stuck loading.
    await expect(page.getByRole("button", { name: "Submit request" })).toBeEnabled();
  });
});
