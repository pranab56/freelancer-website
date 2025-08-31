"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useSelector } from "react-redux";

function SubscriptionPlan() {
  const t = useTranslations("subscriptionPlan");
  const locale = useLocale();
  const userType = useSelector((state) => state.currentUser?.currentUser?.type);

  const subscriptionPlansFreelancer = [
    {
      id: 1,
      title: t("freelancer.starterPlan.title"),
      icon: "👤",
      fee: 9,
      duration: t("duration.month"),
      features: [
        "Apply to 10 tenders /mo",
        "Profile visible",
        "Access to dashboard",
        "Smart suggestions",
        "Limited client messaging",
        "Booking calendar with availability",
        "Contract generator (basic prefilled draft)",
      ],
      isActive: true,
    },
    {
      id: 2,
      title: t("freelancer.starterPlan.title"),
      icon: "👤",
      fee: 90,
      duration: t("duration.year"),
      features: [
        "Apply to 10 tenders /mo",
        "Profile visible",
        "Access to dashboard",
        "Smart suggestions",
        "Limited client messaging",
        "Booking calendar with availability",
        "Contract generator (basic prefilled draft)",
      ],
      isActive: false,
    },
    {
      id: 3,
      title: t("freelancer.proPlan.title"),
      icon: "⭐",
      fee: 12,
      duration: t("duration.month"),
      features: [
        "Priority profile listing",
        "All Starter features",
        "Unlimited applications",
        "Full access to client interaction",
        "Smart tender matching",
        "Custom contract generator",
        "Analytics of profile views",
        "Support priority + badge",
      ],
      isActive: false,
    },
    {
      id: 4,
      title: t("freelancer.proPlan.title"),
      icon: "⭐",
      fee: 120,
      duration: t("duration.year"),
      features: [
        "Priority profile listing",
        "All Starter features",
        "Unlimited applications",
        "Full access to client interaction",
        "Smart tender matching",
        "Custom contract generator",
        "Analytics of profile views",
        "Support priority + badge",
      ],
      isActive: false,
    },
  ];

  const subscriptionPlansClient = [
    {
      id: 1,
      title: t("client.businessPlan.title"),
      icon: "👤",
      fee: 49,
      duration: t("duration.month"),
      features: [
        "5 tenders/month",
        "Unlimited applications",
        "Pre-filled contract draft (can export)",
        "Internal tracking of missions",
        "Export of freelancer invoices",
        "AI suggestion engine",
      ],
      isActive: true,
    },
    {
      id: 2,
      title: t("client.businessPlan.title"),
      icon: "👤",
      fee: 490,
      duration: t("duration.year"),
      features: [
        "5 tenders/month",
        "Unlimited applications",
        "Pre-filled contract draft (can export)",
        "Internal tracking of missions",
        "Export of freelancer invoices",
        "AI suggestion engine",
      ],
      isActive: false,
    },
    {
      id: 3,
      title: t("client.enterprisePlan.title"),
      icon: "⭐",
      fee: 12,
      duration: t("duration.month"),
      features: [
        "Unlimited tenders",
        "All Business features",
        "Premium freelancer matching by AI",
        "Built-in contract editing and signature",
        "Bulk management of freelancers",
        "Accounting dashboard",
        "Team permissions",
      ],
      isActive: false,
    },
    {
      id: 4,
      title: t("client.enterprisePlan.title"),
      icon: "⭐",
      fee: 120,
      duration: t("duration.year"),
      features: [
        "Unlimited tenders",
        "All Business features",
        "Premium freelancer matching by AI",
        "Built-in contract editing and signature",
        "Bulk management of freelancers",
        "Accounting dashboard",
        "Team permissions",
      ],
      isActive: false,
    },
  ];

  return (
    <div className="w-full bg-white py-4 md:py-6 max-w-7xl mx-auto px-4 md:px-6 2xl:px-0 ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium rounded-full gradient">
            {t("badge")}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userType === "freelancer"
            ? subscriptionPlansFreelancer.map((plan) => (
                <Card
                  key={plan.id}
                  className="h-full shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 bg-white py-0"
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Plan Icon and Title */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">
                            {plan.title.includes("Pro") ? "$" : "€"}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-600 mb-0">
                        {plan.title}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.fee}
                        </span>
                        <span className="text-lg text-gray-600 ml-1">
                          {t("currency")}/{plan.duration}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Button className="w-full font-medium button-gradient ">
                      {plan.isActive
                        ? t("status.running")
                        : t("status.upgrade")}
                    </Button>
                  </div>
                </Card>
              ))
            : subscriptionPlansClient.map((plan) => (
                <Card
                  key={plan.id}
                  className="h-full shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 bg-white py-0"
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Plan Icon and Title */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-xs">
                          {plan.title.includes("Pro") ? "$" : "€"}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-600 mb-0">
                        {plan.title}
                      </h3>
                    </div>
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.fee}
                        </span>
                        <span className="text-lg text-gray-600 ml-1">
                          {t("currency")}/{plan.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full font-medium button-gradient ">
                      {plan.isActive
                        ? t("status.running")
                        : t("status.upgrade")}
                    </Button>
                  </div>
                </Card>
              ))}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPlan;
