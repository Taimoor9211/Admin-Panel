import React from "react";


const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3 sm:px-4 md:px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-200 border ${
            activeTab === tab
              ? "bg-[#515DEF] text-white border-[#515DEF] shadow-md"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;