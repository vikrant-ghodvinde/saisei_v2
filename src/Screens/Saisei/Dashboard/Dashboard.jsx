import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ViewDashboard from "./Components/ViewDashboard";
import EditDashboard from "./Components/EditDashboard";

const Dashboard = () => {
  const [pageType, setPageType] = useState("View");
  const handleClick = () => {
    pageType === "View" ? setPageType("Edit") : setPageType("View");
  };
  return (
    <div className="app__wrapper">
      <Container fluid>
        <div className="padding__container h-auto">
          <Row className="gy-5 flex-column-reverse flex-lg-row">
            <Col md={12} lg={8}>
              {pageType === "View" ? <ViewDashboard /> : <EditDashboard />}
            </Col>
            <Col md={12} lg={4}>
              <div className="text-end">
                <button
                  type="button"
                  className={`btn fw-bold ${pageType === "View" ? "btn-border" : "btn-success"}`}
                  onClick={handleClick}
                >
                  {pageType === "View" ? "Edit" : "Save"}
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
