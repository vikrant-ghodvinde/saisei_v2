import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import Styles from "Styles/Additional.module.css";
import AccountEmail from "Components/ChangeSettingModal/AccountEmail/AccountEmail";
import AccountPassword from "Components/ChangeSettingModal/AccountPassword/AccountPassword";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import AccountName from "Components/ChangeSettingModal/AccountName/AccountName";
import FundName from "Components/ChangeSettingModal/FundName/FundName";
import SocialLinks from "Components/ChangeSettingModal/SocialLinks/SocialLinks";
import AboutModal from "Components/ChangeSettingModal/AboutModal/AboutModal";
import { AccountDelete } from "Components/ErrorModals/ErrorModals";

const Profile = () => {
  const [passwordModalShow, setPasswordModalShow] = useState(false);
  const [emailModalShow, setEmailModalShow] = useState(false);
  const [nameModalShow, setNameModalShow] = useState(false);
  const [fundNameModalShow, setFundNameModalShow] = useState(false);
  const [socialMediaModalShow, setSocialMediaModalShow] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [accountDeleteModal, setAccountDeleteModal] = useState(false);
  return (
    <React.Fragment>
      <Row className="align-items-center gy-5">
        <Col md={12} lg={6} xl={4}>
          <Row>
            <Col md={12} lg={10}>
              <div className="text-grey mb-4">Personal Details</div>
              <Row className="gy-4">
                <Col xs={12} md={12}>
                  <div className={formStyle.userImageUpload}>
                    <div className={formStyle.imageBox}>
                      <img
                        src="/assets/images/user.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className={formStyle.icon}>
                      <input type="file" name="" id="" />
                      <span className="display__icon">
                        <FeatherIcon icon="camera" size={18} />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Account Email
                    </label>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      Tushar.patel@whatever.com
                      <span
                        className="text-decoration-underline text-purple cursor-pointer"
                        onClick={() => setEmailModalShow(true)}
                      >
                        Change
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Present password
                    </label>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      ********************
                      <span
                        className="text-decoration-underline text-purple cursor-pointer"
                        onClick={() => setPasswordModalShow(true)}
                      >
                        Change
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Name
                    </label>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      Tushar Patel
                      <span
                        className="text-decoration-underline text-purple cursor-pointer"
                        onClick={() => setNameModalShow(true)}
                      >
                        Change
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Warm Introduction Code
                    </label>
                    <div className="d-flex align-items-center gap-3">
                      <input type="text" name="" id="" value="ABCD-ABCD" />
                      <button
                        type="button"
                        className="btn h0-auto p-0 border-0"
                      >
                        <FeatherIcon icon="copy" size={20} />
                      </button>
                    </div>
                    <span className="text-secondary">
                      Please request start-up to insert this code when making an
                      application to ensure you receive this as Warm
                      introduction
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Row>
            <Col md={12} lg={10}>
              <div className="text-grey mb-4">Personal Details</div>
              <Row className="gy-4">
                <Col xs={12} md={12}>
                  <div className={formStyle.userImageUpload}>
                    <div className={formStyle.imageBox}>
                      <img
                        src="/assets/images/user.png"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <div className={formStyle.icon}>
                      <input type="file" name="" id="" />
                      <span className="display__icon">
                        <FeatherIcon icon="camera" size={18} />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Name of the Fund
                    </label>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      ABCD Fund
                      <span
                        className="text-decoration-underline text-purple cursor-pointer"
                        onClick={() => setFundNameModalShow(true)}
                      >
                        Change
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      {" "}
                    </label>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      Socials
                      <span
                        className="text-decoration-underline text-purple cursor-pointer"
                        onClick={() => setSocialMediaModalShow(true)}
                      >
                        Change
                      </span>
                    </div>
                    <Row className="mt-3">
                      <Col xs={12}>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 d-inline-block"
                        >
                          <div>
                            <img
                              src="/assets/images/icons/facebook.svg"
                              alt="facebook"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </Col>
                      <Col xs={12}>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 d-inline-block"
                        >
                          <div>
                            <img
                              src="/assets/images/icons/twitter.svg"
                              alt="facebook"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </Col>
                      <Col xs={12}>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 d-inline-block"
                        >
                          <div>
                            <img
                              src="/assets/images/icons/instagram.svg"
                              alt="facebook"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </Col>
                      <Col xs={12}>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 d-inline-block"
                        >
                          <div>
                            <img
                              src="/assets/images/icons/linkedin.svg"
                              alt="facebook"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </Col>
                      <Col xs={12}>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 d-inline-block"
                        >
                          <div>
                            <img
                              src="/assets/images/icons/tiktok.svg"
                              alt="facebook"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </Col>
                      <Col xs={12}>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 d-inline-block"
                        >
                          <div>
                            <img
                              src="/assets/images/icons/youtube.svg"
                              alt="facebook"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </Col>
                      <Col xs={12}>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 d-inline-block"
                        >
                          <div>
                            <img
                              src="/assets/images/icons/globe.svg"
                              alt="facebook"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Row className="gy-4">
            <Col xs={12} md={12}>
              <div className={formStyle.formGroup}>
                <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                  About Us
                  <span
                    className="text-decoration-underline text-purple cursor-pointer"
                    onClick={() => setAboutModal(true)}
                  >
                    Change
                  </span>
                </div>
              </div>
              <div className={`${Styles.bigTextContainer} my-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Delete Account?
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setAccountDeleteModal(true)}
                >
                  Delete
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <AccountPassword
        show={passwordModalShow}
        setShow={setPasswordModalShow}
      />
      <AccountEmail show={emailModalShow} setShow={setEmailModalShow} />
      <AccountName show={nameModalShow} setShow={setNameModalShow} />
      <FundName show={fundNameModalShow} setShow={setFundNameModalShow} />
      <SocialLinks
        show={socialMediaModalShow}
        setShow={setSocialMediaModalShow}
      />
      <AboutModal show={aboutModal} setShow={setAboutModal} />
      <AccountDelete
        show={accountDeleteModal}
        setShow={setAccountDeleteModal}
      />
    </React.Fragment>
  );
};

export default Profile;
