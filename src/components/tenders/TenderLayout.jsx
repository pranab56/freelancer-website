import React from "react";
import JobTenderSidebar from "../common/JobTenderSidebar";
import JobTenderDetails from "../common/JobTenderDetails";
import Heading from "../common/heading/Heading";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import SideBar from "../common/SideBar";
import MainContent from "../common/maincontent/MainContent";
import Banner from "../common/banner/Banner";
function TenderLayout() {
  const isClient = true;
  const setTenderBannerFreelancer = {
    src: "/jobtender/tnder_banner.png",
    header: "Start Exploring Tenders Today!",
    text: "Whether you're submitting a proposal or posting a project, our platform simplifies the process for both clients and freelancers, ensuring quality results and successful collaborations.",
    buttonName: "",
  };
  const setTenderBannerClient = {
    src: "/jobtender/tnder_banner.png",
    header: "Browse & Submit Tenders",
    text: "Welcome to our Tender Portal, where businesses and freelancers can find and submit project opportunities. Whether you're looking to post a project or bid on a tender, we ensure a seamless process to connect you with the right professionals and organizations.",
    buttonName: "Post Your Tender",
    buttonLink: "/create-tender-client",
  };

  return (
    <div className="max-w-7xl py-6 mx-auto">
      <Banner
        src={
          isClient ? setTenderBannerClient.src : setTenderBannerFreelancer.src
        }
        header={
          isClient
            ? setTenderBannerClient.header
            : setTenderBannerFreelancer.header
        }
        text={
          isClient ? setTenderBannerClient.text : setTenderBannerFreelancer.text
        }
        buttonName={
          isClient
            ? setTenderBannerClient.buttonName
            : setTenderBannerFreelancer.buttonName
        }
        buttonLink={
          isClient
            ? setTenderBannerClient.buttonLink
            : setTenderBannerFreelancer.buttonLink
        }
      />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-4 md:px-6 lg:px-10 2xl:px-0 w-full">
        <Heading
          heading="Ongoing Tenders"
          subheading="Find project opportunities that match your expertise."
        />
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
        <MainContent />
      </div>
    </div>
  );
}

export default TenderLayout;
