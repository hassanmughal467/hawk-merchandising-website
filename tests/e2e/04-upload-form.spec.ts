import { expect, test } from "@playwright/test";
import { fillValidUploadForm, TEST_ICON_PATH } from "./helpers";

test.describe("Upload form", () => {
  test("valid small file shows success state with a reference ID", async ({ page }) => {
    await page.goto("/upload");
    await fillValidUploadForm(page);
    await page.locator('input[type="file"]').setInputFiles(TEST_ICON_PATH);
    await page.getByRole("button", { name: "Submit request" }).click();

    await expect(page.getByText("Received — you’re in the queue")).toBeVisible();
    await expect(page.getByText(/Reference:\s*HMK-/)).toBeVisible();
  });

  test("oversized file (>10MB) shows the coming-shortly error, not a crash", async ({ page }) => {
    await page.goto("/upload");
    await fillValidUploadForm(page);

    const oversized = Buffer.alloc(11 * 1024 * 1024, 97); // 11MB, safely over the 10MB cap
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

  test("missing file is rejected client-side before any submission", async ({ page }) => {
    await page.goto("/upload");
    await fillValidUploadForm(page);

    let requestMade = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/upload")) requestMade = true;
    });

    await page.getByRole("button", { name: "Submit request" }).click();
    await expect(page.getByText("Upload your design file.")).toBeVisible();
    expect(requestMade, "no network request should fire when no file is selected").toBe(false);
  });
});
