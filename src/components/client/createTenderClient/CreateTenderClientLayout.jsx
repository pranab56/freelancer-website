"use client";
import React from "react";
import CreateTenderTopForm from "./CreateTenderTopForm";
import TenderDescription from "./TenderDescription";
import QualificationsTender from "./QualificationsTender";
import PrefferedQualificationsTender from "./PrefferedQualificationsTender";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  resetTenderData,
  consoleTenderData,
} from "@/redux/features/createTender/createtenderSlice";
import { useSelector } from "react-redux";
function CreateTenderClientLayout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { type } = useParams();
  const tenderData = useSelector((state) => state.createTender);
  console.log(tenderData);
  const handlePostTender = () => {
    router.push("/thank-you-page?type=tender");
  };
  return (
    <div className="space-y-6">
      <CreateTenderTopForm />
      <TenderDescription />
      <QualificationsTender />
      <PrefferedQualificationsTender />
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0 flex flex-col md:flex-row md:justify-center  lg:justify-end gap-4">
        <Button
          className="bg-white text-black hover:bg-gray-100 border "
          onClick={() => dispatch(resetTenderData())}
        >
          Cancel
        </Button>
        <Button
          className="button-gradient"
          onClick={() => {
            dispatch(consoleTenderData());
            handlePostTender();
          }}
        >
          Post Tender
        </Button>
      </div>
    </div>
  );
}

export default CreateTenderClientLayout;
