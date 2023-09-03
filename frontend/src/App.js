import Nav from "./Components/Navbar/Nav";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComplainLists from "./Components/ServiceCenter/Pages/ComplainLists";
import ComplainDetails from "./Components/ServiceCenter/Pages/ComplainDetails";
import LandingPage from "./Components/CustomerSupport/pages/LandingPage";
import RequiredParts from "./Components/ServiceCenter/Pages/RequiredParts";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/complaint-list" element={<ComplainLists />} />
        <Route path="requiredParts" element={<RequiredParts />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/complaint-list/:complaintId"
          element={<ComplainDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
