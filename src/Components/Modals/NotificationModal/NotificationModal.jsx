import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import Styles from "./Notification.module.css";

const NotificationModal = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className={Styles.notificationWrapper}>
          <Row className="gy-3">
            <Col xs={12}>
              <div className="d-flex align-items-center justify-content-between gap-2">
                <h5 className="m-0">Notification</h5>
                <button type="button" className="btn h-auto p-0 border-0 fs-12">
                  Clear-All
                </button>
              </div>
            </Col>
            <Col xs={12}>
              <div className={Styles.notificationBox}>
                <div className={Styles.notificationContainer}>
                  You have New approval request from Abc Efg
                </div>
                <div className={Styles.notificationButton}>
                  <button type="button">Clear</button>
                  <button type="button">View</button>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className={Styles.notificationBox}>
                <div className={Styles.notificationContainer}>
                  You have New approval request from Abc Efg
                </div>
                <div className={Styles.notificationButton}>
                  <button type="button">Clear</button>
                  <button type="button">View</button>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className={Styles.notificationBox}>
                <div className={Styles.notificationContainer}>
                  You have New approval request from Abc Efg
                </div>
                <div className={Styles.notificationButton}>
                  <button type="button">Clear</button>
                  <button type="button">View</button>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className={Styles.notificationBox}>
                <div className={Styles.notificationContainer}>
                  You have New approval request from Abc Efg
                </div>
                <div className={Styles.notificationButton}>
                  <button type="button">Clear</button>
                  <button type="button">View</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
