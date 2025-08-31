"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plus,
  Edit3,
  Eye,
  UserPlus,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { FaPlus } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddNewProjectDialog from "./AddNewProjectDialog";
import EducationDialogAddEdit from "./EducationDialogAddEdit";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useSelector } from "react-redux";
import useCheckUserAndLoggedIn from "@/hooks/checkUserTypeAndLoggedIn/CheckUserAndLoggedIn";
function ProfileSections() {
  const { isFreelancerAndLoggedIn, isLoggedIn, userType } =
    useCheckUserAndLoggedIn();
  const locale = useLocale();
  const [isAddProjectDialogOpen, setIsAddProjectDialogOpen] = useState(false);
  const [isAddEducationDialogOpen, setIsAddEducationDialogOpen] =
    useState(false);

  const educationCertifications = [
    {
      name: "MSc",
      description: "Master of Science",
      school: "University of London",
      year: "2020",
    },
    {
      name: "Bachelor's",
      description: "Bachelor of Science",
      school: "University of London",
      year: "2018",
    },
    {
      name: "PhD",
      description: "Doctor of Philosophy",
      school: "University of London",
      year: "2016",
    },
    {
      name: "CFA Level II",
      description: "Chartered Financial Analyst Level II",
      school: "CFA Institute",
      year: "2015",
    },
    {
      name: "FRM",
      description: "Financial Risk Manager",
      school: "GARP",
      year: "2014",
    },
    {
      name: "PSPO",
      description: "Professional Scrum Product Owner",
      school: "Scrum Alliance",
      year: "2013",
    },
  ];

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Education & Certifications */}
        <Card className="max-h-60">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-blue-600 h2-gradient-text">
              Education & Certifications
              {isFreelancerAndLoggedIn && (
                <>
                  <Plus
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => setIsAddEducationDialogOpen(true)}
                  />
                  <Edit3
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => setIsAddEducationDialogOpen(true)}
                  />
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {educationCertifications.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Badge
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 px-3 py-1"
                    >
                      {item.name}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> {item.description}</p>
                    <p>School: {item.school}</p>
                    <p>Year: {item.year}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="max-h-auto">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-blue-600 h2-gradient-text">
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 flex flex-col items-center">
            <p className="text-gray-600 text-sm leading-tight text-center">
              Discover my achievements and detailed case studies.
            </p>

            <Link
              href={`/${locale}/showcase-projects`}
              className="w-full md:w-auto"
            >
              <Button className="button-gradient w-full md:w-auto">
                <Eye className="w-4 h-4 mr-2" />
                View All Project
              </Button>
            </Link>

            {isFreelancerAndLoggedIn && (
              <Button
                className="button-gradient w-full md:w-auto"
                onClick={() => setIsAddProjectDialogOpen(true)}
              >
                <FaPlus className="w-4 h-4 mr-2" />
                Add new project
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="max-h-60">
          <CardHeader className="">
            <CardTitle className="text-lg font-semibold text-blue-600 h2-gradient-text">
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 flex flex-col items-center">
              <Button className="w-full md:w-40 button-gradient ">
                <UserPlus className="w-4 h-4 mr-2" />
                Follow
              </Button>

              <Button className="w-full md:w-40 button-gradient ">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>

              <Button className="w-full md:w-40 button-gradient ">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Project Dialog */}
      {isAddProjectDialogOpen && (
        <AddNewProjectDialog
          isOpen={isAddProjectDialogOpen}
          onClose={() => setIsAddProjectDialogOpen(false)}
        />
      )}

      {/* Add New Education Dialog */}
      {isAddEducationDialogOpen && (
        <EducationDialogAddEdit
          isOpen={isAddEducationDialogOpen}
          onClose={() => setIsAddEducationDialogOpen(false)}
        />
      )}
    </div>
  );
}

export default ProfileSections;
