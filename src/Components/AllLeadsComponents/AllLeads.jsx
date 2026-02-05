import React, { useState } from "react";
import Image15 from "../../assets/Images/Image15.jpg";
import { ChevronDown } from "lucide-react";
import LeadDetailsModal from "./LeadDetailsModal";
import SetPriceModal from "./SetPriceModal";

const AllLeads = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const leads = [
    { status: "Active", price: "500$ (Fixed)", views: "500 Views" },
    { status: "Active", price: "500$ (Bid)", views: "500 Views" },
    { status: "Active", price: "500$ (Bid)", views: "500 Views" },
    { status: "De-active", price: "", views: "" },
    { status: "De-active", price: "", views: "" },
    { status: "De-active", price: "", views: "" },
    { status: "Active", price: "500$ (Bid)", views: "500 Views" },
    { status: "Active", price: "500$ (Fixed)", views: "500 Views" },
    { status: "Active", price: "500$ (Bid)", views: "500 Views" },
  ];

  const LeadCard = ({ lead }) => (
    <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
      <div className="flex p-4">
        <div className="flex-1 pr-4">
          <h3 className="font-medium text-gray-900 mb-1">Garden Renovation</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Donec vel turpis quis fermentum in.
          </p>
        </div>
        <img
          src={Image15}
          alt="Garden"
          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
        />
      </div>

      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Status</span>
          <span className={'text-sm'}>{lead.status}</span>
        </div>

        {lead.status === "Active" ? (
          <>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Price</span>
              <span className="text-sm text-gray-900">{lead.price}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Total Views</span>
              <span className="text-sm text-gray-900">{lead.views}</span>
            </div>
            <button
              className="bg-indigo-600 text-white py-2 px-4 rounded-full w-full text-sm font-medium mb-4"
              onClick={() => setShowModal(true)}
            >
              View Details
            </button>
          </>
        ) : (
          <button
           onClick={() => setShowPriceModal(true)} // This should now open the modal
           className="bg-[#EDF5FF] text-indigo-600 py-2 px-4 rounded-full w-full text-sm font-medium my-4">
            Set Price
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">All leads</h2>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter Postcode ....."
            className="rounded-lg px-4 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Enter Miles ..."
            className="rounded-lg px-4 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none"
          />

          <div className="relative">
            <select className="rounded-lg px-4 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none appearance-none w-full">
              <option>Select Category</option>
              <option>Home Improvements</option>
              <option>Education</option>
              <option>Entertainment</option>
              <option>Tradesman & Construction</option>
              <option>Transport</option>
              <option>Health & beauty</option>
              <option>Food & Drinks</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead, index) => (
          <LeadCard key={index} lead={lead} />
        ))}
      </div>

      <LeadDetailsModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
      <SetPriceModal
        showPriceModal={showPriceModal} // Ensure prop name matches
        closeModal={() => setShowPriceModal(false)}
      />
    </div>
  );
};

export default AllLeads;