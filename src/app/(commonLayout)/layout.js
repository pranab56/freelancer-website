"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NavBar from "@/components/navbar/NavBar";
import FreelancerNavBar from "@/components/freelancerNavbar/FreelancerNavbar";
import ClientNavBar from "@/components/client/clientNavbar/ClientNavbar";

export default function CommonLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const isLoggedIn = useSelector((state) => state.currentUser?.isLoggedIn);
  const userType = useSelector((state) => state.currentUser?.currentUser?.type);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug logging
  console.log("isLoggedIn:", isLoggedIn);
  console.log("Current userType:", userType);
  console.log("mounted:", mounted);

  const renderNavbar = () => {
    // Don't render anything until component is mounted (to avoid hydration issues)
    if (!mounted) {
      return null;
    }

    console.log(
      "Rendering navbar - isLoggedIn:",
      isLoggedIn,
      "userType:",
      userType
    );

    // If not logged in, show public NavBar
    if (isLoggedIn === false) {
      return (
        <>
          {/* <NavBar /> */}
          {children}
        </>
      );
    }

    // If logged in, show navbar based on user type
    switch (userType && isLoggedIn === true) {
      case userType === "freelancer":
        return (
          <>
            {/* <FreelancerNavBar /> */}
            {children}
          </>
        );

      case userType === "client":
        return (
          <>
            <ClientNavBar />
            {children}
          </>
        );
    }
  };

  return <>{renderNavbar()}</>;
}
