import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav pb-12">
      <div className="bg-white flex h-[56PX] w-full shadow-[0_6px_16px_0_#1919190f] px-6 items-center justify-between z-10 fixed top-0">
        <div className="logo flex gap-2">
          <img src={Logo} alt="Logo" width={30} />
          <h1 className="relative top-1 font-medium">Xiaomi Ode2Code 3.0</h1>
        </div>

        <div>
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
              <a
                href="#"
                className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                About
              </a>
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
  );
}
