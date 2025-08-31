"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import provideIcon from "@/utils/IconProvider/provideIcon";

function Footer() {
  const locale = useSelector((state) => state.language.currentLocale);
  const messages = useSelector((state) => state.language.messages);
  const footerTranslations = messages?.footer || {};

  const forClientsLinks = [
    {
      label:
        footerTranslations.forClients?.links?.findFreelancers ||
        "Find Freelancers",
      href: `/find-top-talent`,
    },
    {
      label:
        footerTranslations.forClients?.links?.postProject || "Post Project",
      href: `/job-board`,
    },
    {
      label:
        footerTranslations.forClients?.links?.refundPolicy || "Refund Policy",
      href: `/refund-policy`,
    },
    {
      label:
        footerTranslations.forClients?.links?.privacyPolicy || "Privacy Policy",
      href: `/privacy-policy`,
    },
  ];

  const forFreelancersLinks = [
    {
      label: footerTranslations.forFreelancers?.links?.findWork || "Find Work",
      href: `/job-board`,
    },
    {
      label:
        footerTranslations.forFreelancers?.links?.createAccount ||
        "Create Account",
      href: `/auth/sign-up`,
    },
  ];

  return (
    <>
      <footer className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <Link href={`/`}>{provideIcon({ name: "company_logo" })}</Link>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs lg:max-w-none">
                {footerTranslations.description ||
                  "Find the best freelancers for your projects"}
              </p>
            </div>
            {/* For Clients */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-black mb-4 sm:mb-6">
                {footerTranslations.forClients?.title || "For Clients"}
              </h3>
              <ul className="space-y-2 ">
                {forClientsLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-black transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* For Freelancers */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-black mb-4 sm:mb-6">
                {footerTranslations.forFreelancers?.title || "For Freelancers"}
              </h3>
              <ul className="space-y-2 ">
                {forFreelancersLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-black transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                {footerTranslations.subscribe?.title || "Subscribe"}
              </h3>
              <p className="text-gray-600 text-sm mb-4 sm:mb-6">
                {footerTranslations.subscribe?.description ||
                  "Stay updated with our latest news and offers."}
              </p>
              <div className="flex flex-col sm:flex-row">
                <Input
                  type="email"
                  placeholder={
                    footerTranslations.subscribe?.emailPlaceholder ||
                    "Enter your email"
                  }
                  className="flex-1 sm:rounded-r-none sm:border-r-0 focus:border-gray-300 mb-2 sm:mb-0"
                />
                <Button
                  size="icon"
                  className="sm:rounded-l-none bg-black hover:bg-gray-800 w-full sm:w-auto"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 sm:mt-16 pt-6 sm:pt-8">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              {footerTranslations.copyright ||
                "© 2023 Your Company. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
