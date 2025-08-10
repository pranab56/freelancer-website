"use client";
import React from "react";
import { useForm } from "react-hook-form";
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
    alert("Education saved successfully!");
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
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate (PhD)",
    "Professional Degree",
    "Certificate",
    "Diploma",
    "High School Diploma",
    "Other",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] min-w-5xl p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Add Education & Certifications
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
            <Label className="text-sm font-medium text-gray-900">Degree</Label>
            <Select onValueChange={(value) => setValue("degree", value)}>
              <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select Degree" />
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
              School/University
            </Label>
            <Input
              id="school"
              placeholder="Select School / University"
              className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("school", {
                required: "School/University is required",
              })}
            />
            {errors.school && (
              <p className="text-sm text-red-600">{errors.school.message}</p>
            )}
          </div>

          {/* Start Year Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">
              Select Start Year
            </Label>
            <div className="relative">
              <Select onValueChange={(value) => setValue("startYear", value)}>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Year" />
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
              Select End Year
            </Label>
            <div className="relative">
              <Select onValueChange={(value) => setValue("endYear", value)}>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Year" />
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
            className="px-6 py-2 text-gray-700 border-gray-300 hover:bg-gray-50"
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
