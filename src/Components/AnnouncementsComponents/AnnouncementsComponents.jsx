import React, { useState } from "react";
import { Plus, X, MoreHorizontal } from "lucide-react";
import Logo from "../../assets/Images/Logo.jpg";

const AnnouncementsComponents = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openMenu, setOpenMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Sent Announcement to",
  );
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
  });

  const categories = ["All", "Agents", "Service Providers", "Customers"];

  const announcements = [
    { id: 1, title: "New Feature Alert!", time: "14h" },
    { id: 2, title: "New Feature Alert!", time: "14h" },
    { id: 3, title: "New Feature Alert!", time: "14h" },
    { id: 4, title: "New Feature Alert!", time: "14h" },
    { id: 5, title: "New Feature Alert!", time: "14h" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle announcement submission logic
    console.log({ ...formData, category: selectedCategory });
    setShowModal(false);
    // Reset form data
    setFormData({ heading: "", description: "" });
    setSelectedCategory("Sent Announcement to");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto">
        {/* Header with Announcements title and button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-medium text-gray-900">Announcements</h1>

          <button
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium w-full sm:w-auto"
            onClick={() => setShowModal(true)}
          >
            <Plus className="w-4 h-4" />
            Made New Announcements
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-4 sm:gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-3 px-1 text-sm font-medium whitespace-nowrap ${
                activeTab === "all"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              All{" "}
              <span
                className={
                  activeTab === "all"
                    ? "inline-flex items-center justify-center ml-1 bg-gray-100 text-gray-700 rounded-full w-5 h-5 text-xs"
                    : "hidden"
                }
              >
                1
              </span>
            </button>

            <button
              onClick={() => setActiveTab("previous")}
              className={`pb-3 px-1 text-sm font-medium whitespace-nowrap ${
                activeTab === "previous"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Previous
            </button>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6"
            >
              {/* Left side with logo and content */}
              <div className="flex gap-4">
                {/* Logo */}
                <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={Logo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1 mb-2">
                    We're pleased to introduce the latest enhancements in our
                    templating experience.
                  </p>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-1.5 rounded-md">
                    Try now
                  </button>
                </div>
              </div>

              {/* Right side with time and menu */}
              <div className="flex justify-between items-start sm:items-center sm:flex-col sm:items-end gap-2 sm:gap-1">
                <span className="text-xs text-gray-400">{item.time}</span>

                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.id ? null : item.id)
                    }
                    className="p-1"
                  >
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </button>

                  {openMenu === item.id && (
                    <div className="absolute right-0 top-8 bg-white shadow-lg border border-gray-100 rounded-md py-2 px-4 z-10 min-w-[160px] text-sm">
                      <button className="text-gray-700 w-full text-left">
                        Delete Announcemет
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Announcement Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md mx-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Made New Announcement
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6">
              <form>
                {/* Main Heading */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Heading
                  </label>
                  <input
                    type="text"
                    name="heading"
                    value={formData.heading}
                    onChange={handleChange}
                    placeholder="Enter Main heading"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter Description"
                    rows="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  ></textarea>
                </div>

                {/* Sent to - Dropdown */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sent to
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full px-3 py-2 text-left border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 flex items-center justify-between"
                    >
                      <span
                        className={
                          selectedCategory === "Sent Announcement to"
                            ? "text-gray-400"
                            : "text-gray-700"
                        }
                      >
                        {selectedCategory}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={showDropdown ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                        />
                      </svg>
                    </button>

                    {showDropdown && (
                      <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        {categories.map((category) => (
                          <div
                            key={category}
                            onClick={() => handleCategorySelect(category)}
                            className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                          >
                            <span className="text-sm text-gray-700">
                              {category}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* Footer */}
      <div className="flex items-center justify-between gap-4 px-6 py-4 bg-gray-50 rounded-b-xl">
        <button
          onClick={() => setShowModal(false)}
          className="w-full h-[44px] rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="w-full h-[44px] rounded-md bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsComponents;
