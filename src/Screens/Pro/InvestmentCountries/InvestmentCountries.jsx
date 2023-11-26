import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";

const InvestmentCountries = () => {
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
                <h5 className="fs-24 m-0">Country you invest in?*</h5>
                <p className="m-0 fs-18">You can select multiple!</p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={5} className="mx-auto">
            <Col md={12} lg={9} className="ms-auto">
              <div className="checkbox_list grid-of-2">
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Global" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Ganna" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="India" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Morocco" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="USA" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Vietnam" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Canada" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Thailand" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="England" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Japan" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="New Zealand " />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="South Korea" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Singapore" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="UAE" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Malaysia" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Kenya" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Australia" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Tanzania" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="South Africa" />
                </div>
                <div className="grid-item">
                  <Form.Check type="checkbox" label="Egypt" />
                </div>
              </div>
            </Col>
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

export default InvestmentCountries;
