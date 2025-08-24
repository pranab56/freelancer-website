"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SkillsDialogAddEdit({
  isOpen,
  onClose,
  mode = "add", // "add" or "edit"
  initialData = null,
  skillCategory = "soft", // New prop to specify initial skill category
}) {
  const [skillType, setSkillType] = useState(skillCategory);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      skillType: skillCategory,
      skills: "",
      experience: "",
    },
  });

  // Technical skills options
  const technicalSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "HTML/CSS",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "REST APIs",
    "GraphQL",
    "Machine Learning",
    "Data Analysis",
    "Other",
  ];

  // Functional skills options
  const functionalSkills = [
    "Project Management",
    "Team Leadership",
    "Communication",
    "Problem Solving",
    "Strategic Planning",
    "Business Analysis",
    "Quality Assurance",
    "Risk Management",
    "Customer Relations",
    "Sales",
    "Marketing",
    "Financial Analysis",
    "Operations Management",
    "Human Resources",
    "Training & Development",
    "Negotiation",
    "Time Management",
    "Critical Thinking",
    "Decision Making",
    "Other",
  ];

  // Experience levels
  const experienceLevels = [
    "Beginner (0-1 years)",
    "Intermediate (1-3 years)",
    "Advanced (3-5 years)",
    "Expert (5+ years)",
  ];

  // Load initial data for edit mode
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setSkillType(initialData.skillType || skillCategory);
      setValue("skillType", initialData.skillType || skillCategory);
      setValue("skills", initialData.skills || "");
      setValue("experience", initialData.experience || "");
    } else {
      // Reset for add mode
      setSkillType(skillCategory);
      setValue("skillType", skillCategory);
      setValue("skills", "");
      setValue("experience", "");
    }
  }, [mode, initialData, setValue, skillCategory]);

  const onSubmit = (data) => {
    console.log("Skills data:", { ...data, skillType });
    alert(`Skills ${mode === "edit" ? "updated" : "added"} successfully!`);
    onClose?.();
  };

  const onCancel = () => {
    reset();
    setSkillType(skillCategory);
    onClose?.();
  };

  const handleSkillTypeChange = (value) => {
    setSkillType(value);
    setValue("skillType", value);
    setValue("skills", ""); // Reset skills when type changes
  };

  // Select appropriate skills list based on skill type
  const currentSkills =
    skillType === "soft"
      ? functionalSkills
      : skillType === "technical"
      ? technicalSkills
      : functionalSkills;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {mode === "edit" ? "Edit" : "Add"}{" "}
            {skillType === "soft"
              ? "Soft"
              : skillType === "technical"
              ? "Technical"
              : "Functional"}{" "}
            Skills
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* Skill Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-900">
              Skill Type
            </Label>
            <RadioGroup
              value={skillType}
              onValueChange={handleSkillTypeChange}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="soft" id="soft" />
                <Label
                  htmlFor="soft"
                  className="text-sm font-normal cursor-pointer"
                >
                  Soft Skills
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="technical" id="technical" />
                <Label
                  htmlFor="technical"
                  className="text-sm font-normal cursor-pointer"
                >
                  Technical Skills
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="functional" id="functional" />
                <Label
                  htmlFor="functional"
                  className="text-sm font-normal cursor-pointer"
                >
                  Functional Skills
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Skills Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">Skills</Label>
            <Select
              onValueChange={(value) => setValue("skills", value)}
              value={watch("skills")}
            >
              <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select Skills" />
              </SelectTrigger>
              <SelectContent>
                {currentSkills.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.skills && (
              <p className="text-sm text-red-600">{errors.skills.message}</p>
            )}
          </div>

          {/* Experience Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">
              Experience
            </Label>
            <Select
              onValueChange={(value) => setValue("experience", value)}
              value={watch("experience")}
            >
              <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Enter Experience" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.experience && (
              <p className="text-sm text-red-600">
                {errors.experience.message}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex justify-end space-x-3 px-6 py-4 bg-gray-50 border-t border-gray-100">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="px-6 py-2 text-gray-700 border-gray-300 hover:bg-gray-50 w-full md:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="px-6 button-gradient py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
