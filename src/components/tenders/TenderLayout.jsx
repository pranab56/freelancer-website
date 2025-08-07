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
  const setTenderBanner = {
    src: "/jobtender/tnder_banner.png",
    header: "Start Exploring Tenders Today!",
    text: "Whether you're submitting a proposal or posting a project, our platform simplifies the process for both clients and freelancers, ensuring quality results and successful collaborations.",
    buttonName: "",
  };
  return (
    <div className="max-w-7xl py-6 mx-auto">
      <Banner
        src={setTenderBanner.src}
        header={setTenderBanner.header}
        text={setTenderBanner.text}
        buttonName={setTenderBanner.buttonName}
      />
      <div className="flex items-center justify-between">
        <Heading
          heading="Ongoing Tenders"
          subheading="Find project opportunities that match your expertise."
        />
        <div className="flex flex-col items-center gap-4 my-10">
          <div className="relative w-full ">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />

            <Input type="text" className="pr-10" />
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
