import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SaiseiNavbar, ProNavbar } from "Components/Navbar/Navbar/Navbar";
import AccountLogin from "Screens/Pro/AccountLogin/AccountLogin";
import AccountSignup from "Screens/Pro/AccountSignup/AccountSignup";
import ChooseIndustry from "Screens/Pro/ChooseIndustry/ChooseIndustry";
import StageOfInvestment from "Screens/Pro/StageOfInvestment/StageOfInvestment";
import AccountType from "Screens/Pro/AccountType/AccountType";
import InvestmentCountries from "Screens/Pro/InvestmentCountries/InvestmentCountries";
import Application from "Screens/Pro/Application/Application";
import Setting from "Screens/Pro/Setting/Setting";
import Dashboard from "Screens/Pro/Dashboard/Dashboard";
import TeamMemberProfile from "Screens/Pro/TeamMemberProfile/TeamMemberProfile";
import TeamApplication from "Screens/Pro/TeamApplication/TeamApplication";
import TeamCompany from "Screens/Pro/TeamCompany/TeamCompany";
// import Application from "Screens/Saisei/Application/Application";
// import CompanyLogin from "Screens/Saisei/CompanyLogin/CompanyLogin";
// import CompanySignup from "Screens/Saisei/CompanySignup/CompanySignup";
// import Dashboard from "Screens/Saisei/Dashboard/Dashboard";
// import Documents from "Screens/Saisei/Documents/Documents";
// import Industry from "Screens/Saisei/Industry/Industry";
// import InvestorList from "Screens/Saisei/InvestorList/InvestorList";
// import Setting from "Screens/Saisei/Setting/Setting";
// import ApplyFunding from "Screens/Saisei/Funding/ApplyFunding/ApplyFunding";
// import ViewFunding from "Screens/Saisei/Funding/ViewFunding/ViewFunding";

function App() {
  const excludeNavbarRoutes = [
    "/",
    "/account_type",
    "/signup",
    "/investment_stage",
    "/investment_country",
    "/select_industry",
    "/team_application",
    "/team_company",
  ];
  const shouldRenderNavbar = (path) => !excludeNavbarRoutes.includes(path);

  return (
    <BrowserRouter>
      {shouldRenderNavbar(window.location.pathname) && <ProNavbar />}
      <Routes>
        {/* <Route path="/" element={<CompanyLogin />} />
        <Route path="/signup" element={<CompanySignup />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/company" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/investor-list" element={<InvestorList />} />
        <Route path="/application" element={<Application />} />
        <Route path="/apply-funding" element={<ApplyFunding />} />
        <Route path="/view-funding" element={<ViewFunding />} /> */}
        <Route path="/" element={<AccountLogin />} />
        <Route path="/account_type" element={<AccountType />} />
        <Route path="/signup" element={<AccountSignup />} />
        <Route path="/investment_stage" element={<StageOfInvestment />} />
        <Route path="/investment_country" element={<InvestmentCountries />} />
        <Route path="/select_industry" element={<ChooseIndustry />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/team_profile" element={<TeamMemberProfile />} />
        <Route path="/team_application" element={<TeamApplication />} />
        <Route path="/team_company" element={<TeamCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
