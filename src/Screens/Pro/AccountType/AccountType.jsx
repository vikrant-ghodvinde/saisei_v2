import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";
import { Link } from "react-router-dom";

const AccountType = () => {
  return (
    <ContainerFluid>
      <div className="inner_wrapper">
        <div className="logo">
          <img
            src="/assets/images/pro_logo.svg"
            alt="logo"
            className="img-fluid"
          />
        </div>
        <Row className="w-100">
          <Col md={12} lg={12} className="mx-auto">
            <div className="text-center">
              <div className="mb-5">
                <h5 className="fs-24 m-0">Type of Investor*</h5>
              </div>
            </div>
          </Col>
          <Col md={12} lg={2} className="mx-auto">
            <div className="checkbox_list grid-of-1">
              <div className="grid-item">
                <Form.Check
                  type="radio"
                  name="accountType"
                  id="ventureCapital"
                  label="Venture Capital"
                  className="inputRadio"
                />
              </div>
              <div className="grid-item">
                <Form.Check
                  type="radio"
                  name="accountType"
                  id="angelSyndicate"
                  label="Angel Syndicate"
                  className="inputRadio"
                />
              </div>
              <div className="grid-item">
                <Form.Check
                  type="radio"
                  name="accountType"
                  id="AngelIndividual"
                  label="Angel (Individual)"
                  className="inputRadio"
                />
              </div>
              <div className="grid-item">
                <Form.Check
                  type="radio"
                  name="accountType"
                  id="corporateVentureCapital"
                  label="Corporate Venture Capital"
                  className="inputRadio"
                />
              </div>
              <div className="grid-item">
                <Form.Check
                  type="radio"
                  name="accountType"
                  id="fundManager"
                  label="Fund Manager (Others)"
                  className="inputRadio"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-0 text-center w-100">
          <Col md={12} lg={4} className="mx-auto">
            <Row>
              <Col xs={6}>
                <button type="button" className="btn btn-border w-100">
                  Back
                </button>
              </Col>
              <Col xs={6}>
                <button type="button" className="btn btn-dark w-100">
                  NEXT
                </button>
              </Col>
            </Row>
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

export default AccountType;
