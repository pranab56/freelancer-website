"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import TipTapEditor from "@/utils/TipTapEditor/TipTapEditor";

function CompanyLifeAddEditDialog({ isOpen, onClose, isEditing }) {
  const defaultImage = "/card_image.png";
  const [profileImage, setProfileImage] = useState(defaultImage);
  const fileInputRef = useRef(null);
  const [content, setContent] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      content: "",
    },
  });

  // Reset all form state when dialog closes
  const handleClose = () => {
    setProfileImage(defaultImage);
    setContent("");
    reset();
    onClose();
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", {
      ...data,
      profileImage,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Company Life Post" : "Add New Company Life Post"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Image */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div
                className="relative w-full h-40 rounded-lg overflow-hidden border cursor-pointer group border-2 border-gray-300"
                onClick={handleImageClick}
              >
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-opacity group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                  <span className="text-white opacity-0 group-hover:opacity-100">
                    Change Image
                  </span>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <Button className="button-gradient" onClick={handleImageClick}>
                Edit Image
              </Button>
            </div>

            {/* Form Fields */}
          </div>

          <TipTapEditor
            content={content}
            setContent={setContent}
            placeholder="Write your content here..."
          />

          <DialogFooter className="gap-2 ">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" className="button-gradient">
              {isEditing ? "Save Changes" : "Create Post"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CompanyLifeAddEditDialog;
