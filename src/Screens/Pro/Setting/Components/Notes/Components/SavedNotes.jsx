import React from "react";
import { Col, Row } from "react-bootstrap";
import Styles from "../NotesStyle.module.css";

const SavedNotes = ({ description, questions }) => {
  return (
    <Row>
      <Col lg={12} xl={5}>
        <Row>
          <Col md={12} lg={6}>
            <div className={Styles.descriptionWrapper}>
              <p className={Styles.titleLine}>
                Additional information for applicant
              </p>
              <div className={Styles.descriptionBox}>
                {description ? description : "Description..."}
              </div>
              <span
                className={Styles.spanLine}
                style={{
                  color: !description ? "#00000099" : "#00000040",
                }}
              >
                Additional Information you would like to provide to the
                entrepreneur.
              </span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col lg={12} xl={1}>
        <div className={Styles.notesBorder}></div>
      </Col>
      <Col lg={12} xl={6}>
        <p className={Styles.titleLine}>Additional information for applicant</p>
        {questions && (
          <Row className="gy-4 mb-5">
            <Col xs={12}>
              <div className={Styles.questionBox}>
                <div className={Styles.que}>Question 1</div>
                <div className={Styles.ans}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim{" "}
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className={Styles.questionBox}>
                <div className={Styles.que}>Question 2</div>
                <div className={Styles.ans}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim{" "}
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className={Styles.questionBox}>
                <div className={Styles.que}>Question 3</div>
                <div className={Styles.ans}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim{" "}
                </div>
              </div>
            </Col>
          </Row>
        )}
        <span className={Styles.spanLine}>
          {!questions
            ? "Click Edit to Add/Edit"
            : "Click Edit to Add/Edit/Delete"}
        </span>
      </Col>
    </Row>
  );
};

export default SavedNotes;
