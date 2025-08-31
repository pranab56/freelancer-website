import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

function WhyChooseUs() {
  const t = useTranslations("home.whyChooseUs");

  const features = [
    {
      title: t("features.topVetted.title"),
      description: t("features.topVetted.description"),
    },
    {
      title: t("features.zeroCommission.title"),
      description: t("features.zeroCommission.description"),
    },
    {
      title: t("features.flexibleScalable.title"),
      description: t("features.flexibleScalable.description"),
    },
  ];

  return (
    <div className="w-full py-16 px-6 2xl:px-0">
      <div className="container mx-auto max-w-[100rem] 2xl:max-w-10/12">
        <div className="relative ">
          {/* Background decorative element */}
          <div className="absolute top-0 right-0 hidden lg:block">
            <Image
              src={"/auth/chat.png"}
              width={500}
              height={500}
              alt="chat icon"
            />
          </div>

          {/* Main turquoise speech bubble shape */}

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Feature Cards */}
              <Card className="p-6 space-y-4 flex flex-col items-center justify-center ">
                <h2 className="text-4xl lg:text-5xl font-bold h2-gradient-text leading-tight">
                  {t("title")}
                </h2>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-lg border-black w-10/12 hover:shadow-md transition-shadow duration-300 flex items-center bg-white/80 backdrop-blur-sm p-2 ${
                      index % 2 === 1 ? "ml-12" : "mr-12"
                    }`}
                  >
                    <CardContent className="p-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 h2-gradient-text">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </div>
                ))}
              </Card>
            </div>

            {/* Right side - Visual space for the decorative element */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
