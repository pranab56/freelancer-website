import React from "react";
import Banner from "../common/banner/Banner";
import SideBar from "../common/SideBar";
import MainContent from "../common/maincontent/MainContent";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import Heading from "../common/heading/Heading";

function JobBoardLayout() {
  const setTopTalentBanner = {
    src: "/jobtender/job_banner.png",
    header: "Explore Top Freelance Opportunities",
    text: "Browse through the latest freelance projects and find your next big opportunity. Whether you're looking to work remotely or collaborate on-site, discover jobs that match your skills and expertise.",
    buttonName: "Post a Job",
  };
  return (
    <div className="max-w-7xl py-6 mx-auto">
      <Banner
        src={setTopTalentBanner.src}
        header={setTopTalentBanner.header}
        text={setTopTalentBanner.text}
        buttonName={setTopTalentBanner.buttonName}
      />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-4 md:px-6 w-full">
        {/* Heading */}
        <Heading
          heading="Recent Posts"
          subheading="Choose the best talent for your organization's success."
        />

        {/* Search Box */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
          <div className="relative w-full sm:w-64 md:w-72">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-10 px-4 sm:px-6 lg:px-10 2xl:px-0">
        <SideBar />
        <div className="flex-1">
          <MainContent type="job" />
        </div>
      </div>
    </div>
  );
}

export default JobBoardLayout;
