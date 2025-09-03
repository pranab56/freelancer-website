"use client";
import React, { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

function PopularServices() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const messages = useSelector((state) => state.language.messages);

  // Only render on client side to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state on server, content on client
  if (!isClient) {
    return (
      <div className="w-full lg:w-10/12 px-6 mx-auto my-12 flex flex-col justify-center">
        {/* Title skeleton */}
        <div className="animate-pulse">
          <div className="h-16 bg-gray-300 rounded max-w-2xl mx-auto mb-12"></div>
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 my-12">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="h-[12rem] sm:h-[10rem] bg-gray-300 rounded animate-pulse"
            ></div>
          ))}
        </div>

        {/* Button skeleton */}
        <div className="animate-pulse">
          <div className="h-12 bg-gray-300 rounded w-60 mx-auto"></div>
        </div>
      </div>
    );
  }

  const popularServicesTranslations = messages?.home?.popularServices || {
    title: "Our Popular Services",
    exploreMoreTitle: "Explore More Services",
    seeAllCategories: "See All Categories",
    services: {
      graphicDesign: "Graphic Design",
      cartoonAnimation: "Cartoon Animation",
      illustration: "Illustration",
      flyersVouchers: "Flyers & Vouchers",
      logoDesign: "Logo Design",
      socialGraphics: "Social Graphics",
      articleWriting: "Article Writing",
      videoEditing: "Video Editing",
    },
  };

  const popularCategories = [
    {
      id: 1,
      label: popularServicesTranslations.services.graphicDesign,
      src: "/popular_categories/graphics_design.png",
    },
    {
      id: 2,
      label: popularServicesTranslations.services.cartoonAnimation,
      src: "/popular_categories/cartoon_animation.png",
    },
    {
      id: 3,
      label: popularServicesTranslations.services.illustration,
      src: "/popular_categories/illustration.png",
    },
    {
      id: 4,
      label: popularServicesTranslations.services.flyersVouchers,
      src: "/popular_categories/flyers.png",
    },
    {
      id: 5,
      label: popularServicesTranslations.services.logoDesign,
      src: "/popular_categories/logo_design.png",
    },
    {
      id: 6,
      label: popularServicesTranslations.services.socialGraphics,
      src: "/popular_categories/social.png",
    },
    {
      id: 7,
      label: popularServicesTranslations.services.articleWriting,
      src: "/popular_categories/article.png",
    },
    {
      id: 8,
      label: popularServicesTranslations.services.videoEditing,
      src: "/popular_categories/video_editing.png",
    },
  ];

  return (
    <div className="w-full lg:w-10/12 px-6 mx-auto my-12 flex flex-col justify-center">
      <h2 className="text-4xl h2-gradient-text leading-14 font-bold text-center">
        {pathname === "/services"
          ? popularServicesTranslations.exploreMoreTitle
          : popularServicesTranslations.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 my-12">
        {popularCategories.map((category, index) => (
          <Card
            className="h-[12rem] sm:h-[10rem]  relative overflow-hidden border-none cursor-pointer group transition-transform duration-300 hover:scale-105"
            key={index}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={category.src}
                alt={category.label}
                fill
                className="object-cover"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center p-4">
              <h3 className="text-white font-semibold text-center text-sm md:text-base lg:text-lg group-hover:text-white/90 transition-colors duration-300">
                {category.label}
              </h3>
            </div>
          </Card>
        ))}
      </div>
      <Button className="w-60 button-gradient mx-auto">
        {popularServicesTranslations.seeAllCategories}
      </Button>
    </div>
  );
}

export default PopularServices;
