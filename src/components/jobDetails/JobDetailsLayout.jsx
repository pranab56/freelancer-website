import React from "react";
import JobTenderSidebar from "../common/JobTenderSidebar";
import JobTenderDetails from "../common/JobTenderDetails";

function JobDetailsLayout() {
  return (
    <div className="flex items-start max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-10 2xl:px-0">
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0">
        <JobTenderSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <JobTenderDetails jobData={null} />
      </div>
    </div>
  );
}

export default JobDetailsLayout;
