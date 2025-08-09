import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/common/Footer/Footer";
import FreelancerNavBar from "@/components/freelancerNavbar/FreelancerNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lunq - Find Top Freelancers",
  description: "Find the best freelancers for your projects",
};

export default function CommonLayout({ children }) {
  const isLogedInAsClient = false;
  return (
    
    <>
        {/* <NavBar /> */}
        {!isLogedInAsClient && <FreelancerNavBar />}
        {children}
        {/* <Footer /> */}
     
    </>
    
  );
}
