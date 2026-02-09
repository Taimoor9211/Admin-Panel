import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, TrendingUp, TrendingDown } from "lucide-react";
import Image from "../../assets/Images/Image.png";
import Image1 from "../../assets/Images/Image1.jpg";
import Image2 from "../../assets/Images/Image2.jpg";
import Image3 from "../../assets/Images/Image3.jpg";
import Image4 from "../../assets/Images/Image4.jpg";
import { useNavigate } from "react-router-dom";

const PaymentDashboard = () => {
  const navigate = useNavigate();
  const chartData = [
    { date: "Apr 14", income: 3000, withdraw: 4000 },
    { date: "Apr 15", income: 5000, withdraw: 4500 },
    { date: "Apr 16", income: 4500, withdraw: 5000 },
    { date: "Apr 17", income: 3500, withdraw: 5500 },
    { date: "Apr 18", income: 2500, withdraw: 4800 },
    { date: "Apr 19", income: 4000, withdraw: 3000 },
    { date: "Apr 20", income: 4500, withdraw: 2500 },
  ];

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
            {/* Balance Cards */}
            <div className="flex flex-col sm:flex-row -mx-2 mb-4 sm:mb-6 md:mb-8">
              <div className="w-full sm:w-1/3 px-2 mb-4 sm:mb-0">
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

              <div className="w-full sm:w-1/3 px-2 mb-4 sm:mb-0">
                <div className="bg-gray-100 rounded-lg p-4 shadow-sm h-full">
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
                    </div>
                    <div className="text-gray-500 text-sm">Total Deposit</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">$250.80</div>
                </div>
              </div>

              <div className="w-full sm:w-1/3 px-2">
                <div className="bg-gray-100 rounded-lg p-4 shadow-sm h-full">
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
                    </div>
                    <div className="text-gray-500 text-sm">Total Sent</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">$550.25</div>
                </div>
              </div>
            </div>

            {/* Working Capital Graph */}
            <div className="bg-white rounded-lg p-4 mb-4 sm:mb-6 md:mb-8 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div className="text-lg font-medium mb-2 sm:mb-0">
                  Working Capital
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
                  <div className="flex items-center mr-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-1"></div>
                    <div className="text-sm text-gray-500">Income</div>
                  </div>
                  <div className="flex items-center mr-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <div className="text-sm text-gray-500">Withdraw</div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Last 7 days</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              <div className="h-48 sm:h-56 md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="#6366F1"
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="withdraw"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={false}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div className="text-lg font-medium mb-2 sm:mb-0">
                  Recent Transactions
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Last 7 days</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center mb-3 sm:mb-0">
                      <img
                        src={transaction.img}
                        alt={transaction.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <div className="font-medium text-sm sm:text-base">
                          {transaction.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        transaction.type === "credit"
                          ? "text-green-500 font-medium"
                          : "text-red-500 font-medium"
                      }
                    >
                      {transaction.type === "credit" ? "+ " : "- "}$
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

export default PaymentDashboard;