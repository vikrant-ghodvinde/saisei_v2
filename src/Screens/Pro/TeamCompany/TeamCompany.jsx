import { StatusbarMenu } from "Components/Navbar/Statusbar/Statusbar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const TeamCompany = () => {
  return (
    <React.Fragment>
      <StatusbarMenu title="funding Application" cancelPath="/dashboard" />
      <div className="app__wrapper">
        <Container fluid>
          <div className="padding__container h-auto">
            <Row className="gy-4">
              <Col md={12} lg={8}>
                <Row>
                  <Col md={12} lg={6}>
                    <Row className="align-items-center">
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>
                            Company Name<span>*</span>
                          </div>
                          <div>Teseractsquat. pty ltd</div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>Phone</div>
                          <div>+61 000 009 000</div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>Email*</div>
                          <div>TS@outlook.com</div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12} lg={6}>
                    <Row className="align-items-center">
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>
                            Industry Type (e.g FinTech)*
                          </div>
                          <div>SaaS</div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>
                            Industry Type (e.g FinTech)*
                          </div>
                          <div>SaaS</div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>
                            Point of Contact
                          </div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>
                            Role (Founder/Co-Founder)
                          </div>
                          <div>Founder</div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>Phone</div>
                          <div>+61 000 000 000</div>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div>
                          <div className={formStyle.labelText}>Email</div>
                          <div>TS@gmail.com</div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={12} lg={4}>
                <Row className="gy-3">
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
              <Col md={12} lg={4}>
                <Row className="gy-1">
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
                    <dir className={formStyle.formGroup}>
                      <input
                        type="text"
                        name=""
                        id=""
                        value="Australia"
                        readOnly
                      />
                    </dir>
                  </Col>
                  <Col xs={12}>
                    <dir className={formStyle.formGroup}>
                      <input
                        type="text"
                        name=""
                        id=""
                        value="South Australia"
                        readOnly
                      />
                    </dir>
                  </Col>
                  <Col xs={12}>
                    <dir className={formStyle.formGroup}>
                      <input
                        type="text"
                        name=""
                        id=""
                        value="Adelaide"
                        readOnly
                      />
                    </dir>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TeamCompany;
