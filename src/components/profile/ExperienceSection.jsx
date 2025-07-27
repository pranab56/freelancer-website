import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit3, Plus } from "lucide-react";

function ExperienceSection() {
	const experiences = [
		{
			id: 1,
			title: "Senior Risk Analyst",
			company: "BNP Paribas",
			duration: "2021-2023",
			project: "Project: Revamping the ESG Reporting System",
			results:
				"Results: Automation of 80% of processes, reduction of timelines by 40%",
		},
		{
			id: 2,
			title: "Data Analyst",
			company: "Société Générale",
			duration: "2021-2023",
			project: "Project: Implementation of a Credit Risk Dashboard",
			results: "Results: Improved anomaly detection by 60%",
		},
	];

	return (
		<div className="w-full bg-gray-50  mb-10">
			<Card className="max-w-7xl mx-auto h-fit border-none shadow-none bg-transparent">
				<CardHeader className="pb-4 px-0">
					<div className="flex items-center justify-between">
						<CardTitle className="text-lg font-semibold text-blue-600">
							Experience
						</CardTitle>
						<div className="flex items-center gap-4">
							<button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
								<Plus className="w-4 h-4" />
								Add Functional Skills
							</button>
							<button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
								<Edit3 className="w-4 h-4" />
								Edit
							</button>
						</div>
					</div>
				</CardHeader>
				<CardContent className="px-0">
					<div className="space-y-6">
						{experiences.map((exp, index) => (
							<div key={exp.id} className="flex gap-4">
								{/* Timeline dot and line */}
								<div className="flex flex-col items-center">
									<div className="w-3 h-3 bg-blue-600 rounded-full"></div>
									{index < experiences.length - 1 && (
										<div className="w-0.5 h-16 bg-blue-600 mt-2"></div>
									)}
								</div>

								{/* Experience content */}
								<div className="flex-1 pb-6">
									<div className="flex items-start justify-between mb-2">
										<h3 className="text-lg font-semibold text-gray-900">
											{exp.title}
										</h3>
										<span className="text-sm text-gray-600 font-medium">
											{exp.duration}
										</span>
									</div>

									<div className="space-y-2">
										<p className="text-sm font-medium text-gray-900">
											{exp.company}
										</p>
										<p className="text-sm text-gray-700">{exp.project}</p>
										<p className="text-sm text-gray-700">{exp.results}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default ExperienceSection;
