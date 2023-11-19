import React from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";
import { useState } from "react";

const Industry = () => {
  const [industryDetails, setIndustryDetails] = useState({
    industry: "Industry",
    country: "Country",
  });
  return (
    <ContainerFluid>
      <div className="inner_wrapper">
        <div className="logo">
          <img src="/assets/images/logo.svg" alt="logo" className="img-fluid" />
        </div>
        <Row className="w-100">
          <Col md={12} lg={4} className="mx-auto">
            <div className="text-center">
              <div className="mb-5">
                <h5 className="fs-24 m-0">Additional Information</h5>
              </div>
              <Row className="gy-5">
                <Col xs={12}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={industryDetails.industry}
                  >
                    <Dropdown.Item
                      onClick={() =>
                        setIndustryDetails({
                          ...industryDetails,
                          industry: "One",
                        })
                      }
                    >
                      One
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        setIndustryDetails({
                          ...industryDetails,
                          industry: "Two",
                        })
                      }
                    >
                      Two
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        setIndustryDetails({
                          ...industryDetails,
                          industry: "Three",
                        })
                      }
                    >
                      Three
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col xs={12}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={industryDetails.country}
                  >
                    <Dropdown.Item
                      onClick={() =>
                        setIndustryDetails({
                          ...industryDetails,
                          country: "India",
                        })
                      }
                    >
                      India
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        setIndustryDetails({
                          ...industryDetails,
                          country: "Africa",
                        })
                      }
                    >
                      Africa
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        setIndustryDetails({
                          ...industryDetails,
                          country: "US",
                        })
                      }
                    >
                      US
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col xs={12}>
                  <Row className="gy-5 gx-2">
                    <Col xs={12} sm={6}>
                      <button className="btn btn-border w-100">Back</button>
                    </Col>
                    <Col xs={12} sm={6}>
                      <button className="btn btn-dark w-100">Login</button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div>{/* Space */}</div>
      </div>
    </ContainerFluid>
  );
};

export default Industry;
