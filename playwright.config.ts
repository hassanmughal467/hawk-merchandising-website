import { defineConfig } from "@playwright/test";

const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: { timeout: 8_000 },
  // Rate-limit and honeypot tests rely on a shared, single in-memory counter
  // on the server. Running fully sequential keeps the suite deterministic.
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: BASE_URL,
    viewport: { width: 1280, height: 800 },
    trace: "retain-on-failure",
  },
  webServer: {
    command: `npx next dev --port ${PORT}`,
    url: BASE_URL,
    // Always boot a fresh instance so EMAIL_TEST_MODE is guaranteed set and
    // the in-memory rate limiter starts from a clean, empty state.
    reuseExistingServer: false,
    timeout: 60_000,
    env: {
      EMAIL_TEST_MODE: "true",
    },
  },
});
