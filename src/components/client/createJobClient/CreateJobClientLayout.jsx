import React from "react";
import CreateJobTopForm from "./CreateJobTopForm";
import JobDescription from "./JobDescription";
import Qualifications from "./Qualifications";
import PrefferedQualifications from "./PrefferedQualifications";

function CreateJobClientLayout() {
  return (
    <div className="space-y-6">
      <CreateJobTopForm />
      <JobDescription />
      <Qualifications />
      <PrefferedQualifications />
    </div>
  );
}

export default CreateJobClientLayout;
