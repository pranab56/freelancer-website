import Image from "next/image";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileSections from "./ProfileSection";
import SkillsSection from "./SkillSection";
import ExperienceSection from "./ExperienceSection";

function MyProfileLayout() {
	return (
		<div className="w-full">
			<div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
				<Image
					src={"/myprofile/cover.png"}
					alt={"cover photo"}
					fill
					className="object-cover"
					sizes="100vw"
					priority
				/>
			</div>
			<div className="max-w-7xl mx-auto">
				<ProfileHeader />
				<ProfileSections />
				<SkillsSection />
			</div>
			<ExperienceSection />
		</div>
	);
}

export default MyProfileLayout;
