"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import AccountTypeDialog from "../clientOrFreelancer/ClientOrFreelancer";

const SignUpPage = () => {
  const [showAccountTypeDialog, setShowAccountTypeDialog] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Must be at least 8 characters";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    } else if (formData.confirmPassword.length < 8) {
      newErrors.confirmPassword = "Must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const onFinish = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("SignUp submitted:", formData);
      setLoading(false);
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    console.log("Google signup clicked");
  };

  return (
    <>
      <AccountTypeDialog />
      <div className="p-6 sm:p-8">
        {/* Logo */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="w-full flex justify-center items-center">
            <div className="w-40 h-20 md:w-48 lg:w-56  flex items-center justify-center">
              <Image
                src={"/auth/lunaq.png"}
                width={150}
                height={150}
                alt="lunaq"
              />
            </div>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm text-center pb-4">
            Your information is safe. We use encrypted connections to protect
            your data.
          </p>
        </div>

        {/* SignUp form */}
        <form onSubmit={onFinish} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-1">
            <Label htmlFor="name" className="text-gray-700 font-medium text-sm">
              Name*
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`rounded-full h-11 px-4 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <Label
              htmlFor="email"
              className="text-gray-700 font-medium text-sm"
            >
              Email*
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`rounded-full h-11 px-4 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <Label
              htmlFor="password"
              className="text-gray-700 font-medium text-sm"
            >
              Password*
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`rounded-full h-11 px-4 pr-12 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            {!errors.password &&
              formData.password &&
              formData.password.length < 8 && (
                <p className="text-gray-500 text-xs mt-1">
                  Must be at least 8 characters
                </p>
              )}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-1">
            <Label
              htmlFor="confirmPassword"
              className="text-gray-700 font-medium text-sm"
            >
              Confirm Password*
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className={`rounded-full h-11 px-4 pr-12 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
            {!errors.confirmPassword &&
              formData.confirmPassword &&
              formData.confirmPassword.length < 8 && (
                <p className="text-gray-500 text-xs mt-1">
                  Must be at least 8 characters
                </p>
              )}
          </div>

          {/* Sign Up Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-full h-12 font-semibold text-base"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </div>

          {/* Google Sign Up */}
          <div>
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              className="w-full border-gray-300 hover:border-gray-400 rounded-full h-12 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>
          </div>
        </form>

        {/* Log In link */}
        <div className="text-center mt-6">
          <p className="text-black text-xs md:text-sm">
            Already have an account?{" "}
            <Button
              variant="link"
              onClick={() => router.push("/login")}
              className="p-0 h-auto text-blue-600 hover:text-blue-800 font-semibold"
            >
              Log in
            </Button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
