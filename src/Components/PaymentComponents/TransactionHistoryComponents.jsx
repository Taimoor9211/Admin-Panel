import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChevronDown, TrendingUp, TrendingDown, Search } from "lucide-react";
import Image from "../../assets/Images/Image.png";
import Image1 from "../../assets/Images/Image1.jpg";
import Image2 from "../../assets/Images/Image2.jpg";
import Image3 from "../../assets/Images/Image3.jpg";
import Image4 from "../../assets/Images/Image4.jpg";
import { useNavigate } from "react-router-dom";

const TransactionHistoryComponents = () => {
  const navigate = useNavigate();

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      img: Image1,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "credit",
    },
    {
      id: 2,
      img: Image2,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "debit",
    },
    {
      id: 3,
      img: Image3,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "credit",
    },
    {
      id: 4,
      img: Image4,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "debit",
    },
    {
      id: 5,
      img: Image1,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "credit",
    },
    {
      id: 6,
      img: Image2,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "debit",
    },
    {
      id: 7,
      img: Image3,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "credit",
    },
    {
      id: 8,
      img: Image4,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "debit",
    },
    {
      id: 9,
      img: Image1,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "credit",
    },
    {
      id: 10,
      img: Image2,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "debit",
    },
    {
      id: 11,
      img: Image3,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "credit",
    },
    {
      id: 12,
      img: Image4,
      name: "Saleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: 435.0,
      type: "debit",
    },
  ];

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
                  onClick={() => navigate("/wallet")}
                  className="bg-indigo-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  Wallet to Wallet
                </button>
                <button
                  onClick={() => navigate("")}
                  className="bg-indigo-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-indigo-600 transition flex items-center justify-center"
                >
                  Transaction History
                </button>
              </div>
            </div>
          </div>

          {/* Right Dashboard Section */}
          <div className="w-full lg:w-2/3 px-2 md:px-4">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
              Transaction History
            </h1>

            <h3 className="text-sm text-gray-500 mb-4 sm:mb-6">
              Review your details and complete your Payment.
            </h3>

            {/* Tabs + Search */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
              {/* Tabs */}
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium overflow-x-auto whitespace-nowrap">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-1 shrink-0">
                  All Payments
                </button>

                <button className="text-gray-400 hover:text-black shrink-0">
                  Deposit
                </button>

                <button className="text-gray-400 hover:text-black shrink-0">
                  Withdraw
                </button>
              </div>

              {/* Search */}
              <div className="flex items-center gap-2 text-gray-400 w-full sm:w-auto">
                <Search className="w-4 h-4 shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none text-sm bg-transparent w-full sm:w-24"
                />
              </div>
            </div>

            {/* Today label */}
            <p className="text-xs text-gray-400 mb-3">Today</p>

            {/* Transactions */}
            <div className="bg-white rounded-xl">
              <div className="space-y-1">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    {/* Left Side */}
                    <div className="flex items-center gap-3">
                      <img
                        src={transaction.img}
                        alt={transaction.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />

                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {transaction.name}
                        </div>

                        <div className="text-xs text-gray-400">
                          {transaction.date}
                        </div>
                      </div>
                    </div>

                    {/* Amount */}
                    <div
                      className={`text-sm font-semibold ${
                        transaction.type === "credit"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.type === "credit" ? "+" : "-"} $
                      {transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryComponents;