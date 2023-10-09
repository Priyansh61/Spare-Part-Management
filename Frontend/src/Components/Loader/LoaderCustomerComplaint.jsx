import React from "react";

export default function LoaderCustomerComplaint() {
  return (
    <div className="flex gap-4 items-center justify-center">
      <span className=" text-xl text-orange-500"></span>
      <div className="relative flex flex-col gap-4 bg-white py-4 px-10 rounded-3xl w-11/12 my-4 shadow-xl max-md:w-full max-sm:p-6">
        <div className=" flex gap-4 items-center justify-between w-full">
          <p className="h-5 bg-gray-200 rounded-full w-52 mb-2 animate-pulse"></p>
          <p className="h-3 bg-gray-200 rounded-full w-52 mb-2 animate-pulse"></p>
        </div>
        <p className="h-4 bg-gray-200 rounded-full w-1/2 mb-2 animate-pulse"></p>
        <p className="h-3 bg-gray-200 rounded-full w-1/2 mb-2 animate-pulse"></p>
      </div>
    </div>
  );
}
