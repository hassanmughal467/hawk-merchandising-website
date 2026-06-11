export {};

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | "trackCustom",
      eventOrPixelId: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}
