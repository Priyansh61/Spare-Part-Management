import Nav from "./Components/Navbar/Nav";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComplainLists from "./Components/ServiceCenter/Pages/ComplainLists";
import ComplainDetails from "./Components/ServiceCenter/Pages/ComplainDetails";
import LandingPage from "./Components/CustomerSupport/pages/LandingPage";
import RequiredParts from "./Components/ServiceCenter/Pages/RequiredParts";
import ServiceCenterPartsState from "./Context/ServiceCenter/ServiceCenterPartsState";
import CustomersComplaint from "./Components/PlanningCenter/Pages/CustomersComplaint";

function App() {
  return (
    <ServiceCenterPartsState>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/complaint-list" element={<ComplainLists />} />
          <Route path="/customers-complaint" element={<CustomersComplaint />} />
          <Route path="requiredParts" element={<RequiredParts />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/complaint-list/:complaintId"
            element={<ComplainDetails />}
          />
        </Routes>
      </BrowserRouter>
    </ServiceCenterPartsState>
  );
}

export default App;
