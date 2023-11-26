import React from "react";
import { Col, Dropdown, DropdownButton, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const MessageStatusModal = ({ show, setShow }) => {
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
              <DropdownButton title="Status">
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Pending
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Unsuccessful <FeatherIcon icon="check" size={18} />
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Initial Communication
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Due Diligence
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Investment Committee
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Term Sheet
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Funded
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
                  Exit
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center justify-content-between">
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
