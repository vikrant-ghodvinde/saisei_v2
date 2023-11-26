import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const SocialLinks = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">Social Links</h5>
        </div>
        <form>
          <Row className="gy-3 mt-3">
            <Col xs={12}>
              <div
                className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
              >
                <img
                  src="/assets/images/icons/facebook.svg"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
              >
                <img
                  src="/assets/images/icons/twitter.svg"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
              >
                <img
                  src="/assets/images/icons/instagram.svg"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
              >
                <img
                  src="/assets/images/icons/linkedin.svg"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
              >
                <img
                  src="/assets/images/icons/tiktok.svg"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
              >
                <img
                  src="/assets/images/icons/youtube.svg"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div
                className={`${formStyle.formGroup} ${formStyle.sm_input} d-flex align-items-center gap-3`}
              >
                <img
                  src="/assets/images/icons/globe.svg"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
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

export default SocialLinks;
