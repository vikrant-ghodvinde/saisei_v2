import React, { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import Styles from "Styles/Additional.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { RemoveMember } from "Components/ErrorModals/ErrorModals";
import InviteMemberModal from "Components/InviteMemberModal/InviteMemberModal";

const Team = () => {
  const [modalShow, setModalShow] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);
  const handleClick = () => {
    setModalShow(true);
  };
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} lg={6} xl={5}>
          <div className={Styles.tableWrapper}>
            <div className={Styles.tableHeading}>
              <div>Invite Member</div>
              <button
                type="button"
                className={Styles.tableButtonCircle}
                onClick={() => setInviteModal(true)}
              >
                <FeatherIcon icon="plus" size={22} />
              </button>
            </div>
            <div className={Styles.tableBody}>
              <Table responsive borderless>
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
                        <div className="text-start">
                          <p className="m-0">Olivia Rhye</p>
                          <span className="fs-12">olivia@untitledui.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge success-badge">Super Admin</span>
                    </td>
                    <td>
                      <button className={Styles.tableTextButton} disabled>
                        Remove
                      </button>
                    </td>
                    <td></td>
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
                        <div className="text-start">
                          <p className="m-0">Olivia Rhye</p>
                          <span className="fs-12">olivia@untitledui.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge info-badge">QA</span>
                    </td>
                    <td>
                      <button
                        className={Styles.tableTextButton}
                        onClick={handleClick}
                      >
                        Remove
                      </button>
                    </td>
                    <td></td>
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
                        <div className="text-start">
                          <p className="m-0">Olivia Rhye</p>
                          <span className="fs-12">olivia@untitledui.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge info-badge">QA</span>
                    </td>
                    <td>
                      <button
                        className={Styles.tableTextButton}
                        onClick={handleClick}
                      >
                        Remove
                      </button>
                    </td>
                    <td></td>
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
                        <div className="text-start">
                          <p className="m-0">Olivia Rhye</p>
                          <span className="fs-12">olivia@untitledui.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge info-badge">QA</span>
                    </td>
                    <td>
                      <button
                        className={Styles.tableTextButton}
                        onClick={handleClick}
                      >
                        Remove
                      </button>
                    </td>
                    <td></td>
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
                        <div className="text-start">
                          <p className="m-0">Olivia Rhye</p>
                          <span className="fs-12">olivia@untitledui.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge info-badge">Viewer</span>
                    </td>
                    <td>
                      <button
                        className={Styles.tableTextButton}
                        onClick={handleClick}
                      >
                        Remove
                      </button>
                    </td>
                    <td></td>
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
                        <div className="text-start">
                          <p className="m-0">Olivia Rhye</p>
                          <span className="fs-12">olivia@untitledui.com</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge info-badge">Viewer</span>
                    </td>
                    <td>
                      <button
                        className={Styles.tableTextButton}
                        onClick={handleClick}
                      >
                        Remove
                      </button>
                    </td>
                    <td>
                      <span className={Styles.disabledText}>Invited</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={6} xl={4}>
          <div className={`${Styles.disabledText} mb-4`}>Seats Available</div>
          <Table responsive bordered className="spacing">
            <thead>
              <tr>
                <th>Subscribed Seats</th>
                <th>Seats Used</th>
                <th>Seats Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5</td>
                <td>1</td>
                <td>4</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <RemoveMember show={modalShow} setShow={setModalShow} />
      <InviteMemberModal show={inviteModal} setShow={setInviteModal} />
    </React.Fragment>
  );
};

export default Team;
