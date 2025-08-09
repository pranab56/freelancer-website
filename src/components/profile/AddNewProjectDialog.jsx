"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Edit2, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function AddNewProjectDialog({ isOpen, onClose }) {
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "Sabbir Ahmed",
      title: "Write a title",
      completeDate: "2020",
      description: "Design",
    },
  });

  const onSubmit = (data) => {
    console.log("Project data:", data);
    alert("Project saved successfully!");
    onClose?.();
  };

  const onCancel = () => {
    reset();
    onClose?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Add New Project
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X size={16} className="text-gray-400" />
          </Button>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Thumbnail */}
            <div className="space-y-4">
              <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-white min-h-[200px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Websites to learn
                    <br />
                    UI/UX
                    <br />
                    DESIGN
                  </h3>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-sm opacity-90">WATCH NOW</div>
                  <div className="relative">
                    {/* Character illustration placeholder */}
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="text-2xl">👨‍💼</div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white opacity-50 rounded"></div>
                <div className="absolute top-12 right-12 w-4 h-4 border-2 border-white opacity-30 rounded"></div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <span>Project Thumbnail</span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Edit2 size={14} />
                </Button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Title Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-900"
                >
                  Title
                </Label>
                <Input
                  id="title"
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              {/* Complete Date Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="completeDate"
                  className="text-sm font-medium text-gray-900"
                >
                  Complete Date
                </Label>
                <div className="relative">
                  <Input
                    id="completeDate"
                    className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                    {...register("completeDate", {
                      required: "Complete date is required",
                    })}
                  />
                  <Calendar
                    size={16}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.completeDate && (
                  <p className="text-sm text-red-600">
                    {errors.completeDate.message}
                  </p>
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
                  className="w-full h-24 resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register("description")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex justify-end space-x-3 px-6 py-4 bg-gray-50 border-t">
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
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
