import React from "react";
import { useState } from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const EditDashboard = () => {
  const [industryDetails, setIndustryDetails] = useState({
    industry: "Industry",
    country: "Country",
  });
  return (
    <Row className="gy-4 align-items-center">
      <Col md={12} lg={8}>
        <Row>
          <Col md={12} lg={10}>
            <Row className="gy-4 align-items-center">
              <Col xs={12}>
                <div>Customer Number 123455</div>
              </Col>
              <Col xs={12}>
                <div className={formStyle.formGroup}>
                  <div className={formStyle.labelText}>
                    Company Name<span>*</span>
                  </div>
                  <input type="text" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={formStyle.formGroup}>
                  <div className={formStyle.labelText}>About Us</div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </Col>
              <Col xs={12}>
                <div>
                  <div className={formStyle.labelText}>
                    Industry Type (e.g FinTech)<span>*</span>
                  </div>
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
                </div>
              </Col>
              <Col xs={12}>
                <dir className={formStyle.formGroup}>
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
                </dir>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={4}>
        <Row className="gy-4 text-start text-lg-center">
          <Col xs={12}>
            <div
              className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
            >
              <img
                src="/assets/images/icons/facebook.svg"
                alt="facebook"
                className="img-fluid"
              />
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div
              className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
            >
              <img
                src="/assets/images/icons/twitter.svg"
                alt="facebook"
                className="img-fluid"
              />
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div
              className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
            >
              <img
                src="/assets/images/icons/instagram.svg"
                alt="facebook"
                className="img-fluid"
              />
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div
              className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
            >
              <img
                src="/assets/images/icons/linkedin.svg"
                alt="facebook"
                className="img-fluid"
              />
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div
              className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
            >
              <img
                src="/assets/images/icons/tiktok.svg"
                alt="facebook"
                className="img-fluid"
              />
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div
              className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
            >
              <img
                src="/assets/images/icons/youtube.svg"
                alt="facebook"
                className="img-fluid"
              />
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div
              className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
            >
              <img
                src="/assets/images/icons/globe.svg"
                alt="facebook"
                className="img-fluid"
              />
              <input type="text" name="" id="" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EditDashboard;
