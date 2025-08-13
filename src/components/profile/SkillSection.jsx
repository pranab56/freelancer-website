"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit3, Info } from "lucide-react";
import { GoPlusCircle } from "react-icons/go";
import SkillsDialogAddEdit from "./SkillsDialogAddEdit";
import useCheckUserAndLoggedIn from "@/hooks/checkUserTypeAndLoggedIn/CheckUserAndLoggedIn";

function SkillsSection() {
  const { isFreelancerAndLoggedIn } = useCheckUserAndLoggedIn();
  const [isAddSkillDialogOpen, setIsAddSkillDialogOpen] = useState(false);
  const [isEditSkillDialogOpen, setIsEditSkillDialogOpen] = useState(false);

  const technicalSkills = [
    "R",
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
    "Excel VBA",
    "Machine Learning",
    "Pandas",
    "NumPy",
  ];

  const functionalSkills = [
    "Risk Management",
    "Project Management",
    "Regulatory Reporting",
  ];

  return (
    <div className="w-full py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border rounded-xl">
        {/* Left Skills Card */}
        <Card className="h-fit border-none shadow-none">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <CardTitle className="text-lg font-semibold text-blue-600 h2-gradient-text">
                Skills
              </CardTitle>
              <div className="flex items-center gap-2">
                {isFreelancerAndLoggedIn && (
                  <>
                    <GoPlusCircle
                      className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                      onClick={() => setIsAddSkillDialogOpen(true)}
                    />
                    <Edit3
                      className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                      onClick={() => setIsEditSkillDialogOpen(true)}
                    />
                  </>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Profile indicators */}

            <div>
              <h3 className="text-blue-600 font-medium mb-3">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Skills Card */}
        <Card className="h-fit border-none shadow-none">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-blue-600">
                {/* Skills */}
              </CardTitle>
              <div className="flex items-center gap-2">
                <div className="h-4"></div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Profile indicators */}

            <div>
              <h3 className="text-blue-600 font-medium mb-3">
                Functional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {functionalSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Skill Dialog */}
      {isAddSkillDialogOpen && (
        <SkillsDialogAddEdit
          isOpen={isAddSkillDialogOpen}
          onClose={() => setIsAddSkillDialogOpen(false)}
          mode="add"
        />
      )}

      {/* Edit Skill Dialog */}
      {isEditSkillDialogOpen && (
        <SkillsDialogAddEdit
          isOpen={isEditSkillDialogOpen}
          onClose={() => setIsEditSkillDialogOpen(false)}
          mode="edit"
          initialData={{
            skillType: "technical",
            skills: "JavaScript",
            experience: "Advanced (3-5 years)",
          }}
        />
      )}
    </div>
  );
}

export default SkillsSection;
