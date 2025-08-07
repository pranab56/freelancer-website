// import React from "react";
// import JobTenderCard from "../JobTenderCard";

// function MainContent() {
//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {Array.from(6).map((_, index) => (
//           <JobTenderCard key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MainContent;

import React from "react";
import JobTenderCard from "../JobTenderCard";

function MainContent() {
  // Mock data for demonstration - in real app this would come from props or API
  const jobTenders = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Job Tender ${index + 1}`,
    // Add other properties as needed for your JobTenderCard component
  }));

  return (
    <div className="flex-1 ">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job Board</h1>
            <p className="text-gray-600 mt-1">
              Find the perfect opportunities that match your skills
            </p>
          </div>

          {/* Results count and sorting */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Showing {jobTenders.length} results
            </span>
            <select className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="budget-high">Highest Budget</option>
              <option value="budget-low">Lowest Budget</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {jobTenders.map((job) => (
          <JobTenderCard
            key={job.id}
            jobData={job}
            className="h-full" // Ensures cards have equal height
          />
        ))}
      </div>

      {/* Empty State - Show when no jobs available */}
      {jobTenders.length === 0 && (
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
            No jobs found
          </h3>
          <p className="text-gray-500 text-center max-w-sm">
            Try adjusting your filters or check back later for new opportunities
          </p>
        </div>
      )}

      {/* Load More Button - For pagination */}
      {jobTenders.length > 0 && jobTenders.length >= 6 && (
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors font-medium">
            Load More Jobs
          </button>
        </div>
      )}
    </div>
  );
}

export default MainContent;
