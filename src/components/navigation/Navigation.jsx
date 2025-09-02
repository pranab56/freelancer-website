"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/common/Footer/Footer";
import FreelancerNavBar from "@/components/freelancerNavbar/FreelancerNavbar";
import ClientNavBar from "@/components/client/clientNavbar/ClientNavbar";

export default function Navigation({ children }) {
  const [mounted, setMounted] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  // Use effect to set mounted state only once
  useEffect(() => {
    setMounted(true);

    // Optional: Return cleanup function
    return () => {
      setMounted(false);
    };
  }, []); // Empty dependency array ensures this runs only once

  // Memoize navbar selection to prevent unnecessary re-renders
  const NavbarComponent = useMemo(() => {
    if (!currentUser) {
      return NavBar;
    }
    return currentUser.type === "client" ? ClientNavBar : FreelancerNavBar;
  }, [currentUser]);

  // Prevent rendering before mounting to avoid hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-16 bg-white border-b border-gray-200" />{" "}
        {/* Navbar placeholder */}
        <div className="flex-grow">{children}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavbarComponent />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
