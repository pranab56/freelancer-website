import React from "react";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ServiceCard from "../common/ServiceCard/ServiceCard";
import ExploreMore from "./ExploreMore";

function ServicesLayout() {
	const setServiceBanner = {
		src: "/services/service_1.png",
		header: "Choose the best talent for your organization's success.",
		text: "Choose the perfect freelancer to elevate your organization with top-tier skills, experience, and expertise.",
		buttonName: "Hire Freelancers",
	};
	const services = Array(8).fill({}); // or your service data
	return (
		<div className="max-w-7xl mx-auto">
			<Banner
				src={setServiceBanner.src}
				header={setServiceBanner.header}
				text={setServiceBanner.text}
				buttonName={setServiceBanner.buttonName}
			/>

			<Heading
				heading="UX Design"
				subheading="Provide your visitors with a seamless experience through strong UX design."
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center py-4 mx-auto">
				{services.map((service, index) => (
					<ServiceCard key={index} data={service} />
				))}
			</div>
			<ExploreMore />
		</div>
	);
}

export default ServicesLayout;
