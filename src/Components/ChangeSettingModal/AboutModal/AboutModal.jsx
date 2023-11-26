import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const AboutModal = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">About Us</h5>
        </div>
        <form>
          <Row className="gy-3 mt-3">
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  About Us
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Enter a description..."
                ></textarea>
                <span className="text-secondary">
                  Please provide information about you VC as this would help the
                  start-ups get to know you better!
                </span>
              </div>
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
              <button type="submit" className="btn btn-dark w-100">
                Save
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AboutModal;
