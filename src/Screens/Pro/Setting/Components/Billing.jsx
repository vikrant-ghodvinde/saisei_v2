import React from "react";
import { Col, Row } from "react-bootstrap";

const Billing = () => {
  return (
    <Row>
      <Col sm={12} md={6} lg={3}>
        <div className="billing-card">
          <div className="card-body">
            <h2>AU $15.00/mth</h2>
            <p>per team member</p>

            <ul className="billing_details-list">
              <li>Invite team members and allocate them to deals.</li>
            </ul>
            <button type="button" className="btn btn-dark w-100">Purchase</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Billing;
