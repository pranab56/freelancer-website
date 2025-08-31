import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, defaultLocale } from "@/i18n/routing";
import LocaleProvider from "./LocaleProvider";
import "../globals.css";

export default async function LocaleLayout({ children, params }) {
  // Explicitly extract locale from params
  let locale = params.locale || defaultLocale;

  // Additional validation to handle non-locale routes
  const authRoutes = [
    "login",
    "signup",
    "sign-up",
    "forgot-password",
    "reset-password",
    "verify-email",
  ];

  // If the 'locale' is actually an auth route, use default locale
  if (authRoutes.includes(locale)) {
    console.log(`Redirecting route ${locale} to default locale`);
    locale = defaultLocale;
  }

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    console.error(`Invalid locale: ${locale}`);
    notFound();
  }

  // Explicitly load messages for the current locale
  let messages;
  try {
    messages = await import(`../../messages/${locale}.json`).then(
      (module) => module.default
    );

    // Validate messages
    if (!messages) {
      console.error(`No messages found for locale: ${locale}`);
      messages = await import(`../../messages/${defaultLocale}.json`).then(
        (module) => module.default
      );
    }

    // Detailed logging of messages
    console.log("Layout - Loaded Locale:", locale);
    console.log("Layout - Loaded Message Namespaces:", Object.keys(messages));
    console.log("Layout - Footer Namespace:", messages.footer);

    // Validate footer namespace
    if (!messages.footer) {
      console.error(`Missing footer namespace in ${locale} messages`);
      // Attempt to load footer from default locale
      const defaultMessages = await import(
        `../../messages/${defaultLocale}.json`
      ).then((module) => module.default);
      messages.footer = defaultMessages.footer;
    }
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    messages = await import(`../../messages/${defaultLocale}.json`).then(
      (module) => module.default
    );
  }

  console.log("Layout Messages:", messages);
  console.log("Current Locale:", locale);

  return (
    <LocaleProvider locale={locale} messages={messages}>
      {children}
    </LocaleProvider>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
