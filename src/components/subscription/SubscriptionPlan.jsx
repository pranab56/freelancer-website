"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useSelector } from "react-redux";

function SubscriptionPlan() {
  const userType = useSelector((state) => state.currentUser?.currentUser?.type);
  const messages = useSelector((state) => state.language.messages);
  const subscriptionPlanTranslations = messages?.subscriptionPlan || {};

  const subscriptionPlansFreelancer = [
    {
      id: 1,
      title:
        subscriptionPlanTranslations.freelancer?.starterPlan?.title ||
        "Starter plan",
      icon: "👤",
      fee: 9,
      duration: subscriptionPlanTranslations.duration?.month || "mo",
      features: [
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["1"] ||
          "Apply to 10 tenders /mo",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["2"] ||
          "Profile visible",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["3"] ||
          "Access to dashboard",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["4"] ||
          "Smart suggestions",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["5"] ||
          "Limited client messaging",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["6"] ||
          "Booking calendar with availability",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["7"] ||
          "Contract generator (basic prefilled draft)",
      ],
      isActive: true,
    },
    {
      id: 2,
      title:
        subscriptionPlanTranslations.freelancer?.starterPlan?.title ||
        "Starter plan",
      icon: "👤",
      fee: 90,
      duration: subscriptionPlanTranslations.duration?.year || "year",
      features: [
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["1"] ||
          "Apply to 10 tenders /mo",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["2"] ||
          "Profile visible",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["3"] ||
          "Access to dashboard",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["4"] ||
          "Smart suggestions",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["5"] ||
          "Limited client messaging",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["6"] ||
          "Booking calendar with availability",
        subscriptionPlanTranslations.freelancer?.starterPlan?.features?.["7"] ||
          "Contract generator (basic prefilled draft)",
      ],
      isActive: false,
    },
    {
      id: 3,
      title:
        subscriptionPlanTranslations.freelancer?.proPlan?.title || "Pro plan",
      icon: "⭐",
      fee: 12,
      duration: subscriptionPlanTranslations.duration?.month || "mo",
      features: [
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["1"] ||
          "Priority profile listing",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["2"] ||
          "All Starter features",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["3"] ||
          "Unlimited applications",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["4"] ||
          "Full access to client interaction",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["5"] ||
          "Smart tender matching",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["6"] ||
          "Custom contract generator",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["7"] ||
          "Analytics of profile views",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["8"] ||
          "Support priority + badge",
      ],
      isActive: false,
    },
    {
      id: 4,
      title:
        subscriptionPlanTranslations.freelancer?.proPlan?.title || "Pro plan",
      icon: "⭐",
      fee: 120,
      duration: subscriptionPlanTranslations.duration?.year || "year",
      features: [
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["1"] ||
          "Priority profile listing",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["2"] ||
          "All Starter features",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["3"] ||
          "Unlimited applications",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["4"] ||
          "Full access to client interaction",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["5"] ||
          "Smart tender matching",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["6"] ||
          "Custom contract generator",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["7"] ||
          "Analytics of profile views",
        subscriptionPlanTranslations.freelancer?.proPlan?.features?.["8"] ||
          "Support priority + badge",
      ],
      isActive: false,
    },
  ];

  const subscriptionPlansClient = [
    {
      id: 1,
      title:
        subscriptionPlanTranslations.client?.businessPlan?.title ||
        "Business plan",
      icon: "👤",
      fee: 49,
      duration: subscriptionPlanTranslations.duration?.month || "mo",
      features: [
        subscriptionPlanTranslations.client?.businessPlan?.features?.["1"] ||
          "5 tenders/month",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["2"] ||
          "Unlimited applications",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["3"] ||
          "Pre-filled contract draft (can export)",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["4"] ||
          "Internal tracking of missions",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["5"] ||
          "Export of freelancer invoices",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["6"] ||
          "AI suggestion engine",
      ],
      isActive: true,
    },
    {
      id: 2,
      title:
        subscriptionPlanTranslations.client?.businessPlan?.title ||
        "Business plan",
      icon: "👤",
      fee: 490,
      duration: subscriptionPlanTranslations.duration?.year || "year",
      features: [
        subscriptionPlanTranslations.client?.businessPlan?.features?.["1"] ||
          "5 tenders/month",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["2"] ||
          "Unlimited applications",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["3"] ||
          "Pre-filled contract draft (can export)",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["4"] ||
          "Internal tracking of missions",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["5"] ||
          "Export of freelancer invoices",
        subscriptionPlanTranslations.client?.businessPlan?.features?.["6"] ||
          "AI suggestion engine",
      ],
      isActive: false,
    },
    {
      id: 3,
      title:
        subscriptionPlanTranslations.client?.enterprisePlan?.title ||
        "Enterprise plan",
      icon: "⭐",
      fee: 12,
      duration: subscriptionPlanTranslations.duration?.month || "mo",
      features: [
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["1"] ||
          "Unlimited tenders",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["2"] ||
          "All Business features",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["3"] ||
          "Premium freelancer matching by AI",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["4"] ||
          "Built-in contract editing and signature",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["5"] ||
          "Bulk management of freelancers",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["6"] ||
          "Accounting dashboard",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["7"] ||
          "Team permissions",
      ],
      isActive: false,
    },
    {
      id: 4,
      title:
        subscriptionPlanTranslations.client?.enterprisePlan?.title ||
        "Enterprise plan",
      icon: "⭐",
      fee: 120,
      duration: subscriptionPlanTranslations.duration?.year || "year",
      features: [
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["1"] ||
          "Unlimited tenders",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["2"] ||
          "All Business features",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["3"] ||
          "Premium freelancer matching by AI",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["4"] ||
          "Built-in contract editing and signature",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["5"] ||
          "Bulk management of freelancers",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["6"] ||
          "Accounting dashboard",
        subscriptionPlanTranslations.client?.enterprisePlan?.features?.["7"] ||
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
            {subscriptionPlanTranslations.badge || "Pricing plans"}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {subscriptionPlanTranslations.title || "Plans for all sizes"}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subscriptionPlanTranslations.description ||
              "Simple, transparent pricing that grows with you. Try any plan free for 30 days."}
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
                          €/{plan.duration}
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
                        ? subscriptionPlanTranslations.status?.running ||
                          "Running"
                        : subscriptionPlanTranslations.status?.upgrade ||
                          "Upgrade"}
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
                          €/{plan.duration}
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
                        ? subscriptionPlanTranslations.status?.running ||
                          "Running"
                        : subscriptionPlanTranslations.status?.upgrade ||
                          "Upgrade"}
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
