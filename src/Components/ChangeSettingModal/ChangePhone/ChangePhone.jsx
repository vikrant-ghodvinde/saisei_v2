import React from "react";
import { useState } from "react";
import { Col, Dropdown, DropdownButton, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const ChangePhone = ({ show, setShow }) => {
  const [phoneCountry, setPhoneCountry] = useState("US");
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
                <DropdownButton id="dropdown-basic-button" title={phoneCountry}>
                  <Dropdown.Item
                    className={phoneCountry === "IN" ? "active" : ""}
                    onClick={() => setPhoneCountry("IN")}
                  >
                    IN
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={phoneCountry === "UK" ? "active" : ""}
                    onClick={() => setPhoneCountry("UK")}
                  >
                    UK
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={phoneCountry === "AU" ? "active" : ""}
                    onClick={() => setPhoneCountry("AU")}
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
