"use client";

import { useSelector } from "react-redux";
import WhyChooseUs from "./WhyChooseUs";

const WhyChooseUsWrapper = () => {
  const currentLocale = useSelector((state) => state.language.currentLocale);

  return <WhyChooseUs currentLocale={currentLocale} />;
};

export default WhyChooseUsWrapper;
