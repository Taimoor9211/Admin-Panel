import React from "react";
import Image15 from "../../assets/Images/Image15.jpg";
import Image2 from "../../assets/Images/Image2.jpg";
import { X, Globe, Star, MapPin, Edit } from "lucide-react";

const LeadDetailsModal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  // Service providers data
  const serviceProviders = [
    {
      id: 1,
      name: "Michael John",
      rating: 4.8,
      reviewCount: 41,
      languages: ["English", "Hindi"],
      location: "San Francisco",
      price: "600$",
    },
    {
      id: 2,
      name: "Michael John",
      rating: 4.8,
      reviewCount: 41,
      languages: ["English", "Hindi"],
      location: "San Francisco",
      price: "600$",
    },
    {
      id: 3,
      name: "Michael John",
      rating: 4.8,
      reviewCount: 1,
      languages: ["English", "Hindi"],
      location: "San Francisco",
      price: "600$",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4">
      <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl rounded-lg shadow-lg overflow-hidden relative mx-2 sm:mx-4">
        <div className="flex justify-between items-center p-3 sm:p-4 md:p-5 border-b border-gray-200">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
            Lead Details
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-500 p-1"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="p-3 sm:p-4 md:p-6 max-h-[80vh] overflow-y-auto">
          {/* Pictures Section */}
          <div className="mb-4 sm:mb-5">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              <div className="rounded overflow-hidden">
                <img
                  src={Image15}
                  alt="Garden"
                  className="w-full h-26 sm:h-34 md:h-42 object-cover" // Adjusted height
                />
              </div>
              <div className="grid grid-rows-2 gap-1.5 sm:gap-2">
                <div className="rounded overflow-hidden">
                  <img
                    src={Image15}
                    alt="Garden detail 1"
                    className="w-full h-12 sm:h-16 md:h-20 object-cover" // Adjusted height
                  />
                </div>
                <div className="rounded overflow-hidden">
                  <img
                    src={Image15}
                    alt="Garden detail 2"
                    className="w-full h-12 sm:h-16 md:h-20 object-cover" // Adjusted height
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 sm:mb-5">
            <div className="flex justify-between items-center">
              <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                Garden Renovation
              </h4>
              <button aria-label="Edit garden renovation">
                <Edit className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>

          {/* Lead Details */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
              Lead Details
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex justify-between items-start sm:items-center">
                <div className="text-xs sm:text-sm text-gray-600 flex-shrink-0 pr-2">
                  Deadline
                </div>
                <p className="text-xs sm:text-sm font-medium text-right break-words max-w-[60%]">
                  Wednesday - April 30, 2025
                </p>
              </div>
              <div className="flex justify-between items-start sm:items-center">
                <div className="text-xs sm:text-sm text-gray-600 flex-shrink-0 pr-2">
                  Date
                </div>
                <p className="text-xs sm:text-sm font-medium text-right break-words max-w-[60%]">
                  Wednesday - April 23, 2025
                </p>
              </div>
              <div className="flex justify-between items-start sm:items-center">
                <div className="text-xs sm:text-sm text-gray-600 flex-shrink-0 pr-2">
                  Time
                </div>
                <p className="text-xs sm:text-sm font-medium text-right">
                  11:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
              Customer Details
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex justify-between items-start sm:items-center">
                <p className="text-xs sm:text-sm text-gray-600 flex-shrink-0 pr-2">
                  Name
                </p>
                <p className="text-xs sm:text-sm font-medium text-right break-words max-w-[60%]">
                  Micheal John
                </p>
              </div>
              <div className="flex justify-between items-start sm:items-center">
                <p className="text-xs sm:text-sm text-gray-600 flex-shrink-0 pr-2">
                  Phone Number
                </p>
                <p className="text-xs sm:text-sm font-medium text-right">
                  +00 000 000 000 00
                </p>
              </div>
              <div className="flex justify-between items-start sm:items-center">
                <p className="text-xs sm:text-sm text-gray-600 flex-shrink-0 pr-2">
                  Post Code
                </p>
                <p className="text-xs sm:text-sm font-medium text-right">
                  AA11 1AA
                </p>
              </div>
              <div className="flex justify-between items-start sm:items-center">
                <p className="text-xs sm:text-sm text-gray-600 flex-shrink-0 pr-2">
                  Address
                </p>
                <p className="text-xs sm:text-sm font-medium text-right break-words max-w-[60%]">
                  2 Seaford Road, Curdworth, United Kingdom
                </p>
              </div>
            </div>
          </div>

          {/* Price Details */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
              Price Details
            </h4>
            <div className="space-y-1.5 sm:space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm text-gray-600">Job Total</p>
                <p className="text-xs sm:text-sm font-medium">$55.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm text-gray-600">Our Charge</p>
                <p className="text-xs sm:text-sm font-medium">$5.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm text-gray-600">
                  Total pay to today
                </p>
                <p className="text-xs sm:text-sm font-medium">$60.00</p>
              </div>
            </div>
          </div>

          {/* Service Providers List */}
          <div className="mb-4 sm:mb-5">
            <div className="space-y-4">
              {serviceProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="flex items-center justify-between p-3 sm:p-4 bg-[#5F8EFD1A] rounded-lg"
                >
                  <div className="flex items-center flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <img
                        src={Image2}
                        alt={provider.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h5 className="font-medium text-sm sm:text-base truncate">
                          {provider.name}
                        </h5>
                        {/* Rating and Reviews */}
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                            <span className="ml-0.5 sm:ml-1 font-semibold text-xs sm:text-sm">
                              {provider.rating}
                            </span>
                          </div>
                          <span className="ml-1 text-gray-600 text-xs sm:text-sm">
                            ({provider.reviewCount}{" "}
                            {provider.reviewCount === 1 ? "review" : "reviews"})
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center text-xs text-gray-600 gap-1.5 sm:gap-2 mt-1">
                        <span className="flex items-center">
                          <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 flex-shrink-0" />
                          {provider.languages.join(", ")}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 flex-shrink-0" />
                          {provider.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="ml-3 sm:ml-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap">
                    Sell For {provider.price}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsModal;
