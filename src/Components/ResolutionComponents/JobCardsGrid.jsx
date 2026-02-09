import React from "react";
import RegularJobCard from "./RegularJobCard";

const JobCardsGrid = ({ activeTab, jobCards, setShowPasswordModal }) => {
  if (jobCards.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-gray-400 text-3xl sm:text-4xl mb-3 sm:mb-4">📭</div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
          No Requests Found
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          There are no requests in the {activeTab} category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {jobCards.map((job) => (
        <RegularJobCard key={job.id} job={job} activeTab={activeTab} />
      ))}
    </div>
  );
};

export default JobCardsGrid;