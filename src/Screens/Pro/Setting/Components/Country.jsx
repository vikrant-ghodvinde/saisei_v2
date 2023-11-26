import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Country = () => {
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
        <div className="checkbox_list grid-of-5">
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Global"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="India"
              disabled={!isEditable ? true : false}
              checked
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="USA"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="Canada"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="UK"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="New Zealand"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
          <div className="grid-item">
            <Form.Check
              type="checkbox"
              label="List item"
              disabled={!isEditable ? true : false}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Country;
