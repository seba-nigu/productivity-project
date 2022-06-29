import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  return <div className="flex h-screen">Dashboard</div>;
}

export default Dashboard;
