import React from "react";
import NavBar from "./navBar";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between w-full gap-2 items-center  py-3 px-3  text-white bg-gray-900 shadow-lg">
      <div className="flex items-center ">
        <img src="/des.png" alt="Logo" className="w-12 h-12 mr-4" />
        <div className="text-sm font-bold md:text-xl">
        <Link to="/">
          Emerging Production Technologies A3: Project
        </Link>
        </div>
      </div>
      <div>
        <NavBar />
      </div>
      {/* <div className="flex gap-5 items-center">
        <button className="px-4 py-1 border border-gray-400 rounded-md flex items-center justify-center">
          Login
        </button>
        <button className="px-4 py-1 bg-blue-700  text-white rounded-lg flex items-center justify-center">
          Signup for free
        </button>
      </div> */}
    </header>
  );
};

export default Header;
