import React, { useContext, useState } from "react";
import ServiceCenterPartsContext from "../../../Context/ServiceCenter/ServiceCenterPartsContext";
import { ImCross } from "react-icons/im";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function AvailableParts(props) {
  const { unAvailableParts } = useContext(ServiceCenterPartsContext);

  const initialCounts = Array.isArray(unAvailableParts)
    ? new Array(unAvailableParts.length).fill(1)
    : [];

  const [counts, setCounts] = useState(initialCounts);

  console.log(counts);
  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    if (counts[index] > 1) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  return props.trigger ? (
    <div className="fixed top-0 left-0 h-[100vh] px-6 w-full flex justify-center items-center bg-white bg-opacity-80 ">
      <div className="relative bg-white py-6 px-20 rounded-3xl w-11/12 my-4 shadow-xl max-md:w-full max-sm:p-6">
        <button
          onClick={() => props.setTrigger(false)}
          className=" text-white w-10 h-10 flex justify-center absolute rounded-[100%] items-center shadow-xl bg-orange-500 -right-3 -top-3"
        >
          <ImCross />
        </button>
        {unAvailableParts.length === 0 ? (
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-bold text-center mb-4">
              All Parts are available in Service Center
            </h1>
            <button className="flex justify-center items-center w-1/2 mt-4 xl:w-2/5 md:w-1/2 text-center max-sm:w-full uppercase text-sm font-bold tracking-wide bg-orange-500 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline">
              Proceed with Service
            </button>
          </div>
        ) : (
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-bold text-center mb-4">
              Unavailable Parts
            </h1>
            {unAvailableParts.map((parts, index) => (
              <div
                className="flex w-full justify-between items-center gap-8 mb-4 md:px-20"
                key={parts}
              >
                <div className="flex gap-3">
                  <h1 className="text-xl">{index + 1}.</h1>
                  <h1 className="text-xl">{parts}</h1>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleIncrement(index)}
                    className=" text-white w-8 h-8 flex justify-center rounded-full items-center shadow-xl bg-orange-500"
                  >
                    <BiPlus />
                  </button>
                  <div className="h-8 w-8 bg-gray-100 flex justify-center rounded-full items-center">
                    {counts[index]}
                  </div>
                  <button
                    onClick={() => handleDecrement(index)}
                    className=" text-white w-8 h-8 flex justify-center rounded-full items-center shadow-xl bg-orange-500"
                  >
                    <BiMinus />
                  </button>
                </div>
              </div>
            ))}
            <button className="flex justify-center items-center w-1/2 mt-4 xl:w-2/5 md:w-1/2 text-center max-sm:w-full uppercase text-sm font-bold tracking-wide bg-orange-500 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline">
              Order Parts
            </button>
          </div>
        )}
      </div>
    </div>
  ) : null;
}
