import React, { useState } from "react";
import {
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Plus,
  MoreVertical,
  X,
} from "lucide-react";
import Image1 from "../../assets/Images/Image1.jpg";
import Image2 from "../../assets/Images/Image2.jpg";
import Image3 from "../../assets/Images/Image3.jpg";
import Image4 from "../../assets/Images/Image4.jpg";
import Image5 from "../../assets/Images/Image5.jpg";
import Image6 from "../../assets/Images/Image6.png";
import Image7 from "../../assets/Images/Image7.jpg";
import Image8 from "../../assets/Images/Image8.jpg";
import Image9 from "../../assets/Images/Image9.jpg";
import Image10 from "../../assets/Images/Image10.jpg";
import Image11 from "../../assets/Images/Image11.png";
import Image12 from "../../assets/Images/Image12.jpg";

const agents = [
  {
    id: 1,
    name: "John Deo",
    email: "johndoe2211@gmail.com",
    phone: "+33757005467",
    gender: "Male",
    status: "Active",
    avatar: Image1,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "+1234567890",
    gender: "Female",
    status: "De-Active",
    avatar: Image2,
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robertj@email.com",
    phone: "+9876543210",
    gender: "Male",
    status: "Active",
    avatar: Image3,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emilyd@email.com",
    phone: "+1122334455",
    gender: "Female",
    status: "Active",
    avatar: Image4,
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michaelb@email.com",
    phone: "+9988776655",
    gender: "Male",
    status: "De-Active",
    avatar: Image5,
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarahw@email.com",
    phone: "+5544332211",
    gender: "Female",
    status: "Active",
    avatar: Image6,
  },
  {
    id: 7,
    name: "David Miller",
    email: "davidm@email.com",
    phone: "+6677889900",
    gender: "Male",
    status: "Active",
    avatar: Image7,
  },
  {
    id: 8,
    name: "Lisa Taylor",
    email: "lisat@email.com",
    phone: "+3344556677",
    gender: "Female",
    status: "De-Active",
    avatar: Image8,
  },
  {
    id: 9,
    name: "James Anderson",
    email: "jamesa@email.com",
    phone: "+7788990011",
    gender: "Male",
    status: "Active",
    avatar: Image9,
  },
  {
    id: 10,
    name: "Maria Garcia",
    email: "mariag@email.com",
    phone: "+9900112233",
    gender: "Female",
    status: "Active",
    avatar: Image10,
  },
  {
    id: 11,
    name: "Thomas Martinez",
    email: "thomasm@email.com",
    phone: "+4455667788",
    gender: "Male",
    status: "De-Active",
    avatar: Image11,
  },
  {
    id: 12,
    name: "Jennifer Lee",
    email: "jenniferl@email.com",
    phone: "+2233445566",
    gender: "Female",
    status: "Active",
    avatar: Image12,
  },
];

const Pill = ({ children, tone }) => {
  const map = {
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-600",
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
    gray: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[tone]}`}>
      {children}
    </span>
  );
};

const AllAgentsPage = () => {
  const [online, setOnline] = useState("Online");
  const [active, setActive] = useState("Active");
  const [openMenu, setOpenMenu] = useState(null);
  const [showAddAgentModal, setShowAddAgentModal] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        {/* Content */}
        <div className="flex flex-col xl:flex-row gap-10">
          {/* LEFT: Table - 70% width */}
          <div className="xl:w-[75%] bg-white rounded-xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                All Agents
              </h2>

              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={online}
                  onChange={(e) => setOnline(e.target.value)}
                  className="rounded-lg px-4 py-2 text-sm bg-gray-50 text-gray-700 focus:outline-none"
                >
                  <option>Online</option>
                  <option>Offline</option>
                </select>

                <select
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                  className="rounded-lg px-4 py-2 text-sm bg-gray-50 text-gray-700 focus:outline-none"
                >
                  <option>Active</option>
                  <option>De-Active</option>
                </select>

                <button
                  onClick={() => setShowAddAgentModal(true)}
                  className="inline-flex items-center gap-2 bg-[#515DEF] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3F4BDA] transition-colors"
                >
                  <Plus size={16} /> Add New Agent
                </button>
              </div>
            </div>

            {/* Table Rows */}
            {agents.map((a) => (
              <div
                key={a.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 bg-gray-50 rounded-lg mb-2"
              >
                {/* Agent */}
                <div className="md:col-span-3 flex items-center gap-3 pl-4">
                  <img
                    src={a.avatar}
                    alt={a.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {a.name}
                  </span>
                </div>

                {/* Email */}
                <div className="md:col-span-2 text-sm text-gray-600 truncate">
                  {a.email}
                </div>

                {/* Phone */}
                <div className="md:col-span-2 text-sm text-gray-600">
                  {a.phone}
                </div>

                {/* Gender */}
                <div className="md:col-span-2">
                  <Pill tone={a.gender === "Male" ? "blue" : "yellow"}>
                    {a.gender}
                  </Pill>
                </div>

                {/* Status */}
                <div className="md:col-span-2">
                  <Pill tone={a.status === "Active" ? "green" : "red"}>
                    {a.status}
                  </Pill>
                </div>

                {/* Action */}
                <div className="md:col-span-1 flex justify-end relative pr-4">
                  <button
                    onClick={() => setOpenMenu(openMenu === a.id ? null : a.id)}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <MoreHorizontal size={18} className="text-gray-500" />
                  </button>

                  {openMenu === a.id && (
                    <div className="absolute right-0 top-10 w-48 bg-white rounded-lg shadow-lg z-10 overflow-hidden border border-gray-100">
                      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 border-b border-gray-100">
                        Active
                      </button>
                      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 border-b border-gray-100">
                        De-Active
                      </button>
                      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-yellow-600 border-b border-gray-100">
                        Send Warning
                      </button>
                      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-red-600 border-b border-gray-100">
                        Cancel Registration
                      </button>
                      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-red-600 border-b border-gray-100">
                        Restrict Account
                      </button>
                      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-red-600">
                        Restrict Wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Profile - 25% width */}
          <div className="xl:w-[25%] bg-white rounded-2xl p-6 shadow-sm">
            {/* Profile */}
            <div className="flex flex-col items-center text-center pb-6 mb-6 border-b">
              <img
                src={Image2}
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
              {/* Ratings */}
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <svg viewBox="0 0 36 36" className="-rotate-90 w-full h-full">
                    {/* background ring */}
                    <path
                      d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#FEF3C7"
                      strokeWidth="3"
                    />

                    {/* progress */}
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

                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900">
                    9/10
                  </span>
                </div>

                <p className="text-xs text-gray-500">Ratings</p>
              </div>

              {/* Response */}
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <svg viewBox="0 0 36 36" className="-rotate-90 w-full h-full">
                    {/* background ring */}
                    <path
                      d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#DBEAFE"
                      strokeWidth="3"
                    />

                    {/* progress */}
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

                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900">
                    5 min
                  </span>
                </div>

                <p className="text-xs text-gray-500">Response</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Agent Modal */}
      {showAddAgentModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          {/* Modal */}
          <div className="bg-white w-full max-w-[400px] rounded-xl shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Add New Agent
              </h2>
              <button
                onClick={() => setShowAddAgentModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Agent Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Agent name"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Gender
                </label>
                <input
                  type="text"
                  placeholder="Enter Gender"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full border rounded-lg px-3 py-2 text-sm outline-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 flex gap-3">
              <button
                onClick={() => setShowAddAgentModal(false)}
                className="flex-1 border rounded-sm py-3 text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 bg-[#515DEF] text-white rounded-sm py-3 text-sm hover:bg-[#3F4BDA]">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllAgentsPage;
