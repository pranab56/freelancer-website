"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import provideIcon from "@/utils/IconProvider/provideIcon";

const ResetPasswordForm = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const router = useRouter();

	const validatePassword = (password) => {
		// At least 8 characters, 1 uppercase, 1 lowercase, 1 number
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
		return passwordRegex.test(password);
	};

	const getPasswordMatchStatus = () => {
		if (!password || !confirmPassword) return null;
		return password === confirmPassword ? "match" : "no-match";
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		if (!password) {
			setError("Password is required");
			return;
		}

		if (!validatePassword(password)) {
			setError(
				"Password must be at least 8 characters with uppercase, lowercase, and number"
			);
			return;
		}

		if (!confirmPassword) {
			setError("Please confirm your password");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		setLoading(true);

		// Simulate API call
		setTimeout(() => {
			console.log("Password reset submitted");
			setSuccess(true);
			setLoading(false);
		}, 1000);
	};

	const handleBackToLogin = () => {
		router.push("/login");
	};

	if (success) {
		return (
			<div className="p-6 sm:p-8">
				<div className="text-center space-y-6">
					{/* Success Icon */}
					<div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
						<svg
							className="w-8 h-8 text-green-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>

					{/* Success Message */}
					<div>
						<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
							Password Reset Successfully
						</h2>
						<p className="text-gray-600 text-sm md:text-base mb-6">
							Your password has been updated successfully. You can now log in
							with your new password.
						</p>
					</div>

					{/* Back to Login */}
					<Button
						variant="outline"
						onClick={handleBackToLogin}
						className="w-full rounded-full h-12 flex items-center justify-center gap-2">
						<ArrowLeft className="w-4 h-4" />
						Back to log in
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="p-6 sm:p-8">
			<div className="text-center space-y-6">
				{/* Key Icon */}
				<div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
					{provideIcon({ name: "key" })}
				</div>

				{/* Title and Description */}
				<div>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
						Create a New Password
					</h2>
					<p className="text-gray-600 text-sm md:text-base mb-6">
						Your new password must be different to previously used passwords.
					</p>
				</div>

				{/* Reset Password Form */}
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="text-left">
						<Label
							htmlFor="password"
							className="block text-gray-700 font-medium text-sm mb-2">
							Password
						</Label>
						<div className="relative">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={`rounded-full h-12 px-4 pr-12 ${
									error && !password ? "border-red-500" : ""
								}`}
								autoComplete="new-password"
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
								{!showPassword ? (
									<EyeOff className="w-5 h-5" />
								) : (
									<Eye className="w-5 h-5" />
								)}
							</button>
						</div>
					</div>

					<div className="text-left">
						<Label
							htmlFor="confirmPassword"
							className="block text-gray-700 font-medium text-sm mb-2">
							Confirm Password
						</Label>
						<div className="relative">
							<Input
								id="confirmPassword"
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Confirm your Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className={`rounded-full h-12 px-4 pr-12 ${
									getPasswordMatchStatus() === "no-match"
										? "border-red-500"
										: getPasswordMatchStatus() === "match"
										? "border-green-500"
										: ""
								}`}
								autoComplete="new-password"
							/>
							<button
								type="button"
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
								{!showConfirmPassword ? (
									<EyeOff className="w-5 h-5" />
								) : (
									<Eye className="w-5 h-5" />
								)}
							</button>
						</div>
						{/* Password Match Indicator */}
						{confirmPassword && (
							<div className="mt-2 text-xs">
								{getPasswordMatchStatus() === "match" ? (
									<span className="text-green-600 flex items-center gap-1">
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										Passwords match
									</span>
								) : (
									<span className="text-red-600 flex items-center gap-1">
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20">
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
										Passwords do not match
									</span>
								)}
							</div>
						)}
					</div>

					{/* Error Message */}
					{error && (
						<div className="text-red-500 text-xs text-left">{error}</div>
					)}

					{/* Submit Button */}
					<Button
						type="submit"
						disabled={loading}
						className="w-full button-gradient-rounded h-12 font-semibold text-base">
						{loading ? "Updating Password..." : "Update Password"}
					</Button>
				</form>

				{/* Back to Login */}
				<Button
					variant="link"
					onClick={handleBackToLogin}
					className="text-gray-600 hover:text-gray-800 flex items-center justify-center gap-2 mx-auto">
					<ArrowLeft className="w-4 h-4" />
					Back to log in
				</Button>
			</div>
		</div>
	);
};

export default ResetPasswordForm;
