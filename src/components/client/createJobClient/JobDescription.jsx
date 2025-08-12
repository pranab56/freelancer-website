import TipTapEditor from "@/utils/TipTapEditor/TipTapEditor";
import { useDispatch } from "react-redux";
import React from "react";
import { setJobDescription } from "@/redux/features/createJob/createjobSlice";

function JobDescription() {
  const dispatch = useDispatch();
  const handleJobDescription = (description) => {
    dispatch(setJobDescription(description));
  };
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-medium ">Job Description</h2>
          <p>This will be visible to anyone who views your job post.</p>
        </div>
        <div>
          <TipTapEditor handleJobDescription={handleJobDescription} />
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
