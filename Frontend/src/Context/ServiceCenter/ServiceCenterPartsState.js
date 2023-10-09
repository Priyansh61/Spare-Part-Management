import { useState } from "react";
import ServiceCenterPartsContext from "./ServiceCenterPartsContext";

const ServiceCenterPartsState = (props) => {

  //State For UnAvailable Parts
  const [unAvailableParts, setUnAvailableParts] = useState([]);


  const updateUnAvailableParts = (value) => {
    setUnAvailableParts(value);
  };



  //Login Checks
    // const [isLogin, setIsLogin] = useState(false);
    // const updateLogin = (value) => {
    //   setIsLogin(value)
    // }
  return (
    <ServiceCenterPartsContext.Provider
      value={{ unAvailableParts, updateUnAvailableParts }}
    >
      {props.children}
    </ServiceCenterPartsContext.Provider>
  );
};

export default ServiceCenterPartsState;
