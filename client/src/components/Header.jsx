import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-orange-700">JoeBiden</span>
            <span className="text-green-600"> Properties</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-5">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline hover:text-orange-700">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:underline  hover:text-orange-700">
              About
            </li>
          </Link>
          <Link to={"/signin"}>
            <li className=" text-slate-700 hover:underline  hover:text-orange-700 ">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
