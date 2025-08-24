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
  const [currentSkillCategory, setCurrentSkillCategory] = useState("");

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem-Solving",
    "Emotional Intelligence",
    "Leadership",
    "Critical Thinking",
  ];

  const technicalSkills = [
    "Networking",
    "DevOps",
    "Web Development",
    "Machine Learning",
    "Programming Languages",
    "Data Analysis",
    "Cloud Computing",
  ];

  const functionalSkills = [
    "Project Management",
    "Customer Service",
    "Marketing Strategy",
    "Sales and Negotiation",
  ];

  const handleAddSkill = (category) => {
    setCurrentSkillCategory(category);
    setIsAddSkillDialogOpen(true);
  };

  const handleEditSkill = (category) => {
    setCurrentSkillCategory(category);
    setIsEditSkillDialogOpen(true);
  };

  return (
    <div className="w-full py-6">
      <h2 className="text-xl font-bold mb-4 h2-gradient-text">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Soft Skills */}
        <Card className="max-h-auto">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="h2-gradient-text font-medium text-base">
                Soft Skills
              </CardTitle>
              {isFreelancerAndLoggedIn && (
                <div className="flex gap-2">
                  <GoPlusCircle
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => handleAddSkill("soft")}
                  />
                  <Edit3
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => handleEditSkill("soft")}
                  />
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-3 py-1.5 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="max-h-auto">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="h2-gradient-text font-medium text-base">
                Technical Skills
              </CardTitle>
              {isFreelancerAndLoggedIn && (
                <div className="flex gap-2">
                  <GoPlusCircle
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => handleAddSkill("technical")}
                  />
                  <Edit3
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => handleEditSkill("technical")}
                  />
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-3 py-1.5 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Functional Skills */}
        <Card className="max-h-auto">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="h2-gradient-text font-medium text-base">
                Functional Skills
              </CardTitle>
              {isFreelancerAndLoggedIn && (
                <div className="flex gap-2">
                  <GoPlusCircle
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => handleAddSkill("functional")}
                  />
                  <Edit3
                    className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700"
                    onClick={() => handleEditSkill("functional")}
                  />
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {functionalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-3 py-1.5 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
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
          skillCategory={currentSkillCategory}
        />
      )}

      {/* Edit Skill Dialog */}
      {isEditSkillDialogOpen && (
        <SkillsDialogAddEdit
          isOpen={isEditSkillDialogOpen}
          onClose={() => setIsEditSkillDialogOpen(false)}
          mode="edit"
          initialData={{
            skillType: currentSkillCategory,
            skills: "", // You might want to pass the actual skill being edited
            experience: "", // You might want to pass the actual experience level
          }}
          skillCategory={currentSkillCategory}
        />
      )}
    </div>
  );
}

export default SkillsSection;
