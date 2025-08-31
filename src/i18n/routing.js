import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr"];
export const defaultLocale = "en";

export default defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: "always",
});
