import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Billing from "./Components/Billing";
import Industry from "./Components/Industry";
import Country from "./Components/Country";
import Stage from "./Components/Stage";
import Status from "./Components/Status";
import Team from "./Components/Team";
import Profile from "./Components/Profile";
import Notes from "./Components/Notes/Notes";

const Setting = () => {
  const [pageType, setPageType] = useState("industry");
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container">
          <div>
            <ul className="pageType__wrapper">
              <li
                className={`page-item ${
                  pageType === "industry" ? "active" : ""
                }`}
                onClick={() => setPageType("industry")}
              >
                Industry
              </li>
              <li
                className={`page-item ${
                  pageType === "country" ? "active" : ""
                }`}
                onClick={() => setPageType("country")}
              >
                Country
              </li>
              <li
                className={`page-item ${pageType === "stage" ? "active" : ""}`}
                onClick={() => setPageType("stage")}
              >
                Stage
              </li>
              <li
                className={`page-item ${pageType === "notes" ? "active" : ""}`}
                onClick={() => setPageType("notes")}
              >
                Notes
              </li>
              <li
                className={`page-item ${pageType === "status" ? "active" : ""}`}
                onClick={() => setPageType("status")}
              >
                Status
              </li>
              <li
                className={`page-item ${pageType === "team" ? "active" : ""}`}
                onClick={() => setPageType("team")}
              >
                Team
              </li>
              <li
                className={`page-item ${
                  pageType === "profile" ? "active" : ""
                }`}
                onClick={() => setPageType("profile")}
              >
                Profile
              </li>
              <li
                className={`page-item ${
                  pageType === "billing" ? "active" : ""
                }`}
                onClick={() => setPageType("billing")}
              >
                Billing
              </li>
            </ul>
            <div className="mt-4">
              {pageType === "industry" ? (
                <Industry />
              ) : pageType === "country" ? (
                <Country />
              ) : pageType === "stage" ? (
                <Stage />
              ) : pageType === "notes" ? (
                <Notes />
              ) : pageType === "status" ? (
                <Status />
              ) : pageType === "team" ? (
                <Team />
              ) : pageType === "profile" ? (
                <Profile />
              ) : (
                <Billing />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Setting;
