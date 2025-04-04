import React, { useEffect, useState } from "react";
import ConnectWallet from "./ConnectWallet";
import { useAccount, useChainId } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setDashboardData,
  setProfileUrll,
  setTokenData,
  setWalletDetails,
} from "../Redux/Slice";
import { getUser } from "../API/Api";
import { getUSDT } from "./web3";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import logo from "/favi icon (1).png"
import axios from "axios";
import { apiUrl } from "./Config";

function Header() {
  const dispatch = useDispatch();
  const chainId = useChainId();
  // const address = "0x70961132c3C0EAffA3651A578DA4c7b0e958D3cB";
  // const { address } = useAccount();
  const { wallet, profileUrll , stateChange } = useSelector((state) => state.bitgold);
  // console.log(profileUrll, "profileUrl");
  const { walletAddress } = wallet;
  const address = walletAddress;
  const navigate = useNavigate();
  const [accessAdress, setAccessAddress] = useState("");
  const { connector, isConnected, status, isDisconnected } = useAccount();

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    if (res.has("accessAddress")) {
      const ref = res.get("accessAddress");
      console.log(ref, "redddddfffff");
      setAccessAddress(ref);
    }
  }, [window.location.search]);

  const add = address ? address : accessAdress;

  // useEffect(() => {
  //   dispatch(
  //     setWalletDetails({
  //       walletAddress: add,
  //       chainId,
  //       isConnected,
  //       isDisconnected,
  //       connector,
  //       status,
  //     })
  //   );
  // }, [dispatch, chainId, add, isConnected, isDisconnected, accessAdress]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!add) {
  //       navigate("/SignIn");
  //     }
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, [add, navigate]);

  useEffect(() => {
    getUser(add)
      .then((res) => {
        console.log(res, "res");
        if (res?.status == 200) {
          console.log(res?.data?.user, "ghfsdatgcgt");
          dispatch(setDashboardData(res?.data?.user));
        } else {
          dispatch(setDashboardData({}));
        }
      })
      .catch((error) => {
        console.log(error, "ERROR:::");
      });
  }, [add]);

  function isCollapsed() {
    const side = document.getElementById("sidebar");
    if (window.innerWidth <= 992) {
      if (side.classList.contains("t")) {
        side.classList.replace("t", "y");
      } else if (side.classList.contains("y")) {
        side.classList.replace("y", "t");
      }
    }
  }

  // const handleOpenPDF = () => {
  //   window.open("/pdf/CoreCrowd.pdf", "_blank");
  // };

  useEffect(() => {
    if (address)
      getUSDT().then((res) => {
        // console.log(res);
        dispatch(
          setTokenData({
            address: res?.address,
            decimals: res?.decimals,
            symbol: res?.symbol,
          })
        );
      });
  }, [address]);

  // const [profileData,setProfileData] = useState({})

  const getProfileData = async ()=>{
    const res = await axios.get(apiUrl + "getUserProfile",{
      params:{
        address: address
      }
    })
    console.log(res?.data?.data, "rescc");
    // setProfileData(res?.data?.data)
    dispatch(setProfileUrll(res?.data?.data))
  }

  useEffect(()=>{
    getProfileData()
  },[address,stateChange])

  return (
    <header
      className="app-header header-ll sticky bg-crypto-balance"
      id="header"
      style={{ background: "transparent" }}
    >
      <div className="main-header-container container-fluid align-items-center">
        <div className="header-content-left  d-flex align-items-center ">
          
          <div
            className="header-element mx-lg-0 mx-2 head-tog text-light"
            onClick={isCollapsed}
            id="ic"
          >
            <a
              aria-label="Hide Sidebar"
              className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle text-light"
              data-bs-toggle="sidebar"
              href="#"
            >
              {/* <span></span> */}
              {/* <i class="fa-solid fa-bars" style={{color: "black"}}></i> */}
              <GiHamburgerMenu
                style={{ color: "#000000" }}
                className="ham-btn"
              />
            </a>
          </div>
          <Avatar
            size={{ xs: 40, sm: 40, md: 50, lg: 50, xl: 60, xxl: 70 }}
            src={profileUrll?.profile?.profileUrl}
          />
          {/* <div className=" d-flex align-items-center">
            <span className="fw-bold head-welcome" style={{ fontSize: "22px" }}>
              Welcome Back...
              <span className="text-warning">
                {address ? `${address.slice(0, 4)}...${address.slice(-4)}` : ""}
              </span>
            </span>
          </div> */}
        </div>
        <ul className="header-content-right">
          <ConnectWallet />
        </ul>
      </div>
    </header>
  );
}

export default Header;
