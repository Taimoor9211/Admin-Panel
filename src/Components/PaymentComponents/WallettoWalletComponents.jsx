import React from "react";
import { TrendingUp, TrendingDown, Search, CreditCard } from "lucide-react";
import Image from "../../assets/Images/Image.png";
import Image1 from "../../assets/Images/Image1.jpg";
import Image2 from "../../assets/Images/Image2.jpg";
import Image3 from "../../assets/Images/Image3.jpg";
import Image4 from "../../assets/Images/Image4.jpg";
import { useNavigate } from "react-router-dom";

const WallettoWalletComponents = () => {
  const navigate = useNavigate();

  return (
    <div className="flex p-3 sm:p-4 md:p-6 min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row -mx-2 md:-mx-4">
          {/* Left Card Section */}
          <div className="w-full lg:w-1/3 px-2 md:px-4 mb-6 lg:mb-0">
            <div className="relative">
              {/* card */}
              <img
                src={Image}
                alt="Credit Card"
                className="w-full rounded-xl shadow-sm"
              />

              {/* BALANCE CARD */}
              <div className="mt-4 sm:mt-6 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Your Balance</div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-2">
                  <div className="text-xl sm:text-2xl font-semibold mr-3">
                    $5240.00
                  </div>
                  <div className="flex space-x-3 mt-2 sm:mt-0">
                    <span className="text-green-500 text-xs flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> 23.65%
                    </span>
                    <span className="text-red-500 text-xs flex items-center">
                      <TrendingDown className="w-3 h-3 mr-1" /> 10.40%
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between text-sm mt-4 space-y-3 sm:space-y-0">
                  <div>
                    <div className="text-gray-500">Currency</div>
                    <div>USD / US Dollar</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Status</div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Active
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => navigate("/send")}
                  className="bg-indigo-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  Send Amount
                </button>
                <button
                  onClick={() => navigate("/withdraw")}
                  className="bg-indigo-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  Withdraw Amount
                </button>
                <button
                  onClick={() => navigate("")}
                  className="bg-indigo-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  Wallet to Wallet
                </button>
                <button
                  onClick={() => navigate("/transactions")}
                  className="bg-indigo-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  Transaction History
                </button>
              </div>
            </div>
          </div>

          {/* Right Dashboard Section */}
          <div className="w-full lg:w-2/3 px-2 md:px-4">
            <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
              Wallet to Wallet
            </h1>
            <h3 className="font-medium text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">
              Review your details and complete your Payment.
            </h3>

            {/* Balance Cards */}
            <div className="flex flex-col sm:flex-row -mx-2 mb-4 sm:mb-6 md:mb-8">
              <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4 sm:mb-0">
                <div className="bg-gray-800 rounded-lg p-4 text-white shadow-sm h-full">
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center mr-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="text-gray-300 text-sm">Total balance</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">$5240.21</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  Enter Amount
                </label>
                <input
                  type="text"
                  placeholder="e.g., 50$"
                  className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  Wallet Holder's Name
                </label>
                <input
                  type="text"
                  placeholder="Wallet Holder's Name"
                  className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  Wallet Holder's ID
                </label>
                <input
                  type="text"
                  placeholder="Wallet Holder's ID"
                  className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                />
              </div>

              <div className="pt-2">
                <button className="w-full sm:w-[200px] bg-blue-600 text-white font-medium py-3 sm:py-2 rounded-lg hover:bg-blue-700 transition">
                  Send Amount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallettoWalletComponents;