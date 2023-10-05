import React from "react";
import { Link, useParams } from "react-router-dom";
import complainLists from "../../../Data/complaintLists.json";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";
import IMEILOGO from "../../../assets/imei-icon.png";
import CellPhone from "../../../assets/cellphone.png";

export default function ComplainDetails() {
  const { complaintId } = useParams();
  const details = complainLists.find((prod) => prod.id === complaintId);
  return (
    <div className="m-12 max-sm:mx-5">
      <div className="flex items-center justify-center">
        <div className="relative bg-white py-6 px-20 rounded-3xl w-11/12 my-4 shadow-xl max-md:w-full max-sm:p-6">
          <h1 className="flex items-center justify-center text-3xl max-sm:text-2xl font-semibold mb-5 max-sm:items-start max-sm:justify-start">
            Personal Details
          </h1>
          <p className="text-2xl font-semibold my-2 max-sm:text-xl">
            {details.firstname} {details.lastname}
          </p>
          <div className="flex items-center gap-40 my-5 max-lg:gap-0 max-lg:justify-between max-md:items-start max-md:flex-col">
            <div className="flex space-x-2 text-gray-600 text-l">
              <FiMail className="h-6 w-6 text-orange-500" />
              <p>{details.email}</p>
            </div>
            <div className="flex space-x-2 text-gray-600 text-l my-3">
              <BsPhone className="h-6 w-6  text-orange-500" />
              <p>{details.phone_number}</p>
            </div>
          </div>
          <div className="border-t-2 my-5"></div>

          <div className="my-2">
            <h1 className="flex items-center justify-center text-3xl max-sm:text-2xl font-semibold mb-5 max-sm:items-start max-sm:justify-start">
              Phone Details
            </h1>
            <p className="font-semibold text-2xl max-sm:text-xl mb-2">
              {details.phone_model}
            </p>
            <div className="flex items-center gap-56 my-5 max-lg:gap-0 max-lg:justify-between max-md:items-start max-md:flex-col">
              <div className="flex space-x-2 text-gray-600 text-l">
                <MdOutlineReportProblem className="h-6 w-6 text-orange-500" />
                <p>{details.issues}</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 text-l my-3">
                <img src={IMEILOGO} className="h-5 " />
                <p>{details.imei_number}</p>
              </div>
            </div>
            <div className="flex my-6 items-center space-x-2 text-gray-600 text-l">
              <img src={CellPhone} className="h-7" />
              <p>{details.description}</p>
            </div>
          </div>
          <div className="border-t-2 my-5"></div>
          <div className=" flex justify-center items-center">
            <Link
              to="/requiredParts"
              className="w-1/2 xl:w-2/5 md:w-1/2 text-center max-sm:w-full uppercase text-sm font-bold tracking-wide bg-orange-500 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Resolve
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
