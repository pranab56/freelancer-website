import TipTapEditor from "@/utils/TipTapEditor/TipTapEditor";
import React from "react";

function JobDescription() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-medium ">Job Description</h2>
          <p>This will be visible to anyone who views your job post.</p>
        </div>
        <div>
          <TipTapEditor />
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
