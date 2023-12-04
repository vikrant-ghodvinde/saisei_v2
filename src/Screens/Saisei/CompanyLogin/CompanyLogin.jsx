import React from "react";
import formStyle from "Styles/FormControl.module.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContainerFluid from "Components/ContainerFluid/ContainerFluid";

const Login = () => {
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
                <h5 className="fs-24 m-0">Login</h5>
              </div>
              <Row className="gy-2">
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Email
                    </label>
                    <input type="email" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Password
                    </label>
                    <input type="password" name="" id=""></input>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="buttons-wrapper d-flex align-items-center justify-content-center mt-5">
                    <button className="btn btn-dark">Login</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="gy-5 mt-0 text-center">
          <Col xs={12}>
            <Link to="/forget" className="text-decoration-underline fw-bold">
              Forget Password
            </Link>
          </Col>
          <Col xs={12}>
            <p className="m-0 text-secondary">
              Don’t have an account?{" "}
              <Link to="/" className="text-dark fw-bold">
                Sign up
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </ContainerFluid>
  );
};

export default Login;
