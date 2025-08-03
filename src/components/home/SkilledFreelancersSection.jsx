import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import provideIcon from "@/utils/IconProvider/provideIcon";
import Image from "next/image";

function SkilledFreelancersSection() {
	return (
		<section className="py-20 px-6 bg-white ">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-16 items-start  max-h-[35rem]">
					{/* Left Side - Visual Element */}
					{/* <div className="relative flex justify-center lg:justify-start border h-[35rem]"> */}
					{/* Main Bubble */}
					<div className="relative">
						<Image
							src={"/auth/chat.png"}
							width={550}
							height={600}
							alt="#"
							className=""
						/>
						{/* Stats Cards */}
						<Card className="absolute top-14 right-48 bg-white shadow-lg border-0">
							<CardContent className="p-2 text-center min-w-[140px]">
								<div className="text-3xl font-bold text-blue-600 mb-1">
									500+
								</div>
								<div className="text-sm text-gray-600">freelancers</div>
							</CardContent>
						</Card>

						<Card className="absolute bottom-1/2 left-28 bg-white shadow-lg border-0">
							<CardContent className="p-2 text-center min-w-60">
								<div className="text-3xl font-bold text-blue-600 mb-1">
									300+
								</div>
								<div className="text-sm text-gray-600">
									freelance work Posted
								</div>
							</CardContent>
						</Card>
					</div>
					{/* </div> */}

					{/* Right Side - Content */}
					<div className="space-y-6">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
							<span className="text-blue-600">Skilled Freelancers.</span>
							<br />
							<span className="text-blue-600">Zero Hassle.</span>
						</h2>

						<p className="text-lg text-gray-600 leading-relaxed">
							Get access to top-rated freelancers without the stress of endless
							searching or high commission fees. Our platform connects you
							directly with skilled professionals in design, development,
							writing, marketing, and more. Whether you're starting a new
							project or need expert support, we make it easy to find, hire, and
							collaborate —hassle-free. Enjoy secure payments, direct contracts,
							and full control over your workflow.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SkilledFreelancersSection;
