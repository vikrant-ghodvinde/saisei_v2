import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";

const StageOfInvestment = () => {
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
                <h5 className="fs-24 m-0">Industry you invest in?*</h5>
                <p className="m-0 fs-18">You can select multiple!</p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={2} className="mx-auto">
            <div className="checkbox_list grid-of-1">
              <div className="grid-item">
                <Form.Check type="checkbox" label="Pre Seed" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Seed" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Angel" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Growth" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Series A" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Series B +" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Pre IPO" />
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
      </div>
    </ContainerFluid>
  );
};

export default StageOfInvestment;
