import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import { UserExist } from "./web3";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LOGO from "../assets/logo/Bitgold yellow.png";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import Header from "./Landing/Header";
import "../style/SignUp.css";
import { setWalletDetails } from "../Redux/Slice";

function SignIn() {
  const { connector, isConnected, status, isDisconnected, address } =
    useAccount();
  const [walletAddress, setWalletAddress] = useState();
  const navigate = useNavigate();
  const [viewAddressInput, setViewAddressInput] = useState("");
  const [showUserAccountSection, setShowUserAccountSection] = useState(false);
  const dispatch = useDispatch();

  const res = new URLSearchParams(window.location.search);
  const ref = res?.get("ref");
  useEffect(() => {
    setWalletAddress(ref ? ref : address);
  }, [ref, address]);

  const LogIn = async () => {
    try {
      const user = await UserExist(walletAddress);
      if (user) {
        dispatch(
          setWalletDetails({
            walletAddress: address,
          })
        );
        navigate("/Dashboard");
      } else {
        toast.error("User Not Exist! Please Register first");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during the login process.");
    }
  };

  const handleViewDashboard = async () => {
    if (!viewAddressInput) {
      toast.error("Please enter a wallet address");
      return;
    }
    try {
      const user = await UserExist(viewAddressInput);
      if (user) {
        dispatch(
          setWalletDetails({
            walletAddress: viewAddressInput,
          })
        );
        navigate("/Dashboard");
      } else {
        toast.error("User with this address does not exist");
      }
    } catch (error) {
      console.error("Error checking user:", error);
      toast.error("An error occurred while checking the user");
    }
  };

  const handlePreviousMenu = () => {
    navigate("/");
  };

  return (
    <div
      className="row authentication authentication-cover-main mx-0"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col-xxl-6 col-xl-7">
        <div className="row justify-content-center align-items-center h-100">
          <div
            className=""
            style={{
              position: "absolute",
              top: "25px",
              left: "0px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button className="Btn" onClick={handlePreviousMenu}>
              <div className="sign">
                <i className="fa-solid fa-left-long"></i>
              </div>
            </button>
            <div className="authentication-cover-logo">
              <ConnectWallet />
            </div>
          </div>
          <div className="col-xxl-7 col-xl-9 col-lg-6 col-md-6 col-sm-8 col-12">
            <div className="card custom-card my-5 new-card-box">
              <div className="card-body p-5 signin-body w-100">
                  <div className="text-center mb-3">
                    <img src="/Asset 1.png" alt="" style={{ height: "20px" }} />
                  </div>
                {!showUserAccountSection && <div>
                  <p className="h5 mb-2 text-center color-class">Sign In</p>
                  <div className="d-flex justify-content-center gap-1">
                    <p className="mb-4 op-7 fw-normal text-center color-class">
                      Welcome back
                    </p>
                    <p className="text-primary">
                      {address
                        ? `${address?.slice(0, 5)}...${address?.slice(-5)}`
                        : "!"}
                    </p>
                  </div>
                  <div className="row gy-3">
                    <div className="col-xl-12">
                      <label className="form-label text-dark">
                        Wallet Address
                      </label>
                      <input
                        type="text"
                        className="form-control color-class"
                        value={isConnected ? address : " Please Connect Wallet"}
                        style={{ fontSize: "14px", border: ".5px solid white" }}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="d-grid mt-4">
                    {!isConnected ? (
                      <ConnectWallet className="address-connected-btn" />
                    ) : (
                      <button className="btn btn-dark btn-wave" onClick={LogIn}>
                        Sign In
                      </button>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="mt-3 mb-0">
                      Don’t have an account?{" "}
                      <Link to="/SignUp" className="text-primary">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>}
                <div className="d-flex mt-4 w-100 justify-content-center">
                  <button
                    className="btn btn-primary-gradient w-75 "
                    style={{placeItems: "center"}}
                    onClick={() =>
                      setShowUserAccountSection(!showUserAccountSection)
                    }
                  >
                    {showUserAccountSection ? "Hide" : "See Any User Account"}
                  </button>
                </div>
                {showUserAccountSection && (
                  <>
                    <div className="row gy-3">
                      <div className="col-xl-12" style={{ marginTop: "20px" }}>
                        <p className="h5 mb-2 text-center color-class mt-3 mb-3">
                          See Any User Account
                        </p>
                        <input
                          type="text"
                          className="form-control color-class imputxx"
                          placeholder="Enter Wallet Address . . ."
                          value={viewAddressInput}
                          onChange={(e) => setViewAddressInput(e.target.value)}
                          style={{
                            fontSize: "14px",
                            border: ".5px solid white",
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-grid mt-4">
                      <button
                        className="btn btn-dark btn-wave"
                        onClick={handleViewDashboard}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
