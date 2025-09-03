"use client";
import React from "react";
import dynamic from "next/dynamic";
import Heading from "../common/heading/Heading";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import SideBar from "../common/SideBar";
import MainContent from "../common/maincontent/MainContent";
import Banner from "../common/banner/Banner";
import { useSelector } from "react-redux";

// Dynamic import with no SSR to prevent hydration errors
const JobBoardLayoutContent = dynamic(
  () =>
    Promise.resolve(() => {
      const [messages, userType] = [
        useSelector((state) => state.language.messages),
        useSelector((state) => state.currentUser?.currentUser?.type),
      ];

      const jobBoardTranslations = messages?.jobBoard || {};
      const commonTranslations = messages?.common || {};

      const setJobBannerFreelancer = {
        src: "/jobtender/job_banner.png",
        header:
          jobBoardTranslations.freelancerBannerHeader ||
          "Find Your Next Opportunity!",
        text:
          jobBoardTranslations.freelancerBannerText ||
          "Discover exciting job opportunities that match your skills and career goals. Our platform connects talented professionals with innovative companies.",
        buttonName: "",
      };

      const setJobBannerClient = {
        src: "/jobtender/job_banner.png",
        header:
          jobBoardTranslations.clientBannerHeader || "Post Jobs & Find Talent",
        text:
          jobBoardTranslations.clientBannerText ||
          "Welcome to our Job Board, where businesses can post job opportunities and connect with qualified candidates. Whether you're hiring for a full-time position or seeking freelance talent, we provide the tools and platform to make your recruitment process efficient and successful.",
        buttonName: jobBoardTranslations.clientBannerButtonName || "Post a Job",
        buttonLink: "/create-job-client",
      };

      return (
        <div className="max-w-7xl py-6 mx-auto">
          <div className="animate-fade-in-up">
            <Banner
              src={
                userType === "client"
                  ? setJobBannerClient.src
                  : setJobBannerFreelancer.src
              }
              header={
                userType === "client"
                  ? setJobBannerClient.header
                  : setJobBannerFreelancer.header
              }
              text={
                userType === "client"
                  ? setJobBannerClient.text
                  : setJobBannerFreelancer.text
              }
              buttonName={
                userType === "client"
                  ? setJobBannerClient.buttonName
                  : setJobBannerFreelancer.buttonName
              }
              buttonLink={
                userType === "client"
                  ? setJobBannerClient.buttonLink
                  : setJobBannerFreelancer.buttonLink
              }
            />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-4 md:px-6 lg:px-10 2xl:px-0 w-full">
              <Heading
                heading={
                  jobBoardTranslations.availableJobsHeading || "Available Jobs"
                }
                subheading={
                  jobBoardTranslations.availableJobsSubheading ||
                  "Browse through our latest job postings and find your next career move."
                }
              />
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
                <div className="relative w-full sm:w-64 md:w-72">
                  <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder={commonTranslations.search || "Search..."}
                    className="pl-9 pr-3 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-10 px-4 sm:px-6 lg:px-10 2xl:px-0">
              <SideBar />
              <MainContent type="job" />
            </div>
          </div>
        </div>
      );
    }),
  { ssr: false }
);

function JobBoardLayout() {
  return <JobBoardLayoutContent />;
}

export default JobBoardLayout;
