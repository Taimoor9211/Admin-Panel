import React, { useState } from "react";
import { Languages, MapPin, MessageCircle } from "lucide-react";
import Image2 from "../../assets/Images/Image2.jpg";

const JobActivityComponents = () => {
  const [filter, setFilter] = useState("all");

  const jobCards = [
    {
      id: 1,
      title: "Plumber",
      jobId: "#JCD001",
      status: "Cancelation request",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image2,
      statusColor: "bg-[#FF383C]",
      statusBg: "bg-[#FF383C26]",
      statusText: "text-[#FF383C]",
      buttonText: "Cancel Job",
    },
    {
      id: 2,
      title: "Electrician",
      jobId: "#JCD002",
      status: "Scheduled",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image2,
      statusColor: "bg-[#CB30E0]",
      statusBg: "bg-[#CB30E026]",
      statusText: "text-[#CB30E0]",
      buttonText: "Start Job",
    },
    {
      id: 3,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "Awaiting provider",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image2,
      statusColor: "bg-[#FFCC00]",
      statusBg: "bg-[#FFCC0026]",
      statusText: "text-[#FFCC00]",
      buttonText: "Assign Provider",
    },
    {
      id: 4,
      title: "Plumber",
      jobId: "#JCD001",
      status: "Completed",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image2,
      statusColor: "bg-[#34C759]",
      statusBg: "bg-[#34C75926]",
      statusText: "text-[#34C759]",
      buttonText: "View Details",
    },
    {
      id: 5,
      title: "Electrician",
      jobId: "#JCD002",
      status: "pending",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      assignedProviderName: "John Smith",
      assignedProviderId: "#JCD0231",
      image: Image2,
      statusColor: "bg-[#00C3D0]",
      statusBg: "bg-[#00C3D026]",
      statusText: "text-[#00C3D0]",
      buttonText: "Start Job",
    },
    {
      id: 6,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "In progress",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      assignedProviderName: "John Smith",
      assignedProviderId: "#JCD0231",
      image: Image2,
      statusColor: "bg-[#AC7F5E]",
      statusBg: "bg-[#AC7F5E26]",
      statusText: "text-[#AC7F5E]",
      buttonText: "Complete Job",
    },
  ];

  const jobCounts = {
    all: jobCards.length,
    Completed: jobCards.filter(job => job.status === "Completed").length,
    Cancelation: jobCards.filter(job => job.status === "Cancelation request").length,
    Scheduled: jobCards.filter(job => job.status === "Scheduled").length,
    Awaiting: jobCards.filter(job => job.status === "Awaiting provider").length,
    Pending: jobCards.filter(job => job.status === "pending").length,
    InProgress: jobCards.filter(job => job.status === "In progress").length,
  };

  const filteredJobs = filter === "all" 
    ? jobCards 
    : jobCards.filter(job => {
        if (filter === "Cancelation") return job.status === "Cancelation request";
        if (filter === "Awaiting") return job.status === "Awaiting provider";
        if (filter === "Pending") return job.status === "pending";
        if (filter === "InProgress") return job.status === "In progress";
        return job.status === filter;
      });

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#515DEF]/20 transition-all duration-300">
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">{job.title}</h3>
            <span className={`inline-flex items-center px-2 sm:px-3 py-1 ${job.statusBg} ${job.statusText} text-xs font-semibold rounded-full mt-1`}>
              <span className={`w-2 h-2 ${job.statusColor} rounded-full mr-2`}></span>
              {job.status}
            </span>
          </div>
          <span className="text-sm text-gray-500 ml-2 whitespace-nowrap">{job.jobId}</span>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <img src={job.image} alt={job.client} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-100 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 truncate">{job.client}</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {/* Languages */}
              <div className="flex items-center gap-1.5">
                <Languages className="w-2 h-2 text-gray-400" />
                <span className="text-[9px] text-gray-600 truncate">
                  {job.languages}
                </span>
              </div>

              {/* Location */}
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

      <div className="p-4 sm:p-5 lg:p-6 space-y-3">
        {[
          { label: "Date", value: job.date },
          { label: "Time", value: job.time },
          { label: "Job Type", value: job.jobType },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <span className="text-xs text-gray-500">{item.label}</span>
            <span className="font-medium text-gray-900 text-sm truncate">{item.value}</span>
          </div>
        ))}
        
        {(job.id === 5 || job.id === 6) && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Assigned Provider Name</span>
              <span className="font-medium text-gray-900 text-sm truncate">{job.assignedProviderName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Assigned Provider ID</span>
              <span className="font-medium text-gray-900 text-sm truncate">{job.assignedProviderId}</span>
            </div>
          </>
        )}
      </div>

      <div className="p-4 flex items-center gap-3">
        <button className="flex-1 bg-[#515DEF] text-white font-medium py-2 px-4 rounded-full hover:bg-[#3F4BDA] transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base">
          {job.buttonText}
        </button>
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <MessageCircle size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-screen-2xl mx-auto lg:pr-10">
      <section className="mb-8 lg:mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">All Jobs</h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-48">
              <input type="date" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#515DEF]" />
            </div>
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-56 bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#515DEF]"
            >
              <option value="all">All Jobs ({jobCounts.all})</option>
              <option value="Completed">Completed Jobs ({jobCounts.Completed})</option>
              <option value="Cancelation">Cancelation Request ({jobCounts.Cancelation})</option>
              <option value="Scheduled">Scheduled Jobs ({jobCounts.Scheduled})</option>
              <option value="Awaiting">Awaiting Provider ({jobCounts.Awaiting})</option>
              <option value="Pending">Pending Jobs ({jobCounts.Pending})</option>
              <option value="InProgress">In Progress Jobs ({jobCounts.InProgress})</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 items-start">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobActivityComponents;