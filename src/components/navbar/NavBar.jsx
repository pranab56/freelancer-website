"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-bold text-gray-900">
						Lunq
					</Link>
				</div>

				{/* Desktop Navigation Links */}
				<div className="hidden md:flex items-center space-x-8">
					<Link
						href="/"
						className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
						Home
					</Link>
					<div className="relative group">
						<Button
							variant="ghost"
							className="p-0 h-auto font-normal text-gray-700 hover:text-gray-900 hover:bg-transparent">
							Services
							<ChevronDown className="ml-1 h-4 w-4" />
						</Button>
					</div>
					<Link
						href="/about-us"
						className="text-gray-700 hover:text-gray-900 transition-colors">
						About Us
					</Link>
					<Link
						href="/contact-us"
						className="text-gray-700 hover:text-gray-900 transition-colors">
						Contact Us
					</Link>
				</div>

				{/* Right Side - Search, Dropdown, Auth */}
				<div className="hidden md:flex items-center space-x-4">
					{/* Search Bar */}
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
						<input
							type="text"
							placeholder="Search"
							className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
						/>
					</div>

					{/* Freelancer Dropdown */}
					<Button variant="outline" className="flex items-center">
						<User className="mr-2 h-4 w-4" />
						Freelancer
						<ChevronDown className="ml-2 h-4 w-4" />
					</Button>

					{/* Auth Buttons */}
					<div className="flex items-center space-x-3">
						<Button variant="ghost" asChild>
							<Link href="/login">Login</Link>
						</Button>
						<Button asChild className="button-gradient">
							<Link href="/signup" className="flex items-center">
								Sign Up
								<svg
									className="ml-2 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</Link>
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden">
					<Drawer open={isOpen} onOpenChange={setIsOpen}>
						<DrawerTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader className="text-left">
								<DrawerTitle>Menu</DrawerTitle>
								<DrawerClose asChild>
									<Button
										variant="ghost"
										size="icon"
										className="absolute right-4 top-4">
										<X className="h-6 w-6" />
									</Button>
								</DrawerClose>
							</DrawerHeader>
							<div className="px-6 pb-6 space-y-4">
								{/* Mobile Search */}
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
									<input
										type="text"
										placeholder="Search"
										className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>

								{/* Mobile Navigation */}
								<div className="space-y-2">
									<Button
										variant="ghost"
										className="w-full justify-start"
										asChild>
										<Link href="/">Home</Link>
									</Button>
									<Button variant="ghost" className="w-full justify-start">
										Services
										<ChevronDown className="ml-auto h-4 w-4" />
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start"
										asChild>
										<Link href="/about">About Us</Link>
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start"
										asChild>
										<Link href="/contact">Contact Us</Link>
									</Button>
								</div>

								{/* Mobile User Type */}
								<Button variant="outline" className="w-full justify-start">
									<User className="mr-2 h-4 w-4" />
									Freelancer
									<ChevronDown className="ml-auto h-4 w-4" />
								</Button>

								{/* Mobile Auth */}
								<div className="space-y-2 pt-4 border-t">
									<Button variant="ghost" className="w-full" asChild>
										<Link href="/login">Login</Link>
									</Button>
									<Button className="w-full" asChild>
										<Link
											href="/signup"
											className="flex items-center justify-center">
											Sign Up
											<svg
												className="ml-2 h-4 w-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</Link>
									</Button>
								</div>
							</div>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
