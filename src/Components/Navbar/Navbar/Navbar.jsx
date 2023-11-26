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
                  to="/company"
                  className={
                    location.pathname === "/company" ? styles.active : ""
                  }
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className={
                    location.pathname === "/documents" ? styles.active : ""
                  }
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/investor-list"
                  className={
                    location.pathname === "/investor-list" ? styles.active : ""
                  }
                >
                  Investor list
                </Link>
              </li>
              <li>
                <Link
                  to="/application"
                  className={
                    location.pathname === "/application" ? styles.active : ""
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
                  to="/setting"
                  className={
                    location.pathname === "/setting" ? styles.active : ""
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
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard" ? styles.active : ""
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/application"
                  className={
                    location.pathname === "/application" ? styles.active : ""
                  }
                >
                  Application
                </Link>
              </li>
              <li>
                <Link
                  to="/setting"
                  className={
                    location.pathname === "/setting" ? styles.active : ""
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
