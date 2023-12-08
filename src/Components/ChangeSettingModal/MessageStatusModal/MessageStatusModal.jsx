import React, { useState } from "react";
import { Col, Dropdown, DropdownButton, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const MessageStatusModal = ({ show, setShow }) => {
  const [status, setStatus] = useState("Status");
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">Message</h5>
        </div>
        <form>
          <Row className="gy-3 mt-3">
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Enter a description..."
                ></textarea>
                <span className="text-secondary">
                  Please provide feedback on the application, please not this
                  will be visible to the Applicant
                </span>
              </div>
            </Col>
            <Col xs={12}>
              <DropdownButton title={status}>
                <Dropdown.Item
                  className={status === "Pending" ? "active" : ""}
                  onClick={() => setStatus("Pending")}
                >
                  Pending
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Unsuccessful" ? "active" : ""}
                  onClick={() => setStatus("Unsuccessful")}
                >
                  Unsuccessful
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Initial Communication" ? "active" : ""}
                  onClick={() => setStatus("Initial Communication")}
                >
                  Initial Communication
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Due Diligence" ? "active" : ""}
                  onClick={() => setStatus("Due Diligence")}
                >
                  Due Diligence
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Investment Committee" ? "active" : ""}
                  onClick={() => setStatus("Investment Committee")}
                >
                  Investment Committee
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Term Sheet" ? "active" : ""}
                  onClick={() => setStatus("Term Sheet")}
                >
                  Term Sheet
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Funded" ? "active" : ""}
                  onClick={() => setStatus("Funded")}
                >
                  Funded
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Exit" ? "active" : ""}
                  onClick={() => setStatus("Exit")}
                >
                  Exit
                </Dropdown.Item>
                <Dropdown.Item
                  className={status === "Top Up" ? "active" : ""}
                  onClick={() => setStatus("Top Up")}
                >
                  Top Up
                </Dropdown.Item>
              </DropdownButton>
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

export default MessageStatusModal;
