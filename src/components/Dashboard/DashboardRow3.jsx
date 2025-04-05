import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { baseUrl } from "../Config";
import toast from "react-hot-toast";
import ConnectWallet from "../ConnectWallet";

function DashboardRow3() {
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected } = useAccount();
  const { dashboardData } = useSelector((state) => state.bitgold);
  const ref = useRef();

  const copyAddress = () => {
    const Caddress = document.getElementById("input-text").value;
    navigator.clipboard
      .writeText(Caddress)
      .then(() => {
        toast.success("Sponsor ID copied to clipboard!");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  const handleShare = (platform) => {
    const link = `${baseUrl}/SignUp?ref=${dashboardData?.user}`;
    const message = encodeURIComponent(
      `Join me on Decentramax and earn with me! 🚀\nSign up here: ${link}`
    );

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${message}`, "_blank");
    } else if (platform === "telegram") {
      window.open(`https://t.me/share/url?url=${link}&text=${message}`, "_blank");
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-xxl-12">
        <div
          className="background-transparent card custom-card overflow-hidden glow-box-blue"
          style={{ height: "95%", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div className="card-body p-0">
            <div
              className="p-4 m-2 rounded-2 text-fixed-white bg-crypto-balance secondary11"
              style={{ height: "91%" }}
            >
              <div className="d-flex align-items-center gap-2 justify-content-between">
                <div>
                  <div className="mb-1 op-9">Refer & Earn</div>
                  <h6 className="text-fixed-white mb-1 fw-medium me-2">
                    Invite your friends to Decentramax and unlock unlimited income! <br />
                    Earn through direct and level-based referrals in a 100% decentralized smart contract system. <br />
                    Just a one-time $50 entry unlocks lifetime earning potential. Share your unique referral link now and start building your passive income journey!
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-3 pt-0 d-flex flex-column justify-content-center align-items-center mt-2">
            <h5>Your Referral Link</h5>
            <div className="row gy-3 w-100 px-0">
              <div className="col-xl-12 p-0">
                <div className="position-relative d-flex justify-content-center align-item-center">
                  <input
                    type="text"
                    className="form-control w-75 text-center"
                    id="input-text"
                    aria-describedby="basic-addon3"
                    value={`${baseUrl}/SignUp?ref=${dashboardData?.user}`}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="cc mt-3 d-flex gap-2 justify-content-center align-items-center flex-wrap">
              {isLoading ? (
                <span className="p-2">
                  <span className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                  </span>
                </span>
              ) : isConnected ? (
                <>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                    className="btn btn-secondary-gradient text-light stakebtn"
                    onClick={copyAddress}
                  >
                    Copy Link
                  </button>

                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                    className="btn btn-secondary-gradient text-light stakebtn"
                    onClick={() => handleShare("whatsapp")}
                  >
                    Share on WhatsApp
                  </button>

                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                    className="btn btn-secondary-gradient text-light stakebtn"
                    onClick={() => handleShare("telegram")}
                  >
                    Share on Telegram
                  </button>
                </>
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
