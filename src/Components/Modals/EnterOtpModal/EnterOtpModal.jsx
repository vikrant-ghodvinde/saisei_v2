import React from "react";
import { Modal } from "react-bootstrap";
import Styles from "./Modal.module.css";

const EnterOtpModal = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)} className="modal-lg">
      <Modal.Body>
        <div className="text-center">
          <h5 className="m-0">2FA Setup</h5>
        </div>
        <form>
          <div className={Styles.otpWrapper}>
            <div className={Styles.otpItem}>
                <div className={Styles.otpInput}>
                    <input type="text" name="" id="" maxLength={1} placeholder="0" />
                </div>
            </div>
            <div className={Styles.otpItem}>
                <div className={Styles.otpInput}>
                    <input type="text" name="" id="" maxLength={1} placeholder="0" />
                </div>
            </div>
            <div className={Styles.otpItem}>
                <div className={Styles.otpInput}>
                    <input type="text" name="" id="" maxLength={1} placeholder="0" />
                </div>
            </div>
            <div className={Styles.otpItem}>
                <span>-</span>
            </div>
            <div className={Styles.otpItem}>
                <div className={Styles.otpInput}>
                    <input type="text" name="" id="" maxLength={1} placeholder="0" />
                </div>
            </div>
            <div className={Styles.otpItem}>
                <div className={Styles.otpInput}>
                    <input type="text" name="" id="" maxLength={1} placeholder="0" />
                </div>
            </div>
            <div className={Styles.otpItem}>
                <div className={Styles.otpInput}>
                    <input type="text" name="" id="" maxLength={1} placeholder="0" />
                </div>
            </div>
          </div>
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
                Verify
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EnterOtpModal;
