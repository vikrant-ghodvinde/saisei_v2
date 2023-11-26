import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import Styles from "../Modal.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const RemoveSeatsModal = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">Remove Seats</h5>
        </div>
        <Row>
          <Col md={12} lg={8} className="mx-auto">
            <Row className="gy-4 my-4">
              <Col xs={12}>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  Number of seat available <span>5</span>
                </div>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12} sm={8} className="mx-auto">
                    <div className={formStyle.formGroup}>
                      <input type="text" name="" id="" value="1" className="text-center" />
                    </div>
                    <div className="fs-12 text-center mt-1">
                      Number of Seat you want to remove
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="fw-medium">Price</span>
                  <span className="fw-medium">$5</span>
                </div>
              </Col>
              <Col xs={12}>
                <Row className="text-center">
                  <Col xs={6}>
                    <button type="button" className={Styles.circleButton}>
                      <FeatherIcon icon="minus" size={18} />
                    </button>
                  </Col>
                  <Col xs={6}>
                    <button type="button" className={Styles.circleButton}>
                      <FeatherIcon icon="plus" size={18} />
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal.Footer className="px-0">
          <div className="d-flex align-items-center gap-2 w-100">
            <button
              type="button"
              className="btn btn-border w-100"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger w-100">
              Remove
            </button>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveSeatsModal;
