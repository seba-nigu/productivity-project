import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  const navigate = useNavigate();
  const [warningMessage, setWarningMessage] = useState("");
  const [showResults, setShowResults] = useState(false);
  // the login data from the form that will be passed to the backend
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  // the data inside the input set into "login" state
  const setInput = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const postLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email: login.email,
          password: login.password,
        }
      );
      window.localStorage.setItem("user", JSON.stringify(res));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setWarningMessage("Wrong credentials!");
      setShowResults(true);
    }
  };

  return (
    <>
      <Header />
      <div className="login-page h-3/4 flex justify-center items-center">
        <div className="w-1/3">
          <form
            className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={postLogin}
          >
            <div className="mb-4">
              <label className="text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
                type="email"
                name="email"
                placeholder="Email"
                onChange={setInput}
              />
            </div>
            <div className="mb-8">
              <label className="text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
                type="password"
                name="password"
                placeholder="Password"
                onChange={setInput}
              />
            </div>
            <div className="flex justify-between flex-col">
              <button
                type="submit"
                className="text-center cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <div className="flex flex-col mt-4 h-12 justify-between w-40">
                <Link
                  to="/register"
                  className="cursor-pointer font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  New here? SIGN UP
                </Link>
                <Link
                  to="/forgot"
                  className="cursor-pointer font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
          {showResults ? (
            <div className="text-xl font-bold p-4 text-center rounded mx-24 bg-black text-white">
              {warningMessage}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Login;
