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
                <Dropdown.Item>Pending</Dropdown.Item>
                <Dropdown.Item>Unsuccessful</Dropdown.Item>
                <Dropdown.Item>Initial Communication</Dropdown.Item>
                <Dropdown.Item>Due Diligence</Dropdown.Item>
                <Dropdown.Item>Investment Committee</Dropdown.Item>
                <Dropdown.Item>Term Sheet</Dropdown.Item>
                <Dropdown.Item>Funded</Dropdown.Item>
                <Dropdown.Item>Exit</Dropdown.Item>
                <Dropdown.Item>Top Up</Dropdown.Item>
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
