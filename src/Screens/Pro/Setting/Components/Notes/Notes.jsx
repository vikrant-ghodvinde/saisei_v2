import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SavedNotes from "./Components/SavedNotes";
import EditNotes from "./Components/EditNotes";

const Notes = () => {
  const [isEditable, setIsEditable] = useState(false);
  const handleClick = () => {
    setIsEditable(!isEditable);
    if (isEditable) {
      // APIs AND REST CODE
      console.log("your code");
    }
  };
  return (
    <Row className="gy-2">
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
      <Col xs={12}>{!isEditable ? <SavedNotes /> : <EditNotes />}</Col>
    </Row>
  );
};

export default Notes;
