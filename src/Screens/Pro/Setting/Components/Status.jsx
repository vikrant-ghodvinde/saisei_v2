import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Status = () => {
  const [isEditable, setIsEditable] = useState(false);
  const handleClick = () => {
    setIsEditable(!isEditable);
    if (isEditable) {
      // APIs AND REST CODE
      console.log("your code");
    }
  };
  return (
    <React.Fragment>
      <Row className="gy-5">
        <Col xs={12}>
          <div className="text-end">
            <button
              type="button"
              className={`btn btn-${isEditable ? "success" : "border"}`}
              onClick={handleClick}
            >
              {!isEditable ? "Edit" : "Save"}
            </button>
          </div>
        </Col>
        <Col xs={12}>
          <div className="checkbox_list grid-of-1">
            <div className="grid-item">
              <Form.Check
                type="checkbox"
                label="Active"
                disabled={!isEditable ? true : false}
                checked
              />
            </div>
            <div className="grid-item">
              <Form.Check
                type="checkbox"
                label="Deactivate"
                disabled={!isEditable ? true : false}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="gy-5 mt-5">
        <Col xs={12}>
          <div className="mb-4">
            <p className="text-secondary">Type of fund</p>
          </div>
          <div className="checkbox_list grid-of-1">
            <div className="grid-item">
              <Form.Check
                type="radio"
                label="Venture Capital"
                id="ventureCapital"
                name="fundType"
                className="inputRadio"
                disabled={!isEditable ? true : false}
                checked
              />
            </div>
            <div className="grid-item">
              <Form.Check
                type="radio"
                label="Angel Syndicate"
                id="angelSyndicate"
                name="fundType"
                className="inputRadio"
                disabled={!isEditable ? true : false}
              />
            </div>
            <div className="grid-item">
              <Form.Check
                type="radio"
                label="Angel (Individual)"
                id="angel"
                name="fundType"
                className="inputRadio"
                disabled={!isEditable ? true : false}
              />
            </div>
            <div className="grid-item">
              <Form.Check
                type="radio"
                label="Corporate Venture Capital"
                id="corporateVentureCapital"
                name="fundType"
                className="inputRadio"
                disabled={!isEditable ? true : false}
              />
            </div>
            <div className="grid-item">
              <Form.Check
                type="radio"
                label="Fund Manager (Others)"
                id="fundManager"
                name="fundType"
                className="inputRadio"
                disabled={!isEditable ? true : false}
              />
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Status;
