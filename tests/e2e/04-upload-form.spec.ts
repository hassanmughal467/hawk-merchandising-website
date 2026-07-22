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

  test("unsupported file type is rejected client-side before submission", async ({ page }) => {
    await page.goto("/upload");
    await fillValidUploadForm(page);

    let requestMade = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/upload")) requestMade = true;
    });

    // The accept attribute is a UI hint only — setInputFiles (like drag & drop
    // from Explorer/Finder, or picking "All files") bypasses it entirely, so
    // client-side validation must reject this independently.
    await page.locator('input[type="file"]').setInputFiles({
      name: "malware.exe",
      mimeType: "application/x-msdownload",
      buffer: Buffer.from("not a real design file"),
    });

    await expect(
      page.getByText("Unsupported file type. Please upload PNG, JPG, PDF, AI, EPS, SVG, or ZIP."),
    ).toBeVisible();
    // The rejected file must never be accepted into form state.
    await expect(page.getByText(/Selected: malware\.exe/)).toHaveCount(0);

    await page.getByRole("button", { name: "Submit request" }).click();
    await expect(page.getByText("Upload your design file.")).toBeVisible();
    expect(requestMade, "no network request should fire for a rejected file type").toBe(false);
  });
});
