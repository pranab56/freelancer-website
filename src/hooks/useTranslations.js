"use client";

import { useLanguage } from "../contexts/LanguageContext";

export const useTranslations = (namespace) => {
  const { messages } = useLanguage();

  const t = (key, values = {}) => {
    const namespaceData = messages[namespace];
    if (!namespaceData) {
      console.warn(`Namespace "${namespace}" not found in messages`);
      return key;
    }

    const keys = key.split(".");
    let value = namespaceData;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${namespace}.${key}" not found`);
        return key;
      }
    }

    if (typeof value !== "string") {
      console.warn(
        `Translation value for "${namespace}.${key}" is not a string`
      );
      return key;
    }

    // Simple interpolation for values like {name}
    return value.replace(/\{(\w+)\}/g, (match, key) => {
      return values[key] !== undefined ? values[key] : match;
    });
  };

  return t;
};
