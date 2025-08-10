"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Edit2, Calendar, Upload, ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function AddNewProjectDialog({ isOpen, onClose }) {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const fileInputRef = useRef(null);

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
    console.log("Thumbnail image:", thumbnailImage);
    alert("Project saved successfully!");
    onClose?.();
  };

  const onCancel = () => {
    reset();
    setThumbnailImage(null);
    onClose?.();
  };

  const handleEditThumbnail = () => {
    setShowUploadDialog(true);
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
    setShowUploadDialog(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setThumbnailImage(null);
    setShowUploadDialog(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="md:min-w-3xl lg:min-w-5xl p-0 gap-0">
          {/* Header */}
          <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4 border-b-0">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Add New Project
            </DialogTitle>
          </DialogHeader>

          {/* Content */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Thumbnail */}
              <div className="space-y-1 md:space-y-4">
                <div className="relative  rounded-lg px-6 py-4 text-white min-h-42 border-2 border-gray-300 flex flex-col justify-between items-center overflow-hidden">
                  {thumbnailImage ? (
                    <div className="absolute inset-0">
                      <img
                        src={thumbnailImage}
                        alt="Project thumbnail"
                        width={250}
                        height={150}
                        className="w-80 h-42 object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <span>Project Thumbnail</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={handleEditThumbnail}
                  >
                    <Edit2 size={14} />
                  </Button>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="space-y-3 md:space-y-6">
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
                    <p className="text-sm text-red-600">
                      {errors.name.message}
                    </p>
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
                    <p className="text-sm text-red-600">
                      {errors.title.message}
                    </p>
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

      {/* Image Upload Dialog */}
      <AlertDialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <ImageIcon size={20} />
              Update Thumbnail
            </AlertDialogTitle>
            <AlertDialogDescription>
              Choose an option to update your project thumbnail.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-3 py-4">
            <Button
              onClick={handleFileSelect}
              className="flex items-center gap-2 justify-start h-12"
              variant="outline"
            >
              <Upload size={18} />
              Upload New Image
            </Button>
            {thumbnailImage && (
              <Button
                onClick={handleRemoveImage}
                className="flex items-center gap-2 justify-start h-12"
                variant="outline"
              >
                <X size={18} />
                Remove Current Image
              </Button>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </>
  );
}
