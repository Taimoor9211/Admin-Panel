import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

const ChangePasswordModal = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal Box */}
      <div className="bg-white w-[90%] max-w-[400px] rounded-xl shadow-lg relative p-6 mx-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          CHANGE PASSWORD
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="ie johndoe@gmail.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none text-sm"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-600 block mb-1">
            Password <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 order-2 sm:order-1"
          >
            Cancel
          </button>
          <button className="px-5 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 order-1 sm:order-2">
            Send via Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;