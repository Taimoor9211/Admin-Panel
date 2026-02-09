import React from "react";
import { Star, MapPin, ThumbsUp, ThumbsDown, ChevronDown, SortDesc } from "lucide-react";

import Image1 from "../../assets/Images/Image1.jpg";
import Image2 from "../../assets/Images/Image2.jpg";
import Image3 from "../../assets/Images/Image3.jpg";
import Certificate from "../../assets/Images/Certificate.jpg";

const RatingBar = ({ label, value, percent }) => (
  <div className="flex items-center gap-3">
    <span className="w-28 text-sm text-gray-700">{label}</span>
    <div className="flex-1 h-2 bg-gray-200 rounded-full">
      <div
        className="h-2 bg-blue-600 rounded-full"
        style={{ width: percent }}
      />
    </div>
    <span className="text-sm font-medium text-gray-800">{value}</span>
  </div>
);

const ServiceProviderDetails = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 p-3 sm:p-5 font-sans">
      {/* LEFT COLUMN */}
      <div className="md:col-span-4 space-y-5">
        <div className="bg-gray-50 rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex flex-col items-center">
            <img
              src={Image1}
              alt="profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            />
            <h2 className="mt-3 text-lg sm:text-xl font-semibold">Micheal John</h2>
          </div>

          <div className="grid grid-cols-3 text-center my-4 sm:my-6">
            <div>
              <p className="font-bold text-base sm:text-lg">$60.00</p>
              <p className="text-xs text-gray-500">Earnings</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                <span className="font-bold text-base sm:text-lg">4.9</span>
              </div>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-bold text-base sm:text-lg">City</span>
              </div>
              <p className="text-xs text-gray-500">San Francisco</p>
            </div>
          </div>

          <div className="grid grid-cols-3 text-center my-4 sm:my-6">
            <div>
              <p className="font-bold text-base sm:text-lg">120</p>
              <p className="text-xs text-gray-500">Total Jobs</p>
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg">115</p>
              <p className="text-xs text-gray-500">Successful</p>
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg">5</p>
              <p className="text-xs text-gray-500">Cancelled</p>
            </div>
          </div>

          <button className="w-full py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition text-sm sm:text-base">
            Contact Now
          </button>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-sm p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3">
            Experience & Specialities
          </h3>

          <p className="text-xs sm:text-sm text-gray-700 mb-4">
            Hi, I'm Floyd — with over 6 years of experience in expert plumbing
            and reliable repair solutions. I specialize in fixing leaks,
            installing pipes, faucets, water heaters, and providing long-lasting
            plumbing services.
          </p>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
            <div>
              <p className="font-semibold">🔧 Plumbing Expert You Can Trust</p>
              <p className="text-xs text-gray-600">
                Over 6 years of experience in repairing sinks, toilets, showers,
                pipelines, and more.
              </p>
            </div>

            <div>
              <p className="font-semibold">🕒 Reliable & On-Time</p>
              <p className="text-xs text-gray-600">
                I value your time and ensure the job is done right.
              </p>
            </div>

            <div>
              <p className="font-semibold">🔍 Clean Work, Solid Results</p>
              <p className="text-xs text-gray-600">
                Attention to detail, safety, and durability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE COLUMN */}
      <div className="md:col-span-4 space-y-5">
        <div className="bg-gray-50 rounded-xl shadow-sm p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Ratings</h3>

          <div className="flex items-center gap-3 mb-1">
            <span className="text-xl sm:text-2xl font-bold">4.9</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4 sm:mb-5 ml-12 sm:ml-14">
            Based on 471 ratings
          </p>

          <div className="space-y-3 sm:space-y-4">
            <RatingBar label="Work quality" value="4.9" percent="98%" />
            <RatingBar label="Reliability" value="4.9" percent="98%" />
            <RatingBar label="Punctuality" value="4.8" percent="96%" />
            <RatingBar label="Solutions" value="5.0" percent="100%" />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-sm p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Certifications</h3>

          <div className="space-y-3 sm:space-y-4">
            {[1, 2, 3].map((item) => (
              <img
                key={item}
                src={Certificate}
                alt="certificate"
                className="w-full h-32 sm:h-44 object-contain rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="md:col-span-4 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold">Reviews</h3>
            <p className="text-xs text-gray-500">Sort by (Customer)</p>
          </div>

          {/* Custom Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 border rounded-lg px-2 py-1 sm:px-3 sm:py-1.5">
              <SortDesc className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>

            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <p className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                Customer
              </p>
              <p className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                Agents
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-5">
          {/* Nicole Review */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-3 sm:p-6">
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <div className="flex gap-2">
                <img
                  src={Image2}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                  alt="Nicole"
                />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Nicole</p>
                  <p className="text-xs text-gray-400">2 month ago</p>
                </div>
              </div>

              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2 sm:mb-3">
              The online session started on time, and the physiotherapist guided
              me really well. I felt visible improvement after just one session.
              Definitely booking again!
            </p>

            <div className="flex justify-between items-center text-xs">
              <span className="text-blue-600 cursor-pointer">Read less</span>

              <div className="flex items-center gap-3 text-gray-500">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-2 h-2 sm:w-3 sm:h-3" /> 0
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsDown className="w-2 h-2 sm:w-3 sm:h-3" /> 10
                </span>
              </div>
            </div>
          </div>

          {/* David Reviews */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-50 rounded-xl shadow-sm p-3 sm:p-6">
              <div className="flex justify-between items-start mb-2 sm:mb-3">
                <div className="flex gap-2">
                  <img
                    src={Image3}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    alt="David"
                  />
                  <div>
                    <p className="text-xs sm:text-sm font-medium">David</p>
                    <p className="text-xs text-gray-400">6 month ago</p>
                  </div>
                </div>

                <div className="flex text-yellow-500">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">
                Booking was quick and easy but overpriced.
              </p>

              <div className="flex justify-end gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-2 h-2 sm:w-3 sm:h-3" /> 0
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsDown className="w-2 h-2 sm:w-3 sm:h-3" /> 1
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDetails;