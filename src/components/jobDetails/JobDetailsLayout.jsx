"use client";
import React, { useState, useEffect } from "react";
import JobTenderSidebar from "../common/JobTenderSidebar";
import JobTenderDetails from "../common/JobTenderDetails";

function JobDetailsLayout() {
  const [isClient, setIsClient] = useState(false);

  // Only render on client side to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state on server, content on client
  if (!isClient) {
    return (
      <div className="flex flex-col md:flex-row md:items-start gap-x-6 max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 2xl:px-0">
        {/* Sidebar skeleton */}
        <div className="w-full md:max-w-[17rem] flex-1 flex-shrink-0">
          <div className="animate-pulse">
            <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Main Content skeleton */}
        <div className="w-full flex-1 overflow-auto pt-6 md:pt-0">
          <div className="animate-pulse space-y-6">
            {/* Header card skeleton */}
            <div className="h-48 bg-gray-300 rounded-lg"></div>

            {/* Responsibilities card skeleton */}
            <div className="h-64 bg-gray-300 rounded-lg"></div>

            {/* Requirements card skeleton */}
            <div className="h-48 bg-gray-300 rounded-lg"></div>

            {/* Benefits card skeleton */}
            <div className="h-48 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-x-6 max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 2xl:px-0">
      {/* Sidebar */}
      <div className="w-full md:max-w-[17rem] flex-1 flex-shrink-0">
        <JobTenderSidebar />
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 overflow-auto pt-6 md:pt-0">
        <JobTenderDetails jobData={null} />
      </div>
    </div>
  );
}

export default JobDetailsLayout;
