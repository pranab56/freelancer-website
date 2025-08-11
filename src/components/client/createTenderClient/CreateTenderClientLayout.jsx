import React from "react";
import CreateTenderTopForm from "./CreateTenderTopForm";
import TenderDescription from "./TenderDescription";
import QualificationsTender from "./QualificationsTender";
import PrefferedQualificationsTender from "./PrefferedQualificationsTender";
import { Button } from "@/components/ui/button";

function CreateTenderClientLayout() {
  return (
    <div className="space-y-6">
      <CreateTenderTopForm />
      <TenderDescription />
      <QualificationsTender />
      <PrefferedQualificationsTender />
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0 flex flex-col md:flex-row md:justify-center  lg:justify-end gap-4">
        <Button className="bg-white text-black hover:bg-gray-100 border ">
          Cancel
        </Button>
        <Button className="button-gradient">Post Tender</Button>
      </div>
    </div>
  );
}

export default CreateTenderClientLayout;
