"use client";

import { useDispatch, useSelector } from "react-redux";
import { setLocale, loadMessages } from "../../../redux/features/languageSlice";
import { Button } from "../../ui/button";
import { useTranslations } from "../../../hooks/useTranslations";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const { currentLocale, loading } = useSelector((state) => state.language);
  const t = useTranslations("common");

  const handleLanguageChange = async (newLocale) => {
    if (newLocale === currentLocale || loading) return;

    try {
      // Load messages for the new locale
      await dispatch(loadMessages(newLocale)).unwrap();
      // Set the new locale
      dispatch(setLocale(newLocale));
    } catch (error) {
      console.error(`Failed to switch to ${newLocale}:`, error);
    }
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">{t("language")}:</span>
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={currentLocale === lang.code ? "default" : "outline"}
            size="sm"
            onClick={() => handleLanguageChange(lang.code)}
            disabled={loading}
            className="flex items-center space-x-1 px-2 py-1 text-xs"
          >
            <span>{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
