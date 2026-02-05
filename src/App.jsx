import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Jobs from "./Pages/Jobs.jsx";
import Requests from "./Pages/Requests.jsx";
import Agents from "./Pages/Agents.jsx";
import ServiceProviders from "./Pages/ServiceProviders.jsx";
import Communication from "./Pages/Communication.jsx";
import Payments from "./Pages/Payments.jsx";
import Announcements from "./Pages/Announcements.jsx";
import Leads from "./Pages/Leads.jsx";
import Emails from "./Pages/Emails.jsx";
import Resolution from "./Pages/Resolution.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="leads" element={<Leads />} />
          <Route path="requests" element={<Requests />} />
          <Route path="agents" element={<Agents />} />
          <Route path="service-providers" element={<ServiceProviders />} />
          <Route path="emails" element={<Emails />} />
          <Route path="communication" element={<Communication />} />
          <Route path="payments" element={<Payments />} />
          <Route path="resolution" element={<Resolution />} />
          <Route path="announcements" element={<Announcements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;