import React from "react";
import { useState } from "react";
import { Col, Modal, Row, Dropdown, DropdownButton } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const UploadFileModal = ({ show, setShow }) => {
  const [inputFields, setInputFields] = useState({
    documentCategory: "Document Category",
    document: "",
  });
  return (
    <Modal
      centered
      className="modal-md"
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Body>
        <div className="text-center">
          <p className="m-1 fw-bold">Upload and attach files</p>
          <span className="text-secondary">
            Upload and attach files to this workspace.
          </span>
        </div>
        <form>
          <Row className="gy-3 mt-3">
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <div className={formStyle.labelText}>
                  Category<span>*</span>
                </div>
                <DropdownButton
                  id="dropdown-basic-button"
                  title={inputFields.documentCategory}
                >
                  <Dropdown.Item
                    onClick={() =>
                      setInputFields({
                        ...inputFields,
                        documentCategory: "One",
                      })
                    }
                  >
                    One
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      setInputFields({
                        ...inputFields,
                        documentCategory: "Two",
                      })
                    }
                  >
                    Two
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      setInputFields({
                        ...inputFields,
                        documentCategory: "Three",
                      })
                    }
                  >
                    Three
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
            <Col xs={12}>
              <div className={formStyle.fileUploader}>
                <input type="file" name="" id="" />
                <div className={formStyle.fileUploadIcon}>
                  <FeatherIcon icon="upload-cloud" color="#475467" size={20} />
                </div>
                <p className="m-0">
                  Click to upload{" "}
                  <span className="text-secondary">or drag and drop</span>
                </p>
              </div>
            </Col>
            <Col xs={12}>
              <Row className="gy-3">
                <Col xs={12}>
                  <div className={formStyle.uploadedFileBox}>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-1">
                      <div>Dashboard prototype recording.mp4</div>
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                    <div className="text-secondary mb-1">16 MB</div>
                    <div className={formStyle.progressBar_wrapper}>
                      <div className={formStyle.progressBar}>
                        <div
                          className={formStyle.progressLine}
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <div>40%</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.uploadedFileBox}>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-1">
                      <div>Dashboard prototype recording.mp4</div>
                      <button className="btn border-0 p-0 btn-auto">
                        <FeatherIcon icon="trash-2" color="#667085" size={18} />
                      </button>
                    </div>
                    <div className="text-secondary mb-1">16 MB</div>
                    <div className={formStyle.progressBar_wrapper}>
                      <div className={formStyle.progressBar}>
                        <div
                          className={formStyle.progressLine}
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <div>40%</div>
                    </div>
                  </div>
                </Col>
              </Row>
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
                Attach files
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UploadFileModal;
