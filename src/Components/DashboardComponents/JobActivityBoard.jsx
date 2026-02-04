import React from "react";
import { MapPin, Languages, MessageCircle } from "lucide-react";
import Image2 from "../../assets/Images/Image2.jpg";

const JobActivityBoard = () => {
  const jobCards = [
    {
      id: 1,
      title: "Plumber",
      jobId: "#JCD001",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      totalEarn: "$80.00",
      image: Image2,
    },
    {
      id: 2,
      title: "Electrician",
      jobId: "#JCD002",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      totalEarn: "$80.00",
      image: Image2,
    },
    {
      id: 3,
      title: "Carpenter",
      jobId: "#JCD003",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      totalEarn: "$80.00",
      image: Image2,
    },
  ];

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#515DEF]/20 transition-all duration-300 flex flex-col">
      {/* Card Header */}
      <div className="p-4 sm:p-5 lg:p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 truncate">{job.title}</h3>
            <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mt-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              In progress
            </span>
          </div>
          <span className="text-sm text-gray-500 ml-2 whitespace-nowrap">{job.jobId}</span>
        </div>

        {/* Client Info */}
        <div className="flex items-center gap-4 mt-4">
          <img
            src={job.image}
            alt={job.client}
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 truncate">{job.client}</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-1.5">
                <Languages className="w-2 h-2 text-gray-400" />
                <span className="text-[9px] text-gray-600 truncate">
                  {job.languages}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-2 h-2 text-gray-400" />
                <span className="text-[9px] text-gray-600 truncate">
                  {job.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 mx-4 sm:mx-5 lg:mx-6" />

      {/* Job Details */}
      <div className="p-4 sm:p-5 lg:p-6 space-y-3">
        {[
          { label: "Date", value: job.date },
          { label: "Time", value: job.time },
          { label: "Job Type", value: job.jobType },
          { label: "Total to Earn Today", value: job.totalEarn },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-xs text-gray-500">{item.label}</span>
            <span className="font-medium text-gray-900 text-sm truncate pl-2">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex items-center gap-3">
        <button className="flex-1 bg-[#515DEF] text-white font-medium py-3 rounded-full hover:bg-[#3F4BDA] transition-colors shadow-sm hover:shadow-md">
          Complete Job
        </button>
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <MessageCircle size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1440px] lg:pr-10">
      <section className="mb-8 lg:mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">In Progress Job</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCards.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobActivityBoard;