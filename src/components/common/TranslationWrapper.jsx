"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useTranslations as useNextIntlTranslations } from "next-intl";

// Custom hook that uses Redux for translations
export const useTranslations = (namespace) => {
  const messages = useSelector((state) => state.language.messages);
  const nextIntlT = useNextIntlTranslations(namespace);

  const t = (key, values = {}) => {
    // First try our Redux translations
    const namespaceData = messages[namespace];
    if (namespaceData) {
      const keys = key.split(".");
      let value = namespaceData;

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${namespace}.${key}`);
          break;
        }
      }

      if (typeof value === "string") {
        // Simple interpolation for values like {name}
        return value.replace(/\{(\w+)\}/g, (match, key) => {
          return values[key] !== undefined ? values[key] : match;
        });
      }
    }

    // Fallback to next-intl translations
    return nextIntlT(key, values);
  };

  return t;
};

// Custom hook that provides locale from Redux
export const useLocale = () => {
  const locale = useSelector((state) => state.language.currentLocale);
  return locale;
};
