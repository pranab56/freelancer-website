"use client";

import { useSelector } from "react-redux";
import FindTalentWay from "./FindTalentWay";

const FindTalentWayWrapper = () => {
  const currentLocale = useSelector((state) => state.language.currentLocale);

  return <FindTalentWay currentLocale={currentLocale} />;
};

export default FindTalentWayWrapper;
