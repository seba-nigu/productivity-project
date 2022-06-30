import axios from "axios";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";
import Calendar from "./Calendar";
import Homepage from "./Homepage";
import Jira from "./Jira";
import Settings from "./Settings";
import Sidebar from "./Sidebar";

function Dashboard() {
  let navigate = useNavigate();
  let config;
  if (localStorage.getItem("user")) {
    config = {
      headers: {
        authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    };
  }

  useEffect(() => {
    if (localStorage.getItem("user"))
      axios.get("http://localhost:5000/dashboard", config);
    else {
      navigate("/");
    }
  });

  return (
    <div className="flex h-screen font-mono">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jira" element={<Jira />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
