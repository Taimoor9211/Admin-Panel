import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiUsers, HiOutlineUsers, HiChevronDown } from "react-icons/hi";
import Image1 from "../../assets/Images/Image1.jpg";

const AllEmails = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const [selectedDate, setSelectedDate] = useState(null);
  const [statusOpen, setStatusOpen] = useState(false);
  const [status, setStatus] = useState("Select Status");

  const statusOptions = [
    "New Emails",
    "Unread Emails",
    "Awaiting Reply",
    "Resolved",
    "Forwarded to Admin",
  ];

  const emails = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    name: "Jena",
    message: "Hello - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    time: "10:41 PM",
    avatar: Image1,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab("customer")}
              className={`flex items-center gap-2 pb-3 whitespace-nowrap ${
                activeTab === "customer"
                  ? "text-blue-600 font-semibold border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              <HiUsers className="text-xl" />
              Customer
            </button>

            <button
              onClick={() => setActiveTab("provider")}
              className={`flex items-center gap-2 pb-3 whitespace-nowrap ${
                activeTab === "provider"
                  ? "text-blue-600 font-semibold border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              <HiOutlineUsers className="text-xl" />
              Service Provider
              <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-md ml-2">
                31 new
              </span>
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              dateFormat="dd MMM yyyy"
              placeholderText="Select Date"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="w-full sm:w-48 border px-4 py-2 rounded-md text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="relative">
              <button
                onClick={() => setStatusOpen(!statusOpen)}
                className="flex items-center justify-between gap-2 border px-4 py-2 rounded-md text-sm w-full sm:w-48 hover:bg-gray-50"
              >
                <span className="truncate">{status}</span>
                <HiChevronDown className={`transition-transform ${statusOpen ? "rotate-180" : ""}`} />
              </button>

              {statusOpen && (
                <div className="absolute right-0 mt-1 w-full sm:w-48 bg-white border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                  {statusOptions.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setStatus(item);
                        setStatusOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md truncate"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="p-3 sm:p-4">
        <div className="max-w-6xl mx-auto">
          <div className="divide-y divide-gray-200">
            {emails.map((email) => (
              <div
                key={email.id}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 cursor-pointer"
              >
                <img
                  src={email.avatar}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                    <span className="text-sm font-semibold text-gray-900 truncate">
                      {email.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 sm:text-gray-900">
                      {email.time}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 truncate">
                    <span className="font-medium text-gray-900">Hello</span> - {email.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {emails.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-4xl mb-4">📧</div>
              <p className="text-gray-500">No emails found</p>
              <p className="text-gray-400 text-sm mt-1">Try changing your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEmails;