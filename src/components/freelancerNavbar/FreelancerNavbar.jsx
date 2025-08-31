"use client";
import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { locales } from "@/i18n/routing";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  logout,
} from "@/redux/features/currentUser/currentuserSlice";
import provideIcon from "@/utils/IconProvider/provideIcon";
function FreelancerNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const localeFromHook = useLocale();
  const dispatch = useDispatch();

  // Extract locale from pathname as fallback
  const pathnameLocale = pathname.split("/")[1];
  const locale = locales.includes(pathnameLocale)
    ? pathnameLocale
    : localeFromHook;
  const userType = useSelector((state) => state.currentUser.currentUser.type);
  useEffect(() => {
    setMounted(true);
  }, []);
  // Navigation items - only freelancer specific pages
  const navItems = [
    { label: "Job Board", href: `/${locale}/job-board` },
    { label: "Tenders", href: `/${locale}/tenders` },
    { label: "Inbox", href: `/${locale}/inbox` },
    { label: "Invoices", href: `/${locale}/invoices` },
    { label: "My Projects", href: `/${locale}/my-projects` },
    { label: "My Subscription", href: `/${locale}/my-subscription` },
  ];

  // Helper function to determine if link is active
  const isActiveLink = (href) => {
    return pathname === href;
  };

  // Mock user data (in real app, this would come from auth context)
  const user = {
    name: "Sabbir Ahmed",
    role: "UI/UX Designer",
    avatar: "/client/profile/client.png",
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    router.replace("/");
    console.log("sign out");
  };
  const showAsFreelancer = () => {
    if (userType === "client") {
      dispatch(setCurrentUser({ type: "client" }));
    } else {
      dispatch(setCurrentUser({ type: "freelancer" }));
    }
  };
  if (!mounted) {
    return null;
  }

  return (
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
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
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
        </div>
        <Select
          value={locale}
          onValueChange={(newLocale) => {
            // Remove the current locale from the pathname
            const pathWithoutLocale = pathname.replace(`/${locale}`, "");
            // If the path is empty (just "/"), use "/" instead of ""
            const newPath = pathWithoutLocale === "" ? "/" : pathWithoutLocale;
            router.push(`/${newLocale}${newPath}`);
          }}
        >
          <SelectTrigger className="w-[130px] !h-10 hidden lg:flex">
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
        {/* <Button onClick={showAsFreelancer}>View As Freelancer</Button> */}

        {/* User Profile Section */}
        <div className="hidden lg:flex items-center  ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-3 shadow-md border hover:bg-gray-50  h-12"
              >
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link
                  href={`/${locale}/profile/1`}
                  className="w-full cursor-pointer"
                >
                  View Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/${locale}/settings`}
                  className="w-full cursor-pointer"
                >
                  Account Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/${locale}/billing`}
                  className="w-full cursor-pointer"
                >
                  Billing & Plans
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href={`/${locale}/help`}
                  className="w-full cursor-pointer"
                >
                  Help & Support
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600 cursor-pointer"
                onClick={handleSignOut}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <DrawerTitle className="text-sm font-medium">
                        {user.name}
                      </DrawerTitle>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                  </div>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="px-6 pb-6 space-y-2">
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
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`w-full justify-start ${
                      isActiveLink(item.href) ? "bg-blue-50 text-blue-600" : ""
                    }`}
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}

                {/* Mobile User Actions */}
                <div className="pt-4 border-t space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600"
                    asChild
                  >
                    <Link href={`/${locale}/profile/1`}>View Profile</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={`/${locale}/settings`}>Account Settings</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={`/${locale}/billing`}>Billing & Plans</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/help">Help & Support</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600"
                  >
                    Sign Out
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

export default FreelancerNavBar;
