import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav pb-12">
      <div className="bg-white flex h-[56PX] w-full shadow-[0_6px_16px_0_#1919190f] px-6 items-center justify-between z-10 fixed top-0">
        <Link to="/">
          <div className="logo flex gap-2">
            <img src={Logo} alt="Logo" width={30} />
            <h1 className="relative top-1 font-medium">Xiaomi Ode2Code 3.0</h1>
          </div>
        </Link>

        <div className=" max-md:hidden">
          <ul className="flex gap-10">
            <li>
              <a
                href="/"
                className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Check Status
              </a>
            </li>

            <li>
              <Link
                to="/"
                className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Admin Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="relative md:hidden">
          <button
            className="text-gray-500 space-y-2 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            <span
              className={`${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              } block h-[3px] w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out`}
            ></span>
            <span
              className={`${
                isOpen ? "hidden" : ""
              } block h-[3px] w-6 origin-center rounded-full bg-slate-500 transition-transform ease-in-out`}
            ></span>
            <span
              className={`${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              } block h-[3px] w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out`}
            ></span>
          </button>

          {/* List of Hamburger Menu */}

          <div
            className={`${
              isOpen
                ? "opacity-100 visible right-0"
                : "opacity-100 invisible -right-full"
            } block duration-200 fixed top-16 w-52 h-[88%] m-0 bg-white border border-gray-200 shadow-lg rounded-lg`}
          >
            <ul className="flex flex-col text-left justify-center items-left p-10 gap-5">
              <li>
                <a
                  href="/"
                  className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Check Status
                </a>
              </li>

              <li>
                <Link
                  to="/"
                  className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
