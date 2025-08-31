"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import provideIcon from "@/utils/IconProvider/provideIcon";
import { useSelector } from "react-redux";
const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      console.log("Forgot password submitted:", email);
      setSuccess(true);
      setLoading(false);
      // You might want to redirect to a success page or show success message
    }, 1000);
  };

  const handleBackToLogin = () => {
    router.push(`/auth/login`);
  };
  const handleContinue = () => {
    router.push(`/auth/verify-email`);
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
              viewBox="0 0 24 24"
            >
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
              Check Your Email
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Didn't receive the email? Check your spam folder or try again.
            </p>
          </div>

          {/* Back to Login */}
          <Button
            variant="outline"
            onClick={handleContinue}
            className="w-60 button-gradient-rounded h-12 flex items-center justify-center gap-2 mx-auto"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
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
            Forgot password?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        {/* Forgot Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <Label
              htmlFor="email"
              className="block text-gray-700 font-medium text-sm mb-2"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className={`rounded-full h-12 px-4 ${
                error ? "border-red-500" : ""
              }`}
              autoComplete="email"
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full button-gradient-rounded h-12 font-semibold text-base"
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>

        {/* Back to Login */}
        <Button
          variant="link"
          onClick={handleBackToLogin}
          className=" text-gray-600 hover:text-gray-800 flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to log in
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
