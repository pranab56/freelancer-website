"use client";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
function PopularServices() {
  const pathname = usePathname();
  const popularCategories = [
    {
      id: 1,
      label: "Graphic&Design",
      src: "/popular_categories/graphics_design.png",
    },
    {
      id: 2,
      label: "Cartoon Animation",
      src: "/popular_categories/cartoon_animation.png",
    },
    {
      id: 3,
      label: "Illustration",
      src: "/popular_categories/illustration.png",
    },
    {
      id: 4,
      label: "Flyers & Vouchers",
      src: "/popular_categories/flyers.png",
    },
    {
      id: 5,
      label: "Logo Design",
      src: "/popular_categories/logo_design.png",
    },
    {
      id: 6,
      label: "Social graphics",
      src: "/popular_categories/social.png",
    },
    {
      id: 7,
      label: "Article writing",
      src: "/popular_categories/article.png",
    },
    {
      id: 8,
      label: "Video Editing",
      src: "/popular_categories/video_editing.png",
    },
  ];

  return (
    <div className="w-full lg:w-10/12 px-6 mx-auto my-12 flex flex-col justify-center">
      <h2 className="text-4xl h2-gradient-text leading-14 font-bold text-center">
        {pathname === "/services"
          ? "Explore More Design Services"
          : "Our Popular services"}
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
        See All Categories
      </Button>
    </div>
  );
}

export default PopularServices;
