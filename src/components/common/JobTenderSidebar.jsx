import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Calendar, Users, Briefcase } from "lucide-react";

function JobTenderSidebar({ jobData }) {
  // Default/mock data if no jobData is provided
  const defaultData = {
    id: 1,
    company: {
      name: "CONLINE",
      logo: "/jobtender/job_tender_details.png",
      website: "visit Website",
    },
    title: "CONLINE",
    jobType: "Full Time",
    totalApply: 20,
    location: "Dhaka, Bangladesh",
    datePosted: "Jul 1, 2025",
  };

  const job = jobData || defaultData;

  return (
    <Card className="w-full max-w-sm mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
      <CardHeader className="text-center p-6 pb-4">
        {/* Company Avatar */}
        <div className="flex justify-center mb-4">
          <Avatar className="w-36 h-36 bg-gray-900">
            <AvatarImage src={job.company.logo} alt={job.company.name} />
            <AvatarFallback className="bg-gray-900 text-white text-lg font-semibold">
              {job.company.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Company Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>

        {/* Website Link */}
        <p className="text-sm text-gray-500 mb-4">{job.company.website}</p>

        {/* Apply Button */}
        <Button className="max-w-60 mx-auto button-gradient text-white font-medium">
          Apply For This Position
        </Button>
        <Separator className="mt-4" />
      </CardHeader>

      <CardContent className="p-6 pt-4 space-y-4">
        {/* Job Type */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Job Type</span>
          </div>
          <span className="text-sm text-gray-600">{job.jobType}</span>
        </div>

        {/* Total Apply */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              Total Apply
            </span>
          </div>
          <span className="text-sm text-gray-600">{job.totalApply}</span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Location</span>
          </div>
          <span className="text-sm text-gray-600">{job.location}</span>
        </div>

        {/* Date Posted */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              Date Posted
            </span>
          </div>
          <span className="text-sm text-gray-600">{job.datePosted}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default JobTenderSidebar;
