import React from "react";
import { Col, Row } from "react-bootstrap";
import Styles from "../NotesStyle.module.css";
import formStyle from "Styles/FormControl.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const EditNotes = () => {
  return (
    <Row>
      <Col lg={12} xl={5}>
        <Row>
          <Col md={12} lg={6}>
            <div className={Styles.descriptionWrapper}>
              <p className={Styles.titleLine}>
                Additional information for applicant
              </p>
              <div className={formStyle.formGroup}>
                <textarea name="" id=""></textarea>
              </div>
              <span className={Styles.spanLine}>
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
        <Row className="gy-4 mb-5">
          <Col xs={12}>
            <div className={Styles.questionBox}>
              <div className={Styles.que}>Question 1</div>
              <div className={Styles.questionInput}>
                <input type="text" name="" id="" />
                <button type="button">
                  <FeatherIcon icon="minus-square" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={Styles.questionBox}>
              <div className={Styles.que}>Question 2</div>
              <div className={Styles.questionInput}>
                <input type="text" name="" id="" />
                <button type="button">
                  <FeatherIcon icon="minus-square" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={Styles.questionBox}>
              <div className={Styles.que}>Question 3</div>
              <div className={Styles.questionInput}>
                <input type="text" name="" id="" />
                <button type="button">
                  <FeatherIcon icon="minus-square" size={18} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className={`${Styles.questionInput} justify-content-center`}>
          <button type="button" className="text-black">
            <FeatherIcon icon="plus-circle" size={18} />
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default EditNotes;
