"use client";
import React from "react";
import { useLocale } from "next-intl";
import SkilledFreelancersSection from "./SkilledFreelancersSection";

function SkilledFreelancersSectionWrapper() {
  const locale = useLocale();

  // Force complete re-render when locale changes
  return (
    <SkilledFreelancersSection key={`skilled-freelancers-wrapper-${locale}`} />
  );
}

export default SkilledFreelancersSectionWrapper;
