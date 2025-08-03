import React from "react";
import HomeBanner from "./HomeBanner";
import TalentCategories from "./Slider";
import SkilledFreelancersSection from "./SkilledFreelancersSection";
import PopularServices from "./PopularServices";

function Homelayout() {
	return (
		<>
			<HomeBanner />
			<TalentCategories />
			<SkilledFreelancersSection />
			<PopularServices />
		</>
	);
}

export default Homelayout;
