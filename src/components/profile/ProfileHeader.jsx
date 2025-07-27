import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Shield, DollarSign } from "lucide-react";

function ProfileHeader() {
	return (
		<div className="w-full mx-auto relative  bg-white my-5">
			{/* Edit button positioned absolutely */}
			<div className=" flex items-center justify-end">
				<Button size="sm" className="button-gradient">
					Edit
					<Edit className="w-4 h-4 mr-2" />
				</Button>
			</div>

			{/* Main profile content */}
			<div className="flex items-start gap-6 py-6">
				{/* Profile Image */}
				<div className="relative">
					<div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
						<img
							src="/api/placeholder/80/80"
							alt="Sabbir Ahmed"
							className="w-full h-full object-cover"
						/>
					</div>
					{/* Online indicator */}
					<div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
						<div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
							<span className="text-xs font-bold text-pink-500">m</span>
						</div>
					</div>
				</div>

				{/* Profile Info */}
				<div className="flex-1">
					<h1 className="text-2xl font-bold text-gray-900 mb-2">
						Sabbir Ahmed
					</h1>

					<div className="flex items-center gap-2 text-gray-600 mb-3">
						<span>UI/UX Designer</span>
						<span>|</span>
						<span>5 Years of experience</span>
						<span>|</span>
						<span>Bangladesh</span>
					</div>

					{/* Country flags */}
					<div className="flex items-center gap-2">
						<div className="w-6 h-4 rounded-sm overflow-hidden">
							<div className="w-full h-1/3 bg-blue-600"></div>
							<div className="w-full h-1/3 bg-white"></div>
							<div className="w-full h-1/3 bg-red-600"></div>
						</div>
						<div className="w-6 h-4 rounded-sm overflow-hidden bg-red-600 flex items-center justify-center">
							<div className="w-3 h-2 bg-white flex items-center justify-center">
								<div className="w-1 h-1 bg-red-600"></div>
							</div>
						</div>
						<div className="w-6 h-4 rounded-sm overflow-hidden">
							<div className="w-full h-1/3 bg-black"></div>
							<div className="w-full h-1/3 bg-red-600"></div>
							<div className="w-full h-1/3 bg-yellow-400"></div>
						</div>
						<div className="w-6 h-4 rounded-sm overflow-hidden">
							<div className="w-full h-1/3 bg-red-600"></div>
							<div className="w-full h-1/3 bg-white"></div>
							<div className="w-full h-1/3 bg-red-600"></div>
						</div>
					</div>
				</div>

				{/* Status and Info Panel */}
				<div className="flex flex-col items-end gap-3">
					{/* Available Badge */}
					<Badge className="bg-none">
						<div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></div>
						Available
					</Badge>

					{/* Verified Freelancer */}
					<div className="flex items-center gap-2 text-sm text-gray-700">
						<Shield className="w-4 h-4 text-blue-600" />
						<span>Verified Freelancer</span>
					</div>

					{/* Day Rate */}
					<div className="flex items-center gap-2 text-sm">
						<div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
							<DollarSign className="w-3 h-3 text-blue-600" />
						</div>
						<span className="text-blue-600 font-semibold">Day Rate $500</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileHeader;
