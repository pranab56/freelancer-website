"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/redux/features/currentUser/currentuserSlice";
import { toast } from "sonner";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  // Check if user is already logged in
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn && currentUser) {
      toast.success(`Welcome back, ${currentUser.type}!`);
      router.push("/");
    }
  }, [isLoggedIn, currentUser, router]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
    setErrors({});

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Test accounts logic (in real app, this would be an API call)
      const testAccounts = {
        "freelancer@gmail.com": {
          password: "A123456",
          type: "freelancer",
          name: "John Freelancer",
          email: "freelancer@gmail.com",
        },
        "client@gmail.com": {
          password: "A123456",
          type: "client",
          name: "Jane Client",
          email: "client@gmail.com",
        },
      };

      const account = testAccounts[formData.email.toLowerCase()];

      if (account && account.password === formData.password) {
        // Set user data in Redux
        dispatch(
          setCurrentUser({
            type: account.type,
            name: account.name,
            email: account.email,
            id: `user_${Date.now()}`,
          })
        );

        // Store token and user data
        localStorage.setItem("token", `token_${Date.now()}`);
        localStorage.setItem(
          "user",
          JSON.stringify({
            type: account.type,
            name: account.name,
            email: account.email,
          })
        );

        // Show success message
        toast.success(`Welcome back, ${account.name}!`);

        // Redirect to home page
        router.push("/");
      } else {
        setErrors({
          email: "Invalid email or password",
          password: "Invalid email or password",
        });
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors({
        email: "An error occurred during login",
        password: "An error occurred during login",
      });
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.info("Google login functionality coming soon!");
    } catch (error) {
      toast.error("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onFinish(e);
    }
  };

  return (
    <div className="p-6 sm:p-8">
      {/* Logo */}
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="w-full flex justify-center items-center">
          <div className="w-40 h-20 md:w-48 lg:w-56 rounded-lg flex items-center justify-center">
            <Image
              src={"/auth/lunaq.png"}
              width={150}
              height={150}
              alt="lunaq"
            />
          </div>
        </div>
        <h3 className="text-gray-600 text-sm sm:text-base text-center pb-6 md:pb-10">
          Welcome back! Please enter your details.
        </h3>
      </div>

      {/* Login form */}
      <form onSubmit={onFinish} className="space-y-4 md:space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-gray-700 font-medium text-sm md:text-base"
          >
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onKeyPress={handleKeyPress}
            className={`rounded-full h-12 px-4 ${
              errors.email ? "border-red-500 focus:border-red-500" : ""
            }`}
            disabled={loading}
          />
          {errors.email && (
            <Alert variant="destructive" className="py-2">
              <AlertDescription className="text-xs md:text-sm">
                {errors.email}
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-gray-700 font-medium text-sm md:text-base"
          >
            Password <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              onKeyPress={handleKeyPress}
              className={`rounded-full h-12 px-4 pr-12 ${
                errors.password ? "border-red-500 focus:border-red-500" : ""
              }`}
              disabled={loading}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </Button>
          </div>
          {errors.password && (
            <Alert variant="destructive" className="py-2">
              <AlertDescription className="text-xs md:text-sm">
                {errors.password}
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="text-right">
          <Link href={`/auth/forgot-password`}>
            <Button
              variant="link"
              className="p-0 h-auto text-xs md:text-sm text-gray-600 hover:text-gray-800"
              disabled={loading}
            >
              Forgot password
            </Button>
          </Link>
        </div>

        <div className="mb-4 md:mb-6">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-full h-12 font-semibold text-base disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>

        <div>
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full border-gray-300 hover:border-gray-400 rounded-full h-12 flex items-center justify-center gap-2 disabled:opacity-50"
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
            Sign in with Google
          </Button>
        </div>
      </form>

      {/* Sign up link */}
      <div className="text-center mt-6 md:mt-8">
        <p className="text-black text-xs md:text-sm">
          Don't have an account?{" "}
          <Button
            variant="link"
            onClick={() => router.push(`/auth/sign-up`)}
            className="p-0 h-auto text-blue-600 hover:text-blue-800 font-semibold"
            disabled={loading}
          >
            Sign up
          </Button>
        </p>
      </div>

      {/* Demo accounts info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Demo Accounts:
        </h4>
        <div className="text-xs text-gray-600 space-y-1">
          <p>
            <strong>Freelancer:</strong> freelancer@gmail.com / A123456
          </p>
          <p>
            <strong>Client:</strong> client@gmail.com / A123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
