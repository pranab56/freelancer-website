import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

function PopularServices() {
	const popularCategories = [
		{
			id: 1,
			label: "Graphic&Design",
			src: "",
		},
		{
			id: 2,
			label: "Cartoon Animation",
			src: "",
		},
		{
			id: 3,
			label: "Illustration",
			src: "",
		},
		{
			id: 4,
			label: "Flyers & Vouchers",
			src: "",
		},
		{
			id: 5,
			label: "Logo Design",
			src: "",
		},
		{
			id: 6,
			label: "Social graphics",
			src: "",
		},
		{
			id: 7,
			label: "Article writing",
			src: "",
		},
		{
			id: 8,
			label: "Video Editing",
			src: "",
		},
	];
	return (
		<div className="w-10/12 p-4  mx-auto my-12  flex flex-col justify-center">
			<h2 className="text-5xl h2-gradient-text leading-14 font-bold text-center">
				Our Popular services
			</h2>
			<div className="grid grid-cols-4 gap-5 my-12">
				{popularCategories.map((category, index) => (
					<Card className="h-[241px] flex items-center justify-center" key={index}>
						{category.label}
					</Card>
				))}
			</div>
			<Button className="w-60 button-gradient mx-auto">See All Categories</Button>
		</div>
	);
}

export default PopularServices;
