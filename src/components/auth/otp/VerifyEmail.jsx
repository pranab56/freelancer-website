"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OTPForm = () => {
	const [otp, setOtp] = useState(["", "", "", "", "", ""]);
	const [loading, setLoading] = useState(false);
	const [resendLoading, setResendLoading] = useState(false);
	const [error, setError] = useState("");
	const inputRefs = useRef([]);
	const router = useRouter();

	// Initialize refs
	useEffect(() => {
		inputRefs.current = inputRefs.current.slice(0, 6);
	}, []);

	const handleInputChange = (index, value) => {
		// Only allow single digit
		if (value.length > 1) return;

		// Only allow numbers
		if (value && !/^\d$/.test(value)) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		// Clear error when user starts typing
		if (error) setError("");

		// Auto-focus next input
		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (index, e) => {
		// Handle backspace
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}

		// Handle paste
		if (e.key === "v" && (e.ctrlKey || e.metaKey)) {
			e.preventDefault();
			navigator.clipboard.readText().then((text) => {
				const digits = text.replace(/\D/g, "").slice(0, 6);
				const newOtp = [...otp];

				for (let i = 0; i < digits.length && i < 6; i++) {
					newOtp[i] = digits[i];
				}

				setOtp(newOtp);

				// Focus the next empty input or last input
				const nextIndex = Math.min(digits.length, 5);
				inputRefs.current[nextIndex]?.focus();
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const otpValue = otp.join("");

		if (otpValue.length !== 6) {
			setError("Please enter all 6 digits");
			return;
		}

		setLoading(true);
		setError("");

		// Simulate API call
		setTimeout(() => {
			console.log("OTP submitted:", otpValue);
			// Simulate validation
			if (otpValue === "123456") {
				// Success - redirect or show success
				router.push("/dashboard");
			} else {
				setError("Invalid verification code. Please try again.");
			}
			setLoading(false);
		}, 1000);
	};

	const handleResend = async () => {
		setResendLoading(true);
		setError("");

		// Simulate resend API call
		setTimeout(() => {
			console.log("Resend OTP");
			setResendLoading(false);
			// You might want to show a success message here
		}, 1000);
	};

	return (
		<div className="p-6 sm:p-8">
			<div className="text-center space-y-6">
				{/* Title */}
				<div>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
						Enter the Verification Code
					</h2>
					<p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
						For Verify Your Email
					</p>
				</div>

				{/* OTP Input Form */}
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="flex justify-center gap-2 md:gap-3">
						{otp.map((digit, index) => (
							<Input
								key={index}
								ref={(el) => (inputRefs.current[index] = el)}
								type="text"
								inputMode="numeric"
								maxLength={1}
								value={digit}
								onChange={(e) => handleInputChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className={`
                  w-10 h-10 md:w-12 md:h-12 text-center text-lg md:text-xl font-semibold 
                  rounded-lg border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                  ${error ? "border-red-500" : "border-gray-300"}
                  ${digit ? "border-blue-500 bg-blue-50" : ""}
                `}
								autoComplete="off"
							/>
						))}
					</div>

					{/* Error Message */}
					{error && <p className="text-red-500 text-sm text-center">{error}</p>}

					{/* Resend Code */}
					<div className="text-center">
						<p className="text-sm text-gray-600 mb-2">
							If you didn't receive a code,{" "}
							<Button
								type="button"
								variant="link"
								onClick={handleResend}
								disabled={resendLoading}
								className="p-0 h-auto text-blue-600 hover:text-blue-800 font-semibold underline">
								{resendLoading ? "Sending..." : "Resend"}
							</Button>
						</p>
					</div>

					{/* Submit Button */}
					<div className="pt-4">
						<Button
							type="submit"
							disabled={loading || otp.join("").length !== 6}
							className="w-60 button-gradient-rounded  h-12 font-semibold text-base">
							{loading ? "Verifying..." : "Submit"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default OTPForm;
