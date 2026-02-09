import { useNavigate } from "react-router-dom";
import { TrendingUp, TrendingDown, CreditCard, Search } from "lucide-react";
import Image from "../../assets/Images/Image.png";

const SendAmountComponents = () => {
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
                  onClick={() => navigate("")}
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
                  onClick={() => navigate("/wallet")}
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
              Send Amount
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

              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search bank"
                  className="w-full sm:w-3/4 pl-10 sm:pl-12 pr-4 py-2 sm:py-3 bg-[#C5C5C526] rounded-full"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  Account Holder's Name
                </label>
                <input
                  type="text"
                  placeholder="Account Holder's Name"
                  className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  Sort code
                </label>
                <input
                  type="text"
                  placeholder="Sort code"
                  className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900 mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  placeholder="Account Number"
                  className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                />
              </div>

              <div className="flex items-center my-8">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-3 text-xs text-gray-400 uppercase">OR</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* Card Payment */}
              <div className="mt-6 sm:mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt="Visa"
                    className="h-5 sm:h-6"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    className="h-5 sm:h-6"
                  />
                </div>

                <div className="relative mb-4">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full pl-10 pr-4 py-3 bg-[#C5C5C526] rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-medium text-gray-900 mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 sm:mb-8">
                  <div className="flex-1">
                    <label className="block font-medium text-gray-900 mb-2">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM / DD / YY"
                      className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium text-gray-900 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="000"
                      className="w-full px-4 py-3 bg-[#C5C5C526] rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  className="w-full sm:w-[200px] bg-blue-600 text-white font-medium py-3 sm:py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Withdraw Amount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendAmountComponents;