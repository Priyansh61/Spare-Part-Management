import React from "react";
import WarehouseStocksJson from "../../../Data/WarehouseStocks.json";

export default function WarehouseStocks() {
  return (
    <div className="m-12 max-sm:mx-5">
      <h1 className="flex items-center justify-center mb-5 text-3xl font-bold">
        Warehouse Order Requests
      </h1>
      <h3 className="flex items-center justify-center mb-5 text-xl font-bold">
        Total Number of Orders : {WarehouseStocksJson.length}
      </h3>
      {WarehouseStocksJson.map((details, index) => {
        return (
          <div key={index} className="flex gap-4 items-center justify-center">
            <span className=" text-xl text-orange-500">{index + 1}.</span>
            <div className="relative flex flex-col gap-4 bg-white py-4 px-10 rounded-3xl w-11/12 my-4 shadow-xl max-md:w-full max-sm:p-6">
              <div className=" flex gap-4 items-center justify-between w-full">
                <p className="text-xl font-semibold ">{details.part}</p>
              </div>
              <p className="font-semibold text-base flex gap-4">
                <span>Quantity</span><p>{details.quantity}</p>
              </p>
              <div className="flex justify-center gap-6 max-sm:flex-col max-sm:gap-0">
                <button className=" w-1/5 mt-4 xl:w-2/5 md:w-1/2 text-center max-sm:w-full uppercase text-sm font-bold tracking-wide bg-orange-500 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline">
                  Ship Order
                </button>
                <button className=" w-1/5 mt-4 xl:w-2/5 md:w-1/2 text-center max-sm:w-full uppercase text-sm font-bold tracking-wide bg-orange-500 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline">
                  Order Pending
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
