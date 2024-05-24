import React from "react";
import logo from "../../assets/r.png";
const Navbar = () => {
  return (
    <div className="absolute top-0 bg-transparent z-10 w-full pt-8">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black opacity-[0.5] rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src={logo} className="w-16" alt="" srcset="" />
          <p className="ml-16 text-2xl font-mono font-bold bg-gradient-to-r from-orange-500 via-green-600 to-yellow-400 inline-block text-transparent bg-clip-text">
            Yummly Bakes
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Recipes</a>
            </li>
          </ul>
        </div>
        <div className="ml-16">
          <button className="btn text-xl text-white h-8 px-12 py-0 bg-gradient-to-r from-orange-600 to-green-400 hover:from-amber-600 hover:to-yellow-500 ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
