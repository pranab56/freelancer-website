"use client";

import React from "react";
import { useSelector } from "react-redux";

export default function ReduxDebug() {
  const languageState = useSelector((state) => state.language);

  return (
    <div className="fixed top-4 left-4 z-50 bg-black text-white p-4 rounded text-xs max-w-sm">
      <h3 className="font-bold mb-2">Redux Language State</h3>
      <div>Current Locale: {languageState.currentLocale}</div>
      <div>Loading: {languageState.loading ? "Yes" : "No"}</div>
      <div>Error: {languageState.error || "None"}</div>
      <div>
        Cached Locales: {Object.keys(languageState.allMessages).join(", ")}
      </div>
      <div>
        Available Namespaces: {Object.keys(languageState.messages).join(", ")}
      </div>
      <div className="mt-2">
        Home Banner Keys:{" "}
        {languageState.messages.home?.banner
          ? Object.keys(languageState.messages.home.banner).join(", ")
          : "Not found"}
      </div>
      <div className="mt-2 text-gray-300">
        Time: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
