import React from 'react';
import { ShoppingCart, CheckCircle, XCircle, Calendar, Grid, Clock, Loader, Trash, AlertTriangle, DollarSign, User, CheckSquare } from 'lucide-react';

const JobStats = () => {
  const stats = [
    {
      title: "Total Jobs Today",
      value: "200",
      icon: Grid,
      color: "text-blue-600",
      linkColor: "text-blue-600",
      percentage: "0.29%"
    },
    {
      title: "Jobs Awaiting Agent",
      value: "150",
      icon: Clock,
      color: "text-green-600",
      linkColor: "text-green-600",
      percentage: "0.39%"
    },
    {
      title: "In Progress",
      value: "30",
      icon: Loader,
      color: "text-red-600",
      linkColor: "text-red-600",
      percentage: "0.48%"
    },
    {
      title: "Cancelled/Refund",
      value: "$1200",
      icon: Trash,
      color: "text-yellow-600",
      linkColor: "text-yellow-600",
      percentage: "0.15%"
    },
    {
      title: "Total Disputes",
      value: "200",
      icon: AlertTriangle,
      color: "text-purple-600",
      linkColor: "text-purple-600",
      percentage: "0.29%"
    },
    {
      title: "Revenue Today",
      value: "$25,000",
      icon: DollarSign,
      color: "text-[#32A071]",
      linkColor: "text-[#32A071]",
      percentage: "0.39%"
    },
    {
      title: "Online Agents",
      value: "30",
      icon: User,
      color: "text-[#515DEF]",
      linkColor: "text-[#515DEF]",
      percentage: "0.48%"
    },
    {
      title: "Pending Approval",
      value: "$1200",
      icon: CheckSquare,
      color: "text-[#00C8B3]",
      linkColor: "text-[#00C8B3]",
      percentage: "0.15%"
    }
  ];

  return (
    <div className="w-full mx-auto lg:pr-10">
      {/* Responsive Grid - Adjusts based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index} 
              className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Top Section - Title, Value and Icon */}
              <div className="flex items-center justify-between w-full mb-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-base lg:text-lg font-semibold text-gray-800 truncate">
                    {stat.title}
                  </h2>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </h2>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <Icon className={`h-5 w-5 lg:h-6 lg:w-6 ${stat.color}`} />
                </div>
              </div>

              {/* Bottom Section - Link and Percentage */}
              <div className="flex justify-between items-center w-full pt-3 border-t border-gray-100">
                <button className={`text-xs lg:text-sm font-medium ${stat.linkColor} hover:underline focus:outline-none`}>
                  View all jobs
                </button>
                <p className="text-xs lg:text-sm text-gray-500 font-medium">
                  {stat.percentage}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobStats;