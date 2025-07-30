import React from "react";
import HomeBanner from "./HomeBanner";
import TalentCategories from "./Slider";
import SkilledFreelancersSection from "./SkilledFreelancersSection";

function Homelayout() {
	return (
		<>
			<HomeBanner />
			<TalentCategories />
			<SkilledFreelancersSection />
		</>
	);
}

export default Homelayout;
