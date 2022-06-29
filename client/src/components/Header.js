import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="mx-12 border-b-2 border-b-slate flex items-center justify-between font-semibold">
      <div className="text-3xl font-bold p-6 text-blue-500">
        <Link to="/dashboard">LoginProj</Link>
      </div>
      <ul className="flex justify-between w-48">
        <li className="text-2xl text-blue-500 hover:text-blue-800">
          <Link to="/login">Login</Link>
        </li>
        <li className="text-2xl text-blue-500 hover:text-blue-800">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
