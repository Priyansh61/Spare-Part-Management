import React, { useContext } from "react";
import ServiceCenterPartsContext from "../../../Context/ServiceCenter/ServiceCenterPartsContext";
import { ImCross } from "react-icons/im";

export default function AvailableParts(props) {
  const {unAvailableParts} = useContext(ServiceCenterPartsContext);
  return props.trigger ? (
    <div className="fixed top-0 left-0 h-[100vh] px-6 w-full flex justify-center items-center bg-white bg-opacity-80 ">
      <div className="flex items-center justify-center max-sm:mx-5 max-md:w-full">
        <div className="relative bg-white py-6 px-20 rounded-3xl w-11/12 my-4 shadow-xl max-md:w-full max-sm:p-6">
          <button
            onClick={() => props.setTrigger(false)}
            className=" text-white w-10 h-10 flex justify-center absolute rounded-[100%] items-center shadow-xl bg-orange-500 -right-3 -top-3"
          >
            <ImCross />
          </button>
          {unAvailableParts.map((parts) => {
            return (
              <div className="flex justify-between items-center">
                <h1 className="text-xl">{parts}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;
}
