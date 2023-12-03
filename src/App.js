import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SaiseiNavbar, ProNavbar } from "Components/Navbar/Navbar/Navbar";
// import AccountLogin from "";
// import AccountSignup from "";
// import ChooseIndustry from "";
// import StageOfInvestment from "";
// import AccountType from "";
// import InvestmentCountries from "";
// import Application from "";
// import Setting from "";
// import Dashboard from "";
// import TeamMemberProfile from "";
// import TeamApplication from "";
// import TeamCompany from "";
import PageLoader from "Components/PageLoader/PageLoader";

// SAISEI ROUTES
const CompanyLogin = lazy(() =>
  import("Screens/Saisei/CompanyLogin/CompanyLogin")
);

const CompanySignup = lazy(() =>
  import("Screens/Saisei/CompanySignup/CompanySignup")
);

const SelectIndustry = lazy(() => import("Screens/Saisei/Industry/Industry"));

const CompanyDashboard = lazy(() =>
  import("Screens/Saisei/Dashboard/Dashboard")
);

const CompanyDocuments = lazy(() =>
  import("Screens/Saisei/Documents/Documents")
);

const CompanyInvestorList = lazy(() =>
  import("Screens/Saisei/InvestorList/InvestorList")
);

const CompanyApplication = lazy(() =>
  import("Screens/Saisei/Application/Application")
);

const CompanySetting = lazy(() => import("Screens/Saisei/Setting/Setting"));

const CompanyViewFunding = lazy(() =>
  import("Screens/Saisei/Funding/ViewFunding/ViewFunding")
);

const CompanyApplyFunding = lazy(() =>
  import("Screens/Saisei/Funding/ApplyFunding/ApplyFunding")
);

const InvestmentCountries = lazy(() =>
  import("Screens/Pro/InvestmentCountries/InvestmentCountries")
);

// PRO ROUTES
const AccountLogin = lazy(() =>
  import("Screens/Pro/AccountLogin/AccountLogin")
);

const AccountSignUp = lazy(() =>
  import("Screens/Pro/AccountSignup/AccountSignup")
);

const ChooseIndustryPro = lazy(() =>
  import("Screens/Pro/ChooseIndustry/ChooseIndustry")
);

const StageOfInvestment = lazy(() =>
  import("Screens/Pro/StageOfInvestment/StageOfInvestment")
);

const AccountType = lazy(() => import("Screens/Pro/AccountType/AccountType"));

const ProDashboard = lazy(() => import("Screens/Pro/Dashboard/Dashboard"));

const ProApplication = lazy(() =>
  import("Screens/Pro/Application/Application")
);

const ProSetting = lazy(() => import("Screens/Pro/Setting/Setting"));

const TeamCompany = lazy(() => import("Screens/Pro/TeamCompany/TeamCompany"));

const TeamApplication = lazy(() =>
  import("Screens/Pro/TeamApplication/TeamApplication")
);

const TeamMemberProfile = lazy(() =>
  import("Screens/Pro/TeamMemberProfile/TeamMemberProfile")
);

function App() {
  const excludeNavbarRoutes = [
    "/",
    "/signup",
    "/select_industry",
    "/company_viewfunding",
    "/company_applyfunding",
    "/account_login",
    "/account_signup",
    "/account_chooseindustry",
    "/account_stageofinvestment",
    "/account_type",
    "/account_teamapplication",
  ];
  const toggleNavbarPaths = [
    "/company_dashboard",
    "/company_documents",
    "/company_investorlist",
    "/company_application",
    "/company_setting",
  ];
  const shouldRenderNavbar = (path) => !excludeNavbarRoutes.includes(path);
  const toggleNavbar = (path) => toggleNavbarPaths.includes(path);

  const NavbarFixer = () => {
    if (toggleNavbar(window.location.pathname)) {
      return <SaiseiNavbar />;
    } else {
      return <ProNavbar />;
    }
  };

  return (
    <BrowserRouter>
      {shouldRenderNavbar(window.location.pathname) && <NavbarFixer />}
      <Routes>
        {/* SAISEI ROUTES */}
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanyLogin />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanySignup />
            </Suspense>
          }
        />
        <Route
          path="/select_industry"
          element={
            <Suspense fallback={<PageLoader />}>
              <SelectIndustry />
            </Suspense>
          }
        />
        <Route
          path="/company_dashboard"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanyDashboard />
            </Suspense>
          }
        />
        <Route
          path="/company_documents"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanyDocuments />
            </Suspense>
          }
        />
        <Route
          path="/company_investorlist"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanyInvestorList />
            </Suspense>
          }
        />
        <Route
          path="/company_application"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanyApplication />
            </Suspense>
          }
        />
        <Route
          path="/company_setting"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanySetting />
            </Suspense>
          }
        />
        <Route
          path="/company_viewfunding"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanyViewFunding />
            </Suspense>
          }
        />
        <Route
          path="/company_applyfunding"
          element={
            <Suspense fallback={<PageLoader />}>
              <CompanyApplyFunding />
            </Suspense>
          }
        />

        {/* PRO ROUTES */}
        <Route
          path="/account_login"
          element={
            <Suspense fallback={<PageLoader />}>
              <AccountLogin />
            </Suspense>
          }
        />
        <Route
          path="/account_signup"
          element={
            <Suspense fallback={<PageLoader />}>
              <AccountSignUp />
            </Suspense>
          }
        />
        <Route
          path="/account_chooseindustry"
          element={
            <Suspense fallback={<PageLoader />}>
              <ChooseIndustryPro />
            </Suspense>
          }
        />
        <Route
          path="/account_stageofinvestment"
          element={
            <Suspense fallback={<PageLoader />}>
              <StageOfInvestment />
            </Suspense>
          }
        />
        <Route
          path="/account_type"
          element={
            <Suspense fallback={<PageLoader />}>
              <AccountType />
            </Suspense>
          }
        />
        <Route
          path="/account_dashboard"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProDashboard />
            </Suspense>
          }
        />
        <Route
          path="/account_application"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProApplication />
            </Suspense>
          }
        />
        <Route
          path="/account_setting"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProSetting />
            </Suspense>
          }
        />
        <Route
          path="/account_teamcompany"
          element={
            <Suspense fallback={<PageLoader />}>
              <TeamCompany />
            </Suspense>
          }
        />
        <Route
          path="/account_teamapplication"
          element={
            <Suspense fallback={<PageLoader />}>
              <TeamApplication />
            </Suspense>
          }
        />
        <Route
          path="/account_teamprofile"
          element={
            <Suspense fallback={<PageLoader />}>
              <TeamMemberProfile />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
