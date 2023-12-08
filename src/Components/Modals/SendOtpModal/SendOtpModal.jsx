import React from "react";
import { useState } from "react";
import { Col, Dropdown, DropdownButton, Modal, Row } from "react-bootstrap";

const SendOtpModal = ({ show, setShow }) => {
  const [country, setCountry] = useState("US");
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">2FA Setup</h5>
        </div>
        <form>
          <Row className="gy-3 my-4">
            <Col xs={12}>
              <div className="inputHasDropdownPhone">
                <DropdownButton id="dropdown-basic-button" title={country}>
                  <Dropdown.Item
                    className={country === "IN" ? "active" : ""}
                    onClick={() => setCountry("IN")}
                  >
                    IN
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={country === "UK" ? "active" : ""}
                    onClick={() => setCountry("UK")}
                  >
                    UK
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={country === "AU" ? "active" : ""}
                    onClick={() => setCountry("AU")}
                  >
                    AU
                  </Dropdown.Item>
                </DropdownButton>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <span className="text-secondary">
                We will send you text with a 6 digit code
              </span>
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
                Send
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SendOtpModal;
