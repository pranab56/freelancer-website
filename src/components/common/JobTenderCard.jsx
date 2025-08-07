import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";

function JobTenderCard() {
  const carddata = {
    jobImg: "/jobtender/job_tender.png",
    name: "CONLINE",
    designation: "Senior Graphic Designer",
    location: "Austin",
    jobType: "Remote",
  };

  return (
    <div>
      <Card className="max-w-[20rem]  space-y-4">
        <CardContent>
          <Image
            src={carddata.jobImg}
            width={600}
            height={600}
            alt=""
            className="w-full"
          />
        </CardContent>
        <CardFooter className="">
          <div className="flex items-start justify-between w-full">
            <div>
              <h1 className="text-xl font-bold">{carddata.name}</h1>
              <p className="text-sm">{carddata.designation}</p>
            </div>
            <div className="flex flex-col items-end h2-gradient-text ">
              <p>Location: {carddata.location}</p>
              <p className="font-bold ">{carddata.jobType}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default JobTenderCard;
