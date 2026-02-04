import React from "react";
import { X, FileText } from "lucide-react";
import Image2 from "../../assets/Images/image2.jpg";

const ProviderDetailsModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3 sm:px-4">
      
      {/* Modal */}
      <div className="bg-white w-full sm:w-[95%] max-w-[480px] 
                      max-h-[90vh] overflow-y-auto
                      rounded-xl sm:rounded-2xl shadow-xl relative p-4 sm:p-6">
        
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between mb-4 gap-2">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            Provider Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Provider Card */}
        <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Plumber
          </h3>

          <div className="flex items-center gap-3">
            <img
              src={Image2}
              alt="provider"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                Micheal John
              </p>
              <p className="text-xs text-gray-500 truncate">
                English, Hindi • San Francisco
              </p>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">
            Job Details
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            I would like to report an issue with the service. Unfortunately,
            the quality did not meet my expectations, and I need your
            assistance to resolve this.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Contact info
          </h4>

          <div className="text-xs sm:text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium">User Name:</span> Micheal john
            </p>
            <p>
              <span className="font-medium">Gmail:</span> michealjohn@gmail.com
            </p>
            <p>
              <span className="font-medium">Number:</span> +00 000 000 00
            </p>
          </div>
        </div>

        {/* Uploaded Documents */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Uploaded Documents
          </h4>

          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 border rounded-lg px-3 py-2 mb-2"
            >
              <FileText size={16} className="text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-600 truncate">
                file.png
              </span>
            </div>
          ))}
        </div>

        {/* Uploaded Certificates */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Uploaded Certificates
          </h4>

          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 border rounded-lg px-3 py-2 mb-2"
            >
              <FileText size={16} className="text-gray-400" />
              <span className="text-xs sm:text-sm text-gray-600 truncate">
                file.png
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium mb-3 text-sm sm:text-base">
          Register Provider
        </button>

        <button
          onClick={onClose}
          className="w-full border border-indigo-300 text-indigo-600 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-indigo-50 text-sm sm:text-base"
        >
          Cancel Registration
        </button>

      </div>
    </div>
  );
};

export default ProviderDetailsModal;
