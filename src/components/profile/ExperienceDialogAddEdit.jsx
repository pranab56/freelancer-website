"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ExperienceDialogAddEdit({
  isOpen,
  onClose,
  mode = "add", // "add" or "edit"
  initialData = null,
}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      companyName: "",
      project: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  });

  // Load initial data for edit mode
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setValue("companyName", initialData.company || "");
      setValue("project", initialData.project || "");
      setValue("description", initialData.results || "");
      // Parse duration to extract start and end dates
      const duration = initialData.duration || "";
      const [startYear, endYear] = duration.split("-");
      if (startYear) {
        const startDateObj = new Date(`${startYear}-01-01`);
        setStartDate(startDateObj);
        setValue("startDate", format(startDateObj, "yyyy-MM-dd"));
      }
      if (endYear) {
        const endDateObj = new Date(`${endYear}-12-31`);
        setEndDate(endDateObj);
        setValue("endDate", format(endDateObj, "yyyy-MM-dd"));
      }
    } else {
      // Reset for add mode
      reset();
      setStartDate(null);
      setEndDate(null);
    }
  }, [mode, initialData, setValue, reset]);

  const onSubmit = (data) => {
    // Validate that dates are selected
    if (!startDate) {
      alert("Please select a start date");
      return;
    }
    if (!endDate) {
      alert("Please select an end date");
      return;
    }

    console.log("Experience data:", data);
    alert(`Experience ${mode === "edit" ? "updated" : "added"} successfully!`);
    onClose?.();
  };

  const onCancel = () => {
    reset();
    setStartDate(null);
    setEndDate(null);
    onClose?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
          <DialogTitle className="text-lg font-semibold text-blue-600 h2-gradient-text">
            {mode === "edit" ? "Edit Experience" : "Add Experience"}
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* Company Name Field */}
          <div className="space-y-2">
            <Label
              htmlFor="companyName"
              className="text-sm font-medium text-gray-900"
            >
              Company Name
            </Label>
            <Input
              id="companyName"
              placeholder="Select Skills"
              className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("companyName", {
                required: "Company name is required",
              })}
            />
            {errors.companyName && (
              <p className="text-sm text-red-600">
                {errors.companyName.message}
              </p>
            )}
          </div>

          {/* Project Field */}
          <div className="space-y-2">
            <Label
              htmlFor="project"
              className="text-sm font-medium text-gray-900"
            >
              Project
            </Label>
            <Input
              id="project"
              placeholder="Enter Experience"
              className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("project", {
                required: "Project is required",
              })}
            />
            {errors.project && (
              <p className="text-sm text-red-600">{errors.project.message}</p>
            )}
          </div>

          {/* Description Field */}
          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-sm font-medium text-gray-900"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter Experience"
              className="w-full h-20 resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Start Date Field */}
          <div className="space-y-2">
            <Label
              htmlFor="startDate"
              className="text-sm font-medium text-gray-900"
            >
              Start Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, "PPP")
                  ) : (
                    <span className="text-gray-400">Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => {
                    setStartDate(date);
                    setValue(
                      "startDate",
                      date ? format(date, "yyyy-MM-dd") : ""
                    );
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.startDate && (
              <p className="text-sm text-red-600">{errors.startDate.message}</p>
            )}
          </div>

          {/* End Date Field */}
          <div className="space-y-2">
            <Label
              htmlFor="endDate"
              className="text-sm font-medium text-gray-900"
            >
              End Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? (
                    format(endDate, "PPP")
                  ) : (
                    <span className="text-gray-400">Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={(date) => {
                    setEndDate(date);
                    setValue("endDate", date ? format(date, "yyyy-MM-dd") : "");
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.endDate && (
              <p className="text-sm text-red-600">{errors.endDate.message}</p>
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
