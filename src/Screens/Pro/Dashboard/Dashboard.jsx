import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./Dashboard.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Dashboard = () => {
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container py-5 h-auto">
          <Row>
            <Col md={12} lg={10} className="mx-auto">
              <Row className="gy-4">
                <Col xs={12} md={6} lg={4}>
                  <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                      <h6 className="m-0 fw-bold">New Deals Inflow</h6>
                      <button type="button" className="btn h-auto p-0 border-0 text-secondary">
                        <FeatherIcon icon="more-vertical" size={18} />
                      </button>
                    </div>
                    <div className={Styles.cardBody}>
                      <div className={Styles.data}>
                        <h2>2,420</h2>
                        <div className="d-flex align-items-center gap-2 fw-medium text-secondary">
                          <span className="text-success">
                            <FeatherIcon
                              icon="arrow-up"
                              size={18}
                              className="me-1"
                            />
                            40%
                          </span>
                          vs last month
                        </div>
                      </div>
                      <div className={Styles.chart}>
                        <img
                          src="/assets/images/green_chart.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                      <h6 className="m-0 fw-bold">Due Diligence</h6>
                      <button type="button" className="btn h-auto p-0 border-0 text-secondary">
                        <FeatherIcon icon="more-vertical" size={18} />
                      </button>
                    </div>
                    <div className={Styles.cardBody}>
                      <div className={Styles.data}>
                        <h2>1,210</h2>
                        <div className="d-flex align-items-center gap-2 fw-medium text-secondary">
                          <span className="text-danger">
                            <FeatherIcon
                              icon="arrow-down"
                              size={18}
                              className="me-1"
                            />
                            10%
                          </span>
                          vs last month
                        </div>
                      </div>
                      <div className={Styles.chart}>
                        <img
                          src="/assets/images/red_chart.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                      <h6 className="m-0 fw-bold">Deals Funded</h6>
                      <button type="button" className="btn h-auto p-0 border-0 text-secondary">
                        <FeatherIcon icon="more-vertical" size={18} />
                      </button>
                    </div>
                    <div className={Styles.cardBody}>
                      <div className={Styles.data}>
                        <h2>316</h2>
                        <div className="d-flex align-items-center gap-2 fw-medium text-secondary">
                          <span className="text-success">
                            <FeatherIcon
                              icon="arrow-up"
                              size={18}
                              className="me-1"
                            />
                            20%
                          </span>
                          vs last month
                        </div>
                      </div>
                      <div className={Styles.chart}>
                        <img
                          src="/assets/images/green_chart.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                      <h6 className="m-0 fw-bold">Unsuccessful</h6>
                      <button type="button" className="btn h-auto p-0 border-0 text-secondary">
                        <FeatherIcon icon="more-vertical" size={18} />
                      </button>
                    </div>
                    <div className={Styles.cardBody}>
                      <div className={Styles.data}>
                        <h2>2,420</h2>
                        <div className="d-flex align-items-center gap-2 fw-medium text-secondary">
                          <span className="text-success">
                            <FeatherIcon
                              icon="arrow-up"
                              size={18}
                              className="me-1"
                            />
                            40%
                          </span>
                          vs last month
                        </div>
                      </div>
                      <div className={Styles.chart}>
                        <img
                          src="/assets/images/green_chart.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                      <h6 className="m-0 fw-bold">Due Diligence</h6>
                      <button type="button" className="btn h-auto p-0 border-0 text-secondary">
                        <FeatherIcon icon="more-vertical" size={18} />
                      </button>
                    </div>
                    <div className={Styles.cardBody}>
                      <div className={Styles.data}>
                        <h2>1,210</h2>
                        <div className="d-flex align-items-center gap-2 fw-medium text-secondary">
                          <span className="text-danger">
                            <FeatherIcon
                              icon="arrow-down"
                              size={18}
                              className="me-1"
                            />
                            10%
                          </span>
                          vs last month
                        </div>
                      </div>
                      <div className={Styles.chart}>
                        <img
                          src="/assets/images/red_chart.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                      <h6 className="m-0 fw-bold">Active now</h6>
                      <button type="button" className="btn h-auto p-0 border-0 text-secondary">
                        <FeatherIcon icon="more-vertical" size={18} />
                      </button>
                    </div>
                    <div className={Styles.cardBody}>
                      <div className={Styles.data}>
                        <h2>316</h2>
                        <div className="d-flex align-items-center gap-2 fw-medium text-secondary">
                          <span className="text-success">
                            <FeatherIcon
                              icon="arrow-up"
                              size={18}
                              className="me-1"
                            />
                            20%
                          </span>
                          vs last month
                        </div>
                      </div>
                      <div className={Styles.chart}>
                        <img
                          src="/assets/images/green_chart.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
