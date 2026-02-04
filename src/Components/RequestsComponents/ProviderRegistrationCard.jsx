import React, { useState } from "react";
import { User, MapPin, MessageCircle } from "lucide-react";
import ProviderDetailsModal from "./ProviderDetailsModal";

const ProviderRegistrationCard = ({ job }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      <div className="w-full min-h-[180px] rounded-[10px] bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="h-full flex flex-col p-4 gap-3">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={job.image}
                alt={job.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-900 truncate max-w-[120px] sm:max-w-none">
                  {job.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-gray-500 flex-wrap">
                  <User className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{job.role}</span>
                  <span className="mx-1 text-gray-300">•</span>
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>
              </div>
            </div>

            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex-shrink-0">
              <MessageCircle size={20} />
            </button>
          </div>

          {/* Message */}
          <div className="flex-1">
            <div className="py-1 h-full">
              <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                {job.message}
              </p>
            </div>
          </div>

          {/* Button - Full Width */}
          <div className="mt-2">
            <button 
              onClick={() => setShowDetailsModal(true)}
              className="w-full bg-[#515DEF] text-white font-medium py-2 px-4 rounded-full hover:bg-[#3F4BDA] transition-colors duration-200 flex items-center justify-center text-sm shadow-sm hover:shadow-md"
            >
              View Provider Details
            </button>
          </div>
        </div>
      </div>

      <ProviderDetailsModal 
        open={showDetailsModal} 
        onClose={() => setShowDetailsModal(false)} 
      />
    </>
  );
};

export default ProviderRegistrationCard;