import React from "react";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const ViewDashboard = () => {
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
                <div>
                  <div className={formStyle.labelText}>
                    Company Name<span>*</span>
                  </div>
                  <div>Teseractsquat. pty ltd</div>
                </div>
              </Col>
              <Col xs={12}>
                <div className={formStyle.formGroup}>
                  <div className={formStyle.labelText}>About Us</div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    readOnly
                  ></textarea>
                </div>
              </Col>
              <Col xs={12}>
                <div>
                  <div className={formStyle.labelText}>
                    Industry Type (e.g FinTech)<span>*</span>
                  </div>
                  <div>SaaS</div>
                </div>
              </Col>
              <Col xs={12}>
                <dir className={formStyle.formGroup}>
                  <input type="text" name="" id="" value="Australia" readOnly />
                </dir>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={4}>
        <Row className="gy-4">
          <Col xs={12}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src="/assets/images/icons/facebook.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </div>
            </a>
          </Col>
          <Col xs={12}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src="/assets/images/icons/twitter.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </div>
            </a>
          </Col>
          <Col xs={12}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src="/assets/images/icons/instagram.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </div>
            </a>
          </Col>
          <Col xs={12}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src="/assets/images/icons/linkedin.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </div>
            </a>
          </Col>
          <Col xs={12}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src="/assets/images/icons/tiktok.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </div>
            </a>
          </Col>
          <Col xs={12}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src="/assets/images/icons/youtube.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </div>
            </a>
          </Col>
          <Col xs={12}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src="/assets/images/icons/globe.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </div>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ViewDashboard;
