import React from "react";
import MobileRepair from "../../../assets/mobileRepair.png";

export default function LandingPage() {
  return (
    <div className="mt-4">
      <div className="flex justify-center items-center w-full">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-3xl">
                Registering a Complaint for <br />
                Mobile Repair Service
              </h1>
            </div>
            <form>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  type="number"
                  placeholder="Phone*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  type="text"
                  placeholder="IMEI Number*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  type="text"
                  placeholder="Phone Model*"
                />
                <select
                  id="problemDescription"
                  className="w-full bg-gray-100 text-gray-400 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                >
                  <option value="">Select Issue *</option>
                  <option value="Screen/Display">Screen/Display</option>
                  <option value="MotherBoard">MotherBoard</option>
                  <option value="Camera">Camera</option>
                  <option value="Charging">Charging</option>
                  <option value="Speaker">Speaker/Mic</option>
                  <option value="Battery">Battery</option>
                  <option value="Software">Software</option>
                  <option value="Other">Other Issues</option>
                </select>
                <textarea
                  placeholder="Description*"
                  className="w-full h-12 resize-none bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                ></textarea>
              </div>
            </form>
            <div className="my-2 w-full">
              <button className="uppercase text-sm font-bold tracking-wide bg-orange-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Register Complain
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-[25em] xl:w-2/6 lg:w-2/5 px-8 py-12 ml-auto bg-white rounded-2xl">
            <img src={MobileRepair} />
          </div>
        </div>
      </div>
    </div>
  );
}
