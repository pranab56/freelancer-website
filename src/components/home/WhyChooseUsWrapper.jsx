"use client";
import React from "react";
import { useLocale } from "next-intl";
import WhyChooseUs from "./WhyChooseUs";

function WhyChooseUsWrapper() {
  const locale = useLocale();

  // Force complete re-render when locale changes
  return <WhyChooseUs key={`why-choose-us-wrapper-${locale}`} />;
}

export default WhyChooseUsWrapper;
