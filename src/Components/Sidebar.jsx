import React from "react";
import {
  LayoutDashboard,
  Briefcase,
  ClipboardList,
  Users,
  UserCog,
  MessageSquare,
  CreditCard,
  Megaphone,
  Moon,
  LogOut,
  ChevronLeft,
  ChevronRight,
  UserSearch,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({
  expanded,
  setExpanded,
  active,
  setActive,
  darkMode,
  setDarkMode,
}) => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Jobs", icon: Briefcase, path: "/jobs" },
    { name: "Requests", icon: ClipboardList, path: "/requests" },
    { name: "Leads", icon: UserSearch, path: "/leads" },
    { name: "Agents", icon: Users, path: "/agents" },
    { name: "Service Providers", icon: UserCog, path: "/service-providers" },
    { name: "Emails", icon: Mail, path: "/emails" },
    { name: "Communication", icon: MessageSquare, path: "/communication" },
    { name: "Payments", icon: CreditCard, path: "/payments" },
    { name: "Resolution", icon: CheckCircle, path: "/resolution" },
    { name: "Announcements", icon: Megaphone, path: "/Resolution" },
  ];

  return (
    <div
      className={`px-2 bg-gray-50 border-r border-gray-200 shadow-lg
  transition-all duration-300 ease-in-out
  flex flex-col
  ${expanded ? "w-64" : "w-20"} 
  min-h-screen`}
    >
      {/* Logo/Toggle */}
      <div className="flex justify-end items-center p-4 ">
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Menu */}
      <div className="px-2 py-24 flex flex-col flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center rounded-lg transition-all
                    ${
                      expanded
                        ? "gap-4 px-4 py-2 justify-start"
                        : "justify-center py-3"
                    }
                    ${
                      isActive
                        ? "bg-[#515DEF] text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  {expanded && (
                    <span className="text-[15px] whitespace-nowrap">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom Section */}
        <div className=" space-y-4 pt-18">
          {/* Dark Mode */}
          <div
            className={`flex items-center rounded-lg hover:bg-gray-100 transition-all
    ${expanded ? "justify-between px-4 py-3" : "justify-center py-3"}`}
          >
            <div className="flex items-center gap-4 text-gray-600 text-[15px]">
              <div className="w-10 h-10 flex items-center justify-center">
                <Moon size={22} />
              </div>
              {expanded && <span>Dark Mode</span>}
            </div>

            {expanded && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-11 h-5 rounded-full relative transition ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${
                    darkMode ? "translate-x-6" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {/* Logout */}
          <button
            className={`flex items-center rounded-lg transition-all
    ${expanded ? " px-4 py-3 w-full justify-start" : "justify-center py-3"}
    text-red-500 hover:bg-red-50`}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <LogOut size={22} />
            </div>
            {expanded && <span className="text-[15px]">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;