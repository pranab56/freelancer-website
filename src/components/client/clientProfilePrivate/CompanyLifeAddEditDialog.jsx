// "use client";
// import Image from "next/image";
// import React, { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";

// import { useForm } from "react-hook-form";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Calendar } from "@/components/ui/calendar";
// import { Textarea } from "@/components/ui/textarea";

// function CompanyLifeAddEditDialog({ isOpen, onClose, isEditing }) {
//   const defaultImage = "/card_image.png";
//   const [profileImage, setProfileImage] = useState(defaultImage);
//   const fileInputRef = useRef(null);
//   const [content, setContent] = useState("");
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: {
//       content: "",
//     },
//   });

//   // Reset all form state when dialog closes
//   const handleClose = () => {
//     setProfileImage(defaultImage);
//     setContent("");
//     reset();
//     onClose();
//   };

//   const handleImageClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const onSubmit = (data) => {
//     console.log("Form Data:", {
//       ...data,
//       profileImage,
//     });
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={handleClose}>
//       <DialogContent className="sm:max-w-[600px] lg:max-w-[800px]">
//         <DialogHeader>
//           <DialogTitle>
//             {isEditing ? "Edit Company Life Post" : "Add New Company Life Post"}
//           </DialogTitle>
//         </DialogHeader>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div className="grid grid-cols-1  gap-6">
//             {/* Profile Image */}
//             <div className="flex flex-col items-center gap-4 w-full">
//               <div
//                 className="relative w-80 h-40 rounded-lg overflow-hidden border cursor-pointer group border-2 border-gray-300"
//                 onClick={handleImageClick}
//               >
//                 <Image
//                   src={profileImage}
//                   alt="Profile"
//                   width={300}
//                   height={300}
//                   className="object-cover w-80 h-full transition-opacity group-hover:opacity-75"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
//                   <span className="text-white opacity-0 group-hover:opacity-100">
//                     Change Image
//                   </span>
//                 </div>
//               </div>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleImageChange}
//                 accept="image/*"
//                 className="hidden"
//               />
//               <Button className="button-gradient" onClick={handleImageClick}>
//                 Edit Image
//               </Button>
//             </div>

//             {/* Form Fields */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="flex flex-col gap-2">
//                 <Label>Date</Label>
//                 <Calendar type="date" className="w-full" />
//               </div>
//               <div className="flex flex-col gap-4">
//                 <div className="space-y-2">
//                   <Label>Type</Label>
//                   <Input type="text" placeholder="Enter type" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Title</Label>
//                   <Input type="text" placeholder="Enter title" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Description</Label>
//                   <Textarea placeholder="Enter description" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <DialogFooter className="gap-2 ">
//             <Button type="button" variant="outline" onClick={handleClose}>
//               Cancel
//             </Button>
//             <Button type="submit" className="button-gradient">
//               {isEditing ? "Save Changes" : "Create Post"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default CompanyLifeAddEditDialog;

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
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

function CompanyLifeAddEditDialog({ isOpen, onClose, isEditing }) {
  const defaultImage = "/card_image.png";
  const [profileImage, setProfileImage] = useState(defaultImage);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      date: null,
      type: "",
      title: "",
      description: "",
    },
  });

  const handleClose = () => {
    setProfileImage(defaultImage);
    reset();
    onClose();
  };

  const handleImageClick = () => fileInputRef.current?.click();

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, profileImage });
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="md:max-w-4xl ">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Company Life Post" : "Add New Company Life Post"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Profile Image */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div
                className="relative w-80 h-40 rounded-lg overflow-hidden border cursor-pointer group border-2 border-gray-300"
                onClick={handleImageClick}
              >
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover w-80 h-full transition-opacity group-hover:opacity-75"
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
              <Button
                type="button"
                className="button-gradient"
                onClick={handleImageClick}
              >
                Edit Image
              </Button>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1  gap-6">
              {/* Date Picker */}
              <div className="flex flex-col gap-2">
                <Label>Date</Label>
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: "Date is required" }}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm">{errors.date.message}</p>
                )}
              </div>

              {/* Type, Title, Description */}
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Input
                    type="text"
                    placeholder="Enter type"
                    {...register("type", { required: "Type is required" })}
                  />
                  {errors.type && (
                    <p className="text-red-500 text-sm">
                      {errors.type.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    type="text"
                    placeholder="Enter title"
                    {...register("title", { required: "Title is required" })}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Enter description"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2">
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
