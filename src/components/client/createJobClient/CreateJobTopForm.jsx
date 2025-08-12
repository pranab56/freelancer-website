"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  setJobTitle,
  setJobType,
  setJobLink,
  setStartDate,
  setEndDate,
} from "@/redux/features/createJob/createjobSlice";

export default function CreateJobTopForm() {
  const dispatch = useDispatch();
  const jobTitle = useSelector((state) => state.createJob.jobTitle) || "";
  const jobType = useSelector((state) => state.createJob.jobType) || "";
  const jobLink = useSelector((state) => state.createJob.jobLink) || "";
  const startDateString = useSelector((state) => state.createJob.startDate);
  const endDateString = useSelector((state) => state.createJob.endDate);

  // Convert ISO strings back to Date objects for the calendar component
  const startDate = startDateString ? new Date(startDateString) : null;
  const endDate = endDateString ? new Date(endDateString) : null;

  console.log("Job Data:", {
    jobTitle,
    jobType,
    jobLink,
    startDate,
    endDate,
  });

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0">
      <div className="grid  lg:grid-cols-2 gap-6 ">
        {/* Greeting */}
        <div className="space-y-2">
          <h2 className="text-2xl font-medium h2-gradient-text">
            Hi MD SABBIR,
          </h2>
          <h1 className="text-5xl  mb-8">Find your next great hire</h1>
        </div>

        {/* Job Title */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2 ">
            <label className="font-medium">Job title*</label>
            <Select
              value={jobTitle}
              onValueChange={(value) => dispatch(setJobTitle(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select job title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ux-designer">
                  User Experience Designer
                </SelectItem>
                <SelectItem value="ui-designer">UI Designer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Job Type */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Job Type</label>
            <Select
              value={jobType}
              onValueChange={(value) => dispatch(setJobType(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full Time</SelectItem>
                <SelectItem value="part-time">Part Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Link */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-medium">Job Apply Website Link*</label>
            <Input
              placeholder="http://yourcompany.com/job123"
              value={jobLink}
              onChange={(e) => dispatch(setJobLink(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Start Date */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Start Date*</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${
                  !startDate && "text-muted-foreground"
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "MM/dd/yyyy") : "mm/dd/yyyy"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) =>
                  dispatch(setStartDate(date ? date.toISOString() : null))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* End Date */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">End Date*</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${
                  !endDate && "text-muted-foreground"
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "MM/dd/yyyy") : "mm/dd/yyyy"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={(date) =>
                  dispatch(setEndDate(date ? date.toISOString() : null))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
