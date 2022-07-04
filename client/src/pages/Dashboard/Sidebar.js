import control from "../../assets/control.png";
import { FaChartLine, FaList, FaCalendar, FaWrench } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();
  return (
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
          onClick={() => navigate("/dashboard")}
          className="hover:bg-blue-800"
        >
          <div
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-40 text-2xl cursor-pointer rounded px-2 py-4`}
          >
            <FaChartLine />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Dashboard
            </div>
          </div>
        </li>
        <li
          onClick={() => navigate("/dashboard/jira")}
          className="hover:bg-blue-800"
        >
          <div
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-10 text-2xl cursor-pointer rounded px-2 py-4`}
          >
            <FaList />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Fake Jira
            </div>
          </div>
        </li>
        <li
          onClick={() => navigate("/dashboard/calendar")}
          className="hover:bg-blue-800"
        >
          <div
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-10 text-2xl cursor-pointer rounded px-2 py-4`}
          >
            <FaCalendar />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Calendar
            </div>
          </div>
        </li>
        <li
          onClick={() => navigate("/dashboard/settings")}
          className="hover:bg-blue-800"
        >
          <div
            className={`${
              (!open && "justify-center mx-0") || "justify-between mx-14"
            } flex items-center text-gray-300 mt-10 text-2xl cursor-pointer rounded px-2 py-4`}
          >
            <FaWrench />
            <div className={`origin-left font-bold ${!open && "hidden"}`}>
              Settings
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
