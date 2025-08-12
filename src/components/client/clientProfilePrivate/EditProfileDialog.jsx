import Image from "next/image";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";

function EditProfileDialog({ isOpen, onClose }) {
  const [profileImage, setProfileImage] = useState(
    "/client/profile/client.png"
  );
  const fileInputRef = useRef(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "John Doe",
      companyName: "Z-Worx",
      department: "Design",
      categoryType: "UI/UX Designer",
      location: "France",
      bio: "I am a UI/UX designer",
    },
  });

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Image */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="relative w-20 h-20 md:w-40 md:h-40 rounded-full overflow-hidden border cursor-pointer group"
                onClick={handleImageClick}
              >
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="object-cover transition-opacity group-hover:opacity-75"
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
            <div className="space-y-4">
              <div className="space-y-1">
                <Label>Name</Label>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <Input {...field} placeholder="Name" />
                  )}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <Label>Company Name</Label>
                <Controller
                  name="companyName"
                  control={control}
                  rules={{
                    required: "Company name is required",
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <Input {...field} placeholder="Company Name" />
                  )}
                />
                {errors.companyName && (
                  <span className="text-sm text-red-500">
                    {errors.companyName.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <Label>Department</Label>
                <Controller
                  name="department"
                  control={control}
                  rules={{ required: "Department is required" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Development">Development</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.department && (
                  <span className="text-sm text-red-500">
                    {errors.department.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <Label>Category Type</Label>
                <Controller
                  name="categoryType"
                  control={control}
                  rules={{ required: "Category type is required" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UI/UX Designer">
                          UI/UX Designer
                        </SelectItem>
                        <SelectItem value="Graphic Designer">
                          Graphic Designer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.categoryType && (
                  <span className="text-sm text-red-500">
                    {errors.categoryType.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <Label>Location</Label>
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: "Location is required" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="France">France</SelectItem>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.location && (
                  <span className="text-sm text-red-500">
                    {errors.location.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <Label>Bio</Label>
            <Controller
              name="bio"
              control={control}
              rules={{
                required: "Bio is required",
                minLength: {
                  value: 10,
                  message: "Bio must be at least 10 characters",
                },
              }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Bio"
                  className="h-24 resize-none w-full"
                />
              )}
            />
            {errors.bio && (
              <span className="text-sm text-red-500">{errors.bio.message}</span>
            )}
          </div>

          <DialogFooter className="gap-2 ">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="button-gradient">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditProfileDialog;
