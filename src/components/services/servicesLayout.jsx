"use client";

import React, { useState, useEffect } from "react";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ServiceCard from "../common/ServiceCard/ServiceCard";
import PopularServices from "../home/PopularServices";
import { useSelector } from "react-redux";
import { currentLanguage } from "../../redux/features/languageSlice";

function ServicesLayout() {
  const [isClient, setIsClient] = useState(false);
  const messages = useSelector((state) => state.language.messages);
  const languages = useSelector(currentLanguage);
  const servicesTranslations = messages?.home?.services || {};

  // Only render on client side to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state on server, content on client
  if (!isClient) {
    return (
      <div className="max-w-7xl mx-auto">
        {/* Banner skeleton */}
        <div className="animate-pulse">
          <div className="relative h-64 bg-gray-300 rounded-lg mb-8"></div>
        </div>

        {/* Heading skeleton */}
        <div className="px-4 sm:px-6 2xl:px-0 py-4 md:py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-300 rounded max-w-48"></div>
            <div className="h-6 bg-gray-300 rounded max-w-96"></div>
          </div>
        </div>

        {/* Services grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center py-4 px-4 sm:px-6 2xl:px-0 mx-auto">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* PopularServices skeleton */}
        <div className="animate-pulse">
          <div className="h-16 bg-gray-300 rounded max-w-2xl mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 my-12">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-[12rem] sm:h-[10rem] bg-gray-300 rounded"
              ></div>
            ))}
          </div>
          <div className="h-12 bg-gray-300 rounded w-60 mx-auto"></div>
        </div>
      </div>
    );
  }

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
