import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../ui/card";

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
      <Link
        href={`/${type === "job" ? "job-details" : "tenders-details"}/${cardData._id
          }`}
      >
        <Card className="max-w-[20rem] mx-auto  -space-y-6  -md:space-y-8 p-1 md:p-2">
          <CardContent className="p-1 md:p-2">
            <Image
              src={cardData.jobImg}
              width={600}
              height={600}
              alt=""
              className="w-full"
            />
          </CardContent>
          {type === "job" ? (
            <CardFooter className="p-1 md:p-2 my-4 lg:my-0 ">
              <div className="flex md:flex-row items-start space-y-2 md:space-y-4 lg:space-y-6   justify-between w-full px-1 md:px-2">
                <div className="space-y-1 md:space-y-2">
                  <h1 className="text-md md:text-xl font-bold">
                    {cardData.name}
                  </h1>
                  <p className="text-sm">{cardData.designation}</p>
                </div>
                <div className="flex flex-col items-start lg:items-end h2-gradient-text space-y-1 md:space-y-2">
                  <p>Location: {cardData.location}</p>
                  <p className="font-semibold text-sm md:text-base">
                    {cardData.jobType}
                  </p>
                </div>
              </div>
            </CardFooter>
          ) : (
            <CardFooter className="px-1 md:px-2 my-4">
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
      </Link>
    </div>
  );
}

export default JobTenderCard;
