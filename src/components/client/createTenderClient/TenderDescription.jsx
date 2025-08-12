import TipTapEditor from "@/utils/TipTapEditor/TipTapEditor";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTenderDescription } from "@/redux/features/createTender/createtenderSlice";

function TenderDescription() {
  const dispatch = useDispatch();

  const resetTrigger = useSelector((state) => state.createTender.resetTrigger);

  const handleTenderDescription = (description) => {
    dispatch(setTenderDescription(description));
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-medium ">Tender Description</h2>
          <p>This will be visible to anyone who views your tender post.</p>
        </div>
        <div>
          <TipTapEditor
            handleJobDescription={handleTenderDescription}
            resetTrigger={resetTrigger}
          />
        </div>
      </div>
    </div>
  );
}

export default TenderDescription;
