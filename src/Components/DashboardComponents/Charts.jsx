import { MoreVertical } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Line chart data
const earningsData = [
  { month: "Jan", value: 55 },
  { month: "Feb", value: 32 },
  { month: "Mar", value: 58 },
  { month: "Apr", value: 35 },
  { month: "May", value: 48 },
  { month: "Jun", value: 20 },
  { month: "Jul", value: 32 },
  { month: "Aug", value: 36 },
  { month: "Sep", value: 68 },
  { month: "Oct", value: 72 },
];

// Pie chart data
const analyticsData = [
  { name: "Agents", value: 30 },
  { name: "Booked Jobs", value: 50 },
  { name: "Refund/Cancel", value: 20 },
];

const COLORS = ["#facc15", "#3b82f6", "#fb7185"];

const Charts = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 w-full py-6 lg:pr-10">
      {/* Earnings Chart - Takes 2/3 on large screens */}
      <div className="xl:col-span-2 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">Earnings</h2>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={earningsData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 10, sm: 12 }}
                interval="preserveStartEnd"
                minTickGap={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 10, sm: 12 }}
                width={30}
                padding={{ top: 10, bottom: 10 }}
              />
              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  borderRadius: "8px",
                  border: "none",
                  color: "#fff",
                  fontSize: "12px",
                  padding: "8px 12px",
                }}
                labelStyle={{ color: "#fff", fontSize: "12px" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#gradient)"
                strokeWidth={3}
                dot={{ r: 4, fill: "#fff", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Analytics Chart - Takes 1/3 on large screens */}
      <div className="xl:col-span-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">Analytics</h2>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="h-[200px] sm:h-[240px] md:h-[260px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={analyticsData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {analyticsData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">80%</h3>
            <p className="text-gray-500 text-xs md:text-sm">Transactions</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 text-xs md:text-sm text-gray-600">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-400 rounded-full"></span>
            <span className="whitespace-nowrap">Agents</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full"></span>
            <span className="whitespace-nowrap">Booked Jobs</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-pink-400 rounded-full"></span>
            <span className="whitespace-nowrap">Refund/Cancel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;