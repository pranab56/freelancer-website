"use client";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { initializeLanguage } from "./features/languageSlice";

function LanguageInitializer({ children }) {
  const dispatch = useDispatch();

  // Memoize the initialization function to prevent unnecessary re-renders
  const initializeLanguageState = useCallback(async () => {
    console.log("🚀 LanguageInitializer: Starting language initialization...");

    // Check localStorage for saved preference first
    const savedLocale = localStorage.getItem("preferred-locale");
    console.log(
      "LanguageInitializer: Saved locale from localStorage:",
      savedLocale
    );

    // Determine which locale to use
    const targetLocale =
      savedLocale && ["en", "fr"].includes(savedLocale) ? savedLocale : "en";
    console.log("LanguageInitializer: Target locale:", targetLocale);

    // Load messages for the target locale
    try {
      console.log(
        "LanguageInitializer: Loading messages for locale:",
        targetLocale
      );
      const messages = await import(`../messages/${targetLocale}.json`);
      console.log(
        "LanguageInitializer: Messages loaded successfully:",
        messages.default
      );

      dispatch(
        initializeLanguage({
          locale: targetLocale,
          messages: messages.default,
        })
      );
      console.log("🚀 LanguageInitializer: Language initialized successfully");
    } catch (error) {
      console.error(
        `Failed to load messages for locale: ${targetLocale}`,
        error
      );
      // Fallback to English
      console.log("LanguageInitializer: Falling back to English...");
      try {
        const fallbackMessages = await import(`../messages/en.json`);
        dispatch(
          initializeLanguage({
            locale: "en",
            messages: fallbackMessages.default,
          })
        );
        console.log("LanguageInitializer: Fallback to English completed");
      } catch (fallbackError) {
        console.error("Failed to load fallback messages", fallbackError);
      }
    }
  }, []); // Empty dependency array to run only once

  // Use effect to trigger initialization
  useEffect(() => {
    initializeLanguageState();
  }, [initializeLanguageState]);

  return children;
}

export function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageInitializer>{children}</LanguageInitializer>
      </PersistGate>
    </ReduxProvider>
  );
}
