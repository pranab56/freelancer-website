import React from "react";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ServiceCard from "../common/ServiceCard/ServiceCard";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { IoSearchOutline } from "react-icons/io5";
function TopTalent() {
	const setTopTalentBanner = {
		src: "/services/service_1.png",
		header: "Find Top Talent",
		text: "Select top-tier talent that aligns with your organization's goals and needs. Our platform connects you with skilled professionals who can drive innovation, improve productivity, and ensure the success of your projects, delivering exceptional results every time.",
		buttonName: "Hire Freelancers",
	};
	const services = Array(8).fill({}); // or your service data
	return (
		<div className="max-w-7xl mx-auto">
			<Banner
				src={setTopTalentBanner.src}
				header={setTopTalentBanner.header}
				text={setTopTalentBanner.text}
				buttonName={setTopTalentBanner.buttonName}
			/>
			<div className="flex items-center justify-between">
				<Heading
					heading="UX Design"
					subheading="Provide your visitors with a seamless experience through strong UX design."
				/>
				<div className="flex flex-col items-center gap-4 my-10">
					<div className="relative w-full ">
						<IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />

						<Input type="text" className="pr-10" />
					</div>
					<div className="flex items-center gap-10">
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center py-4 mx-auto">
				{services.map((service, index) => (
					<ServiceCard key={index} data={service} />
				))}
			</div>
		</div>
	);
}

export default TopTalent;
