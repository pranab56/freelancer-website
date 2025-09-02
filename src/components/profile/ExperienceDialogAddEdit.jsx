"use client";
import React, { useEffect, useState, useMemo } from "react";
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
import { useSelector } from "react-redux";

export default function ExperienceDialogAddEdit({
  isOpen,
  onClose,
  mode = "add", // "add" or "edit"
  initialData = null,
}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Get translations from Redux
  const messages = useSelector((state) => state.language.messages);
  const translations = useMemo(
    () =>
      messages?.profile?.experienceDialog || {
        addTitle: "Add Experience",
        editTitle: "Edit Experience",
        companyNameLabel: "Company Name",
        companyNamePlaceholder: "Enter Company Name",
        projectLabel: "Project",
        projectPlaceholder: "Enter Project",
        descriptionLabel: "Description",
        descriptionPlaceholder: "Enter Experience Description",
        startDateLabel: "Start Date",
        endDateLabel: "End Date",
        startDatePlaceholder: "Pick a start date",
        endDatePlaceholder: "Pick an end date",
        cancelButton: "Cancel",
        saveButton: "Save Changes",
        validationMessages: {
          companyRequired: "Company name is required",
          projectRequired: "Project is required",
          descriptionRequired: "Description is required",
          startDateRequired: "Please select a start date",
          endDateRequired: "Please select an end date",
        },
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
      alert(translations.validationMessages.startDateRequired);
      return;
    }
    if (!endDate) {
      alert(translations.validationMessages.endDateRequired);
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
            {mode === "edit" ? translations.editTitle : translations.addTitle}
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
              {translations.companyNameLabel}
            </Label>
            <Input
              id="companyName"
              placeholder={translations.companyNamePlaceholder}
              className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("companyName", {
                required: translations.validationMessages.companyRequired,
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
              {translations.projectLabel}
            </Label>
            <Input
              id="project"
              placeholder={translations.projectPlaceholder}
              className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("project", {
                required: translations.validationMessages.projectRequired,
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
              {translations.descriptionLabel}
            </Label>
            <Textarea
              id="description"
              placeholder={translations.descriptionPlaceholder}
              className="w-full h-20 resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
              {...register("description", {
                required: translations.validationMessages.descriptionRequired,
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
              {translations.startDateLabel}
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
                    <span className="text-gray-400">
                      {translations.startDatePlaceholder}
                    </span>
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
              {translations.endDateLabel}
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
                    <span className="text-gray-400">
                      {translations.endDatePlaceholder}
                    </span>
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
            className="px-6 py-2 text-gray-700 border-gray-300 hover:bg-gray-50 w-full md:w-auto"
          >
            {translations.cancelButton}
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="px-6 button-gradient py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {translations.saveButton}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
