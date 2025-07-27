// import { Badge } from "../ui/badge";
// import { Button } from "../ui/button";
// import { Card } from "../ui/card";

// function SubscriptionPlan() {
// 	const subscriptionPlans = [
// 		{
// 			id: 1,
// 			title: "Starter plan",
// 			icon: "👤",
// 			fee: 9,
// 			duration: "mo",
// 			features: [
// 				"Apply to 10 tenders /mo",
// 				"Profile visible",
// 				"Access to dashboard",
// 				"Smart suggestions",
// 				"Limited client messaging",
// 				"Booking calendar with availability",
// 				"Contract generator (basic prefilled draft)",
// 			],
// 			isActive: true,
// 		},
// 		{
// 			id: 2,
// 			title: "Starter plan",
// 			icon: "👤",
// 			fee: 90,
// 			duration: "year",
// 			features: [
// 				"Apply to 10 tenders /mo",
// 				"Profile visible",
// 				"Access to dashboard",
// 				"Smart suggestions",
// 				"Limited client messaging",
// 				"Booking calendar with availability",
// 				"Contract generator (basic prefilled draft)",
// 			],
// 			isActive: false,
// 		},
// 		{
// 			id: 3,
// 			title: "Pro plan",
// 			icon: "⭐",
// 			fee: 12,
// 			duration: "mo",
// 			features: [
// 				"Priority profile listing",
// 				"All Starter features",
// 				"Unlimited applications",
// 				"Full access to client interaction",
// 				"Smart tender matching",
// 				"Custom contract generator",
// 				"Analytics of profile views",
// 				"Support priority + badge",
// 			],
// 			isActive: false,
// 		},
// 		{
// 			id: 4,
// 			title: "Pro plan",
// 			icon: "⭐",
// 			fee: 120,
// 			duration: "year",
// 			features: [
// 				"Priority profile listing",
// 				"All Starter features",
// 				"Unlimited applications",
// 				"Full access to client interaction",
// 				"Smart tender matching",
// 				"Custom contract generator",
// 				"Analytics of profile views",
// 				"Support priority + badge",
// 			],
// 			isActive: false,
// 		},
// 	];

// 	return (
// 		<div className="container mx-auto px-4 py-12 max-w-7xl">
// 			{/* Header Section */}
// 			<div className="text-center mb-12">
// 				<Badge
// 					color="blue"
// 					className="mb-4 px-4 py-2 text-sm font-medium rounded-full border-0 gradient">
// 					Pricing plans
// 				</Badge>
// 				<h1 className="text-4xl font-bold text-gray-900 mb-4">
// 					Plans for all sizes
// 				</h1>
// 				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
// 					Simple, transparent pricing that grows with you. Try any plan free for
// 					30 days.
// 				</p>
// 			</div>

// 			{/* Plans Grid */}
// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// 				{subscriptionPlans.map((plan) => (
// 					<Card
// 						key={plan.id}
// 						className="h-full shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
// 						bodyStyle={{ padding: "24px" }}>
// 						{/* Header */}
// 						<div className="flex items-center justify-center gap-3 mb-6">
// 							<h3 className="text-lg font-semibold text-gray-900 mb-0">
// 								{plan.title}
// 							</h3>
// 						</div>

// 						{/* Price */}
// 						<div className="mb-8">
// 							<div className="flex items-center justify-center">
// 								<span className="text-4xl font-bold text-gray-900">
// 									{plan.fee}
// 								</span>
// 								<span className="text-lg text-gray-600 ml-1">
// 									€/{plan.duration}
// 								</span>
// 							</div>
// 						</div>

// 						{/* Features */}
// 						<div className="space-y-4 mb-8">
// 							{plan.features.map((feature, index) => (
// 								<div key={index} className="flex items-start gap-3">
// 									<span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
// 									<span className="text-sm text-gray-700">{feature}</span>
// 								</div>
// 							))}
// 						</div>

// 						{/* Button */}
// 						<Button className="font-medium button-gradient">
// 							{plan.isActive ? "Running" : "Upgrade"}
// 						</Button>
// 					</Card>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default SubscriptionPlan;

import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function SubscriptionPlan() {
	const subscriptionPlans = [
		{
			id: 1,
			title: "Starter plan",
			icon: "👤",
			fee: 9,
			duration: "mo",
			features: [
				"Apply to 10 tenders /mo",
				"Profile visible",
				"Access to dashboard",
				"Smart suggestions",
				"Limited client messaging",
				"Booking calendar with availability",
				"Contract generator (basic prefilled draft)",
			],
			isActive: true,
		},
		{
			id: 2,
			title: "Starter plan",
			icon: "👤",
			fee: 90,
			duration: "year",
			features: [
				"Apply to 10 tenders /mo",
				"Profile visible",
				"Access to dashboard",
				"Smart suggestions",
				"Limited client messaging",
				"Booking calendar with availability",
				"Contract generator (basic prefilled draft)",
			],
			isActive: false,
		},
		{
			id: 3,
			title: "Pro plan",
			icon: "⭐",
			fee: 12,
			duration: "mo",
			features: [
				"Priority profile listing",
				"All Starter features",
				"Unlimited applications",
				"Full access to client interaction",
				"Smart tender matching",
				"Custom contract generator",
				"Analytics of profile views",
				"Support priority + badge",
			],
			isActive: false,
		},
		{
			id: 4,
			title: "Pro plan",
			icon: "⭐",
			fee: 120,
			duration: "year",
			features: [
				"Priority profile listing",
				"All Starter features",
				"Unlimited applications",
				"Full access to client interaction",
				"Smart tender matching",
				"Custom contract generator",
				"Analytics of profile views",
				"Support priority + badge",
			],
			isActive: false,
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4 max-w-7xl">
				{/* Header Section */}
				<div className="text-center mb-12">
					<Badge className="mb-6 px-4 py-2 text-sm font-medium rounded-full gradient">
						Pricing plans
					</Badge>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Plans for all sizes
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Simple, transparent pricing that grows with you. Try any plan free
						for 30 days.
					</p>
				</div>

				{/* Plans Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{subscriptionPlans.map((plan) => (
						<Card
							key={plan.id}
							className="h-full shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 bg-white">
							<div className="p-6 h-full flex flex-col">
								{/* Plan Icon and Title */}
								<div className="text-center mb-6">
									<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
										<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
											<span className="text-white text-xs">
												{plan.title.includes("Pro") ? "$" : "€"}
											</span>
										</div>
									</div>
									<h3 className="text-lg font-semibold text-blue-600 mb-0">
										{plan.title}
									</h3>
								</div>

								{/* Price */}
								<div className="mb-8">
									<div className="flex items-baseline justify-center">
										<span className="text-4xl font-bold text-gray-900">
											{plan.fee}
										</span>
										<span className="text-lg text-gray-600 ml-1">
											€/{plan.duration}
										</span>
									</div>
								</div>

								{/* Features */}
								<div className="flex-1 space-y-3 mb-8">
									{plan.features.map((feature, index) => (
										<div key={index} className="flex items-start gap-3">
											<span className="text-green-500 mt-0.5 flex-shrink-0">
												✓
											</span>
											<span className="text-sm text-gray-700 leading-relaxed">
												{feature}
											</span>
										</div>
									))}
								</div>

								{/* Button */}
								<Button className="w-full font-medium button-gradient ">
									{plan.isActive ? "Running" : "Upgrade"}
								</Button>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default SubscriptionPlan;
