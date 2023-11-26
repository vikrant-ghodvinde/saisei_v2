import React from "react";
import styles from "../Navbar.module.css";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useState } from "react";

export function Statusbar({ title, cancelPath }) {
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
            <h6 className="text-light-grey text-capitalize fw-normal m-0">
              {title}
            </h6>
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
}

export function StatusbarMenu({ cancelPath }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const location = useLocation();
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
            <div
              className={styles.respToggler}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <FeatherIcon icon="menu" size={26} />
            </div>
            <ul
              className={`${styles.menus} ${menuToggle ? styles.active : ""}`}
            >
              <div
                className={styles.respCloser}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <FeatherIcon icon="x" size={26} />
              </div>
              <li>
                <Link
                  to="/team_company"
                  className={
                    location.pathname === "/team_company" ? styles.active : ""
                  }
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/team_application"
                  className={
                    location.pathname === "/team_application" ? styles.active : ""
                  }
                >
                  Application
                </Link>
              </li>
            </ul>
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
}
