import React from "react";
import { Col, Dropdown, DropdownButton, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import Styles from "./AlertModal.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useState } from "react";

export function AccountDelete({ show, setShow }) {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className={Styles.alertModalWrapper}>
          <div className={`${Styles.icon} ${Styles.danger}`}>
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
          <button type="button" className="btn btn-danger w-100">
            Yes
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function RemoveMember({ show, setShow }) {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className={Styles.alertModalWrapper}>
          <div className={`${Styles.icon} ${Styles.danger}`}>
            <FeatherIcon icon="alert-circle" size={18} color="#D92D20" />
          </div>
          <h5>Remove Member</h5>
          <p className="m-0">
            Are you sure you want to remove the member? This action cannot be
            undone and you will need to reinvite them!
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
          <button type="button" className="btn btn-danger w-100">
            Remove
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function ErrorPage({ show, setShow }) {
  return (
    <Modal
      centered
      show={show}
      onHide={() => setShow(false)}
      className="modal-md"
    >
      <Modal.Body>
        <div className={Styles.alertModalWrapper}>
          <div className={`${Styles.icon} ${Styles.warning}`}>
            <FeatherIcon icon="alert-triangle" size={18} color="#DC6803" />
          </div>
          <div className="my-5">
            <h6 className="text-black">Something went wrong...</h6>
            <p className="m-0">
              We had some trouble loading this page. Please refresh the page to
              try again or get in touch if the problem sticks around!
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="px-0">
        <div className="d-flex align-items-center gap-2 w-100">
          <button type="button" className="btn btn-border w-100">
            Contact support
          </button>
          <button type="button" className="btn btn-dark w-100">
            Refresh page
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function Subscribe({ show, setShow }) {
  return (
    <Modal
      centered
      show={show}
      onHide={() => setShow(false)}
      className="modal-md"
    >
      <Modal.Body>
        <div className={Styles.alertModalWrapper}>
          <div className={`${Styles.icon} ${Styles.warning}`}>
            <FeatherIcon icon="alert-triangle" size={18} color="#DC6803" />
          </div>
          <div className="my-5">
            <h6 className="text-black">
              Team Member Invitation Limit Exceeded
            </h6>
            <p className="m-0">
              To invite additional team members to the platform, you need to
              subscribe. Please upgrade your subscription to accommodate the
              desired number of team members. Thank you!
            </p>
          </div>
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
          <button type="button" className="btn btn-dark w-100">
            Subscribe
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function AllocateTeam({ show, setShow }) {
  const [teamMember, setTeamMember] = useState("Select team member");
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className={Styles.alertModalWrapper}>
          <div className={`${Styles.icon} ${Styles.success}`}>
            <FeatherIcon icon="check-circle" size={18} color="#039855" />
          </div>
          <h5>Allocate to Team Member</h5>
          <Row>
            <Col xs={12}>
              <div className="text-start">
                <label htmlFor="" className={formStyle.labelText}>
                  Team member
                </label>
                <div className="dropdownHasIcon">
                  <FeatherIcon icon="user" size={18} />
                  <DropdownButton title={teamMember}>
                    <Dropdown.Item
                      className={teamMember === "Team Member" ? "active" : ""}
                      onClick={() => setTeamMember("Team Member")}
                    >
                      Team Member
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={teamMember === "Team Member" ? "active" : ""}
                      onClick={() => setTeamMember("Team Member")}
                    >
                      Team Member
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={teamMember === "Team Member" ? "active" : ""}
                      onClick={() => setTeamMember("Team Member")}
                    >
                      Team Member
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </Col>
          </Row>
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
          <button type="button" className="btn btn-success w-100">
            Allocate
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
