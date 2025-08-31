"use client";
import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { locales } from "@/i18n/routing";
import { Search, User, Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "@/redux/features/currentUser/currentuserSlice";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LiaUserTieSolid } from "react-icons/lia";
import provideIcon from "@/utils/IconProvider/provideIcon";
import { useTranslations } from "next-intl";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [userType, setUserType] = useState("freelancer");
  const pathname = usePathname();
  const router = useRouter();
  const localeFromHook = useLocale();
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");

  // Extract locale from pathname as fallback
  const pathnameLocale = pathname.split("/")[1];
  const locale = locales.includes(pathnameLocale)
    ? pathnameLocale
    : localeFromHook;

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);

  const toggleUserType = () => {
    setUserType(userType === "freelancer" ? "client" : "freelancer");
  };
  // Services dropdown items
  const serviceItems = [
    {
      label: t("hireTopTalent"),
      href: `/${locale}/find-top-talent`,
    },
    // Add more service items here as needed
    {
      label: t("seeOurServices"),
      href: `/${locale}/services`,
    },
  ];

  // Navigation items based on user type
  const publicNavItems = [
    // { label: t('home'), href: `/${locale}` },
    { label: t("aboutUs"), href: `/${locale}/about-us` },
    { label: t("contactUs"), href: `/${locale}/contact-us` },
  ];

  // Get navigation items based on user type
  const getNavItems = () => {
    if (isLoggedIn === false) {
      return publicNavItems;
    }
    return [];
  };

  // Check if current path matches any service item
  const isServicesActive = serviceItems.some((item) => pathname === item.href);

  // Helper function to determine if link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  if (isLoggedIn === false) {
    return (
      <>
        <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href={`/${locale}`}
                className="text-2xl font-bold text-gray-900"
              >
                {provideIcon({ name: "company_logo" })}
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {getNavItems().map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "text-blue-600 hover:text-blue-700"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`p-0 h-auto font-medium hover:bg-transparent text-md ${
                      isServicesActive
                        ? "text-blue-600 hover:text-blue-700"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {t("services")}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {serviceItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link
                        href={item.href}
                        className={`w-full cursor-pointer ${
                          isActiveLink(item.href) ? "text-blue-600" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right Side - Search, Dropdown, Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <Select
                value={locale}
                onValueChange={(newLocale) => {
                  // Remove the current locale from the pathname
                  const pathWithoutLocale = pathname.replace(`/${locale}`, "");
                  // If the path is empty (just "/"), use "/" instead of ""
                  const newPath =
                    pathWithoutLocale === "" ? "/" : pathWithoutLocale;
                  router.push(`/${newLocale}${newPath}`);
                }}
              >
                <SelectTrigger className="w-[130px] !h-10">
                  <div className="flex items-center">
                    {locale === "en" ? (
                      <ReactCountryFlag
                        countryCode="GB"
                        svg
                        className="mr-2"
                        style={{ width: "18px", height: "18px" }}
                      />
                    ) : (
                      <ReactCountryFlag
                        countryCode="FR"
                        svg
                        className="mr-2"
                        style={{ width: "18px", height: "18px" }}
                      />
                    )}
                    <SelectValue>
                      {locale === "en" ? "English" : "Français"}
                    </SelectValue>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">
                    <div className="flex items-center">
                      <ReactCountryFlag
                        countryCode="GB"
                        svg
                        className="mr-2"
                        style={{ width: "18px", height: "18px" }}
                      />
                      English
                    </div>
                  </SelectItem>
                  <SelectItem value="fr">
                    <div className="flex items-center">
                      <ReactCountryFlag
                        countryCode="FR"
                        svg
                        className="mr-2"
                        style={{ width: "18px", height: "18px" }}
                      />
                      Français
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder={tCommon("search")}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              {/* User Type Toggle */}
              <Button
                variant="outline"
                className="flex items-center h-10"
                onClick={toggleUserType}
              >
                {userType === "freelancer" ? (
                  <User className="mr-2 h-4 w-4" />
                ) : (
                  <LiaUserTieSolid className="mr-2 h-4 w-4" />
                )}

                {userType === "freelancer" ? t("freelancer") : t("client")}
              </Button>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3">
                <Button variant="ghost" asChild>
                  <Link href={`/${locale}/auth/login`}>{t("login")}</Link>
                </Button>
                <Button asChild className="button-gradient">
                  <Link
                    href={`/${locale}/auth/sign-up`}
                    className="flex items-center"
                  >
                    {t("signUp")}
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="px-6 pb-6 space-y-4">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder={tCommon("search")}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Mobile Language Selector */}
                    <Select
                      value={locale}
                      onValueChange={(newLocale) => {
                        // Remove the current locale from the pathname
                        const pathWithoutLocale = pathname.replace(
                          `/${locale}`,
                          ""
                        );
                        // If the path is empty (just "/"), use "/" instead of ""
                        const newPath =
                          pathWithoutLocale === "" ? "/" : pathWithoutLocale;
                        router.push(`/${newLocale}${newPath}`);
                      }}
                    >
                      <SelectTrigger className="w-full mb-2">
                        <div className="flex items-center">
                          {locale === "en" ? (
                            <ReactCountryFlag
                              countryCode="GB"
                              svg
                              className="mr-2"
                              style={{ width: "18px", height: "18px" }}
                            />
                          ) : (
                            <ReactCountryFlag
                              countryCode="FR"
                              svg
                              className="mr-2"
                              style={{ width: "18px", height: "18px" }}
                            />
                          )}
                          <SelectValue>
                            {locale === "en" ? "English" : "Français"}
                          </SelectValue>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">
                          <div className="flex items-center">
                            <ReactCountryFlag
                              countryCode="GB"
                              svg
                              className="mr-2"
                              style={{ width: "18px", height: "18px" }}
                            />
                            English
                          </div>
                        </SelectItem>
                        <SelectItem value="fr">
                          <div className="flex items-center">
                            <ReactCountryFlag
                              countryCode="FR"
                              svg
                              className="mr-2"
                              style={{ width: "18px", height: "18px" }}
                            />
                            Français
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Mobile Navigation */}
                    <div className="space-y-2">
                      {getNavItems().map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className={`w-full justify-start ${
                            isActiveLink(item.href)
                              ? "bg-blue-50 text-blue-600"
                              : ""
                          }`}
                          asChild
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </Button>
                      ))}

                      {/* Mobile Services Dropdown */}
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          className={`w-full justify-start ${
                            isServicesActive ? "bg-blue-50 text-blue-600" : ""
                          }`}
                          onClick={() =>
                            setIsMobileServicesOpen(!isMobileServicesOpen)
                          }
                        >
                          {t("services")}
                          <ChevronDown
                            className={`ml-auto h-4 w-4 transition-transform ${
                              isMobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                        {isMobileServicesOpen && (
                          <div className="pl-4 space-y-1">
                            {serviceItems.map((item, index) => (
                              <Button
                                key={index}
                                variant="ghost"
                                className={`w-full justify-start text-sm ${
                                  isActiveLink(item.href)
                                    ? "bg-blue-50 text-blue-600"
                                    : ""
                                }`}
                                asChild
                              >
                                <Link href={item.href}>{item.label}</Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile User Type Toggle */}
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={toggleUserType}
                    >
                      <User className="mr-2 h-4 w-4" />
                      {userType === "freelancer"
                        ? t("freelancer")
                        : t("client")}
                    </Button>

                    {/* Mobile Auth */}
                    <div className="space-y-2 pt-4 border-t">
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href={`/${locale}/auth/login`}>{t("login")}</Link>
                      </Button>
                      <Button className="w-full" asChild>
                        <Link
                          href={`/${locale}/auth/sign-up`}
                          className="flex items-center justify-center"
                        >
                          {t("signUp")}
                          <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
