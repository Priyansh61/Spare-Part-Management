import React, { useEffect, useState } from "react";
import ComplaintLists from "../../../Data/complaintLists.json";
import { FiMail } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";
import IMEILOGO from "../../../assets/imei-icon.png";
import { Link } from "react-router-dom";
import LoaderServiceComplaint from "../../Loader/LoaderServiceComplaint";

export default function ComplainLists() {
  const [isLoading, setIsLoading] = useState(true);
  const [complaints, setComplaints] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  useEffect(() => {
    setTimeout(() => {
      setComplaints(ComplaintLists);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mt-12">
      <h1 className="flex items-center justify-center mb-5 text-3xl font-bold">
        List Of Complaints
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading
            ? complaints.map((_, index) => {
                return <LoaderServiceComplaint key={index} />;
              })
            : complaints.map((details, index) => {
                return (
                  <Link to={`/complaint-list/${details.id}`}>
                    <div
                      key={details.id}
                      className="relative bg-white py-6 px-6 rounded-3xl w-72 my-4 shadow-xl hover:scale-105 duration-200 ease-in-out"
                    >
                      <div className=" text-white w-10 h-10 flex justify-center absolute rounded-[100%] items-center shadow-xl bg-orange-500 -right-3 -top-3">
                        {index + 1}
                      </div>
                      <p className="text-xl font-semibold my-2">
                        {details.firstname} {details.lastname}
                      </p>
                      <div className="flex space-x-2 text-gray-600 text-sm">
                        <FiMail className="h-5 w-5 text-orange-500" />
                        <p>{details.email}</p>
                      </div>
                      <div className="flex space-x-2 text-gray-600 text-sm my-3">
                        <BsPhone className="h-5 w-5  text-orange-500" />
                        <p>{details.phone_number}</p>
                      </div>
                      <div className="border-t-2"></div>

                      <div className="flex justify-between">
                        <div className="my-2">
                          <p className="font-semibold text-base mb-2">
                            {details.phone_model}
                          </p>
                          <div className="flex space-x-2 mb-2 text-gray-600 text-sm">
                            <MdOutlineReportProblem className="h-5 w-5 text-orange-500" />
                            <p>{details.issues}</p>
                          </div>
                          <div className="flex space-x-2 text-gray-600 text-sm">
                            <img src={IMEILOGO} className="h-4 " />
                            <p>{details.imei_number}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}
