import React from "react";
import formStyle from "Styles/FormControl.module.css";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";

const CompanySignup = () => {
  return (
    <ContainerFluid>
      <div className="inner_wrapper">
        <div className="logo">
          <img src="/assets/images/logo.svg" alt="logo" className="img-fluid" />
        </div>
        <Row className="w-100">
          <Col md={12} lg={4} className="mx-auto">
            <div className="text-center">
              <div className="mb-4">
                <h5 className="fs-24 m-0">Create an Account</h5>
              </div>
              <Row className="gy-2">
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      First Name<span>*</span>
                    </label>
                    <input type="text" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Last Name<span>*</span>
                    </label>
                    <input type="text" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Email<span>*</span>
                    </label>
                    <input type="email" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Password<span>*</span>
                    </label>
                    <input type="password" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Re- Password<span>*</span>
                    </label>
                    <input type="password" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="d-flex align-items-center justify-content-center">
                    <Form.Check
                      className="form-check"
                      label="I agree to Terms & Conditions "
                    ></Form.Check>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <button className="btn btn-dark">Sign Up</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12}>
            <p className="m-0 text-secondary">
              Already have an account?{" "}
              <Link to="/" className="text-dark fw-bold">
                Login
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </ContainerFluid>
  );
};

export default CompanySignup;
