"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Copy, Share2, CheckCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ShowLoginDialog from "./showLoginDialog/ShowLoginDialog";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { useRouter } from "next/navigation";
function JobDetailsPage({ jobData }) {
  const pathname = usePathname();
  const isTenderPage = pathname.includes("tenders-details");
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const userType = currentUser?.type;
  const router = useRouter();
  // Default/mock data
  const defaultJobData = {
    title: "Senior Graphic Designer",
    description:
      "Bakery is an independent creative and culture agency designed to ignite people's obsession in great products. From our headquarters in Austin, TX, we work with highly ambitious brands to infuse cultural value and drive desire at every interaction point, increasing their fandom and helping them make things people want. Bakery is a 2017 and 2024 Adage Small Agency of the Year.",
    fullDescription: [
      "Becoming the agency people trust for brand-building and design talent, you'll be responsible for taking ideas from concept to execution, creating work that gets attention, sparks conversation, and stands out in a crowded market. You will:",
      "Illustrate brands through a meticulous design eye, a passion for brand-building, and a knack for turning insights into standout, creative work, we want to hear from you. This role is for someone who brings market-leading graphic design expertise and digital product design - and a spingdl for UI and Printcapacious content strategies.",
      "You'll make for brands like Nike, Degon, and Pepsi. Must be employee in the USA and work on-site in Austin, TX About Us.",
      "Bakery is an independent creative and culture agency designed to ignite people's obsession in great products. From our headquarters in Austin, TX, we work with highly ambitious brands to infuse cultural value and drive desire at every interaction point, increasing their fandom and helping them make things people want. Bakery is a 2017 and 2024 Adage Small Agency of the Year.",
    ],
    responsibilities: [
      "As a Senior Designer, you'll play a pivotal role in shaping brand worlds, campaigns, and cultural moments for our clients. You'll be responsible for taking ideas from concept to execution, creating work that gets attention, sparks conversation, and stands out in a crowded market. You will:",
      "Invent and oversee campaign visuals, packaging, and marketing materials that drive cultural relevance.",
      "Lead the project from concept to production, balancing big thinking with meticulous execution.",
      "Bring fresh, unexpected design solutions that push brands forward while ensuring strategic clarity and business impact.",
      "Work closely with Creative Directors, Art Directors, Writers, and Strategists to craft breakthrough work.",
      "Stay on top of design trends, typography, color theory, and cultural movements to ensure Bakery's work remains fresh and category-defining.",
      "Present all work successfully to the highest standards—clean, effective, and impossible to ignore.",
      "Manage multiple projects efficiently, keeping deadlines, budgets, and client expectations in check.",
      "Present work clearly and persuasively, making a strong case for design decisions.",
    ],
    requirements: [
      "An impressive portfolio of work created for leading lifestyle brands.",
      "5+ years of experience in a top-tier agency, or in-house creative team.",
      "A well-curated portfolio that showcases branding, visual storytelling, campaign work, and exceptional craft.",
      "Expertise in Adobe Creative Suite (Illustrator, Photoshop, InDesign).",
      "Strong illustration, typography, and layout skills with a meticulous eye for detail.",
      "Experience working across print, digital, packaging, and environmental design.",
      "The ability to juggle multiple projects and move in a fast-moving, high-output environment.",
      "A systematic design mindset—you don't just make things look good, you make them work in an efficient and effective system.",
    ],
    benefits: [
      "Medical, Dental and Vision Insurance",
      "Unlimited Vacation Time",
      "2 weeks Work from Anywhere (WFA)",
      "Annual Bonuses",
      "Pet-Friendly Office",
      "On-site Massage Therapist",
      "Yearly Creative Stipend",
      "Snacks, Meals and Drinks",
      "No Time Tracking!",
    ],
  };

  const defaultTenderData = {
    title: "Project 1: CRMS Alignment",
    role: "Business Analyst",
    fullDescription: [
      "This project involves aligning customer relationship management systems across departments to improve data accessibility and performance.XYZ Corp",
    ],
    location: "Paris",
    datePosted: "3/2025",
    deadLine: "05/2023",

    requirements: [
      "5+ years of experience in Business Analysis",
      "Experience with CRM systems (Salesforce, Zoho, etc.)",
      "Strong problem-solving and analytical skills",
      "Ability to work in a fast-paced environment",
    ],
    startDate: "07/2023",
    endDate: "12/2023",
    postedOn: "3/2025",
  };

  const job = jobData || (isTenderPage ? defaultTenderData : defaultJobData);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: job.description,
        url: window.location.href,
      });
    }
  };

  const handleApplyForThisPosition = () => {
    if (!isLoggedIn) {
      setOpenLoginDialog(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto  space-y-6 mb-6 2xl:mb-10">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                {isTenderPage ? "Tender Details" : "Job Details"}
              </p>{" "}
              <div className="flex gap-2 lg:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyLink}
                  className="h-9 flex items-center gap-2 button-gradient"
                >
                  <Copy />
                  Copy Link
                </Button>
                <Button
                  size="sm"
                  onClick={handleShare}
                  className="h-9 flex items-center gap-2 button-gradient"
                >
                  <Share2 size={15} />
                  Share
                </Button>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
            </div>

            <div className="flex gap-2 hidden lg:block">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="h-9 flex items-center gap-2 button-gradient"
              >
                <Copy />
                Copy Link
              </Button>
              <Button
                size="sm"
                onClick={handleShare}
                className="h-9 flex items-center gap-2 button-gradient"
              >
                <Share2 size={15} />
                Share
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
          <div className="mt-4 space-y-3">
            {job.fullDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Responsibilities Section */}
      {/* Responsibilities Section - Only show for jobs */}
      {!isTenderPage && job.responsibilities && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              RESPONSIBILITIES
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {job.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3">
                  {index === 0 ? (
                    <p className="text-gray-700 leading-relaxed">
                      {responsibility}
                    </p>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {responsibility}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Requirements Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">
            Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{requirement}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benefits Section - Only show for jobs */}
      {!isTenderPage && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {job.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      {isTenderPage && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Important Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-gray-700">
                Start Date: {job.startDate || "N/A"}
              </p>

              <p className="text-gray-700">End Date: {job.endDate || "N/A"}</p>

              <p className="text-gray-700">
                Posted On: {job.postedOn || "N/A"}
              </p>

              <p className="text-gray-700">Deadline: {job.deadLine || "N/A"}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Button */}
      {/* <div className="flex justify-center pt-6 mb-6">
        {userType !== "client" ? (
          <Button
            size="lg"
            className="button-gradient text-white px-8 py-3 text-base font-medium"
            onClick={handleApplyForThisPosition}
          >
            {isTenderPage ? "Respond to Tender" : "Apply For This Position"}
          </Button>
        ) : null}
      </div> */}
      <ShowLoginDialog open={openLoginDialog} onOpenChange={setOpenLoginDialog}>
        <DialogTitle className="text-2xl font-bold">
          Login to Apply for this Position
        </DialogTitle>
        <DialogDescription className="text-sm text-gray-600">
          Please login to apply for this position
        </DialogDescription>
        <div className="flex justify-end">
          <Button
            className="button-gradient text-white font-medium w-fit "
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </div>
      </ShowLoginDialog>
    </div>
  );
}

export default JobDetailsPage;
