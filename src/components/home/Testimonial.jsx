"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import provideIcon from "@/utils/IconProvider/provideIcon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Testimonial() {
  const swiperRef = useRef(null);
  const [expandedComments, setExpandedComments] = useState({});

  const testimonoials = [
    {
      id: 1,
      title: "Smooth Process",
      comment:
        "The car-buying process was incredibly smooth and hassle-free! I found my dream car within minutes, and the team guided me through every step. Highly recommended for anyone looking to buy or sell a car!",
      avatar: "/home/john_doe.png",
      name: "John Doe",
      intention: "Happy Customer",
    },
    {
      id: 2,
      title: "Amazing Support",
      comment:
        "Excellent customer service! The platform made it easy to compare options and find the best deals. The support team answered all my questions and ensured a seamless experience.",
      avatar: "/home/sara.png",
      name: "Sarah Johnson",
      intention: "First-Time Buyer",
    },
    {
      id: 4,
      title: "Trusted Platform",
      comment:
        "This platform is a game-changer for car enthusiasts. The transparency and reliability gave me confidence while purchasing. I sold my old car here too, and the process was quick and efficient!",
      avatar: "/home/mike.png",
      name: "Mike Brown",
      intention: "Car Enthusiast",
    },
    {
      id: 5,
      title: "Smooth Process",
      comment:
        "The car-buying process was incredibly smooth and hassle-free! I found my dream car within minutes, and the team guided me through every step. Highly recommended for anyone looking to buy or sell a car!",
      avatar: "/home/john_doe.png",
      name: "John Doe",
      intention: "Happy Customer",
    },
    {
      id: 6,
      title: "Amazing Support",
      comment:
        "Excellent customer service! The platform made it easy to compare options and find the best deals. The support team answered all my questions and ensured a seamless experience.",
      avatar: "/home/sara.png",
      name: "Sarah Johnson",
      intention: "First-Time Buyer",
    },
    {
      id: 7,
      title: "Trusted Platform",
      comment:
        "This platform is a game-changer for car enthusiasts. The transparency and reliability gave me confidence while purchasing. I sold my old car here too, and the process was quick and efficient!",
      avatar: "/home/mike.png",
      name: "Mike Brown",
      intention: "Car Enthusiast",
    },
  ];

  const toggleComment = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text, maxLength = 180) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim();
  };

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
          spaceBetween: 30,
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
              slidesPerView: 4,
            },
          },
        });
      }
    };

    loadSwiper();
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50 ">
      <div className="max-w-[100rem] mx-auto ">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold h2-gradient-text leading-tight">
            What our Client says
          </h2>
        </div>

        {/* Categories Slider */}
        <div className="relative ">
          <div ref={swiperRef} className="swiper ">
            <div className="swiper-wrapper ">
              {testimonoials.map((testimonial) => {
                const isExpanded = expandedComments[testimonial.id];
                const shouldShowSeeMore = testimonial.comment.length > 100;
                const displayText = isExpanded
                  ? testimonial.comment
                  : truncateText(testimonial.comment);

                return (
                  <div key={testimonial.id} className="swiper-slide">
                    <Card className="w-60 md:w-[23.5rem] min-h-[40vh] group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-gray-200">
                      <CardContent className="p-8 text-left space-y-4">
                        {/* testimonial Name */}
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h3>
                        <div className="min-h-40">
                          <p className="text-gray-700 leading-relaxed">
                            {displayText}
                            {shouldShowSeeMore && !isExpanded && "..."}
                          </p>
                          {shouldShowSeeMore && (
                            <button
                              onClick={() => toggleComment(testimonial.id)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors focus:outline-none focus:underline"
                            >
                              {isExpanded ? "See less" : "See more"}
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={testimonial.avatar} />
                            <AvatarFallback>Commentor</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-gray-600 text-sm">
                              {testimonial.intention}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
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

export default Testimonial;
