import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const AccountEmail = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">Change Email</h5>
        </div>
        <form>
          <Row className="gy-3 mt-3">
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Present Password
                </label>
                <input type="password" name="" id=""></input>
              </div>
            </Col>
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  New Email
                </label>
                <input type="email" name="" id=""></input>
              </div>
            </Col>
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Confirm New Email
                </label>
                <input type="email" name="" id=""></input>
              </div>
            </Col>
          </Row>
          <Modal.Footer className="px-0">
            <div className="d-flex align-items-center gap-2 w-100">
              <button type="button"
                className="btn btn-border w-100"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-dark w-100">Save</button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AccountEmail;
