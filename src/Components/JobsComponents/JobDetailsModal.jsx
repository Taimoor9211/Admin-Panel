import React from "react";
import Image15 from "../../assets/Images/Image15.jpg";
import Image2 from "../../assets/Images/Image2.jpg";
import { 
  Globe, 
  X, 
  MapPin, 
  CreditCard,
} from "lucide-react";

const JobDetailsModal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg overflow-hidden relative">
        <div className="flex justify-between items-center p-4 md:p-5 border-b border-gray-200">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">Job Details</h3>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-500 p-1"
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="p-4 md:p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
            <div>
              <h4 className="text-base md:text-lg font-medium text-gray-900">Plumber</h4>
              <span className="inline-flex items-center bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded mt-1">
                COMPLETED
              </span>
            </div>
            <div className="text-gray-600 text-sm">#JCD001</div>
          </div>

          <div className="flex items-center mb-5">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
              <img src={Image2} alt="Provider" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h5 className="font-medium text-sm md:text-base truncate">Michael John</h5>
              <div className="flex flex-wrap items-center text-xs text-gray-600 gap-2 mt-1">
                <span className="flex items-center">
                  <Globe className="w-3 h-3 mr-1 flex-shrink-0" />
                  English (Test)
                </span>
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                  San Francisco
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-base md:text-lg font-medium text-gray-900 mb-3">Job Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  Date
                </div>
                <p className="text-sm font-medium">Wednesday - April 23, 2025</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  Time
                </div>
                <p className="text-sm font-medium">11:30 PM</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  Job Type
                </div>
                <p className="text-sm font-medium">Plumber</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-base md:text-lg font-medium text-gray-900 mb-3">Price Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Job Total</p>
                <p className="text-sm font-medium">$55.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Our Charge</p>
                <p className="text-sm font-medium">$5.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Total pay to today</p>
                <p className="text-sm font-medium">$60.00</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-base md:text-lg font-medium text-gray-900 mb-3">Pictures Provided by Customer</h4>
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

          <div className="mb-4">
            <h4 className="text-base md:text-lg font-medium text-gray-900 mb-3">Pictures Provided by Service Provider</h4>
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

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Payment Method</h4>
            <div className="flex items-center">
              <div className="w-5 h-5 md:w-8 md:h-5 mr-2 flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-6"
                />
              </div>
              <span className="text-sm flex items-center">
                <CreditCard className="w-3 h-3 mr-1" />
                *****0000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;