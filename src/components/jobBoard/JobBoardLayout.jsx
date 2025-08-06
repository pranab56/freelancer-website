import React from "react";
import Banner from "../common/banner/Banner";

function JobBoardLayout() {
  const setTopTalentBanner = {
    src: "/jobtender/job_banner.png",
    header: "Explore Top Freelance Opportunities",
    text: "Browse through the latest freelance projects and find your next big opportunity. Whether you're looking to work remotely or collaborate on-site, discover jobs that match your skills and expertise.",
    buttonName: "Post a Job",
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Banner
        src={setTopTalentBanner.src}
        header={setTopTalentBanner.header}
        text={setTopTalentBanner.text}
        buttonName={setTopTalentBanner.buttonName}
      />
      <div></div>
    </div>
  );
}

export default JobBoardLayout;
