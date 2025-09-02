"use client";

import { useSelector } from "react-redux";

export const useTranslations = (namespace) => {
  const { messages, currentLocale } = useSelector((state) => state.language);

  const t = (key, values = {}) => {
    const namespaceData = messages[namespace];
    if (!namespaceData) {
      console.warn(
        `Namespace "${namespace}" not found in messages for locale: ${currentLocale}`
      );
      return key;
    }

    const keys = key.split(".");
    let value = namespaceData;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(
          `Translation key "${namespace}.${key}" not found for locale: ${currentLocale}`
        );
        return key;
      }
    }

    if (typeof value !== "string") {
      console.warn(
        `Translation value for "${namespace}.${key}" is not a string for locale: ${currentLocale}`
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
