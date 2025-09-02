"use client";

import { useSelector } from "react-redux";
import SkilledFreelancersSection from "./SkilledFreelancersSection";

const SkilledFreelancersSectionWrapper = () => {
  const currentLocale = useSelector((state) => state.language.currentLocale);

  return <SkilledFreelancersSection currentLocale={currentLocale} />;
};

export default SkilledFreelancersSectionWrapper;
