import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit3, Info } from "lucide-react";
import { GoPlusCircle } from "react-icons/go";
function SkillsSection() {
	const technicalSkills1 = [
		"R",
		"Python",
		"SQL",
		"Tableau",
		"Power BI",
		"Excel VBA",
		"Machine Learning",
		"Pandas",
		"NumPy",
	];

	const technicalSkills2 = [
		"Risk Management",
		"Project Management",
		"Regulatory Reporting",
	];

	return (
		<div className="w-full py-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border rounded-xl">
				{/* Left Skills Card */}
				<Card className="h-fit border-none shadow-none">
					<CardHeader className="pb-4">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg font-semibold text-blue-600">
								Skills
							</CardTitle>
							<div className="flex items-center gap-2">
								<GoPlusCircle className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
								<Edit3 className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
							</div>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						{/* Profile indicators */}

						<div>
							<h3 className="text-blue-600 font-medium mb-3">
								Technical Skills
							</h3>
							<div className="flex flex-wrap gap-2">
								{technicalSkills1.map((skill, index) => (
									<Badge
										key={index}
										variant="outline"
										className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-3 py-1 rounded-full">
										{skill}
									</Badge>
								))}
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Right Skills Card */}
				<Card className="h-fit border-none shadow-none">
					<CardHeader className="pb-4">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg font-semibold text-blue-600">
								{/* Skills */}
							</CardTitle>
							<div className="flex items-center gap-2">
								<GoPlusCircle className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
								<Edit3 className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
							</div>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						{/* Profile indicators */}

						<div>
							<h3 className="text-blue-600 font-medium mb-3">
								Technical Skills
							</h3>
							<div className="flex flex-wrap gap-2">
								{technicalSkills2.map((skill, index) => (
									<Badge
										key={index}
										variant="outline"
										className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-3 py-1 rounded-full">
										{skill}
									</Badge>
								))}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default SkillsSection;
