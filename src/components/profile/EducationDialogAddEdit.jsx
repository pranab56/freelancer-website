"use client";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Calendar } from "lucide-react";
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

export default function EducationDialogAddEdit({ isOpen, onClose }) {
  // Get translations from Redux
  const messages = useSelector((state) => state.language.messages);
  const translations = useMemo(
    () =>
      messages?.profile?.education || {
        title: "Add Education & Certifications",
        degree: "Degree",
        degreePlaceholder: "Select Degree",
        school: "School/University",
        schoolPlaceholder: "Select School / University",
        schoolRequired: "School/University is required",
        startYear: "Select Start Year",
        endYear: "Select End Year",
        yearPlaceholder: "Year",
        cancel: "Cancel",
        saveChanges: "Save Changes",
        successMessage: "Education saved successfully!",
        // Degree options
        associateDegree: "Associate Degree",
        bachelorsDegree: "Bachelor's Degree",
        mastersDegree: "Master's Degree",
        doctorate: "Doctorate (PhD)",
        professionalDegree: "Professional Degree",
        certificate: "Certificate",
        diploma: "Diploma",
        highSchoolDiploma: "High School Diploma",
        other: "Other",
      },
    [messages]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      degree: "",
      school: "",
      startYear: "",
      endYear: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Education data:", data);
    alert(translations.successMessage);
    onClose?.();
  };

  const onCancel = () => {
    reset();
    onClose?.();
  };

  // Generate years for select options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i + 10);

  const degrees = [
    translations.associateDegree,
    translations.bachelorsDegree,
    translations.mastersDegree,
    translations.doctorate,
    translations.professionalDegree,
    translations.certificate,
    translations.diploma,
    translations.highSchoolDiploma,
    translations.other,
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:min-w-3xl lg:min-w-5xl p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {translations.title}
          </DialogTitle>
          {/* <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X size={16} className="text-gray-400" />
          </Button> */}
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* Degree Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">
              {translations.degree}
            </Label>
            <Select onValueChange={(value) => setValue("degree", value)}>
              <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder={translations.degreePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {degrees.map((degree) => (
                  <SelectItem key={degree} value={degree}>
                    {degree}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.degree && (
              <p className="text-sm text-red-600">{errors.degree.message}</p>
            )}
          </div>

          {/* School/University Field */}
          <div className="space-y-2">
            <Label
              htmlFor="school"
              className="text-sm font-medium text-gray-900"
            >
              {translations.school}
            </Label>
            <Input
              id="school"
              placeholder={translations.schoolPlaceholder}
              className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("school", {
                required: translations.schoolRequired,
              })}
            />
            {errors.school && (
              <p className="text-sm text-red-600">{errors.school.message}</p>
            )}
          </div>

          {/* Start Year Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">
              {translations.startYear}
            </Label>
            <div className="relative">
              <Select onValueChange={(value) => setValue("startYear", value)}>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder={translations.yearPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Calendar
                size={16}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
            {errors.startYear && (
              <p className="text-sm text-red-600">{errors.startYear.message}</p>
            )}
          </div>

          {/* End Year Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">
              {translations.endYear}
            </Label>
            <div className="relative">
              <Select onValueChange={(value) => setValue("endYear", value)}>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder={translations.yearPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Calendar
                size={16}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
            {errors.endYear && (
              <p className="text-sm text-red-600">{errors.endYear.message}</p>
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
            {translations.cancel}
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="px-6 button-gradient py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {translations.saveChanges}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
