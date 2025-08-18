import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function SkilledFreelancersSection() {
  return (
    <section className="py-10 2xl:py-16 px-6 bg-white ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start relative">
          {/* Left Side - Image + Stats */}
          <div className="relative w-full">
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[420px] 2xl:h-[500px] mt-10 2xl:mt-0">
              <Image
                src={"/auth/chat.png"}
                alt="Freelancers chat illustration"
                fill
                priority
                className="object-contain scale-140 md:scale-125 lg:scale-130 2xl:scale-120 sm:object-cover md:object-contain 2xl:object-contain"
              />
            </div>

            {/* Stats Cards */}
            <Card className="absolute top-4 right-14  sm:top-10 sm:right-16 md:right-64 md:top-10 lg:right-36 lg:top-10 bg-white shadow-lg border-0 p-0 md:p-2 ">
              <CardContent className="p-2 text-center min-w-[120px] sm:min-w-[140px]">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Freelancers
                </div>
              </CardContent>
            </Card>

            <Card className="absolute bottom-40 left-14 sm:bottom-24 sm:left-20 md:left-64 md:bottom-48 lg:left-40 lg:bottom-48 2xl:left-40 2xl:bottom-60 bg-white shadow-lg border-0 border-0 p-0 md:p-2 lg:p-2">
              <CardContent className="p-2 text-center min-w-[180px]">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  300+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Freelance Work Posted
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">Skilled Freelancers.</span>
              <br />
              <span className="text-blue-600">Zero Hassle.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Get access to top-rated freelancers without the stress of endless
              searching or high commission fees. Our platform connects you
              directly with skilled professionals in design, development,
              writing, marketing, and more. Whether you're starting a new
              project or need expert support, we make it easy to find, hire, and
              collaborate — hassle-free. Enjoy secure payments, direct
              contracts, and full control over your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkilledFreelancersSection;
