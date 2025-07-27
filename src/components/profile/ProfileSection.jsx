import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Plus,
	Edit3,
	Eye,
	UserPlus,
	Calendar,
	MessageCircle,
} from "lucide-react";

function ProfileSections() {
	const educationCertifications = [
		"MSc",
		"Bachelor's",
		"PhD",
		"PMP",
		"CFA Level II",
		"FRM",
		"PSPO",
	];

	return (
		<div className="w-full ">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Education & Certifications */}
				<Card className="max-h-60">
					<CardHeader className="pb-4">
						<CardTitle className="flex items-center gap-2 text-lg font-semibold text-blue-600">
							Education & Certifications
							<Plus className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
							<Edit3 className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex flex-wrap gap-2">
							{educationCertifications.map((item, index) => (
								<Badge
									key={index}
									variant="secondary"
									className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 px-3 py-1">
									{item}
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Projects */}
				<Card className="max-h-60">
					<CardHeader className="pb-4">
						<CardTitle className="text-lg font-semibold text-blue-600">
							Projects
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 flex flex-col items-center">
						<p className="text-gray-600 text-sm leading-relaxed text-center">
							Discover my achievements and detailed case studies.
						</p>

						<Button className="button-gradient w-full sm:w-auto">
							<Eye className="w-4 h-4 mr-2" />
							View All Project
						</Button>
					</CardContent>
				</Card>

				{/* Contact */}
				<Card className="max-h-60">
					<CardHeader className="">
						<CardTitle className="text-lg font-semibold text-blue-600">
							Contact
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-3 flex flex-col items-center">
							<Button className="w-40 button-gradient ">
								<UserPlus className="w-4 h-4 mr-2" />
								Follow
							</Button>

							<Button className="w-40 button-gradient ">
								<Calendar className="w-4 h-4 mr-2" />
								Schedule Meeting
							</Button>

							<Button className="w-40 button-gradient ">
								<MessageCircle className="w-4 h-4 mr-2" />
								Message
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default ProfileSections;
