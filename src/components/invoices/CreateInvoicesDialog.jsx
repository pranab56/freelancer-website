"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { X, Calendar as CalendarIcon } from "lucide-react";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CreateInvoicesDialog({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      client: "",
      serviceType: "",
      projectName: "",
      day: "",
    },
  });

  // Sample data - replace with your actual data
  const clients = [
    "ABC Corporation",
    "XYZ Company",
    "Tech Solutions Ltd",
    "Digital Agency Inc",
    "StartUp Ventures",
    "Global Enterprises",
  ];

  const serviceTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Services",
    "Content Writing",
    "Consulting",
    "Maintenance & Support",
  ];

  const projectNames = [
    "E-commerce Platform",
    "Corporate Website",
    "Mobile Application",
    "Brand Identity Design",
    "Marketing Campaign",
    "System Integration",
    "Database Migration",
    "Performance Optimization",
  ];

  const onSubmit = (data) => {
    const invoiceData = {
      ...data,
      day: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
    };
    console.log("Invoice data:", invoiceData);
    alert("Invoice created successfully!");
    onClose?.();
  };

  const onCancel = () => {
    reset();
    setSelectedDate(null);
    onClose?.();
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setValue("day", date ? date.toISOString().split("T")[0] : "");
    setIsCalendarOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
          <DialogTitle className="text-lg font-semibold text-blue-600 h2-gradient-text">
            Create New Invoice
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 space-y-6">
          {/* Client Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">Client</Label>
            <Select onValueChange={(value) => setValue("client", value)}>
              <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent>
                {clients.map((client) => (
                  <SelectItem key={client} value={client}>
                    {client}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.client && (
              <p className="text-sm text-red-600">{errors.client.message}</p>
            )}
          </div>

          {/* Service Type Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">
              Service Type
            </Label>
            <Select onValueChange={(value) => setValue("serviceType", value)}>
              <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="select Service type" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((serviceType) => (
                  <SelectItem key={serviceType} value={serviceType}>
                    {serviceType}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p className="text-sm text-red-600">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          {/* Project Name Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">
              Project Name
            </Label>
            <Select onValueChange={(value) => setValue("projectName", value)}>
              <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="select Service type" />
              </SelectTrigger>
              <SelectContent>
                {projectNames.map((projectName) => (
                  <SelectItem key={projectName} value={projectName}>
                    {projectName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.projectName && (
              <p className="text-sm text-red-600">
                {errors.projectName.message}
              </p>
            )}
          </div>

          {/* Day Field with Calendar */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">Day</Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                >
                  <span
                    className={selectedDate ? "text-gray-900" : "text-gray-400"}
                  >
                    {selectedDate
                      ? formatDate(selectedDate)
                      : "enter your working day"}
                  </span>
                  <CalendarIcon className="ml-auto h-4 w-4 text-gray-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.day && (
              <p className="text-sm text-red-600">{errors.day.message}</p>
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
            Create Invoices
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
