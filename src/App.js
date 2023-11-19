import React from "react";
import Navbar from "Components/Navbar/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from "Screens/Saisei/Application/Application";
import CompanyLogin from "Screens/Saisei/CompanyLogin/CompanyLogin";
import CompanySignup from "Screens/Saisei/CompanySignup/CompanySignup";
import Dashboard from "Screens/Saisei/Dashboard/Dashboard";
import Documents from "Screens/Saisei/Documents/Documents";
import Industry from "Screens/Saisei/Industry/Industry";
import InvestorList from "Screens/Saisei/InvestorList/InvestorList";
import Setting from "Screens/Saisei/Setting/Setting";
import ApplyFunding from "Screens/Saisei/Funding/ApplyFunding/ApplyFunding";
import ViewFunding from "Screens/Saisei/Funding/ViewFunding/ViewFunding";

function App() {
  const excludeNavbarRoutes = [
    "/",
    "/signup",
    "/industry",
    "/apply-funding",
    "/view-funding",
  ];
  const shouldRenderNavbar = (path) => !excludeNavbarRoutes.includes(path);

  return (
    <BrowserRouter>
      {shouldRenderNavbar(window.location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<CompanyLogin />} />
        <Route path="/signup" element={<CompanySignup />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/company" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/investor-list" element={<InvestorList />} />
        <Route path="/application" element={<Application />} />
        <Route path="/apply-funding" element={<ApplyFunding />} />
        <Route path="/view-funding" element={<ViewFunding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
