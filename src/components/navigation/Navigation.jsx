"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/common/Footer/Footer";
import FreelancerNavBar from "@/components/freelancerNavbar/FreelancerNavbar";

export default function Navigation({ children }) {
  const [mounted, setMounted] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderNavbar = () => {
    if (!currentUser) {
      return <NavBar />;
    }
    return currentUser.type === "client" ? <NavBar /> : <FreelancerNavBar />;
  };

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
      {renderNavbar()}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
