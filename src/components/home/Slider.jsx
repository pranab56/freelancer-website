"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import provideIcon from "@/utils/IconProvider/provideIcon";

function TalentCategories() {
  const swiperRef = useRef(null);

  const categories = [
    { id: 1, name: "Graphics & Design", icon: Lightbulb },
    { id: 2, name: "Digital Marketing", icon: Lightbulb },
    { id: 3, name: "Writing & Translation", icon: Lightbulb },
    { id: 4, name: "Video & Animation", icon: Lightbulb },
    { id: 5, name: "Music & Audio", icon: Lightbulb },
    { id: 6, name: "Programming & Tech", icon: Lightbulb },
    { id: 7, name: "Business", icon: Lightbulb },
    { id: 8, name: "AI Services", icon: Lightbulb },
  ];

  useEffect(() => {
    // Dynamically import Swiper
    const loadSwiper = async () => {
      const { default: Swiper } = await import("swiper");
      const { Navigation, Pagination, Autoplay } = await import(
        "swiper/modules"
      );

      // Import Swiper styles
      await import("swiper/css");
      await import("swiper/css/navigation");
      await import("swiper/css/pagination");

      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Pagination, Autoplay],
          spaceBetween: 24,
          slidesPerView: 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          },
        });
      }
    };

    loadSwiper();
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-[100rem] 2xl:max-w-10/12 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold h2-gradient-text leading-tight">
            Browse our best talent by category
          </h2>
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-700"
            asChild
          >
            <Link href="/categories" className="flex items-center">
              View All Category
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Categories Slider */}
        <div className="relative">
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="swiper-slide">
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-gray-200">
                      <CardContent className="p-8 text-center">
                        {/* Icon */}
                        <div className="w-16 h-16 mx-auto mb-6  rounded-full flex items-center justify-center  transition-colors">
                          {provideIcon({ name: "pen_tool" })}
                        </div>

                        {/* Category Name */}
                        <h3 className="text-md font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {/* Pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: #2563eb !important;
            width: 40px !important;
            height: 40px !important;
            margin-top: -50px !important;
            background: white !important;
            border-radius: 50% !important;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) !important;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 18px !important;
            font-weight: bold !important;
          }

          .swiper-button-prev {
            left: 20px !important;
          }

          .swiper-button-next {
            right: 20px !important;
          }

          .swiper-pagination {
            position: relative !important;
            margin-top: 2rem !important;
          }

          .swiper-pagination-bullet {
            background: #cbd5e1 !important;
            opacity: 1 !important;
          }

          .swiper-pagination-bullet-active {
            background: #2563eb !important;
          }
        `}</style>
      </div>
    </section>
  );
}

export default TalentCategories;
