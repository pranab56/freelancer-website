"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import provideIcon from "@/utils/IconProvider/provideIcon";

function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const footerLinks = [
    {
      title: t("forClients.title"),
      links: [
        {
          label: t("forClients.links.findFreelancers"),
          href: `/${locale}/find-top-talent`,
          key: "find-freelancers",
        },
        {
          label: t("forClients.links.postProject"),
          href: `/${locale}/job-board`,
          key: "post-project",
        },
        {
          label: t("forClients.links.refundPolicy"),
          href: `/${locale}/refund-policy`,
          key: "refund-policy",
        },
        {
          label: t("forClients.links.privacyPolicy"),
          href: `/${locale}/privacy-policy`,
          key: "privacy-policy",
        },
      ],
    },
    {
      title: t("forFreelancers.title"),
      links: [
        {
          label: t("forFreelancers.links.findWork"),
          href: `/${locale}/job-board`,
          key: "find-work",
        },
        {
          label: t("forFreelancers.links.createAccount"),
          href: `/${locale}/auth/sign-up`,
          key: "create-account",
        },
      ],
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
                <Link href={`/${locale}`}>
                  {provideIcon({ name: "company_logo" })}
                </Link>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs lg:max-w-none">
                {t("description")}
              </p>
            </div>
            {/* For Clients */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-black mb-4 sm:mb-6">
                {footerLinks[0].title}
              </h3>
              <ul className="space-y-2 ">
                {footerLinks[0].links.map((link) => (
                  <li key={link.key}>
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
                {footerLinks[1].title}
              </h3>
              <ul className="space-y-2 ">
                {footerLinks[1].links.map((link) => (
                  <li key={link.key}>
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
                {t("subscribe.title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4 sm:mb-6">
                {t("subscribe.description")}
              </p>
              <div className="flex flex-col sm:flex-row">
                <Input
                  type="email"
                  placeholder={t("subscribe.emailPlaceholder")}
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
              {t("copyright")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
