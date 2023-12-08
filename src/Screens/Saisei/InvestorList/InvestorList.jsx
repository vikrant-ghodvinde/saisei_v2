import Paginations from "Components/Paginations/Paginations";
import React, { useState } from "react";
import { Col, Container, Row, Dropdown, DropdownButton } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import AllInvestors from "./Components/AllInvestors";
import ShortListedInvestors from "./Components/ShortListedInvestors";

const InvestorList = () => {
  const [pageType, setPageType] = useState("all");
  const [options, setOptions] = useState({
    sector: "Sector",
    stage: "Stage",
    type: "Type",
    country: "India",
  });
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container d-flex flex-column align-item-center justify-content-between">
          <div>
            <ul className="pageType__wrapper">
              <li
                className={`page-item ${pageType === "all" ? "active" : ""}`}
                onClick={() => setPageType("all")}
              >
                All
              </li>
              <li
                className={`page-item ${
                  pageType === "shortListed" ? "active" : ""
                }`}
                onClick={() => setPageType("shortListed")}
              >
                Shortlist
              </li>
            </ul>
            <Row className="g-4 align-items-end mb-3">
              <Col sm={12} md={6} lg={4} xl={2}>
                <div className={formStyle.formGroup}>
                  <label>Sector</label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={options.sector}
                  >
                    <Dropdown.Item
                    className={options.sector === "One" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          sector: "One",
                        })
                      }
                    >
                      One
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.sector === "Two" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          sector: "Two",
                        })
                      }
                    >
                      Two
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.sector === "Three" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          sector: "Three",
                        })
                      }
                    >
                      Three
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={2}>
                <div className={formStyle.formGroup}>
                  <label>Stage</label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={options.stage}
                  >
                    <Dropdown.Item
                    className={options.stage === "One" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          stage: "One",
                        })
                      }
                    >
                      One
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.stage === "Two" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          stage: "Two",
                        })
                      }
                    >
                      Two
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.stage === "Three" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          stage: "Three",
                        })
                      }
                    >
                      Three
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={2}>
                <div className={formStyle.formGroup}>
                  <label>Type</label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={options.type}
                  >
                    <Dropdown.Item
                    className={options.type === "One" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          type: "One",
                        })
                      }
                    >
                      One
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.type === "Two" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          type: "Two",
                        })
                      }
                    >
                      Two
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.type === "Three" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          type: "Three",
                        })
                      }
                    >
                      Three
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={2}>
                <div className={formStyle.formGroup}>
                  <label>Country they Invest in</label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={options.country}
                  >
                    <Dropdown.Item
                    className={options.country === "India" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          country: "India",
                        })
                      }
                    >
                      One
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.country === "US" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          country: "US",
                        })
                      }
                    >
                      Two
                    </Dropdown.Item>
                    <Dropdown.Item
                    className={options.country === "Uk" ? "active" : ""}
                      onClick={() =>
                        setOptions({
                          ...options,
                          country: "Uk",
                        })
                      }
                    >
                      Three
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Col>
            </Row>
            {pageType === "all" ? <AllInvestors /> : <ShortListedInvestors />}
          </div>
          <Paginations />
        </div>
      </Container>
    </div>
  );
};

export default InvestorList;
