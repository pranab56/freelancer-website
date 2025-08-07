import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";

function JobTenderCard({ type = "tender", data }) {
  const defaultJobData = {
    jobImg: "/jobtender/job_tender.png",
    name: "CONLINE",
    designation: "Senior Graphic Designer",
    location: "Austin",
    jobType: "Remote",
  };
  const defaultTenderData = {
    jobImg: "/jobtender/job_tender.png",
    projectName: "CRMS Alignment",
    projectRole: "Business Analyst",
    posted: "03/2023",
    deadline: "05/2023",
  };

  const cardData =
    data || (type === "job" ? defaultJobData : defaultTenderData);

  return (
    <div>
      <Card className="max-w-[20rem]  space-y-4">
        <CardContent>
          <Image
            src={cardData.jobImg}
            width={600}
            height={600}
            alt=""
            className="w-full"
          />
        </CardContent>
        {type === "job" ? (
          <CardFooter className="">
            <div className="flex items-start justify-between w-full">
              <div>
                <h1 className="text-xl font-bold">{cardData.name}</h1>
                <p className="text-sm">{cardData.designation}</p>
              </div>
              <div className="flex flex-col items-end h2-gradient-text ">
                <p>Location: {cardData.location}</p>
                <p className="font-bold ">{cardData.jobType}</p>
              </div>
            </div>
          </CardFooter>
        ) : (
          <CardFooter className="">
            <div className="text-[#667085]">
              <h1 className="text-xl font-bold text-black">
                Project {1}: {cardData.projectName}
              </h1>
              <p>Role : {cardData.projectRole}</p>
              <p>Posted : {cardData.posted}</p>
              <p>Deadline : {cardData.deadline}</p>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

export default JobTenderCard;
