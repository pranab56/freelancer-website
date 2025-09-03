"use client";

import React, { useState, useEffect } from "react";
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
  const [isClient, setIsClient] = useState(false);
  const messages = useSelector((state) => state.language.messages);
  const topTalentTranslations = messages?.topTalent || {};

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

        {/* Heading and search skeleton */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 2xl:px-0">
          <div className="animate-pulse space-y-4 mb-8">
            <div className="h-8 bg-gray-300 rounded max-w-48"></div>
            <div className="h-6 bg-gray-300 rounded max-w-96"></div>
          </div>

          <div className="flex flex-col items-center gap-4 my-5 md:my-8 lg:my-10 px-4 sm:px-6 2xl:px-0">
            <div className="relative w-full">
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-2 md:gap-10">
              <div className="h-10 bg-gray-300 rounded w-[180px]"></div>
              <div className="h-10 bg-gray-300 rounded w-[180px]"></div>
            </div>
          </div>
        </div>

        {/* Services grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center py-4 mx-auto px-4 sm:px-6 2xl:px-0">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
          ))}
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
