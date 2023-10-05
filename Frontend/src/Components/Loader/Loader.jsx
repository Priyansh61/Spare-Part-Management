import React from "react";

export default function Loader() {
  return (
    <div className="relative bg-gray-100 pt-6 px-6 rounded-3xl w-72 my-4 shadow-xl">
      <div className="w-10 h-10 flex justify-center absolute rounded-[100%] items-center animate-pulse shadow-xl -right-3 -top-3  mb-4 bg-gray-200"></div>
      <p className="h-5 bg-gray-200 rounded-full w-36 mb-2 animate-pulse"></p>
      <div className="flex space-x-2 text-sm animate-pulse -mb-3">
        <div className="h-7 w-7 mb-4 bg-gray-200 rounded-full"></div>
        <p className="relative h-3 top-2 bg-gray-200 rounded-full w-48 "></p>
      </div>
      <div className="flex space-x-2 text-sm animate-pulse">
        <div className="h-7 w-7 mb-4 bg-gray-200 rounded-full "></div>
        <p className="relative h-3 top-2 bg-gray-200 rounded-full w-48 "></p>
      </div>
      <div className="border-t-2"></div>
      <div className="flex justify-between">
        <div className="my-2">
          <p className="h-5 bg-gray-200 rounded-full w-36 mb-2 animate-pulse"></p>
          <div className="flex space-x-2 text-sm animate-pulse -mb-3">
            <div className="h-7 w-7 mb-4 bg-gray-200 rounded-full "></div>
            <p className="relative h-3 top-2 bg-gray-200 rounded-full w-48 "></p>
          </div>
          <div className="flex space-x-2 text-sm animate-pulse">
            <div className="h-7 w-7 mb-4 bg-gray-200 rounded-full"></div>
            <p className="relative h-3 top-2 bg-gray-200 rounded-full w-48 "></p>
          </div>
        </div>
      </div>
    </div>
  );
}
