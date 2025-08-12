import TipTapEditor from "@/utils/TipTapEditor/TipTapEditor";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreferredQualifications } from "@/redux/features/createTender/createtenderSlice";

function PrefferedQualificationsTender() {
  const dispatch = useDispatch();

  const resetTrigger = useSelector((state) => state.createTender.resetTrigger);

  const handlePreferredQualifications = (qualifications) => {
    dispatch(setPreferredQualifications(qualifications));
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-medium ">Preferred qualifications</h2>
          <p>
            Your applicants don’t need to have these qualifications, but you
            prefer to hire someone with them.
          </p>
        </div>
        <div>
          <TipTapEditor
            handlePreferredQualifications={handlePreferredQualifications}
            resetTrigger={resetTrigger}
          />
        </div>
      </div>
    </div>
  );
}

export default PrefferedQualificationsTender;
