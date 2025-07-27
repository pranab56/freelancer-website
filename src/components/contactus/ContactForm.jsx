import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";
import { Label } from "../ui/label";

function ContactForm() {
	return (
		<div className="max-w-7xl mx-auto my-10">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Form Section */}
				<div className="lg:col-span-2">
					<div className="space-y-6">
						{/* Name Fields Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="border border-blue-200 rounded-xl flex flex-col items-start p-2 px-3">
								<Label className="p-0 text-xs">First Name*</Label>
								<Input
									type="text"
									placeholder="First Name*"
									defaultValue="Ali"
									className="h-6 p-0 border-none shadow-none focus:border-none"
								/>
							</div>
							<div className="border border-blue-200 rounded-xl flex flex-col items-start p-2">
								<Label className="p-0 text-xs">Last Name*</Label>

								<Input
									type="text"
									placeholder="Last Name*"
									defaultValue="Tufan"
									className=" p-0 border-none shadow-none focus:border-none "
								/>
							</div>
						</div>

						{/* Email and Phone Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="border border-blue-200 rounded-xl flex flex-col items-start p-2">
								<Label className="p-0 text-xs">Email*</Label>

								<Input
									type="email"
									placeholder="Email*"
									defaultValue="example@gmail.com"
									className="p-0 border-none shadow-none focus:border-none"
								/>
							</div>
							<div className="border border-blue-200 rounded-xl flex flex-col items-start p-2">
								<Label className="p-0 text-xs">Phone*</Label>

								<Input
									type="tel"
									placeholder="Phone"
									defaultValue="+90 123 456 789"
									className="p-0 border-none shadow-none focus:border-none"
								/>
							</div>
						</div>

						{/* Message Field */}
						<div>
							<Textarea
								placeholder="Message"
								rows={10}
								className="border-blue-200 rounded-xl focus:border-blue-400 focus:ring-blue-400 h-40 resize-none"
							/>
						</div>

						{/* Submit Button */}
						<div className="flex justify-center">
							<Button className="button-gradient  text-white px-12  py-3 h-12 rounded-xl font-medium text-base min-w-60 md:w-auto">
								Send Message
							</Button>
						</div>
					</div>
				</div>

				{/* Contact Details Card */}
				<div className="lg:col-span-1">
					<Card className="border-blue-200 rounded-2xl shadow-sm">
						<CardContent className="p-8">
							<h3 className="text-xl font-semibold text-blue-600 mb-4">
								Contact details
							</h3>

							<p className="text-gray-600 text-sm leading-relaxed mb-8">
								Likewise, a range of activities enriches life, blending vigor
								with balance. The result is a lifestyle that's not only dynamic
								but also deeply rewarding.
							</p>

							<div className="space-y-6">
								{/* Address */}
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<MapPin className="w-4 h-4 text-blue-600" />
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-1">Address</h4>
										<p className="text-gray-600 text-sm leading-relaxed">
											123 Queensberry Street, North Melbourne VIC3051,
											Australia.
										</p>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<Mail className="w-4 h-4 text-blue-600" />
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-1">Email</h4>
										<p className="text-gray-600 text-sm">ali@boxcars.com</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
