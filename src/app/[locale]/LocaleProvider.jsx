"use client";

import { NextIntlClientProvider } from "next-intl";
import { Provider } from "@/redux/Provider";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";

export default function LocaleProvider({ children, locale, messages }) {
  const [clientMessages, setClientMessages] = useState(messages);

  useEffect(() => {
    // Extensive logging and validation
    console.group("LocaleProvider Debug");
    console.log("Received Locale:", locale);
    console.log("Received Messages:", Object.keys(messages || {}));

    // Validate messages structure
    if (!messages) {
      console.error("No messages received!");
      return;
    }

    // Check specific namespaces
    const requiredNamespaces = [
      "navigation",
      "common",
      "subscriptionPlan",
      "footer",
      "contactUs",
      "aboutUs",
    ];

    requiredNamespaces.forEach((namespace) => {
      if (!messages[namespace]) {
        console.warn(`Missing namespace: ${namespace}`);
      }
    });

    // Validate subscription plan translations
    if (messages.subscriptionPlan) {
      const planTypes = ["freelancer", "client"];
      const planLevels = [
        "starterPlan",
        "proPlan",
        "businessPlan",
        "enterprisePlan",
      ];

      planTypes.forEach((type) => {
        planLevels.forEach((level) => {
          const planKey = `${type}.${level}`;
          const plan = messages.subscriptionPlan[type]?.[level];

          if (!plan) {
            console.warn(`Missing plan translation: ${planKey}`);
          } else {
            if (!plan.title) {
              console.warn(`Missing title for plan: ${planKey}`);
            }
            if (!plan.features) {
              console.warn(`Missing features for plan: ${planKey}`);
            }
          }
        });
      });
    }

    console.groupEnd();

    setClientMessages(messages);
  }, [locale, messages]);

  return (
    <Provider>
      <NextIntlClientProvider
        locale={locale}
        messages={clientMessages || {}}
        timeZone="UTC"
        getMessageFallback={(namespace, key) => {
          console.warn(`Missing translation: ${namespace}.${key}`);
          return `[Missing: ${namespace}.${key}]`;
        }}
      >
        {children}
        <Toaster />
      </NextIntlClientProvider>
    </Provider>
  );
}
