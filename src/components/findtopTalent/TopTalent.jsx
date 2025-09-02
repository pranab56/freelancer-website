"use client";

import React from "react";
import { useSelector } from "react-redux";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ServiceCard from "../common/ServiceCard/ServiceCard";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearchOutline } from "react-icons/io5";

function TopTalent() {
  const messages = useSelector((state) => state.language.messages);
  const topTalentTranslations = messages?.topTalent || {};

  // Simple loading check - if no messages, show loading
  if (!messages || Object.keys(messages).length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  const setTopTalentBanner = {
    src: "/services/service_1.png",
    header: topTalentTranslations.banner?.title || "Find Top Talent",
    text:
      topTalentTranslations.banner?.description ||
      "Select top-tier talent that aligns with your organization's goals and needs. Our platform connects you with skilled professionals who can drive innovation, improve productivity, and ensure the success of your projects, delivering exceptional results every time.",
    buttonName: topTalentTranslations.banner?.buttonText || "Hire Freelancers",
  };

  const services = Array(8).fill({}); // or your service data

  return (
    <div className="max-w-7xl mx-auto">
      <Banner
        src={setTopTalentBanner.src}
        header={setTopTalentBanner.header}
        text={setTopTalentBanner.text}
        buttonName={setTopTalentBanner.buttonName}
      />
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 2xl:px-0">
        <Heading
          heading={topTalentTranslations.heading?.title || "UX Design"}
          subheading={
            topTalentTranslations.heading?.subtitle ||
            "Provide your visitors with a seamless experience through strong UX design."
          }
        />
        <div className="flex flex-col items-center gap-4 my-5 md:my-8 lg:my-10 px-4 sm:px-6 2xl:px-0 ">
          <div className="relative w-full ">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder={
                topTalentTranslations.search?.placeholder || "Search talents..."
              }
              className="pr-10"
            />
          </div>
          <div className="flex items-center gap-2 md:gap-10 ">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={
                    topTalentTranslations.select?.category || "Select Category"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                    {topTalentTranslations.select?.categoryLabel ||
                      "Categories"}
                  </SelectLabel>
                  <SelectItem value="design">
                    {topTalentTranslations.categories?.design || "Design"}
                  </SelectItem>
                  <SelectItem value="development">
                    {topTalentTranslations.categories?.development ||
                      "Development"}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={
                    topTalentTranslations.select?.skill || "Select Skill"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                    {topTalentTranslations.select?.skillLabel || "Skills"}
                  </SelectLabel>
                  <SelectItem value="ux">
                    {topTalentTranslations.skills?.ux || "UX Design"}
                  </SelectItem>
                  <SelectItem value="frontend">
                    {topTalentTranslations.skills?.frontend ||
                      "Frontend Development"}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center py-4 mx-auto px-4 sm:px-6 2xl:px-0">
        {services.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
    </div>
  );
}

export default TopTalent;
