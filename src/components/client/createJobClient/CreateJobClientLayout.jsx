"use client";
import React from "react";
import CreateJobTopForm from "./CreateJobTopForm";
import JobDescription from "./JobDescription";
import Qualifications from "./Qualifications";
import PrefferedQualifications from "./PrefferedQualifications";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  consoleJobData,
  resetJobData,
} from "@/redux/features/createJob/createjobSlice";

function CreateJobClientLayout() {
  const router = useRouter();
  const { type } = useParams();
  const createJobData = useSelector((state) => state.createJob);
  const dispatch = useDispatch();
  const handlePostJob = () => {
    console.log("Job Data to be posted:", createJobData);
    router.push("/thank-you-page?type=job");
  };

  return (
    <div className="space-y-6">
      <CreateJobTopForm />
      <JobDescription />
      <Qualifications />
      <PrefferedQualifications />
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0 flex flex-col md:flex-row md:justify-center  lg:justify-end gap-4">
        <Button
          className="bg-white text-black hover:bg-gray-100 border"
          onClick={() => dispatch(resetJobData())}
        >
          Cancel
        </Button>
        <Button
          className="button-gradient"
          onClick={() => {
            dispatch(consoleJobData());
            handlePostJob();
          }}
        >
          Post Job
        </Button>
      </div>
    </div>
  );
}

export default CreateJobClientLayout;
