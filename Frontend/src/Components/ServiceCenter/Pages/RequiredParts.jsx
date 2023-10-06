import React, { useContext, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import partsData from "../../../Data/partsData.json";
import availablePartSS from "../../../Data/AvailablePartsSS.json";
import ServiceCenterPartsContext from "../../../Context/ServiceCenter/ServiceCenterPartsContext";
import AvailableParts from "./AvailableParts";

export default function RequiredParts() {
  const [search, setSearch] = useState("");
  const [issues, setIssues] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [partsRequired, setPartsRequired] = useState([]);

  const { updateUnAvailableParts } = useContext(
    ServiceCenterPartsContext
  );

  const [buttonPopus, setButtonPopus] = useState(false);

  // Check AvailableParts
  const handleAvailableParts = (e) => {
    if (!issues) {
      alert("Please Fill The Required Fields");
    }
    e.preventDefault();
    var tempParts = [];

    for (const partName of partsRequired) {
      //check if an item exists in the JSON object
      const foundPart = availablePartSS.find(
        (item) => item.part_name === partName && item.quantity !== 0
      );

      if (!foundPart) {
        if (!tempParts.includes(partName)) {
          tempParts.push(partName);
        }
      }
    }

    updateUnAvailableParts(tempParts);
    tempParts = [];
  };

  // delete search history
  const handleCancel = (e) => {
    e.preventDefault();
    setSearch("");
    setSearchResult([]);
  };

  // search for parts
  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    const filteredData = partsData.filter((item) =>
      item.part.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredData);
  };

  // delete added parts
  const handleRemoveParts = (index) => {
    const updatedPartsRequired = [...partsRequired];
    updatedPartsRequired.splice(index, 1);
    setPartsRequired(updatedPartsRequired);
  };

  //add parts from search
  const handleRequiredParts = (part) => {
    setPartsRequired([...partsRequired, part]);
    setSearch("");
  };

  return (
    <>
      <div className="m-12 max-sm:mx-5">
        <div className="flex items-center justify-center">
          <div className="relative bg-white py-6 px-20 rounded-3xl w-11/12 my-4 shadow-xl max-md:w-full max-sm:p-6">
            <form
              className="grid grid-cols-1 gap-3 mt-5"
              onSubmit={handleAvailableParts}
            >
              <div>
                <h1 className="flex justify-center font-bold uppercase text-3xl max-sm:text-2xl">
                  Actual Issues
                </h1>
                <textarea
                  placeholder="Description*"
                  className="w-full h-20-full resize-none bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  value={issues}
                  onChange={(e) => setIssues(e.target.value)}
                ></textarea>
              </div>
              <div>
                <h1 className="flex mt-6 justify-center font-bold uppercase text-3xl max-sm:text-2xl">
                  Parts Required
                </h1>
              </div>
              <div className="relative flex items-center justify-center">
                <input
                  type="text"
                  name="partsName"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 block light:bg-gray-1000 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                  placeholder="Search Parts......"
                  value={search}
                  onChange={handleSearch}
                />
                {!search ? null : (
                  <button
                    className="absolute right-2 text-2xl top-5 text-orange-500 "
                    onClick={handleCancel}
                  >
                    <MdDeleteOutline />
                  </button>
                )}
              </div>
              {search ? (
                <div className="relative w-full h-auto flex p-4 -top-3 flex-col gap-2 bg-gray-100 border border-gray-300 focus:outline-none focus:shadow-outline rounded-lg focus:ring-primary-600 focus:border-primary-600 light:bg-gray-1000 light:border-gray-600 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500">
                  {searchResult.map((res) => (
                    <div
                      className="cursor-pointer"
                      onClick={() => handleRequiredParts(res.part)}
                    >
                      {res.part}
                    </div>
                  ))}
                </div>
              ) : null}
              {partsRequired.length ? (
                <div className="flex flex-col gap-4 mt-5 bg-gray-100 p-6  border-gray-300 focus:outline-none focus:shadow-outline rounded-lg">
                  {partsRequired.map((item, index) => (
                    <div className="relative flex items-center justify-between">
                      <div
                        className="bg-white p-2 text-l font-bold rounded-lg w-full"
                        key={index}
                      >
                        {index + 1}
                        {". "} {item}
                      </div>
                      <button
                        className="absolute right-2 text-2xl text-orange-500"
                        onClick={() => handleRemoveParts(index)}
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="my-2 w-full flex justify-center ">
                <button
                  onClick={() => setButtonPopus(true)}
                  className="w-1/2 mt-4 xl:w-2/5 md:w-1/2 text-center max-sm:w-full uppercase text-sm font-bold tracking-wide bg-orange-500 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {partsRequired.length !== 0 ? (
        <AvailableParts trigger={buttonPopus} setTrigger={setButtonPopus} />
      ) : null}
    </>
  );
}
