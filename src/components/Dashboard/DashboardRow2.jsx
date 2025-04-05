import React, { useState, useEffect, useRef } from "react";
import AreaChart from "../Chart/AreaChart";
import {
  buyMatrix,
  getInvestment,
  getPendingCycle,
  getReinvestCount,
  getTotalPol,
  LevelTeamBusiness,
  UserData,
  withdrawWithSignature,
} from "../web3";
import lapsLogo from "../../assets/img/loan.png";
import { useSelector } from "react-redux";
import { cutAfterDecimal } from "../web3";
import axios from "axios";
import { apiUrl } from "../Config";
import ApexChart from "../Chart/Radar";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import { getBalance } from "viem/actions";
import Tooltip from "../ToopTip/Tooptip";
import { IoClipboardSharp } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";
import bg1 from "../../assets/img/9155702.jpg";
import bg2 from "../../assets/img/businessman-touching-red-icon-connected.jpg";
import bg3 from "../../assets/img/SL-0212121-40670-68.jpg";
import id from "../../assets/img/id.png";
import sponsor from "../../assets/img/deal.png";
import rank from "../../assets/img/high-quality.png";
import DateID from "../../assets/img/3d-calendar.png";
import Ref from "../../assets/img/bonus.png";
import rankReward from "../../assets/img/reward.png";
import Stake from "../../assets/img/saving.png";
import Login from "../../assets/img/profile-protection.png";
import FundReward from "../../assets/img/money.png";
import FundWallet from "../../assets/img/wallet.png";
import Reward from "../../assets/img/reward (1).png";
import Future from "../../assets/img/old-age.png";

function DashboardRow2() {
  const [TBusiness, setTeamBusiness] = useState();
  const [dashboard, setDashboard] = useState();
  const [directList, setDirectList] = useState([]);
  const [IncomeOverview, setIncomeOverview] = useState({});
  const [dateType, setDateType] = useState("Yearly");
  const { tokenData } = useSelector((state) => state.bitgold);
  const TokenAddress = tokenData?.address;
  const tokenDecimals = tokenData?.decimals;
  const { wallet, dashboardData } = useSelector((state) => state.bitgold);
  const { walletAddress } = wallet;
  const address = walletAddress;
  console.log(wallet, "dataa");
  const { directUser, directBusiness, teamBusiness, teamUser } = dashboardData;
  // const { address } = useAccount();
  // const address = "0x8a62CcdFFb086c190A869E49761E6F9E422214E7"
  const [isLoading, setIsLoading] = useState(false);
  // console.log(address,"xxx")
  // const address = walletAddress;
  const [matrixIncome, setMatrixIncome] = useState([]);
  const baseUrl = window.location.origin;
  // console.log(baseUrl, "baseUrl");
  const inputRef = useRef();
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // async function fetchData() {
  //   try {
  //     let data = await UserData(address);
  //     setDashboard(data);
  //     let TeamBusiness = await LevelTeamBusiness(address);
  //     setTeamBusiness(TeamBusiness);
  //   } catch (error) {
  //     setDashboard(false);
  //     setTeamBusiness(false);
  //     console.log(error);
  //   }
  // }

  // const getDirectList = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getDirectist", {
  //       params: {
  //         address: address,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       setDirectList(response?.data?.data);
  //     } else {
  //       setDirectList([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (address) getDirectList();
  // }, [address]);

  // const GetIncomeOverview = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getChatIncomeWithfilter", {
  //       params: {
  //         address: address,
  //         datetype: dateType,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       console.log(response?.data?.data?.percentages, "esponse?.data?.data");
  //       setIncomeOverview(response?.data?.data?.percentages);
  //     } else {
  //       setIncomeOverview({});
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (address) GetIncomeOverview();
  // }, [address, dateType]);

  // console.log(, ",,,,,,,,,,,,");
  // useEffect(() => {
  //   if (address) fetchData();
  // }, [address]);

  //  const [currentPage, setCurrentPage] = useState(1); // Current page
  //   const rowsPerPage = 6; // Rows per page

  //   // Calculate the total number of pages
  //   const totalPages = Math.ceil(directList?.length / rowsPerPage);

  //   // Calculate the data to display for the current page
  //   const startIndex = (currentPage - 1) * rowsPerPage;
  //   const endIndex = startIndex + rowsPerPage;
  //   const currentData = directList?.slice(startIndex, endIndex);

  //   // Event handlers for pagination buttons
  //   const handlePrev = () => {
  //     if (currentPage > 1) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   };

  //   const handleNext = () => {
  //     if (currentPage < totalPages) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   };

  //   const handlePageClick = (page) => {
  //     setCurrentPage(page);
  //   };

  const itemsPerPage = 6; // Change this to modify items per page
  const [currentPage, setCurrentPage] = useState(1);
  // const [matrixIncome,setMatrixIncome] = useState([]);

  const totalPages = Math.ceil(matrixIncome.length / itemsPerPage);

  // Handle previous page
  // const handlePreviousPage = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };

  // Handle next page
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };
  // const getMatrixIncome = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/matrixincome", {
  //       params: {
  //         userId: address,
  //         matrix: 1,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       console.log(response.data.user_income, "repp");

  //       setMatrixIncome(response?.data?.user_income || []);
  //       console.log(matrixIncome, "Matrix");
  //       // setTotalPages(response?.data?.totalPages);
  //     } else {
  //       setDirectUser([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };
  // useEffect(() => {
  //   if (address) getMatrixIncome();
  // }, [address]);

  const [dashData, setDashData] = useState("");
  const getDash = async () => {
    const res = await axios.get(apiUrl + "/dashboard", {
      params: {
        address: address,
        // address: "0xf0c90d0E550AFA5C4d557A7BeBfB89B1ea4d97f8"
      },
    });
    console.log(res?.data?.user, "respp");
    setDashData(res?.data?.user);
    console.log(dashData, "dash");
  };

  const [income, setIncome] = useState([]);
  const [income5, setIncome5] = useState(0);
  const [income25, setIncome25] = useState(0);

  const showIncome = async () => {
    try {
      const res = await axios.get(apiUrl + "/Income", {
        params: {
          user: address,
          // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7"
        },
      });
      console.log(res?.data, "income");
      setIncome(res?.data);
    } catch (error) {
      console.error("Error fetching income:", error);
    }
  };

  // Update income5 whenever income changes
  useEffect(() => {
    let amount = income
      .filter((item) => item.packageId === 1)
      .reduce((acc, item) => acc + item.amount, 0);

    setIncome5(amount.toFixed(2));
  }, [income]); // Runs when `income` changes
  useEffect(() => {
    let amount = income
      .filter((item) => item.packageId === 2)
      .reduce((acc, item) => acc + item.amount, 0);

    setIncome25(amount.toFixed(2));
  }, [income]); // Runs when `income` changes

  const [transaction, setTransaction] = useState([]);
  const showTransaction = async () => {
    const res = await axios.get(apiUrl + "/directReferrer", {
      params: {
        // receiver: "0xf0c90d0E550AFA5C4d557A7BeBfB89B1ea4d97f8"
        address: address,
      },
    });
    // console.log(res?.data, "xx");
    setTransaction(res?.data?.data);
  };

  useEffect(() => {
    // getDash(address)
    if (address) {
      getDash();
      showIncome();
      showTransaction();
    }
  }, [address]);

  // const paginatedLevels = transaction
  // // .filter(item => item.packageId === 1)
  // .reverse()
  // .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const paginatedLevels = transaction.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // console.log(paginatedLevels, "paginatedLevels");

  // buyslotfunction

  const handleBuyNow = async (id) => {
    setIsLoading(true);
    // if (!purchasedSlots.includes(id)) {
    //   setPurchasedSlots((prev) => [...prev, id]);
    // }

    // const Tokaddress = await getUSDT();
    // const Taddress = Tokaddress.address;
    // // console.log(Taddress, "::::123");
    // const tokenDecimals = Tokaddress.decimals;

    // console.log(Taddress, Tokaddress, "::::123");

    // const balance = await getBalance(config, {
    //   address: address,
    //   token: Taddress,
    // });

    // const walletBalance = parseFloat(balance.formatted);
    // console.log(walletBalance, amt, "balllllllllllll");
    try {
      let realAmt;
      if (id === 1) {
        realAmt = 5 * 1e18;
      }
      if (id === 2) {
        realAmt = 25 * 1e18;
      }
      console.log(realAmt, "realAmt");

      const bal = await getTotalPol(realAmt);

      let increasedAmt = bal + (bal * BigInt(1)) / BigInt(100);

      // if (walletBalance < amt) {
      //   // console.log(walletBalance, amt);
      //   setIsLoading(false);
      //   toast.error("Insufficient Balance");
      //   return;
      // }

      // const allowance = await checkAllowance(address, Taddress);
      // if (amt > allowance / Number("1e" + tokenDecimals)) {
      //   appRes = await appToken(amt, Taddress, tokenDecimals);
      // } else {
      // }
      let appRes;
      appRes = true;

      if (appRes) {
        const buy = buyMatrix(id, increasedAmt);
        await toast.promise(buy, {
          loading: "Buying...",
          success: "Success!",
          error: "Error",
        });
        // checkActiveSlot();
        if (buy) {
          setIsLoading(false);
          setTimeout(() => {
            navigate("/Dashboard");
            getMatrix();
          }, 4000);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Couldn't process your request !!");
      setIsLoading(false);
    }
  };

  const [pool1, setPool1] = useState([]);
  const pool1pk1 = pool1?.filter((item) => item.packageId === 1);
  const pool1pk2 = pool1?.filter((item) => item.packageId === 2);
  console.log(pool1pk2, "pool1pk2");
  const [pool2, setPool2] = useState([]);
  const pool2pk1 = pool2?.filter((item) => item.packageId === 1);
  const pool2pk2 = pool2?.filter((item) => item.packageId === 2);
  const [pool3, setPool3] = useState([]);
  const pool3pk1 = pool3?.filter((item) => item.packageId === 1);
  const pool3pk2 = pool3?.filter((item) => item.packageId === 2);
  const [cycle1, setCycle1] = useState(0);
  const [cycle2, setCycle2] = useState(0);
  const [reInvest1, setReInvest1] = useState(0);
  const [reInvest2, setReInvest2] = useState(0);
  const getPool1 = async (id) => {
    const res = await axios.get(apiUrl + "/newuserplacePool", {
      params: {
        // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7",
        user: address,
        poolId: 1,
      },
    });
    console.log(res?.data, "Matrix1");
    setPool1(res?.data);
    const cyc1 = await getPendingCycle(address, 1);
    const cyc2 = await getPendingCycle(address, 2);
    const reinvestcount1 = await getReinvestCount(address, 1);
    const reinvestcount2 = await getReinvestCount(address, 2);
    const rein1 = Number(reinvestcount1);
    const rein2 = Number(reinvestcount2);
    const cycleFirst = Number(cyc1);
    const cycleSecond = Number(cyc2);
    // console.log(cycleFirst,"cyc1,cyc2")
    setCycle1(cycleFirst);
    setReInvest1(rein1);
    setReInvest2(rein2);
    setCycle2(cycleSecond);
    // console.log(pool1, "pool1");
  };
  const getPool2 = async (id) => {
    const res = await axios.get(apiUrl + "/newuserplacePool", {
      params: {
        // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7",
        user: address,
        poolId: 2,
      },
    });
    console.log(res?.data, "Matrix2");
    setPool2(res?.data);
  };
  const getPool3 = async (id) => {
    const res = await axios.get(apiUrl + "/newuserplacePool", {
      params: {
        user: address,
        // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7",
        poolId: 3,
      },
    });
    console.log(res?.data, "Matrix3");
    setPool3(res?.data);
  };

  useEffect(() => {
    if (address) {
      getPool1();
      getPool2();
      getPool3();
    }
  }, [address]);

  // const hasPlace1 = pool1.some(item => item.place === 1);
  // const hasPlace2 = pool1.some(item => item.place === 2);
  const [copied, setCopied] = useState(false);
  const inputValue = `${baseUrl}/SignUp?ref=${dashData?.userId}`;
  // console.log(inputValue, "inputRef");

  const handleCopy = () => {
    if (inputRef?.current) {
      // console.log("bbb")
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const [activeBtn, setActiveBtn] = useState(false);
  const getButButton = async (address, id) => {
    const value = await getInvestment(address, id);

    if (value != 0) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const [activeBtn2, setActiveBtn2] = useState(false);
  const getButButton2 = async (address, id) => {
    const value = await getInvestment(address, id);

    if (value != 0) {
      setActiveBtn2(true);
    } else {
      setActiveBtn2(false);
    }
  };

  // import { useEffect } from "react";

  // useEffect(() => {
  //   if (address) {
  //     const interval = setInterval(() => {
  //       getButButton(address, 1);
  //       getButButton2(address, 2);
  //     }, 2000); // Runs every 5 seconds (5000ms)

  //     return () => clearInterval(interval); // Cleanup on unmount
  //   }
  // }, [address]); // Runs again if `address` changes

  const [direct, setDirect] = useState("");
  const getDirect = async () => {
    const res = await axios.get(apiUrl + "/referralhistory", {
      params: {
        referrer: address,
        // referrer: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7"
      },
    });
    console.log(res?.data?.data, "direct");
    setDirect(res?.data?.data);
  };
  useEffect(() => {
    if (address) getDirect();
  }, [address]);

  const getMemberIncome = async () => {
    // let walletAddress = address;
    try {
      const response = await axios.get(apiUrl + "/withdrawMemberIncome", {
        params: {
          address: address,
        },
      });
      console.log(response?.data, "success");

      if (response?.status === 200) {
        const funResponse = await withdrawWithSignature({
          amount: response.data.vrsSign.amount,
          v: Number(response.data.vrsSign.signature.v),
          r: response.data.vrsSign.signature.r,
          s: response.data.vrsSign.signature.s,
          deadline: response.data.deadline,
        });

        if (funResponse) {
          // setClaimed(true);
          toast.success("Claim successful!", {
            position: "top-right",
            theme: "dark",
          });

          await getDash();
        }
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        theme: "dark",
      });
      console.error("Error during claim:", error.message);
    }
  };

  return (
    <div className="row mb-5">
      {/* Profit */}

      <div className="col-sm-12 col-md-8 col-xxl-8 mb-4 ">
        <div
          className="  background-transparent card custom-card overflow-hidden new-card row mb-2 justify-content-between align-items-center glow-box-blue"
          style={{ height: "100%", marginLeft: "0", background: "transparent" }}
        >
          <div className="upcoming row mt-4">
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div
                      onClick={() => {
                        if (dashData?.user) {
                          navigator.clipboard.writeText(dashData?.user);
                        }
                        toast.success("Copied User Address to clipboard");
                      }}
                    >
                      <span className="d-block mb-1">User Id</span>
                      <h6 className="mb-0 fw-semibold">
                        {dashData.user
                          ? `${dashData.user.slice(
                              0,
                              6
                            )}...${dashData.user.slice(-6)}`
                          : ""}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={id} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div
                    onClick={() => {
                      if (dashData?.referrer) {
                        navigator.clipboard.writeText(dashData?.referrer);
                      }
                      toast.success("Copied Referrer Address to clipboard");
                    }}
                    >
                      <span className="d-block mb-1">Referral Id</span>
                      <h6 className="mb-0 fw-semibold">
                        {dashData.referrer
                          ? `${dashData.referrer.slice(
                              0,
                              6
                            )}...${dashData.referrer.slice(-6)}`
                          : ""}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={sponsor} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Id Number</span>
                      <h6 className="mb-0 fw-semibold">
                        {dashData.uId}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={rank} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Direct Referrer Count</span>
                      <h6 className="mb-0 fw-semibold">
                        {dashData.directRefferer}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={Ref} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Single Leg</span>
                      <h6 className="mb-0 fw-semibold">
                        ${" "}
                        {dashData?.userIncome / 1e18
                          ? dashData?.userIncome / 1e18
                          : "0"}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={Stake} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Level Income</span>
                      <h6 className="mb-0 fw-semibold">
                        ${" "}
                        {dashData?.levelIncome / 1e18
                          ? dashData?.levelIncome / 1e18
                          : "0"}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img
                          src={rankReward}
                          alt=""
                          style={{ width: "40px" }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Weekly Salary</span>
                      <h6 className="mb-0 fw-semibold">
                        ${" "}
                        {dashData?.memberIncome ? dashData?.memberIncome : "0"}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img
                          src={FundReward}
                          alt=""
                          style={{ width: "40px" }}
                        />
                      </span>
                      <span
                        className="text-info badge btn btn-primary bg-primary secondary11"
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          bottom: "5px",
                          right: "5px",
                        }}
                        onClick={getMemberIncome}
                      >
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Total Withdrawl</span>
                      <h6 className="mb-0 fw-semibold">
                        {/* {new Date(dashData?.createdAt).toLocaleDateString()} */}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={Future} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Total Income</span>
                      <h6 className="mb-0 fw-semibold">
                        {/* {new Date(dashData?.createdAt).toLocaleDateString()} */}
                        {Number(dashData?.levelIncome / 1e18 + dashData?.userIncome / 1e18) ?? "0"}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={Login} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div>
                <div className="card custom-card school-card secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between align-items-center height-120px glow-box-blue">
                    <div>
                      <span className="d-block mb-1">Id Date</span>
                      <h6 className="mb-0 fw-semibold">
                        {new Date(dashData?.createdAt).toLocaleDateString()}
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary1">
                        <img src={DateID} alt="" style={{ width: "40px" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-12  col-md-6 col-xxl-6">
        <div className="card custom-card">
          <div className="card-header justify-content-between position-absolute">
            <div className="card-title">Daily Income</div>
          </div>
          <div className="card-body saleChart-body">
            <div id="sales-overview-crm">
              <AreaChart />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="col-sm-12  col-md-4 col-xxl-4">
        <div className="card custom-card new-card" style={{ height: "483px" }}>
          <div className="upcoming">
            <div className="col-sm-6 col-lg-6 mt-4" style={{ width: "80%" }}>
              <div>
                <div className="card custom-card school-card new-card-box">
                  <div className="card-body d-flex gap-2 justify-content-between">
                    <div>
                      <span className="d-block mb-1">Latest Notification</span>
                      <h6 className="mb-0 fw-semibold">
                      </h6>
                    </div>
                    <div>
                      <span className="text-primary2">
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-sm-12  col-md-4 col-xxl-4 ">
        <div
          className=" background-transparent card custom-card glow-box-blue"
          style={{ height: "97%" }}
        >
          <div className="upcoming">
            <div className="col-sm-6 col-lg-6 mt-4" style={{ width: "80%" }}>
              <div>
                <div className="card custom-card school-card new-card-box glow-box-blue secondary11">
                  <div className="card-body d-flex gap-2 justify-content-between">
                    <div>
                      <span className="d-block mb-1">Direct Referrer</span>
                      <h6 className="mb-0 fw-semibold">
                        {/* {dashboard && Number(dashboard[3])} */}
                        {/* {rank || "0"} */}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table
                className="table text-nowrap text-center direct-data-table"
                style={{ marginBottom: "10px" }}
              >
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "white" }}>
                      Tx Hash
                    </th>
                    <th scope="col" style={{ color: "white" }}>
                      User
                    </th>
                    <th scope="col" style={{ color: "white" }}>
                      Created At
                    </th>
                    {/* <th scope="col">Matrix</th> */}
                    {/* <th scope="col">Level</th> */}
                    {/* <th scope="col">Slot Id</th> */}
                    {/* <th scope="col" style={{ color: "black" }}>
                      Amount
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {paginatedLevels?.map((rep, index) => (
                    <tr key={index}>
                      <td>
                        <a
                          href={`https://polygonscan.com/tx/${rep?.txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          // className="text-warning"
                          // style={{ color: "blue" }}
                        >
                          {rep?.txHash.slice(0, 4)}...
                          {rep?.txHash.slice(-4)}
                        </a>
                      </td>
                      <td style={{ color: "white" }}>
                        {rep.user
                          ? `${rep.user.slice(0, 6)}...${rep.user.slice(-6)}`
                          : ""}
                      </td>
                      <td style={{ color: "white" }}>
                        {new Date(rep?.createdAt).toLocaleString()}
                      </td>
                      {/* <td style={{ color: "rgb(0, 119, 181)" }}>
                        {rep.matrix}
                      </td> */}

                      {/* <td>{rep.slotId}</td> */}
                      {/* <td style={{ color: "black" }}>$ {rep.amount}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              {transaction?.length === 0 && (
                <div className=" w-100">
                  <div
                    className="w-100 text-center p-3 level-dash"
                    style={{ color: "white" }}
                  >
                    No Data Found.
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mb-2 d-flex justify-content-center pb-2">
            <nav aria-label="Page navigation" className="pagination-style-2">
              <ul className="pagination mb-0 flex-wrap">
                <li
                  className={`page-item ${
                    matrixIncome?.length === 0 ? "disabled" : ""
                  }`}
                >
                  <Link className="page-link text-white bg-transparent" to="#">
                    Latest Direct Referrer
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* PieChart*/}
      {/* <div className="col-sm-12 col-md-3 col-xxl-3">
              <div
                className="card custom-card overflow-hidden"
                style={{ height: "483px" }}
              >
                <div className="card-header justify-content-between">
                  <div className="card-title">Income Overview</div>
                  <div className="dropdown">
                    <div
                      className="btn btn-light border btn-full btn-sm "
                      data-bs-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      {dateType}
                      <i className="ti ti-chevron-down ms-1"></i>
                    </div>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a
                          className="dropdown-item "
                          onClick={() => setDateType("Yearly")}
                        >
                          Yearly
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-light"
                          onClick={() => setDateType("Weekly")}
                        >
                          Weekly
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item "
                          onClick={() => setDateType("Monthly")}
                        >
                          Monthly
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body px-0">
                  <div
                    id="Leads-overview"
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: "369px" }}
                  >
                    <ApexChart
                      totalCoreIncome={IncomeOverview?.refrealRewardPercentage || 0}
                      totalGlobleIncome={IncomeOverview?.rankBonusPercentage || 0}
                      totalFortuneIncome={IncomeOverview?.dailyStakingPercentage || 0}
                      totalAllIncome={IncomeOverview?.dialyloginRewardPercentage || 0}
                      funWallet={IncomeOverview?.fundWalletPercentage || 0}
                    />
                  </div>
                </div>
              </div>
            </div> */}
    </div>
  );
}

export default DashboardRow2;
