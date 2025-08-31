"use client";
import React from "react";
import HomeBanner from "./HomeBanner";
import TalentCategories from "./Slider";
import PopularServices from "./PopularServices";
import Testimonial from "./Testimonial";
import SkilledFreelancersSectionWrapper from "./SkilledFreelancersSectionWrapper";
import FindTalentWayWrapper from "./FindTalentWayWrapper";
import WhyChooseUsWrapper from "./WhyChooseUsWrapper";

function Homelayout() {
  return (
    <>
      <HomeBanner />
      <TalentCategories />
      <SkilledFreelancersSectionWrapper />
      <PopularServices />
      <FindTalentWayWrapper />
      <WhyChooseUsWrapper />
      <Testimonial />
    </>
  );
}

export default Homelayout;
