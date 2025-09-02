"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import { LiaUserTieSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSelector, useDispatch } from "react-redux";
import LanguageSelector from "@/components/common/LanguageSelector";
import Image from "next/image";
import provideIcon from "@/utils/IconProvider/provideIcon";
import { setCurrentUser } from "@/redux/features/currentUser/currentuserSlice";

function NavBar() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.language.messages);
  const navigationTranslations = useMemo(
    () => messages?.navigation || {},
    [messages]
  );
  const commonTranslations = useMemo(() => messages?.common || {}, [messages]);
  const pathname = usePathname();
  const locale = useSelector((state) => state.language.currentLocale);
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const userType = useSelector(
    (state) => state.currentUser.currentUser?.type || "freelancer"
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Memoize scroll effect handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  // Use effect for scroll listener with proper cleanup
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoize service items
  const serviceItems = useMemo(
    () => [
      {
        label: navigationTranslations.hireTopTalent || "Hire Top Talent",
        href: `/find-top-talent`,
      },
      {
        label: navigationTranslations.seeOurServices || "See Our Services",
        href: `/services`,
      },
    ],
    [navigationTranslations]
  );

  // Memoize public nav items
  const publicNavItems = useMemo(
    () => [
      {
        label: navigationTranslations.aboutUs || "About Us",
        href: `/about-us`,
      },
      {
        label: navigationTranslations.contactUs || "Contact Us",
        href: `/contact-us`,
      },
    ],
    [navigationTranslations]
  );

  // Memoize navigation items getter
  const getNavItems = useCallback(() => {
    if (isLoggedIn === false) {
      return publicNavItems;
    }
    return [];
  }, [isLoggedIn, publicNavItems]);

  // Memoize active service check
  const isServicesActive = useMemo(
    () => serviceItems.some((item) => pathname === item.href),
    [serviceItems, pathname]
  );

  // Memoize active link checker
  const isActiveLink = useCallback(
    (href) => {
      if (href === "/") {
        return pathname === "/";
      }
      return pathname === href;
    },
    [pathname]
  );

  // Memoize toggle user type handler
  const toggleUserType = useCallback(() => {
    const newUserType = userType === "freelancer" ? "client" : "freelancer";
    dispatch(setCurrentUser({ type: newUserType }));
  }, [userType, dispatch]);

  // Prevent rendering if not logged in
  if (isLoggedIn === false) {
    return (
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/`} className="text-2xl font-bold text-gray-900">
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
                  {navigationTranslations.services || "Services"}
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
            <LanguageSelector />
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder={commonTranslations.search || "Search"}
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

              {userType === "freelancer"
                ? navigationTranslations.freelancer || "Freelancer"
                : navigationTranslations.client || "Client"}
            </Button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" asChild>
                <Link href={`/auth/login`}>
                  {navigationTranslations.login || "Login"}
                </Link>
              </Button>
              <Button asChild className="button-gradient">
                <Link href={`/auth/sign-up`} className="flex items-center">
                  {navigationTranslations.signUp || "Sign Up"}
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
                      placeholder={commonTranslations.search || "Search"}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Mobile Language Selector */}
                  <LanguageSelector className="w-full mb-2" />

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
                        {navigationTranslations.services || "Services"}
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
                      ? navigationTranslations.freelancer || "Freelancer"
                      : navigationTranslations.client || "Client"}
                  </Button>

                  {/* Mobile Auth */}
                  <div className="space-y-2 pt-4 border-t">
                    <Button variant="ghost" className="w-full" asChild>
                      <Link href={`/auth/login`}>
                        {navigationTranslations.login || "Login"}
                      </Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link
                        href={`/auth/sign-up`}
                        className="flex items-center justify-center"
                      >
                        {navigationTranslations.signUp || "Sign Up"}
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
    );
  }
}

export default React.memo(NavBar);
