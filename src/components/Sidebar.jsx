import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserExist } from "./web3";
import { GiProfit } from "react-icons/gi";
import { TbBinaryTree, TbBinaryTree2 } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { RiGlobalFill, RiTeamFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import LOGO from "../assets/logo/Bitgold yellow.png";
import { useSelector } from "react-redux";
import { getOwner } from "./web3";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useAccount } from "wagmi";
import economy from "../../src/assets/img/economy.png";
import { FaPeopleRoof, FaSackDollar } from "react-icons/fa6";
import { RiFundsBoxLine } from "react-icons/ri";
import { RiWallet3Line } from "react-icons/ri";
import { LuPackageCheck } from "react-icons/lu";
import "../../src/style/sidebar.css";
import { BiMoneyWithdraw } from "react-icons/bi";

function Sidebar() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const Raddress = walletAddress;
  const { address } = useAccount();
  const Waddress = address;

  const navigate = useNavigate();
  const [Owner, setOwner] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const [refFromUrl, setRefFromUrl] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  // const [showDiv , setShowDiv] = useState()

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    if (res.has("ref")) {
      const ref = res.get("ref");
      setRefFromUrl(ref);
      // setShowDiv(true);
    }
  }, [window.location.search]);

  useEffect(() => {
    if (Raddress) {
      UserExist(Raddress)
        .then((res) => {
          if (!res) navigate("/SignUp");
        })
        .catch((e) => {
          console.log(e);
          navigate("/SignUp");
        });
    }
  }, [Raddress]);

  const useOwner = async () => {
    const owner = await getOwner();
    setOwner(owner);
  };

  useEffect(() => {
    useOwner();
  }, []);

  function closeSidebar() {
    const side = document.getElementById("sidebar");
    const Body = document.getElementsByTagName("body");
    console.log(Body);
    if (window.innerWidth <= 992) {
      if (side.classList.contains("t")) {
        side.classList.replace("t", "y");
      } else if (side.classList.contains("y")) {
        side.classList.replace("y", "t");
      }
    }
  }

  const handleLogout = ()=>{
    localStorage.removeItem("wallet")
    navigate("/SignIn")
  }

  return (
    <div
      className={`app-sidebar app-sidebar-ll sticky t header-nav-ll `}
      id="sidebar"
      style={{ overflowY: "auto", border: "none", background: "none" }}
    >
      <div
        className="main-sidebar-header bg-crypto-balance"
        style={{
          background: "transparent",
          height: "88px",
        }}
      >
        <a href="/dashboard" className="header-logo fs-4 fw-bold ">
          <img
            src="/Asset 1.png"
            alt=""
            style={{ height: "20px" }}
          />
          {/* <h3>DecentraMaxx</h3> */}
        </a>
      </div>
      <div
        className="main-sidebar bg-crypto-balance"
        id="sidebar-scroll"
        style={{
          display: "block",
          background: "black",
          color: "white",
          overflow: "hidden",
        }}
      >
        <nav className="main-menu-container nav nav-pills flex-column sub-open position-relative h-100 mt-3">
          <ul className="main-menu main-menu-ll">
            <div
              className=""
              style={{ marginLeft: "20px", marginBottom: "20px" }}
            >
              <img
                src="/Asset 1.png"
                alt=""
                style={{ height: "20px", display: "none" }}
                className="dash-logo"
              />
              {/* <h2>DecentraMax</h2> */}
            </div>
            <li className="slide has-sub mt-4 display-flex justify-content-start">
              <Link
                to="/Dashboard"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 side-menu__icon text-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
                <span className="side-menu__label text-light">Dashboard</span>
              </Link>
            </li>

            {/* <li className="slide has-sub">
              <Link className="side-menu__item" to="/MatrixTreeUw" style={{ cursor: "pointer" }}>
                <TbBinaryTree className="side-menu__icon" />
                <span className="side-menu__label">Matrix</span>
              </Link>
              <div className="collapse-body">
                <div className="card card-body dropdown-links">
                  <Link
                    to="/MatrixTreeUw"
                    className="side-menu__item"
                    onClick={closeSidebar}
                  >
                    <span className="side-menu__label"><i className="fa-solid fa-caret-right icon-drop"></i>UW</span>
                  </Link>
                  <Link
                    to="/MatrixTreeUw1"
                    className="side-menu__item"
                    onClick={closeSidebar}
                  >
                    <span className="side-menu__label"><i className="fa-solid fa-caret-right icon-drop"></i>UWN-1</span>
                  </Link>
                  <Link
                    to="/MatrixTreeUw2"
                    className="side-menu__item"
                    onClick={closeSidebar}
                  >
                    <span className="side-menu__label"><i className="fa-solid fa-caret-right icon-drop"></i>UWN-2</span>
                  </Link>
                  <Link
                    to="/MatrixTree"
                    className="side-menu__item"
                    onClick={closeSidebar}
                  >
                    <span className="side-menu__label"><i className="fa-solid fa-caret-right icon-drop"></i>UWN-3</span>
                  </Link>
                  <Link
                    to="/MatrixTreeUw4"
                    className="side-menu__item"
                    onClick={closeSidebar}
                  >
                    <span className="side-menu__label"><i className="fa-solid fa-caret-right icon-drop"></i>UWN-4</span>
                  </Link>
                  <Link
                    to="/MatrixTreeUw5"
                    className="side-menu__item"
                    onClick={closeSidebar}
                  >
                    <span className="side-menu__label"><i className="fa-solid fa-caret-right icon-drop"></i>UWN-5</span>
                  </Link>
                  <Link
                    to="/MatrixTreeUw6"
                    className="side-menu__item"
                    onClick={closeSidebar}
                  >
                    <span className="side-menu__label"><i className="fa-solid fa-caret-right icon-drop"></i>UWN-6</span>
                  </Link>
                </div>
              </div>
            </li> */}

            {/* Matix 2 */}
            {/* <li className="slide has-sub">
              <Link
                to="/MatrixTreeAll"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <TbBinaryTree className="side-menu__icon" />

                <span className="side-menu__label">Matrix-2</span>
              </Link>
            </li> */}

            {/* MatrixIncome */}
            {/* <li className="slide has-sub">
              <Link
                to="/LevelIncome"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-businessplan side-menu__icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
                  <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                  <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                  <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                  <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                  <path d="M5 15v1m0 -8v1" />
                </svg>
                <span className="side-menu__label">Matrix Income</span>
              </Link>
            </li> */}

            {/* <li className="slide has-sub">
              <Link
                to="/RankReward"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <GiProfit className="side-menu__icon text-light" />
                <span className="side-menu__label text-light">
                  Referral History
                </span>
              </Link>
            </li> */}

            {/* <li className="slide has-sub">
              <Link
                to="/FortuneIncome"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <LuPackageCheck className="side-menu__icon text-light" />
                <span className="side-menu__label text-light">
                  Package History
                </span>
              </Link>
            </li> */}

              {/* <li className="slide has-sub">
                <Link
                  to="/CoreIncome"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <i className="ri-wallet-3-fill side-menu__icon text-light"></i>
                  <span className="side-menu__label text-light">
                    Earning Report
                  </span>
                </Link>
              </li> */}
            <li className="slide has-sub">
              <Link
                to="/MatrixTreeUw5"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <TbBinaryTree2 className="side-menu__icon text-light"/>
                <span className="side-menu__label text-light">
                  Single Leg
                </span>
              </Link>
            </li>
            <li className="slide has-sub">
                <Link
                  to="/CoreIncome"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <i className="fa-solid fa-coins side-menu__icon text-light"></i>
                  <span className="side-menu__label text-light">
                  Single Leg Report
                  </span>
                </Link>
              </li>
              <li className="slide has-sub">
                <Link
                  to="/LevelIncome"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <i className="fa-solid fa-arrows-spin side-menu__icon text-light"></i>
                  <span className="side-menu__label text-light">
                    Re-Entry Report
                  </span>
                </Link>
              </li>
              <li className="slide has-sub">
                <Link
                  to="/GlobalIncome"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <i className="fa-solid fa-money-bill-trend-up side-menu__icon text-light"></i>
                  <span className="side-menu__label text-light">
                    Level Income
                  </span>
                </Link>
              </li>
              <li className="slide has-sub">
                <Link
                  to="/FortuneIncome"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <GiReceiveMoney className="side-menu__icon text-light" />
                  <span className="side-menu__label text-light">
                    Weekly Salary
                  </span>
                </Link>
              </li>
              <li className="slide has-sub">
                <Link
                  to="/AutoGlobal"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <RiTeamFill className="side-menu__icon text-light" />
                  <span className="side-menu__label text-light">
                    My Direct
                  </span>
                </Link>
              </li>
              <li className="slide has-sub">
                <Link
                  to="/Level"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <FaPeopleRoof  className="side-menu__icon text-light" />
                  <span className="side-menu__label text-light">
                    Team Direct
                  </span>
                </Link>
              </li>
              <li className="slide has-sub">
                <Link
                  to="/WithdrawReport"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <BiMoneyWithdraw className="side-menu__icon text-light" />
                  <span className="side-menu__label text-light">
                    Withdraw Report
                  </span>
                </Link>
              </li>
             
              <li className="slide has-sub">
                <Link
                  to="/Profile"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <i className="fa-solid fa-user-tie side-menu__icon text-light"></i>
                  <span className="side-menu__label text-light">
                    Profile 
                  </span>
                </Link>
              </li>
                {/* <li className="slide has-sub">
                <Link
                  to="/FortuneIncome"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <i className="ri-wallet-3-fill side-menu__icon text-light"></i>
                  <span className="side-menu__label text-light">
                    Member Income
                  </span>
                </Link>
              </li> */}

            {/* <li className="slide has-sub">
              <Link
                to="/GlobalIncome"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-businessplan side-menu__icon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
                  <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                  <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                  <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                  <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                  <path d="M5 15v1m0 -8v1" />
                </svg>
                <FaSackDollar className="side-menu__icon" />
                <span className="side-menu__label">Daily Stake Reward</span>
              </Link>
            </li> */}

            {/* <li className="slide has-sub">
              <Link
                to="/AutoGlobal"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <GiReceiveMoney className="side-menu__icon" />
                <span
                  className="side-menu__label"
                  style={{ paddingLeft: "5spx" }}
                >
                  Referral Reward
                </span>
              </Link>
            </li> */}

            {/* <li className="slide has-sub">
              <Link
                to="/RankReward"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <RiFundsBoxLine className="side-menu__icon" />
                <span
                  className="side-menu__label"
                  style={{ paddingLeft: "5px" }}
                >
                  Rank Reward
                </span>
              </Link>
            </li> */}

            {/* <li className="slide has-sub">
              <Link
                to="/Ranking"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <i className="ri-sort-asc side-menu__icon"></i>
                <span className="side-menu__label">Global Ranking</span>
              </Link>
            </li> */}

            {/* <li className="slide has-sub">
              <Link
                to="/Stake"
                className="side-menu__item"
                onClick={closeSidebar}
              >
                <i className="ri-table-fill side-menu__icon"></i>
                <span className="side-menu__label">Team Data</span>
              </Link>
            </li> */}

            {/* {Waddress === Raddress && (
              <li className="slide has-sub">
                <Link
                  to="/Support"
                  className="side-menu__item"
                  onClick={closeSidebar}
                >
                  <MdOutlineSupportAgent className="side-menu__icon" />
                  <span className="side-menu__label">Support</span>
                </Link>
              </li>
            )} */}

            <li className="slide has-sub">
              <div className="logoutbtn">
                <Link
                  to="/SignIn"
                  className=" position-absolute logoutbtn"
                  // style={{
                  //   paddingLeft: "70px",
                  //   paddingTop: "20px",
                  //   paddingBottom: "20px",
                  // }}
                >
                  <button
                    type="button"
                    className="btn btn-dark-gradient text-light btn-wave logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
