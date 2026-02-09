import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import JobCardsGrid from "./JobCardsGrid";
import { tabJobCards, tabs } from "./jobData";

const ResolutionJobActivityComponents = () => {
  const [activeTab, setActiveTab] = useState("Escalation");
  const jobCards = tabJobCards[activeTab] || [];

  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header and Tabs */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Requests
            </h2>
          </div>

          <TabNavigation 
            tabs={tabs} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />

          <JobCardsGrid 
            activeTab={activeTab} 
            jobCards={jobCards} 
          />
        </section>
      </div>
    </>
  );
};

export default ResolutionJobActivityComponents;