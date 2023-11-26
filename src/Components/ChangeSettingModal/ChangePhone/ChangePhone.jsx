import React from "react";
import { Col, Dropdown, DropdownButton, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const ChangePhone = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">Change Phone No</h5>
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
              <div className={`${formStyle.labelText} text-black`}>
                Phone number
              </div>
              <div className="inputHasDropdownPhone">
                <DropdownButton id="dropdown-basic-button" title="US">
                  <Dropdown.Item>IN</Dropdown.Item>
                  <Dropdown.Item>UK</Dropdown.Item>
                  <Dropdown.Item>AU</Dropdown.Item>
                </DropdownButton>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="+1 (555) 000-0000"
                />
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

export default ChangePhone;
