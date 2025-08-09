"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function EditProfileDialog({
  open,
  onClose,
}: {
  open: boolean,
  onClose: () => void,
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-6 sm:p-8 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Profile Edit
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {/* Profile & Cover Images */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border">
              <Image
                src="/profile-pic.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <Button variant="ghost" className="text-sm">
              Change Profile Picture ✏️
            </Button>

            <div className="relative w-full rounded-lg overflow-hidden border h-40">
              <Image
                src="/cover-pic.jpg"
                alt="Cover"
                fill
                className="object-cover"
              />
            </div>
            <Button variant="ghost" className="text-sm">
              Change Cover ✏️
            </Button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input placeholder="Name" defaultValue="Sabbir Ahmed" />
            </div>

            <div>
              <Label>Daily Rate</Label>
              <Input placeholder="$500" defaultValue="$500" />
            </div>

            <div>
              <Label>Service Type</Label>
              <Select defaultValue="Design">
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Development">Development</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Category Type</Label>
              <Select defaultValue="UI/UX Designer">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                  <SelectItem value="Graphic Designer">
                    Graphic Designer
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Location</Label>
              <Select defaultValue="Bangladesh">
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Language</Label>
              <Select defaultValue="Bangladesh">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end items-center gap-3 mt-6">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
