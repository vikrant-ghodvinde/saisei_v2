import React, { useState } from "react";
import styles from "../Navbar.module.css";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import NotificationModal from "Components/Modals/NotificationModal/NotificationModal";

export function SaiseiNavbar() {
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
                  to="/company_dashboard"
                  className={
                    location.pathname === "/company_dashboard" ? styles.active : ""
                  }
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/company_documents"
                  className={
                    location.pathname === "/company_documents" ? styles.active : ""
                  }
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/company_investorlist"
                  className={
                    location.pathname === "/company_investorlist" ? styles.active : ""
                  }
                >
                  Investor list
                </Link>
              </li>
              <li>
                <Link
                  to="/company_application"
                  className={
                    location.pathname === "/company_application" ? styles.active : ""
                  }
                >
                  Application
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.rightSec}>
            <ul className={styles.menu}>
              <li>
                <Link
                  to="/company_setting"
                  className={
                    location.pathname === "/company_setting" ? styles.active : ""
                  }
                >
                  <FeatherIcon icon="settings" size={18} />
                </Link>
              </li>
              <li>
                <button className={`btn text-danger p-0 border-0`}>
                  <FeatherIcon icon="log-out" size={18} strokeWidth={2} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export function ProNavbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [notification, setNotification] = useState(false);
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
                  to="/account_dashboard"
                  className={
                    location.pathname === "/account_dashboard" ? styles.active : ""
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/account_application"
                  className={
                    location.pathname === "/account_application" ? styles.active : ""
                  }
                >
                  Application
                </Link>
              </li>
              <li>
                <Link
                  to="/account_setting"
                  className={
                    location.pathname === "/account_setting" ? styles.active : ""
                  }
                >
                  Setting
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.rightSec}>
            <ul className={styles.menu}>
              <li>
                <button
                  className={`btn text-white p-0 border-0 ${styles.hasNotification}`}
                  onClick={() => setNotification(true)}
                >
                  <FeatherIcon icon="bell" size={18} strokeWidth={2} />
                </button>
              </li>
              <li>
                <button className={`btn text-danger p-0 border-0`}>
                  <FeatherIcon icon="log-out" size={18} strokeWidth={2} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
      <NotificationModal show={notification} setShow={setNotification} />
    </header>
  );
}
