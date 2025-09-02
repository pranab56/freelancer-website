"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Calendar, Users, Briefcase } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ShowLoginDialog from "./showLoginDialog/ShowLoginDialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogDescription } from "../ui/dialog";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/showToast/ShowToast";

function JobTenderSidebar({ jobData }) {
  const pathname = usePathname();
  const isTenderPage = pathname.includes("tenders-details");
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const userType = currentUser?.type;
  const router = useRouter();
  const [respondedToTender, setRespondedToTender] = useState(false);
  const [respondedToJob, setRespondedToJob] = useState(false);
  const showToast = useToast();

  // Get translations from Redux
  const messages = useSelector((state) => state.language.messages);
  const jobTenderSidebarTranslations = messages?.jobTenderSidebar || {};
  const commonTranslations = messages?.common || {};

  // Default/mock data if no jobData is provided
  const defaultData = {
    id: 1,
    company: {
      name: jobTenderSidebarTranslations.defaultCompanyName || "CONLINE",
      logo: "/jobtender/job_tender_details.png",
      website: jobTenderSidebarTranslations.visitWebsite || "Visit Website",
    },
    title: jobTenderSidebarTranslations.defaultTitle || "CONLINE",
    jobType: jobTenderSidebarTranslations.defaultJobType || "Full Time",
    totalApply: 20,
    location:
      jobTenderSidebarTranslations.defaultLocation || "Dhaka, Bangladesh",
    datePosted: jobTenderSidebarTranslations.defaultDatePosted || "Jul 1, 2025",
  };

  const job = jobData || defaultData;

  const handleApplyForThisPosition = () => {
    if (!isLoggedIn) {
      setOpenLoginDialog(true);
    }
  };

  const handleRespondToTender = () => {
    if (respondedToTender) {
      showToast.error(
        jobTenderSidebarTranslations.alreadyRespondedToTenderError ||
          "You have already responded to this tender"
      );
    } else {
      setRespondedToTender(true);
      showToast.success(
        jobTenderSidebarTranslations.tenderRespondedSuccess ||
          "Tender responded successfully",
        {
          description:
            jobTenderSidebarTranslations.tenderRespondedSuccessDescription ||
            "You can now view your response in the tender page",
        }
      );
    }
  };

  const handleRespondToJob = () => {
    if (respondedToJob) {
      showToast.error(
        jobTenderSidebarTranslations.alreadyAppliedToJobError ||
          "You have already applied for this job"
      );
    } else {
      setRespondedToJob(true);
      showToast.success(
        jobTenderSidebarTranslations.jobAppliedSuccess ||
          "Job applied successfully",
        {
          description:
            jobTenderSidebarTranslations.jobAppliedSuccessDescription ||
            "You can now view your response in the job page",
        }
      );
    }
  };

  return (
    <Card className="w-full max-w-[17rem] mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
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
        {isTenderPage ? (
          userType !== "client" ? (
            <Button
              className={`max-w-60 mx-auto hover:bg-gray-400 text-white font-medium ${
                respondedToTender
                  ? "bg-gray-500 cursor-not-allowed"
                  : "button-gradient"
              }`}
              onClick={
                isLoggedIn ? handleRespondToTender : handleApplyForThisPosition
              }
            >
              {respondedToTender
                ? jobTenderSidebarTranslations.respondedButtonText ||
                  "Responded"
                : jobTenderSidebarTranslations.respondToTenderButtonText ||
                  "Respond to Tender"}
            </Button>
          ) : null
        ) : userType !== "client" ? (
          <Button
            className={`max-w-60 mx-auto hover:bg-gray-400 text-white font-medium ${
              respondedToJob
                ? "bg-gray-500 cursor-not-allowed"
                : "button-gradient"
            }`}
            onClick={
              isLoggedIn ? handleRespondToJob : handleApplyForThisPosition
            }
          >
            {respondedToJob
              ? jobTenderSidebarTranslations.appliedButtonText || "Applied"
              : jobTenderSidebarTranslations.applyButtonText ||
                "Apply for this Position"}
          </Button>
        ) : null}
        <Separator className="mt-4" />
      </CardHeader>

      <CardContent className="p-6 pt-4 space-y-4">
        {/* Job Type */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {jobTenderSidebarTranslations.jobTypeLabel || "Job Type"}
            </span>
          </div>
          <span className="text-sm text-gray-600">{job.jobType}</span>
        </div>

        {/* Total Apply */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {jobTenderSidebarTranslations.totalApplyLabel || "Total Apply"}
            </span>
          </div>
          <span className="text-sm text-gray-600">{job.totalApply}</span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {jobTenderSidebarTranslations.locationLabel || "Location"}
            </span>
          </div>
          <span className="text-sm text-gray-600">{job.location}</span>
        </div>

        {/* Date Posted */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {jobTenderSidebarTranslations.datePostedLabel || "Date Posted"}
            </span>
          </div>
          <span className="text-sm text-gray-600">{job.datePosted}</span>
        </div>
      </CardContent>
      <ShowLoginDialog open={openLoginDialog} onOpenChange={setOpenLoginDialog}>
        <DialogTitle className="text-2xl font-bold">
          {jobTenderSidebarTranslations.loginDialogTitle ||
            "Login to Apply for this Position"}
        </DialogTitle>
        <DialogDescription className="text-sm text-gray-600">
          {jobTenderSidebarTranslations.loginDialogDescription ||
            "Please login to apply for this position"}
        </DialogDescription>
        <div className="flex justify-end">
          <Button
            className="button-gradient text-white font-medium w-fit"
            onClick={() => router.push("/login")}
          >
            {jobTenderSidebarTranslations.loginButtonText || "Login"}
          </Button>
        </div>
      </ShowLoginDialog>
    </Card>
  );
}

export default JobTenderSidebar;
