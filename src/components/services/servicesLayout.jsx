"use client";

import React from "react";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ServiceCard from "../common/ServiceCard/ServiceCard";
import PopularServices from "../home/PopularServices";
import { useSelector } from "react-redux";
import { currentLanguage } from "../../redux/features/languageSlice";

function ServicesLayout() {
  const messages = useSelector((state) => state.language.messages);
  const languages = useSelector(currentLanguage);
  console.log("servicesLayout", languages);
  const servicesTranslations = messages?.home?.services || {};

  const setServiceBanner = {
    src: "/services/service_1.png",
    header:
      servicesTranslations.banner?.title ||
      "Choose the best talent for your organization's success.",
    text:
      servicesTranslations.banner?.description ||
      "Choose the perfect freelancer to elevate your organization with top-tier skills, experience, and expertise.",
    buttonName: servicesTranslations.banner?.buttonText || "Hire Freelancers",
  };

  const services = Array(8).fill({}); // or your service data

  return (
    <div className="max-w-7xl mx-auto">
      <Banner
        src={setServiceBanner.src}
        header={setServiceBanner.header}
        text={setServiceBanner.text}
        buttonName={setServiceBanner.buttonName}
      />

      <div className="px-4 sm:px-6 2xl:px-0 py-4 md:py-12 ">
        <Heading
          heading={servicesTranslations.heading?.title || "UX Design"}
          subheading={
            servicesTranslations.heading?.subtitle ||
            "Provide your visitors with a seamless experience through strong UX design."
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center py-4 px-4 sm:px-6 2xl:px-0 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
      <PopularServices />
    </div>
  );
}

export default ServicesLayout;
