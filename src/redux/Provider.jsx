"use client";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeLanguage } from "./features/languageSlice";

function LanguageInitializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeLanguageState = async () => {
      // Check localStorage for saved preference first
      const savedLocale = localStorage.getItem("preferred-locale");

      // Determine which locale to use
      const targetLocale =
        savedLocale && ["en", "fr"].includes(savedLocale) ? savedLocale : "en";

      // Load messages for the target locale
      try {
        const messages = await import(`../messages/${targetLocale}.json`);
        dispatch(
          initializeLanguage({
            locale: targetLocale,
            messages: messages.default,
          })
        );
      } catch (error) {
        console.error(
          `Failed to load messages for locale: ${targetLocale}`,
          error
        );
        // Fallback to English
        const fallbackMessages = await import(`../messages/en.json`);
        dispatch(
          initializeLanguage({
            locale: "en",
            messages: fallbackMessages.default,
          })
        );
      }
    };

    initializeLanguageState();
  }, [dispatch]);

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
