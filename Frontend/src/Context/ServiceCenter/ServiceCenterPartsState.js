import { useState } from "react";
import ServiceCenterPartsContext from "./ServiceCenterPartsContext";

const ServiceCenterPartsState = (props) => {

  //State For UnAvailable Parts

  const [unAvailableParts, setUnAvailableParts] = useState([]);

  const updateUnAvailableParts = (value) => {
    setUnAvailableParts(value);
  };

  return (
    <ServiceCenterPartsContext.Provider
      value={{ unAvailableParts, updateUnAvailableParts }}
    >
      {props.children}
    </ServiceCenterPartsContext.Provider>
  );
};

export default ServiceCenterPartsState;
