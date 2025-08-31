"use client";

import React from "react";
import ReactCountryFlag from "react-country-flag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector, useDispatch } from "react-redux";
import {
  loadMessages,
  setLocale,
  setMessages,
} from "@/redux/features/languageSlice";

export default function LanguageSelector({ className = "" }) {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.currentLocale);
  const allMessages = useSelector((state) => state.language.allMessages);

  const handleLanguageChange = async (newLocale) => {
    console.log("LanguageSelector - Switching to:", newLocale);
    console.log("LanguageSelector - Current locale:", locale);
    console.log(
      "LanguageSelector - Cached messages:",
      Object.keys(allMessages)
    );
    console.log("LanguageSelector - All messages:", allMessages);

    // Check if messages are already loaded
    if (allMessages[newLocale]) {
      console.log("LanguageSelector - Using cached messages for:", newLocale);
      console.log(
        "LanguageSelector - Cached messages content:",
        allMessages[newLocale]
      );
      // If messages are cached, just update the locale and messages
      dispatch(setLocale(newLocale));
      dispatch(
        setMessages({ locale: newLocale, messages: allMessages[newLocale] })
      );
    } else {
      console.log("LanguageSelector - Loading messages for:", newLocale);
      // Load messages from file
      dispatch(loadMessages(newLocale));
    }
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className={`w-[130px] !h-10 ${className}`}>
        <div className="flex items-center">
          {locale === "en" ? (
            <ReactCountryFlag
              countryCode="GB"
              svg
              className="mr-2"
              style={{ width: "18px", height: "18px" }}
            />
          ) : (
            <ReactCountryFlag
              countryCode="FR"
              svg
              className="mr-2"
              style={{ width: "18px", height: "18px" }}
            />
          )}
          <SelectValue>{locale === "en" ? "English" : "Français"}</SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center">
            <ReactCountryFlag
              countryCode="GB"
              svg
              className="mr-2"
              style={{ width: "18px", height: "18px" }}
            />
            English
          </div>
        </SelectItem>
        <SelectItem value="fr">
          <div className="flex items-center">
            <ReactCountryFlag
              countryCode="FR"
              svg
              className="mr-2"
              style={{ width: "18px", height: "18px" }}
            />
            Français
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
