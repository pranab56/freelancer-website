"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import React, { useState } from "react";

import EditProfileDialog from "./EditProfileDialog";
import provideIcon from "@/utils/IconProvider/provideIcon";

function ClientProfilePrivate({ translations }) {
  const [isEditProfileDialogOpen, setIsEditProfileDialogOpen] = useState(false);

  const clientInfo = {
    name: "John Doe",
    profilePicture: "/client/profile/client.png",
    bio: "I am UI/UX wizard",
    department: "Designer",
    location: "Paris, France",
    email: "john.doe@example.com",
    isVerified: true,
  };

  return (
    <div className="space-y-4 w-full max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0">
      <div className="flex gap-2 justify-center md:justify-end ">
        <Button
          className="button-gradient"
          onClick={() => setIsEditProfileDialogOpen(true)}
        >
          {translations.editProfile} {provideIcon({ name: "edit" })}
        </Button>
      </div>
      <div className="flex gap-10 items-start py-2">
        <Image
          src={clientInfo.profilePicture}
          alt="client-profile"
          width={150}
          height={150}
        />
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">{clientInfo.name}</h1>
          <p>{clientInfo.bio}</p>
          <p>
            {translations.department}: {clientInfo.department}
          </p>
          <p>
            {translations.location}: {clientInfo.location}
          </p>
          <p>
            {translations.email}: {clientInfo.email}
          </p>
          <p>{clientInfo.phone}</p>
          {clientInfo.isVerified && (
            <div className="flex items-center gap-2">
              <span>{provideIcon({ name: "verified" })}</span>{" "}
              {translations.verifiedClient}
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="h2-gradient-text text-2xl font-bold text-justify">
          {translations.aboutCompany}
        </h1>
        <p>{translations.companyDescription}</p>
      </div>
      <EditProfileDialog
        isOpen={isEditProfileDialogOpen}
        onClose={() => setIsEditProfileDialogOpen(false)}
      />
    </div>
  );
}

export default ClientProfilePrivate;
