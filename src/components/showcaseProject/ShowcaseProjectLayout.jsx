"use client";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Banner from "../common/banner/Banner";
import ServiceCard from "../common/ServiceCard/ServiceCard";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { Button } from "../ui/button";
import useCheckUserAndLoggedIn from "@/hooks/checkUserTypeAndLoggedIn/CheckUserAndLoggedIn";

function ShowcaseProjectLayout() {
  const { isClientAndLoggedIn, isLoggedIn, isFreelancerAndLoggedIn } =
    useCheckUserAndLoggedIn();

  // Get translations from Redux
  const messages = useSelector((state) => state.language.messages);
  const translations = useMemo(
    () =>
      messages?.showcaseProject || {
        banner: {
          header: "Showcase Your Projects",
          text: "Highlight your work and attract potential clients by showcasing your completed projects. This section lets you display your best work, providing clients with a glimpse of your skills, expertise, and creativity.",
          buttonName: "View All Projects",
        },
        heading: "Discover Projects",
        buttons: {
          addNewProject: "Add new Project",
          edit: "Edit",
        },
      },
    [messages]
  );

  const setShowcaseBanner = {
    src: "/showcase/showcase.png",
    header: translations.banner.header,
    text: translations.banner.text,
    buttonName:
      isClientAndLoggedIn || isLoggedIn ? "" : translations.banner.buttonName,
  };

  const services = Array(8).fill({}); // or your service data
  return (
    <div className="max-w-7xl mx-auto">
      <Banner
        src={setShowcaseBanner.src}
        header={setShowcaseBanner.header}
        text={setShowcaseBanner.text}
        buttonName={setShowcaseBanner.buttonName}
      />
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="h2-gradient-text text-2xl font-bold">
          {translations.heading}
        </h1>
        {isFreelancerAndLoggedIn && (
          <div className="flex items-center gap-4 my-10">
            <Button className="bg-transparent h2-gradient-text">
              {translations.buttons.addNewProject}{" "}
              <IoAddCircleOutline className="text-blue-800" />
            </Button>
            <Button className="bg-transparent h2-gradient-text">
              {translations.buttons.edit} <FiEdit className="text-blue-800" />
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center py-4 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
    </div>
  );
}

export default ShowcaseProjectLayout;
