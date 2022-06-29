import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import control from "../assets/control.png";
import { FaChartLine, FaList, FaCalendar, FaWrench } from "react-icons/fa";

function Dashboard() {
  const [open, setOpen] = useState(true);
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
    <div className="flex h-screen">
      <div className={`${open ? "w-72" : "w-16"} bg-blue-900 relative`}>
        <img
          src={control}
          alt="close"
          onClick={() => setOpen(!open)}
          className={`absolute rounded-full cursor-pointer text-white -right-4 top-10 ${
            !open && "rotate-180"
          }`}
        />
        <ul>
          <li
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-56 text-2xl cursor-pointer hover:bg-blue-800 rounded p-2`}
          >
            <FaChartLine />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Dashboard
            </div>
          </li>
          <li
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-10 text-2xl cursor-pointer hover:bg-blue-800 rounded p-2`}
          >
            <FaList />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Fake Jira
            </div>
          </li>
          <li
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-10 text-2xl cursor-pointer hover:bg-blue-800 rounded p-2`}
          >
            <FaCalendar />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Calendar
            </div>
          </li>
          <li
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-10 text-2xl cursor-pointer hover:bg-blue-800 rounded p-2`}
          >
            <FaWrench />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Settings
            </div>
          </li>
        </ul>
      </div>
      <div className="text-2xl font-semibold p-6">Homepage</div>
    </div>
  );
}

export default Dashboard;
