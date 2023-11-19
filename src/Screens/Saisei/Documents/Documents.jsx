import Paginations from "Components/Paginations/Paginations";
import UploadFileModal from "Components/UploadFileModal/UploadFileModal";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const Documents = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container d-flex flex-column align-item-center justify-content-between">
          <div>
            <Row className="g-4 align-items-end mb-3">
              <Col lg={12} xl={6}>
                <button type="button" className="btn btn-dark" onClick={() => setShowModal(true)}>
                  <FeatherIcon icon="upload-cloud" size={18} /> Upload
                </button>
              </Col>
              <Col lg={12} xl={6}>
                <Row>
                  <Col md={12} lg={4} xl={6} className="ms-0 ms-xl-auto">
                    <div className={formStyle.searchBox}>
                      <FeatherIcon icon="search" size={20} />
                      <input type="text" name="" id="" placeholder="search" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Table responsive className="text-center">
              <thead className="table-dark">
                <tr>
                  <th>File name</th>
                  <th>File size</th>
                  <th>Date uploaded</th>
                  <th>Category</th>
                  <th className="bg-white border-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div>Dashboard</div>
                      <span className="text-secondary">720 KB</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-secondary">200 KB</span>
                  </td>
                  <td>
                    <span>Jan 4, 2022</span>
                  </td>
                  <td>
                    <span className="text-grey">Investment Memo</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-4">
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon
                          icon="download-cloud"
                          color="#667085"
                          size={18}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn border-0 p-0 btn-auto"
                      >
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
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
      <UploadFileModal show={showModal} setShow={setShowModal} />
    </div>
  );
};

export default Documents;
