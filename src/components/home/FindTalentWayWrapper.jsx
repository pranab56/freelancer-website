"use client";
import React from "react";
import { useLocale } from "next-intl";
import FindTalentWay from "./FindTalentWay";

function FindTalentWayWrapper() {
  const locale = useLocale();

  // Force complete re-render when locale changes
  return <FindTalentWay key={`find-talent-way-wrapper-${locale}`} />;
}

export default FindTalentWayWrapper;
