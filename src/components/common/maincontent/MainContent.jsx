"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import JobTenderCard from "../JobTenderCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import FilterDrawer from "../FilterDrawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function MainContent({ type = "tender" }) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Get translations from Redux
  const messages = useSelector((state) => state.language.messages);
  const mainContentTranslations = messages?.mainContent || {};
  const commonTranslations = messages?.common || {};

  // Mock data for demonstration - in real app this would come from props or API
  const generateItems = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      ...(type === "job"
        ? {
            jobImg: "/jobtender/job_tender.png",
            name: `Company ${index + 1}`,
            designation: `Senior Position ${index + 1}`,
            location: ["Austin", "Remote", "New York"][index % 3],
            jobType: ["Remote", "On-site", "Hybrid"][index % 3],
          }
        : {
            jobImg: "/jobtender/job_tender.png",
            projectName: `Project ${index + 1}`,
            projectRole: `Role ${index + 1}`,
            posted: "03/2023",
            deadline: "05/2023",
          }),
    }));
  };

  // Generate more items than we initially display
  const allItems = generateItems(30); // Generate 30 items total
  const items = allItems.slice(0, displayedItems);

  const handleLoadMore = async () => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setDisplayedItems((prev) => prev + 6);
    setIsLoading(false);
  };

  return (
    <div className="flex-1">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {type === "job"
                ? mainContentTranslations.jobBoardTitle || "Job Board"
                : mainContentTranslations.tendersTitle || "Tenders"}
            </h1>
            <p className="text-gray-600 mt-1">
              {type === "job"
                ? mainContentTranslations.jobBoardSubtitle ||
                  "Find the perfect opportunities that match your skills"
                : mainContentTranslations.tendersSubtitle ||
                  "Explore available tenders and submit your proposals"}
            </p>
          </div>

          <Button
            variant="default"
            size="sm"
            onClick={() => setIsFilterDrawerOpen(true)}
            className="flex items-center gap-2 button-gradient lg:hidden"
          >
            <Filter className="w-4 h-4" />
            {mainContentTranslations.filterButton || "Filter"}
          </Button>
          {/* Results count, filter button and sorting */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {mainContentTranslations.showingResults || "Showing"}{" "}
              {items.length} {mainContentTranslations.resultsText || "results"}
            </span>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={
                    mainContentTranslations.sortByPlaceholder || "Sort by"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">
                  {mainContentTranslations.sortNewest || "Newest First"}
                </SelectItem>
                <SelectItem value="oldest">
                  {mainContentTranslations.sortOldest || "Oldest First"}
                </SelectItem>
                <SelectItem value="budget-high">
                  {mainContentTranslations.sortBudgetHigh || "Highest Budget"}
                </SelectItem>
                <SelectItem value="budget-low">
                  {mainContentTranslations.sortBudgetLow || "Lowest Budget"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto px-4 md:px-0">
        {items.map((item) => (
          <JobTenderCard
            key={item.id}
            type={type}
            data={item}
            className="h-full" // Ensures cards have equal height
          />
        ))}
      </div>

      {/* Empty State - Show when no jobs available */}
      {items.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {mainContentTranslations.noJobsFoundTitle || "No jobs found"}
          </h3>
          <p className="text-gray-500 text-center max-w-sm">
            {mainContentTranslations.noJobsFoundDescription ||
              "Try adjusting your filters or check back later for new opportunities"}
          </p>
        </div>
      )}

      {/* Load More Button - For pagination */}
      {items.length > 0 && displayedItems < allItems.length && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            variant="outline"
            className="px-6 py-3"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                {mainContentTranslations.loadingText || "Loading..."}
              </div>
            ) : (
              `${mainContentTranslations.loadMoreText || "Load More"} ${
                type === "job"
                  ? mainContentTranslations.jobsText || "Jobs"
                  : mainContentTranslations.tendersText || "Tenders"
              }`
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

export default MainContent;
