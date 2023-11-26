import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Stage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const handleClick = () => {
    setIsEditable(!isEditable);
    if (isEditable) {
      // APIs AND REST CODE
      console.log("your code");
    }
  };
  return (
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
              label="Pre Seed"
              disabled={!isEditable ? true : false}
              checked
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Seed"
              disabled={!isEditable ? true : false}
              checked
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Angel"
              disabled={!isEditable ? true : false}
              checked
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Growth"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Series A"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Series B +"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Pre IPO"
              disabled={!isEditable ? true : false}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Stage;
