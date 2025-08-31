"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

function HomeBanner() {
  const locale = useSelector((state) => state.language.currentLocale);
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const messages = useSelector((state) => state.language.messages);

  // Get banner translations directly from Redux state
  const bannerTranslations = messages?.home?.banner || {};

  // Debug logging
  console.log("HomeBanner - Locale:", locale);
  console.log("HomeBanner - Messages:", messages);
  console.log("HomeBanner - Banner translations:", bannerTranslations);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home/hero.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center  lg:min-w-7xl  mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {bannerTranslations.title}{" "}
            <span className="inline">{bannerTranslations.subtitle1}</span>
            <span className="block">{bannerTranslations.subtitle2}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            {bannerTranslations.description}
          </p>

          {/* Call to Action Buttons */}
          {!isLoggedIn && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full min-w-[250px] w-full md:w-auto h-12"
              >
                {bannerTranslations.findTalent}
                <span className="ml-2 text-sm text-gray-600">
                  {bannerTranslations.forClients}
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full min-w-[250px] w-full md:w-auto bg-transparent h-12"
              >
                {bannerTranslations.applyToJoin}
                <span className="ml-2 text-sm opacity-80">
                  {bannerTranslations.forFreelancers}
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default HomeBanner;
