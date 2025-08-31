import React from "react";
import HomeBanner from "./HomeBanner";
import TalentCategories from "./Slider";
import PopularServices from "./PopularServices";
import Testimonial from "./Testimonial";
import SkilledFreelancersSectionWrapper from "./SkilledFreelancersSectionWrapper";
import FindTalentWayWrapper from "./FindTalentWayWrapper";
import WhyChooseUsWrapper from "./WhyChooseUsWrapper";
import { useLocale } from "next-intl";

function Homelayout() {
  const locale = useLocale();

  return (
    <>
      <HomeBanner key={`home-banner-${locale}`} />
      <TalentCategories key={`talent-categories-${locale}`} />
      <SkilledFreelancersSectionWrapper />
      <PopularServices key={`popular-services-${locale}`} />
      <FindTalentWayWrapper />
      <WhyChooseUsWrapper />
      <Testimonial key={`testimonial-${locale}`} />
    </>
  );
}

export default Homelayout;
