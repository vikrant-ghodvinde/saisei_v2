import Paginations from "Components/Paginations/Paginations";
import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Application = () => {
  const [status, setStatus] = useState("Status");
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container d-flex flex-column align-item-center justify-content-between">
          <div>
            <Row className="g-4 align-items-center justify-content-center justify-content-md-between mb-3">
              <Col sm={12} md={6} lg={4} xl={2}>
                <div className={formStyle.formGroup}>
                  <DropdownButton id="dropdown-basic-button" title={status}>
                    <Dropdown.Item onClick={() => setStatus("My Queue")}>
                      My Queue
                    </Dropdown.Item>
                    <Dropdown.Item className="active" onClick={() => setStatus("All")}>
                      All
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("Pending")}>
                      Pending
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("Unsuccessful")}>
                      Unsuccessful
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setStatus("Initial Communication")}
                    >
                      Initial Communication
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("Due Diligence")}>
                      Due Diligence
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("Funded")}>
                      Funded
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("Warm")}>
                      Warm
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} xl={4}>
                <div className="alert-messageBox">
                  <span>
                    Your Account is Inactive. Please Subscribe to Activate
                  </span>
                  <button type="button">Fix now <FeatherIcon icon="arrow-right" size={18} /></button>
                </div>
              </Col>
            </Row>
          </div>
          <Table responsive className="text-center padding-4">
            <thead className="table-dark">
              <tr>
                <th>Company Name </th>
                <th>Sector</th>
                <th>Investment Stage</th>
                <th>Date Rec</th>
                <th>Status</th>
                <th>Allocate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter">
                      <img
                        src="/assets/images/icons/thermometerWarmer.svg"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">FinTech</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Pre Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Due Diligence</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter"></div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">FinTech</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Pre Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Initial Comms</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter"></div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">FinTech</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Investment Committee</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter"></div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">Saas</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Funded</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter"></div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">Saas</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Syndicate</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter"></div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">AI</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Exit</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter"></div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">AI</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Pending</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__has-img">
                    <div className="img-box warmMeter"></div>
                    <div className="text-start">
                      <p className="m-0">ABCD.Pty Ltd</p>
                      <span className="fs-12">Email@email.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-secondary">Saas</span>
                </td>
                <td>
                  <div className="d-flex align-item-center justify-content-center gap-1">
                    <span className="badge">Seed</span>
                  </div>
                </td>
                <td>
                  <span className="badge">12/12/2023</span>
                </td>
                <td>
                  <span className="badge">Unsuccessful</span>
                </td>
                <td>
                  <div className="table__has-img">
                    <div className="img-box">
                      <img
                        src="/assets/images/Avatar.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-start">
                      <p className="m-0">Olivia Rhye</p>
                      <span className="fs-12">olivia@untitledui.com</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn p-0 h-auto text-success fw-bold"
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn p-0 h-auto text-purple fw-bold"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Paginations />
        </div>
      </Container>
    </div>
  );
};

export default Application;
