import { expect, test } from "@playwright/test";
import { fillValidQuoteForm, fillValidUploadForm, TEST_ICON_PATH } from "./helpers";

test.describe("Mobile viewport — lead-capture flows", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("contact form: valid submission succeeds on mobile", async ({ page }) => {
    await page.goto("/contact");
    const form = await fillValidQuoteForm(page);
    await form.getByRole("button", { name: "Get free quote" }).click();
    await expect(page.getByText("Quote request received")).toBeVisible();
  });

  test("contact form: invalid email shows inline error on mobile", async ({ page }) => {
    await page.goto("/contact");
    await fillValidQuoteForm(page, { email: "not-an-email" });
    const form = page.locator("form").first();
    await form.getByRole("button", { name: "Get free quote" }).click();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  });

  test("upload form: valid small file succeeds on mobile", async ({ page }) => {
    await page.goto("/upload");
    await fillValidUploadForm(page);
    await page.locator('input[type="file"]').setInputFiles(TEST_ICON_PATH);
    await page.getByRole("button", { name: "Submit request" }).click();
    await expect(page.getByText("Received — you’re in the queue")).toBeVisible();
  });

  test("upload form: oversized file shows coming-shortly error on mobile", async ({ page }) => {
    await page.goto("/upload");
    await fillValidUploadForm(page);
    const oversized = Buffer.alloc(11 * 1024 * 1024, 97);
    await page.locator('input[type="file"]').setInputFiles({
      name: "big-design.jpg",
      mimeType: "image/jpeg",
      buffer: oversized,
    });
    await page.getByRole("button", { name: "Submit request" }).click();
    await expect(
      page.getByText(
        "Files over 10MB require our large-file upload — support for this is coming shortly.",
      ),
    ).toBeVisible();
  });
});
