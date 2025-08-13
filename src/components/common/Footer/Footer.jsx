import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    {
      title: "For Clients",
      links: [
        {
          label: "Find Freelancers",
          href: "find-top-talent",
        },
        {
          label: "Post Project",
          href: "job-board",
        },
        {
          label: "Refund Policy",
          href: "refund-policy",
        },
        {
          label: "Privacy Policy",
          href: "privacy-policy",
        },
      ],
    },
    {
      title: "For Freelancers",
      links: [
        {
          label: "Find Work",
          href: "job-board",
        },
        {
          label: "Create Account",
          href: "sign-up",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Lunq
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs lg:max-w-none">
              Lunq offers intelligent, fast-response support so you can stay
              focused on getting work done—while we handle the rest.
            </p>
          </div>
          {/* For Clients */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-black mb-4 sm:mb-6">
              For Clients
            </h3>
            <ul className="space-y-2 ">
              {footerLinks[0].links.map((link) => (
                <li key={link.label}>
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
              For Freelancers
            </h3>
            <ul className="space-y-2 ">
              {footerLinks[1].links.map((link) => (
                <li key={link.label}>
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
              Subscribe
            </h3>
            <p className="text-gray-600 text-sm mb-4 sm:mb-6">
              Sign up for exclusive offers, additions and more.
            </p>
            <div className="flex flex-col sm:flex-row">
              <Input
                type="email"
                placeholder="Your email"
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
            2025 Lunq All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
