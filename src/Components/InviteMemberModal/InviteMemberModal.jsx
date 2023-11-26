import React from "react";
import { Col, Dropdown, DropdownButton, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const InviteMemberModal = ({ show, setShow }) => {
  return (
    <Modal
      centered
      show={show}
      onHide={() => setShow(false)}
      className="modal-lg"
    >
      <Modal.Body>
        <div className="text-start">
          <FeatherIcon icon="user-plus" size={18} color="#000" />
        </div>
        <form>
          <Row className="gy-2 mt-3">
            <Col xs={6}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Invite Team Members
                </label>
              </div>
              <div className={formStyle.formGroupIcon}>
                <FeatherIcon icon="mail" size={18} color="#667085" />
                <input type="text" name="" id=""></input>
              </div>
            </Col>
            <Col xs={6}>
              <div className={formStyle.formGroup}>
                <label
                  htmlFor=""
                  className={formStyle.labelText}
                  style={{ opacity: "0" }}
                >
                  hidden
                </label>
                <DropdownButton title="Permission">
                  <Dropdown.Item>Admin</Dropdown.Item>
                  <Dropdown.Item>Investment</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
            <Col xs={6}>
              <div className={formStyle.formGroupIcon}>
                <FeatherIcon icon="mail" size={18} color="#667085" />
                <input type="text" name="" id=""></input>
              </div>
            </Col>
            <Col xs={6}>
              <DropdownButton title="Permission">
                <Dropdown.Item>Admin</Dropdown.Item>
                <Dropdown.Item>Investment</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col xs={12}>
              <div className="my-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn h-auto p-0">
                    <FeatherIcon icon="plus" size={18} /> Add another
                </button>
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
              <button type="button" className="btn btn-dark w-100">
                Send Invite
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default InviteMemberModal;
