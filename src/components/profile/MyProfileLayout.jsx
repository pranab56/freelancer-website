"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import ProfileSections from "./ProfileSection";
import SkillsSection from "./SkillSection";
import ExperienceSection from "./ExperienceSection";

function MyProfileLayout() {
  // Get translations from Redux
  const messages = useSelector((state) => state.language.messages);
  const translations = useMemo(
    () =>
      messages?.profile?.layout || {
        coverPhotoAlt: "Cover Photo",
      },
    [messages]
  );

  return (
    <div className="w-full">
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
        <Image
          src={"/myprofile/cover.png"}
          alt={translations.coverPhotoAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 2xl:px-0">
        <ProfileHeader />
        <ProfileSections />
        <SkillsSection />
      </div>
      <ExperienceSection />
    </div>
  );
}

export default MyProfileLayout;
