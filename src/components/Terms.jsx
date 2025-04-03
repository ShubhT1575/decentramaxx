import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-xl-9">
          <div className="card custom-card overflow-hidden">
            <div className="card-body p-4">
              <div className="mb-3 d-flex justify-content-between">
                <h3 className="mb-1 text-primary">Terms of Use for Decentramax</h3>
                <button className="btn btn-icon btn-danger btn-wave" onClick={() => window.history.back()}>
                  <i className="ri-arrow-left-circle-line"></i>
                </button>
              </div>
              <ul className="terms-list list-unstyled">
                <li>
                  <div className="fs-6 fw-medium text-primary">1. Introduction :</div>
                  <p className="mb-0">
                    Welcome to Decentramax, a fully decentralized smart contract
                    system built on the OP BNB blockchain. By using our
                    platform, you agree to comply with and be bound by these
                    Terms of Use.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">2. Platform Purpose :</div>
                  <p className="mb-0">
                    Decentramax is designed to provide a secure and automated
                    earning system without manual intervention. The platform
                    operates with complete transparency and fairness through
                    smart contract automation.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">3. User Responsibilities :</div>
                  <ul className="mb-1">
                    <li>Users must ensure compliance with applicable laws.</li>
                    <li>All transactions are final and non-refundable.</li>
                    <li>Users are responsible for securing their wallets and credentials.</li>
                  </ul>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">4. Decentralization & Security :</div>
                  <p className="mb-0">
                    Decentramax operates without centralized oversight, ensuring
                    trust and security. Users should practice due diligence and
                    protect their digital assets.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">5. Income & Auto-Rebirth :</div>
                  <p className="mb-0">
                    The platform follows an auto-recycle and auto-rebirth
                    mechanism to ensure continuous earnings through its
                    decentralized system.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">6. No Admin Control :</div>
                  <p className="mb-0">
                    Decentramax is a fully trustless system. There are no
                    central authorities, and earnings are distributed
                    automatically through smart contracts.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">7. Limitation of Liability :</div>
                  <p className="mb-0">
                    Decentramax is not responsible for losses due to user errors,
                    smart contract interactions, or misuse of funds by third parties.
                  </p>
                </li>
                <li>
                  <div className="fs-6 fw-medium text-primary">8. Amendments :</div>
                  <p className="mb-0">
                    We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of any updates.
                  </p>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              {/* <div className="text-end">
                <Link to="/SignUp" className="btn btn-lg btn-primary1-light me-2">
                  Decline
                </Link>
                <Link to="/SignUp" className="btn btn-lg btn-primary">
                  Accept
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
