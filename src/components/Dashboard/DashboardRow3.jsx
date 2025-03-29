import React, { useState, useEffect } from "react";
import AreaChart from "../Chart/AreaChart";
import { UserData } from "../web3";
import lapsLogo from "../../assets/img/loan.png";
import { useSelector } from "react-redux";
import { cutAfterDecimal } from "../web3";
import ConnectWallet from "../ConnectWallet";
import { PiHandDepositBold } from "react-icons/pi";
import { useAccount } from "wagmi";

function DashboardRow3() {
  const [isLoading, setIsLoading] = useState(false)
  const { isConnected } = useAccount()
  return (
    <div className="row">
      <div className="col-sm-12  col-md-12 col-xxl-12">
        <div
          className="card custom-card overflow-hidden glow-box-blue"
          style={{ height: "95%", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div className="card-body p-0">
            <div
              className="p-4 m-2 rounded-2  text-fixed-white bg-crypto-balance "
              style={{ height: "91%" }}
            >
              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div>
                  <div className="mb-1 op-9">Refer & Earn $1,000,000</div>
                  <h6 className="text-fixed-white mb-1 fw-medium me-2">
                    Unlock unlimited earning potential by referring your
                    friends. <br /> The more you refer, the more you earn!{" "}
                    <br /> Share your unique referral link and start building
                    your financial future today.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-3 pt-0 d-flex flex-column justify-content-center align-items-center  mt-2">
            <h5>Your Referral Link</h5>
            <div className="row gy-3 w-100 px-0">
              <div className="col-xl-12 p-0">
                <div className="position-relative d-flex justify-content-center align-item-center">
                  <input
                    type="number"
                    className="form-control w-75"
                    id="signup-package"
                    placeholder="Referral Link"
                    // value={packageValue}
                    // onChange={handleInputChange}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="cc mt-3 d-grid btn btn-outline-primary address-notconnected-btn d-flex justify-content-center align-items-center">
              {isLoading ? (
                <span className="p-2">
                  <span className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                  </span>
                </span>
              ) : isConnected ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                  className="btn btn-secondary-gradient w-100 text-light stakebtn"
                  // onClick={() => Stake(packageValue)}
                  // disabled={accessAddress}
                >
                  Copy Link
                </button>
              ) : (
                <ConnectWallet className="address-connected-btn" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRow3;
