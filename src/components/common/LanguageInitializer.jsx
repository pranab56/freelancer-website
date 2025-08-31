"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  initializeLanguage,
  loadMessages,
} from "@/redux/features/languageSlice";

export default function LanguageInitializer({
  initialLocale,
  initialMessages,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("LanguageInitializer - Initializing with:", {
      initialLocale,
      initialMessages,
    });

    // Check localStorage for saved preference first
    const savedLocale = localStorage.getItem("preferred-locale");
    console.log(
      "LanguageInitializer - Saved locale from localStorage:",
      savedLocale
    );

    // Determine which locale to use
    const targetLocale =
      savedLocale && ["en", "fr"].includes(savedLocale)
        ? savedLocale
        : initialLocale || "en";

    console.log("LanguageInitializer - Target locale:", targetLocale);

    // Load messages for the target locale
    const loadMessagesForLocale = async (locale) => {
      try {
        const messages = await import(`../../messages/${locale}.json`);
        return messages.default;
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
        // Fallback to English
        const fallbackMessages = await import(`../../messages/en.json`);
        return fallbackMessages.default;
      }
    };

    // Initialize with the target locale and messages
    loadMessagesForLocale(targetLocale).then((messages) => {
      dispatch(
        initializeLanguage({
          locale: targetLocale,
          messages: messages,
        })
      );
    });
  }, [dispatch, initialLocale, initialMessages]);

  return null; // This component doesn't render anything
}
