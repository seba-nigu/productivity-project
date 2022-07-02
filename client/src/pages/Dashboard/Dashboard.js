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
  const dummyData = [
    {
      title: "TODO",
      items: [
        {
          taskId: 3,
          text: "This is bullshit",
        },
        {
          taskId: 4,
          text: "This is pretty nice",
        },
        {
          taskId: 5,
          text: "Chunky boy",
        },
      ],
    },
    {
      title: "In progress",
      items: [
        {
          taskId: 6,
          text: "This is bullshit",
        },
        {
          taskId: 7,
          text: "This is pretty nice",
        },
      ],
    },
    {
      title: "Done",
      items: [],
    },
  ];

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
    // for some reason tailwind min-h-screen class doesnt work, had to override it
    <div className="flex min-h-test font-mono">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jira" element={<Jira data={dummyData} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
