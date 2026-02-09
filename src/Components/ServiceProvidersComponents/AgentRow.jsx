import React from "react";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pill from "./Pill";

const AgentRow = ({ 
  agent, 
  openMenu, 
  setOpenMenu,
  setShowRestrictAccountModal,
  setShowRestrictWalletModal 
}) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 bg-gray-50 rounded-lg mb-2">
      
      {/* Agent */}
      <div className="md:col-span-3 flex items-center gap-3 pl-4">
        <img
          src={agent.avatar}
          alt={agent.name}
          onClick={() => navigate('/service-provider-details')}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-900">
          {agent.name}
        </span>
      </div>

      {/* Email */}
      <div className="md:col-span-2 text-sm text-gray-600 truncate">
        {agent.email}
      </div>

      {/* Phone */}
      <div className="md:col-span-2 text-sm text-gray-600">
        {agent.phone}
      </div>

      {/* Gender */}
      <div className="md:col-span-2">
        <Pill tone={agent.gender === "Male" ? "blue" : "yellow"}>
          {agent.gender}
        </Pill>
      </div>

      {/* Status */}
      <div className="md:col-span-2">
        <Pill tone={agent.status === "Active" ? "green" : "red"}>
          {agent.status}
        </Pill>
      </div>

      {/* Action */}
      <div className="md:col-span-1 flex justify-end relative pr-4">
        <button
          onClick={() => setOpenMenu(openMenu === agent.id ? null : agent.id)}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <MoreHorizontal size={18} className="text-gray-500" />
        </button>

        {openMenu === agent.id && (
          <div className="absolute right-0 top-12 z-50 w-52 sm:w-56 bg-white rounded-2xl shadow-xl p-3 space-y-2">
            
            <button className="w-full text-left px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200">
              Active
            </button>

            <button className="w-full text-left px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200">
              De-Active
            </button>

            <button className="w-full text-left px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200">
              Send Warning
            </button>

            <button className="w-full text-left px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200">
              Cancel Registration
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu(null);
                setShowRestrictAccountModal(true);
              }}
              className="w-full text-left px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200"
            >
              Restrict Account
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu(null);
                setShowRestrictWalletModal(true);
              }}
              className="w-full text-left px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200"
            >
              Restrict Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentRow;
