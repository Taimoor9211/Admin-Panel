import React, { useState } from "react";
import Image15 from "../../assets/Images/Image15.jpg";
import { X, ChevronDown } from "lucide-react";

const SetPriceModal = ({ showPriceModal, closeModal }) => {
  const [sellType, setSellType] = useState("fixed");
  const [price, setPrice] = useState("");

  if (!showPriceModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4">
      <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg overflow-hidden relative mx-2 sm:mx-4">
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
                  className="w-full h-26 sm:h-34 md:h-42 object-cover"
                />
              </div>
              <div className="grid grid-rows-2 gap-1.5 sm:gap-2">
                <div className="rounded overflow-hidden">
                  <img
                    src={Image15}
                    alt="Garden detail 1"
                    className="w-full h-12 sm:h-16 md:h-20 object-cover"
                  />
                </div>
                <div className="rounded overflow-hidden">
                  <img
                    src={Image15}
                    alt="Garden detail 2"
                    className="w-full h-12 sm:h-16 md:h-20 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 sm:mb-5">
            <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
              Garden Renovation
            </h4>
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

          {/* Job Details */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
              Job Details
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
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

          {/* Divider */}
          <div className="border-t border-gray-200 my-4 sm:my-5"></div>

          {/* How would you like to sell? */}
<div className="mb-4 sm:mb-5">
  <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
    How would you like to sell?
  </h4>
  
  <div className="space-y-3 flex justify-between items-center">
    {/* Fixed Price Option */}
    <div 
      className="flex items-start cursor-pointer"
      onClick={() => setSellType("fixed")}
    >
      <div className="flex items-center h-5 mt-0.5">
        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
          sellType === "fixed" 
            ? "border-indigo-600" 
            : "border-gray-300"
        }`}>
          {sellType === "fixed" && (
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
          )}
        </div>
      </div>
      <div className="ml-3">
        <span className="text-sm font-medium text-gray-900">Fixed Price</span>
        <p className="text-xs text-gray-600 mt-1">
          One price for the entire service
        </p>
      </div>
    </div>

    {/* Bid Price Option */}
    <div 
      className="flex items-start cursor-pointer"
      onClick={() => setSellType("bid")}
    >
      <div className="flex items-center h-5 mt-0.5">
        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
          sellType === "bid" 
            ? "border-indigo-600" 
            : "border-gray-300"
        }`}>
          {sellType === "bid" && (
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
          )}
        </div>
      </div>
      <div className="ml-3">
        <span className="text-sm font-medium text-gray-900">Bid Price</span>
        <p className="text-xs text-gray-600 mt-1">
          Negotiable price for the entire service
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Who would you like to show? */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
              Who would you like to show?
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {/* Postcode Input */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Postcode ..."
                  className="w-full rounded-lg px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* Miles Input */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Miles ..."
                  className="w-full rounded-lg px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* City Dropdown */}
              <div className="relative">
                <select className="w-full rounded-lg px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 appearance-none">
                  <option>Select City</option>
                  <option>London</option>
                  <option>Manchester</option>
                  <option>Birmingham</option>
                  <option>Liverpool</option>
                  <option>Leeds</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Price Input */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
              Price
            </h4>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g., 500$"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full rounded-lg px-3 py-2.5 pl-10 text-sm bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <span className="text-sm">$</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Enter the price for your service
            </p>
          </div>

          {/* Active Lead Now Button */}
          <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-100">
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-full text-sm font-medium transition-colors duration-200"
              onClick={() => {
                // Add your submit logic here
                console.log({
                  sellType,
                  price,
                });
                closeModal();
              }}
            >
              Active Lead now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPriceModal;