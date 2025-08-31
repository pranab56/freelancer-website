"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslations } from "./TranslationWrapper";
import {
  loadMessages,
  setLocale,
  setMessages,
} from "@/redux/features/languageSlice";

export default function LanguageDemo() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.currentLocale);
  const allMessages = useSelector((state) => state.language.allMessages);
  const t = useTranslations("common");

  const handleLanguageChange = async (newLocale) => {
    console.log(`Switching from ${locale} to ${newLocale}`);

    // Check if messages are already loaded
    if (allMessages[newLocale]) {
      // If messages are cached, just update the locale
      dispatch(setLocale(newLocale));
      dispatch(
        setMessages({ locale: newLocale, messages: allMessages[newLocale] })
      );
    } else {
      // Load messages from file
      dispatch(loadMessages(newLocale));
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Language Switching Demo</h3>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">
            Current Language: <strong>{locale}</strong>
          </p>
          <p className="text-sm text-gray-600">
            Translation Test: <strong>{t("search")}</strong>
          </p>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`px-3 py-1 rounded text-sm ${
              locale === "en"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("fr")}
            className={`px-3 py-1 rounded text-sm ${
              locale === "fr"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Français
          </button>
        </div>

        <div className="text-xs text-gray-500">
          <p>✅ Language switches instantly without page refresh</p>
          <p>✅ Redux state is preserved</p>
          <p>✅ UI components update immediately</p>
        </div>
      </div>
    </div>
  );
}
