"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function SideBar() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const serviceType = [
    "Web Development",
    "Graphic Design",
    "Writing & Content",
    "Digital Marketing",
    "Video Production",
    "Mobile App Development",
    "Virtual Assistant",
    "Translation & Languages",
    "Consulting & Strategy",
    "Software Development",
  ];

  const categoryType = [
    "Front-End Development",
    "Back-End Development",
    "Full Stack Development",
    "E-commerce Development",
    "CMS Development",
    "WordPress Development",
  ];

  const handleServiceChange = (service, checked) => {
    if (checked) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    }
  };

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  return (
    <div className="w-64 bg-white   space-y-8 hidden lg:block">
      {/* border-r border-gray-200 */}
      {/* Service Type Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Service Type</h2>
        <div className="space-y-3">
          {serviceType.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Checkbox
                id={`service-${index}`}
                checked={selectedServices.includes(service)}
                onCheckedChange={(checked) =>
                  handleServiceChange(service, checked)
                }
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <Label
                htmlFor={`service-${index}`}
                className="text-sm font-medium text-gray-700 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {service}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Category Type Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Category Type</h2>
        <div className="space-y-3">
          {categoryType.map((category, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Checkbox
                id={`category-${index}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category, checked)
                }
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <Label
                htmlFor={`category-${index}`}
                className="text-sm font-medium text-gray-700 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Selected Items Summary */}
      {(selectedServices.length > 0 || selectedCategories.length > 0) && (
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Selected Filters
          </h3>
          <div className="space-y-2">
            {selectedServices.map((service, index) => (
              <div
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 mr-2 mb-2"
              >
                {service}
              </div>
            ))}
            {selectedCategories.map((category, index) => (
              <div
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-2 mb-2"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
