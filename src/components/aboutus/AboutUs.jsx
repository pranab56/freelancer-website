"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

function AboutUs() {
  const locale = useLocale();
  const t = useTranslations("aboutUs");

  // Extensive debugging
  console.log("Current Locale:", locale);

  try {
    const translations = {
      title: t("title"),
      subtitle: t("subtitle"),
      description: t("description"),
      hireFreelancers: t("hireFreelancers"),
    };

    console.log("Current Translations:", translations);

    return (
      <div className="min-h-screen bg-white">
        {/* About Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 2xl:px-0 py-4 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {translations.title} -{" "}
                <span className="text-black">{translations.subtitle}</span>
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {translations.description}
              </p>
              <Button className="button-gradient text-white px-6 py-2 rounded-md">
                {translations.hireFreelancers}
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative w-full">
              <Image
                src="/aboutus/about_us_1.png"
                width={700}
                height={400}
                alt="Professional man in suit"
                className="object-cover rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white py-8 sm:py-12 lg:py-10 ">
            <div className="max-w-7xl mx-auto  ">
              <div className="flex flex-col lg:flex-row justify-between gap-6 ">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 border border-gray-100 rounded-xl  sm:p-6">
                  <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base mb-4">
                    {t("detailedDescription")}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                    {t("beliefStatement")}
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="w-full lg:w-1/2 border border-gray-100 rounded-xl p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
                    <div className="text-center p-4 sm:p-6 border border-blue-900 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                        4,000+
                      </div>
                      <div className="text-gray-600 font-medium text-sm sm:text-base">
                        {t("stats.verifiedClients")}
                      </div>
                    </div>
                    <div className="text-center p-4 sm:p-6 border border-blue-900 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                        10,000+
                      </div>
                      <div className="text-gray-600 font-medium text-sm sm:text-base">
                        {t("stats.verifiedFreelancers")}
                      </div>
                    </div>
                    <div className="text-center p-4 sm:p-6 border border-blue-900 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                        2,000+
                      </div>
                      <div className="text-gray-600 font-medium text-sm sm:text-base">
                        {t("stats.ordersCompleted")}
                      </div>
                    </div>
                    <div className="text-center p-4 sm:p-6 border border-blue-900 rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                        1,500+
                      </div>
                      <div className="text-gray-600 font-medium text-sm sm:text-base">
                        {t("stats.reviews")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Dream Section */}
        <div className="bg-gray-50 px-4 sm:px-6 2xl:px-0 py-4 md:py-12 lg:py-20">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 h2-gradient-text">
                  {t("ourDream.title")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t("ourDream.description")}
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                  alt="Team collaboration"
                  className="w-full max-w-md h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
                  alt="Target and mission"
                  className="w-full max-w-md h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl lg:text-4xl font-bold text-blue-600 h2-gradient-text">
                  {t("ourMission.title")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t("ourMission.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-4xl font-bold text-blue-600 h2-gradient-text">
                  {t("ourVision.title")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t("ourVision.description")}
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                  alt="Vision and growth"
                  className="w-full max-w-md h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Translation Error:", error);
    return (
      <div className="min-h-screen bg-white p-4">
        <h1>Error Loading Translations</h1>
        <p>Current Locale: {locale}</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}

export default AboutUs;
