import React from "react";
import { Mail, Phone, MapPin, MoreVertical } from "lucide-react";
import Image1 from "../../assets/Images/Image1.jpg";

const ProfileSection = () => {
  return (
    <div className="xl:w-[25%] bg-white rounded-2xl p-6 shadow-sm">
      {/* Profile */}
      <div className="flex flex-col items-center text-center pb-6 mb-6 border-b">
        <img
          src={Image1}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-900">John Deo</h3>
        <p className="text-sm text-gray-500">Senior Agent</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mb-6 bg-gray-50 rounded-xl py-4">
        <div>
          <p className="text-lg font-semibold">120</p>
          <p className="text-xs text-gray-500">Total Jobs</p>
        </div>
        <div>
          <p className="text-lg font-semibold">115</p>
          <p className="text-xs text-gray-500">Successful</p>
        </div>
        <div>
          <p className="text-lg font-semibold">05</p>
          <p className="text-xs text-gray-500">Cancelled</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-4">Contact Info</h4>
        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex gap-3 items-center">
            <Mail size={16} className="text-gray-400" />
            kajope5182@ummoh.com
          </div>
          <div className="flex gap-3 items-center">
            <Phone size={16} className="text-gray-400" />
            33757005467
          </div>
          <div className="flex gap-3 items-start">
            <MapPin size={16} className="text-gray-400 mt-1" />
            <span>
              2239 Hog Camp Road <br /> Schaumburg
            </span>
          </div>
        </div>
      </div>

      {/* Performance */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold">Performance</h4>
          <MoreVertical size={16} className="text-gray-400" />
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-end justify-between h-32 relative">
            {/* Jan */}
            <div className="w-5 bg-orange-100 rounded-full h-[40%]" />

            {/* Feb */}
            <div className="w-5 bg-orange-500 rounded-full h-[85%]" />

            {/* Mar */}
            <div className="w-5 bg-orange-100 rounded-full h-[60%]" />
            {/* Apr */}
            <div className="w-5 bg-orange-100 rounded-full h-[50%]" />
            {/* May */}
            <div className="w-5 bg-orange-100 rounded-full h-[75%]" />
            {/* Jun */}
            <div className="w-5 bg-orange-100 rounded-full h-[90%]" />
          </div>

          <div className="flex justify-between text-xs text-gray-400 mt-3">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>

      {/* Ratings & Response */}
      <div className="grid grid-cols-2 gap-4">
        {/* Pie 1 */}
        <div className="bg-white rounded-xl p-2 flex justify-center ">
          <div className="relative w-28 h-38">
            {" "}
            {/* Increased size */}
            <svg viewBox="0 0 36 36" className="-rotate-90 w-full h-full">
              {/* Background ring */}
              <path
                d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#FEF3C7"
                strokeWidth="3"
              />

              {/* Progress */}
              <path
                d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#FACC15"
                strokeWidth="3"
                strokeDasharray="70,100"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-900">
              70%
            </span>
          </div>
        </div>

        {/* Pie 2 */}
        <div className="bg-white rounded-xl p-2 flex justify-center">
          <div className="relative w-28 h-38">
            {" "}
            {/* Increased size */}
            <svg viewBox="0 0 36 36" className="-rotate-90 w-full h-full">
              {/* Background ring */}
              <path
                d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#DBEAFE"
                strokeWidth="3"
              />

              {/* Progress */}
              <path
                d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="60,100"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-900">
              60%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;