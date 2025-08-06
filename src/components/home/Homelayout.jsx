import React from "react";
import HomeBanner from "./HomeBanner";
import TalentCategories from "./Slider";
import SkilledFreelancersSection from "./SkilledFreelancersSection";
import PopularServices from "./PopularServices";
import FindTalentWay from "./FindTalentWay";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "./Testimonial";

function Homelayout() {
  return (
    <>
      <HomeBanner />
      <TalentCategories />
      <SkilledFreelancersSection />
      <PopularServices />
      <FindTalentWay />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
}

export default Homelayout;
