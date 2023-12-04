import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";

const ChooseIndustry = () => {
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
          <Col md={12} lg={6} className="mx-auto">
            <div className="checkbox_list grid-of-3">
              <div className="grid-item">
                <Form.Check type="checkbox" label="FinTech" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="EdTech" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="List item" />
              </div>
              <div className="grid-item">
                <Form.Check type="checkbox" label="Food Delivery Partner" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-0 text-center w-100">
          <Col md={12} lg={4} className="mx-auto">
            <div className="buttons-wrapper">
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
            </div>
          </Col>
        </Row>
      </div>
    </ContainerFluid>
  );
};

export default ChooseIndustry;
