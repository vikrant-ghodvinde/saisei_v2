import React from "react";
import { Form, Table } from "react-bootstrap";

const ShortListedInvestors = () => {
  return (
    <Table responsive className="text-center padding-4">
      <thead className="table-dark">
        <tr>
          <th>Fund Name</th>
          <th>Sector</th>
          <th>Stage of Investment</th>
          <th>Type</th>
          <th>Invests In</th>
          <th>NOTES by VC</th>
          <th>Shortlist</th>
          <th>Shortlist</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge primary-badge">Seed</span>
              <span className="badge info-badge">Pre Seed</span>
              <span className="badge indigo-badge">Series A</span>
              <span className="badge dark-badge">+4</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge success-badge">Angle Syndicate</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge primary-badge">Seed</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge primary-badge">Seed</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge primary-badge">Seed</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge primary-badge">Seed</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge primary-badge">Seed</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="table__has-img">
              <div className="img-box">
                <img
                  src="/assets/images/Avatar.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              XYZ VC
            </div>
          </td>
          <td>
            <span className="text-secondary">FinTech, Saas, EdTech</span>
          </td>
          <td>
            <div className="d-flex align-item-center justify-content-center gap-1">
              <span className="badge primary-badge">Seed</span>
            </div>
          </td>
          <td>
            <span className="badge dark-badge">VC</span>
          </td>
          <td>
            <span className="badge dark-badge">Globally</span>
          </td>
          <td>ABCD</td>
          <td>
            <Form.Check type="switch" checked />
          </td>
          <td>
            <button type="button" className="sm_app-btn sm_app-btn-secondary">
              Apply
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ShortListedInvestors;
