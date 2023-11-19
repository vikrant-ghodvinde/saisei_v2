import React from "react";
import styles from "../Navbar.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Statusbar = ({ title, cancelPath }) => {
  return (
    <header className={styles.header}>
      <Container fluid>
        <nav>
          <div className={styles.leftSec}>
            <div className={styles.logo}>
              <img
                src="/assets/images/logo_short.svg"
                alt="logo"
                className="img-fluid"
              />
            </div>
            <h6 className="text-light-grey text-capitalize fw-normal m-0">{title}</h6>
          </div>
          <div className={styles.rightSec}>
            <Link to={cancelPath} className="gradient-text">
              Cancel
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Statusbar;
