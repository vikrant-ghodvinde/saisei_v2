import React, { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import Styles from "../Funding.module.css";
import { Statusbar } from "Components/Navbar/Statusbar/Statusbar";

const ViewFunding = () => {
  const [amountData, setAmountData] = useState({
    amountRaising: "",
    amountRaisingCurrency: "USD",
    valuation: "",
    valuationCurrency: "USD",
    equityOffered: "",
  });
  return (
    <React.Fragment>
      <Statusbar title="funding Application" cancelPath="/investor-list" />
      <div className="app__wrapper">
        <Container fluid>
          <div className="padding__container">
            <Row className="g-5">
              <Col md={12} lg={6}>
                <div className={Styles.card}>
                  <div className={Styles.card_body}>
                    <div className={Styles.heading}>Basic Information</div>
                    <Row>
                      <Col lg={12} xl={10} className="mx-auto">
                        <Row className="gy-4">
                          <Col xs={12}>
                            <div
                              className={`${formStyle.labelText} text-black`}
                            >
                              Stage of Funding<span>*</span>
                            </div>
                            <Row className="gy-2 ms-1">
                              <Col xs={12}>
                                <Form.Check
                                  type="radio"
                                  name="fundingStage"
                                  id="Angel"
                                  label="Angel"
                                  className="inputRadio"
                                  checked
                                  disabled
                                />
                              </Col>
                              <Col xs={12}>
                                <Form.Check
                                  type="radio"
                                  name="fundingStage"
                                  id="PreSeedStage"
                                  label="Pre Seed Stage"
                                  className="inputRadio"
                                  disabled
                                />
                              </Col>
                              <Col xs={12}>
                                <Form.Check
                                  type="radio"
                                  name="fundingStage"
                                  id="SeedStage"
                                  label="Seed Stage"
                                  className="inputRadio"
                                  disabled
                                />
                              </Col>
                              <Col xs={12}>
                                <Form.Check
                                  type="radio"
                                  name="fundingStage"
                                  id="Series"
                                  label="Series (A, B +)"
                                  className="inputRadio"
                                  disabled
                                />
                              </Col>
                              <Col xs={12}>
                                <Form.Check
                                  type="radio"
                                  name="fundingStage"
                                  id="IPO"
                                  label="IPO"
                                  className="inputRadio"
                                  disabled
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={12}>
                            <div
                              className={`${formStyle.labelText} text-black`}
                            >
                              Stage of Funding<span>*</span>
                            </div>
                            <div className="inputHasDropdown">
                              <input
                                type="number"
                                name=""
                                id=""
                                value={amountData.amountRaising}
                                placeholder="1,000.00"
                                onChange={(e) =>
                                  setAmountData({
                                    ...amountData,
                                    amountRaising: e.target.value,
                                  })
                                }
                                disabled
                              />
                              <DropdownButton
                                id="dropdown-basic-button"
                                title={amountData.amountRaisingCurrency}
                                disabled
                              >
                                <Dropdown.Item
                                  onClick={() =>
                                    setAmountData({
                                      ...amountData,
                                      amountRaisingCurrency: "One",
                                    })
                                  }
                                >
                                  One
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() =>
                                    setAmountData({
                                      ...amountData,
                                      amountRaisingCurrency: "Two",
                                    })
                                  }
                                >
                                  Two
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() =>
                                    setAmountData({
                                      ...amountData,
                                      amountRaisingCurrency: "Three",
                                    })
                                  }
                                >
                                  Three
                                </Dropdown.Item>
                              </DropdownButton>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div
                              className={`${formStyle.labelText} text-black`}
                            >
                              Stage of Funding<span>*</span>
                            </div>
                            <div className="inputHasDropdown">
                              <input
                                type="number"
                                name=""
                                id=""
                                value={amountData.valuation}
                                placeholder="1,000.00"
                                onChange={(e) =>
                                  setAmountData({
                                    ...amountData,
                                    valuation: e.target.value,
                                  })
                                }
                                disabled
                              />
                              <DropdownButton
                                id="dropdown-basic-button"
                                title={amountData.valuationCurrency}
                                disabled
                              >
                                <Dropdown.Item
                                  onClick={() =>
                                    setAmountData({
                                      ...amountData,
                                      valuationCurrency: "One",
                                    })
                                  }
                                >
                                  One
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() =>
                                    setAmountData({
                                      ...amountData,
                                      valuationCurrency: "Two",
                                    })
                                  }
                                >
                                  Two
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() =>
                                    setAmountData({
                                      ...amountData,
                                      valuationCurrency: "Three",
                                    })
                                  }
                                >
                                  Three
                                </Dropdown.Item>
                              </DropdownButton>
                            </div>
                            <div className="text-secondary">
                              The Valuation you raising the funds at!
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div
                              className={`${formStyle.labelText} text-black`}
                            >
                              Stage of Funding<span>*</span>
                            </div>
                            <div className={formStyle.formGroup}>
                              <input
                                type="text"
                                name=""
                                id=""
                                value={amountData.equityOffered}
                                placeholder="Equity (%)"
                                onChange={(e) =>
                                  setAmountData({
                                    ...amountData,
                                    equityOffered: e.target.value,
                                  })
                                }
                                disabled
                              />
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div
                              className={`${formStyle.labelText} text-black`}
                            >
                              Would you like to share Information of you
                              company?
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="d-flex align-items-center gap-4">
                              <span>Company information</span>
                              <Form.Check type="switch" disabled />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className={Styles.card}>
                  <div className={Styles.card_body}>
                    <div className={Styles.heading}>Additional Information</div>
                    <Row>
                      <Col lg={12} xl={10} className="mx-auto mb-5">
                        <Row className="gy-4">
                          <Col xs={12}>
                            <div className={formStyle.formGroup}>
                              <div
                                className={`${formStyle.labelText} text-black`}
                              >
                                Warm Introduction Code
                              </div>
                              <input type="text" name="" id="" value="ABCD-ABCD" disabled />
                              <div className="text-secondary">
                                Please provide the warm introduction code sent
                                to you by the VC, if not please skip.
                              </div>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className={formStyle.formGroup}>
                              <div
                                className={`${formStyle.labelText} text-black`}
                              >
                                Additional notes for the investor, if any.
                              </div>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                disabled
                              ></textarea>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <div className={`${formStyle.labelText} text-black`}>
                        Warm Introduction Code<span>*</span>
                      </div>
                      <Table responsive>
                        <thead className="table-dark">
                          <tr>
                            <th>File Name</th>
                            <th>Category</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <Form.Check
                                  type="switch"
                                  className="colored"
                                  checked
                                  disabled
                                />
                                <div>
                                  <div>Dashboard</div>
                                  <span className="text-secondary">720 KB</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge">Investment Memo</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <Form.Check
                                  type="switch"
                                  className="colored"
                                  checked
                                  disabled
                                />
                                <div>
                                  <div>Dashboard screenshot.jpg</div>
                                  <span className="text-secondary">720 KB</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge">Investment Memo</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <Form.Check
                                  type="switch"
                                  className="colored"
                                  checked
                                  disabled
                                />
                                <div>
                                  <div>Dashboard prototype recording.mp4</div>
                                  <span className="text-secondary">720 KB</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge">Investment Memo</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <Form.Check
                                  type="switch"
                                  className="colored"
                                  checked
                                  disabled
                                />
                                <div>
                                  <div>Dashboard prototype FINAL.fig</div>
                                  <span className="text-secondary">720 KB</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge">Investment Memo</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <Form.Check
                                  type="switch"
                                  className="colored"
                                  checked
                                  disabled
                                />
                                <div>
                                  <div>UX Design Guidelines.docx</div>
                                  <span className="text-secondary">720 KB</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge">Investment Memo</span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className={Styles.card}>
                  <div className={Styles.card_body}>
                    <Row>
                      <Col lg={12} xl={10} className="mx-auto">
                        <div className={Styles.heading}>
                          Information Requested by Investor<span>*</span>
                        </div>
                        <Row className="gy-4">
                          <Col xs={12}>
                            <div className={formStyle.formGroup}>
                              <div
                                className={`${formStyle.labelText} text-black fw-semibold`}
                              >
                                Question number 1
                              </div>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                disabled
                              ></textarea>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className={formStyle.formGroup}>
                              <div
                                className={`${formStyle.labelText} text-black fw-semibold`}
                              >
                                Question number 2 <br /> Whatever they want to
                                ask
                              </div>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                disabled
                              ></textarea>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className={formStyle.formGroup}>
                              <div
                                className={`${formStyle.labelText} text-black fw-semibold`}
                              >
                                Question number 3 <br /> Whatever they want to
                                ask
                              </div>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                disabled
                              ></textarea>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ViewFunding;
