import React, { useState } from "react";
import Pill from "./Pill";
import RestrictAccountModal from "./RestrictAccountModal";
import RestrictWalletModal from "./RestrictWalletModal";
import AgentRow from "./AgentRow";
import ProfileSection from "./ProfileSection";

// Import images
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

const AllServiceProviders = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showRestrictAccountModal, setShowRestrictAccountModal] = useState(false);
  const [showRestrictWalletModal, setShowRestrictWalletModal] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        {/* Content */}
        <div className="flex flex-col xl:flex-row gap-2">
          {/* LEFT: Table - 70% width */}
          <div className="xl:w-[75%] bg-white rounded-xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 mb-6">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Service Provider
              </h2>

              <div className="flex flex-col sm:flex-row gap-1">
                {/* Postcode Search Input */}
                <input
                  type="text"
                  placeholder="Enter Postcode ....."
                  className="rounded-lg px-1 py-2 text-xs bg-gray-50 text-gray-700 focus:outline-none w-full sm:w-auto"
                />

                {/* Status Select */}
                <select className="rounded-lg px-1 py-1 text-xs bg-gray-50 text-gray-700 focus:outline-none">
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>Deactive</option>
                  <option>Cancelled registration</option>
                  <option>Restrict Account</option>
                  <option>Restrict Wallet</option>
                </select>

                {/* Miles Select */}
                <select className="rounded-lg px-1 py-1 text-xs bg-gray-50 text-gray-700 focus:outline-none">
                  <option>Select Miles</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </select>

                {/* Category Select */}
                <select className="rounded-lg px-1 py-1 text-xs bg-gray-50 text-gray-700 focus:outline-none">
                  <option>Select Category</option>
                  <option>Home Improvements</option>
                  <option>Education</option>
                  <option>Entertainment</option>
                  <option>Tradesman & Construction</option>
                  <option>Transport</option>
                  <option>Health & beauty</option>
                  <option>Food & Drinks</option>
                </select>
              </div>
            </div>

            {/* Table Rows */}
            {agents.map((agent) => (
              <AgentRow
                key={agent.id}
                agent={agent}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                setShowRestrictAccountModal={setShowRestrictAccountModal}
                setShowRestrictWalletModal={setShowRestrictWalletModal}
              />
            ))}
          </div>

          {/* RIGHT: Profile Section */}
          <ProfileSection />
        </div>
      </div>

      {/* Render modals */}
      <RestrictAccountModal
        showModal={showRestrictAccountModal}
        closeModal={() => setShowRestrictAccountModal(false)}
      />

      <RestrictWalletModal
        showModal={showRestrictWalletModal}
        closeModal={() => setShowRestrictWalletModal(false)}
      />
    </div>
  );
};

export default AllServiceProviders;