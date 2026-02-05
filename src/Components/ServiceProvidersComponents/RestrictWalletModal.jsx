import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const RestrictWalletModal = ({ showModal, closeModal }) => {
  const [durationType, setDurationType] = useState("Select Duration");
  const [durationValue, setDurationValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg w-full max-w-sm">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Restrict Wallet
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Duration Dropdown */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Duration
            </label>

            {/* Dropdown Button */}
            <button
              type="button"
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none"
            >
              {durationType}
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {openDropdown && (
              <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                {["Days", "Months", "Years"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setDurationType(item);
                      setOpenDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Enter Number */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Number
            </label>
            <input
              type="number"
              value={durationValue}
              onChange={(e) => setDurationValue(e.target.value)}
              placeholder="e.g 12"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={closeModal}
              className="flex-1 py-2 px-4 border border-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log({
                  durationType,
                  durationValue,
                  action: "Restrict Wallet",
                });
                closeModal();
              }}
              className="flex-1 py-2 px-4 bg-indigo-600 text-sm font-medium text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Restrict Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictWalletModal;