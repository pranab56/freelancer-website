"use client";
import React from "react";
import CreateJobTopForm from "./CreateJobTopForm";
import JobDescription from "./JobDescription";
import Qualifications from "./Qualifications";
import PrefferedQualifications from "./PrefferedQualifications";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function CreateJobClientLayout() {
  const router = useRouter();
  const { type } = useParams();
  const handlePostJob = () => {
    router.push("/thank-you-page?type=job");
  };
  return (
    <div className="space-y-6">
      <CreateJobTopForm />
      <JobDescription />
      <Qualifications />
      <PrefferedQualifications />
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0 flex flex-col md:flex-row md:justify-center  lg:justify-end gap-4">
        <Button className="bg-white text-black hover:bg-gray-100 border ">
          Cancel
        </Button>
        <Button className="button-gradient" onClick={handlePostJob}>
          Post Job
        </Button>
      </div>
    </div>
  );
}

export default CreateJobClientLayout;
