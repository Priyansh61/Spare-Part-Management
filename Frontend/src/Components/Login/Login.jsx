import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [serviceCategory, setServiceCategory] = useState();

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleServiceCategoryChange = (e) => {
    setServiceCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userName === "admin" &&
      password === "admin" &&
      serviceCategory === "PlanningTeam"
    ) {
      navigate("/customers-complaint");

    } else if (
      userName === "admin" &&
      password === "admin" &&
      serviceCategory === "ServiceCentres"
    ) {
      navigate("/complaint-list");
    }
    else if (
      userName === "admin" &&
      password === "admin" &&
      serviceCategory === "WarehouseCenters"
    ) {
      navigate("/warehouse");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="relative w-full h-[90vh] sm:flex sm:items-center sm:justify-center max-sm:mt-16 max-md:px-6">
      <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold text-center pb-5 leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="username"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Service Category
              </label>
              <select
                id="ServiceCategory"
                className="w-full bg-gray-100 mt-2 p-3 border text-black border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                value={serviceCategory}
                onChange={handleServiceCategoryChange}
              >
                <option value="">Select Service Category *</option>
                <option value="PlanningTeam">Planning Team</option>
                <option value="ServiceCentres">Service Centres</option>
                <option value="WarehouseCenters">Warehouse Centres</option>
              </select>
            </div>
            <div>
              <label
                for="username"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                User Name
              </label>
              <input
                type="text"
                name="UserName"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="username"
                value={userName}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded accent-orange-600 bg-gray-50"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="remember"
                    className="text-gray-500 light:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-orange-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white bg-primary-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
