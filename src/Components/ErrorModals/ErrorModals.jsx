import React from "react";
import { Modal } from "react-bootstrap";
import Styles from "./AlertModal.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

export function AlertModal({ show, setShow, message }) {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className={Styles.alertModalWrapper}>
          <div className={Styles.icon}>
            <FeatherIcon icon="alert-circle" size={18} color="#D92D20" />
          </div>
          <h5>Delete Account</h5>
          <p className="m-0">
            Are you sure you would like to delete your account? Please note all
            the data, applications to VC and all the comms will be deleted.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="px-0">
        <div className="d-flex align-items-center gap-2 w-100">
          <button
            type="button"
            className="btn btn-border w-100"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-danger w-100">
            Yes
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function MessageModal({ show, setShow, message }) {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className={Styles.alertModalWrapper}>
          <h5>Message from **VC Name**</h5>
          <p className={`m-0 ${Styles.fs_12}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="px-0">
        <div className="d-flex align-items-center gap-2 w-100">
          <button
            type="button"
            className="btn btn-border w-100"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
