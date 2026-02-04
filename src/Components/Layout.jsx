import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const pathToNameMap = {
      "/dashboard": "Dashboard",
      "/jobs": "Jobs",
      "/requests": "Requests",
      "/agents": "Agents",
      "/service-providers": "Service Providers",
      "/communication": "Communication",
      "/payments": "Payments",
      "/announcements": "Announcements",
    };

    if (pathToNameMap[location.pathname]) {
      setActive(pathToNameMap[location.pathname]);
    }
  }, [location]);

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1440px]">
        <Sidebar
          expanded={expanded}
          setExpanded={setExpanded}
          active={active}
          setActive={setActive}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar active={active} />
          <main className="flex-1 p-6">
            <Outlet context={{ active, setActive }} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;