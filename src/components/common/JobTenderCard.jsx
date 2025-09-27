import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../ui/card";
import { getImageUrl } from "@/utils/getImageUrl";

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

  // Map API response to card data structure
  const mapApiDataToCard = (apiData) => {
    if (!apiData) return type === "job" ? defaultJobData : defaultTenderData;

    if (type === "job") {
      return {
        _id: apiData._id,
        jobImg: apiData.image
          ? `${apiData.image}`
          : "/jobtender/job_tender.png",
        name: apiData.title || "Company Name",
        designation: apiData.title || "Job Title",
        location: "Remote", // You might want to add location field to your API
        jobType: apiData.jobType || "Full-Time",
        categoryName: apiData.categoryName,
        serviceTypeName: apiData.serviceTypeName,
        description: apiData.description,
        startDate: apiData.startDate,
        endDate: apiData.endDate,
        websiteLink: apiData.websiteLink,
      };
    } else {
      return {
        _id: apiData._id,
        jobImg: apiData.image
          ? `${apiData.image}`
          : "/jobtender/job_tender.png",
        projectName: apiData.title || "Project Name",
        projectRole: apiData.title || "Role",
        posted: new Date(apiData.createdAt).toLocaleDateString(),
        deadline: new Date(apiData.endDate).toLocaleDateString(),
        categoryName: apiData.categoryName,
        serviceTypeName: apiData.serviceTypeName,
        description: apiData.description,
      };
    }
  };

  const cardData = mapApiDataToCard(data);

  return (
    <div>
      <Link
        href={`/${type === "job" ? "job-details" : "tenders-details"}/${
          cardData._id
        }`}
      >
        <Card className="max-w-[20rem] mx-auto  -space-y-6  -md:space-y-8 p-1 md:p-2">
          <CardContent className="p-1 md:p-2">
            <img
              src={getImageUrl(cardData.jobImg)}
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
                  <p className="text-xs text-gray-500">
                    {cardData.categoryName}
                  </p>
                </div>
                <div className="flex flex-col items-start lg:items-end h2-gradient-text space-y-1 md:space-y-2">
                  <p className="text-sm">Type: {cardData.jobType}</p>
                  <p className="text-xs text-gray-500">
                    {cardData.serviceTypeName}
                  </p>
                </div>
              </div>
            </CardFooter>
          ) : (
            <CardFooter className="px-1 md:px-2 my-4">
              <div className="text-[#667085]">
                <h1 className="text-xl font-bold text-black">
                  {cardData.projectName}
                </h1>
                <p className="text-sm">Role: {cardData.projectRole}</p>
                <p className="text-xs text-gray-500">{cardData.categoryName}</p>
                <p className="text-xs">Posted: {cardData.posted}</p>
                <p className="text-xs">Deadline: {cardData.deadline}</p>
              </div>
            </CardFooter>
          )}
        </Card>
      </Link>
    </div>
  );
}

export default JobTenderCard;
