import React from "react";
import Paginations from "Components/Paginations/Paginations";
import { Container, Table } from "react-bootstrap";

const Application = () => {
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container d-flex flex-column align-item-center justify-content-between">
          <div>
            <Table responsive className="text-center padding-4 mt-5">
              <thead className="table-dark">
                <tr>
                  <th>Fund Name</th>
                  <th>Type</th>
                  <th>Application Status</th>
                  <th>Date Applied</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge dark-badge">VC</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="badge dark-badge">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge dark-badge">VC</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="badge dark-badge">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge dark-badge">VC</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="badge dark-badge">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge dark-badge">VC</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="badge dark-badge">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge dark-badge">VC</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="badge dark-badge">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge success-badge">Angle Syndicate</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="badge dark-badge">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge info-badge">Family Office</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="sm_app-btn sm_app-btn-success">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table__has-img">
                      <div className="img-box">
                        <img
                          src="/assets/images/Avatar.png"
                          alt="user"
                          className="img-fluid"
                        />
                      </div>
                      XYZ VC
                    </div>
                  </td>
                  <td>
                    <span className="badge info-badge">Family Office</span>
                  </td>
                  <td>
                    <span className="badge">Incomplete</span>
                  </td>
                  <td>
                    <span className="text-secondary">11/12/2020</span>
                  </td>
                  <td>
                    <span className="sm_app-btn sm_app-btn-success">Message</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto text-secondary fw-bold">
                        Open
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto text-danger fw-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Paginations />
        </div>
      </Container>
    </div>
  );
};

export default Application;
