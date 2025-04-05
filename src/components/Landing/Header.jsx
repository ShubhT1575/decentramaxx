import React, { useEffect, useState } from "react";
import Logo from '/Asset 1.png'
import { Link } from "react-router-dom";
import { Button, Flex, Input, Modal, Select } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import toast from "react-hot-toast";
import { getAddressbyRefrralId } from "../../API/Api";
import axios from "axios";
import { apiUrl } from "../Config";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen,setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < 245) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () =>{
    if(isOpen){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  }

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const modalClose = ()=>{

    // setLoading(true);
    setLoading(false);
    setOpen(false);

    // Simple loading mock. You should add cleanup logic in real world.
    // setTimeout(() => {
    //   toast.success("We will contact you soon !!");
    // }, 2000);
  }

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const [userInput,setUserInput] = useState("")
  const [userDetails,setUserDetails] = useState("")

  const getDashboard = async()=>{
    const userAdd = await getAddressbyRefrralId(userInput)
    console.log(userAdd, "cccc")

    const response = await axios.get(apiUrl + "/getdetailbyUserId" ,{
      params: {
        address :  userAdd ? userAdd?.data : userInput
      }
    })

    console.log(response?.data,"xxyy")
    setUserDetails(response?.data)
  }

  return (

    <>
      <header id="header" className="header-layout1">
        <div id="sticky-header" className={`${isSticky ? "sticky-menu" : ""} menu-area transparent-header`} >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo w-50">
                      <a href="#">
                        <img
                          src={Logo}
                          style={{ height: "30px" }}
                          alt="Logo"
                        />
                        {/* <h2>CoopGenix</h2> */}
                      </a>
                    </div>
                    <div>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {/* <li className="active">
                          <a className="section-link" href="/">
                            Home
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="#about" className="section-link">
                            About
                          </a>
                        </li> */}
                        <li>
                          <a href="#about" className="section-link">
                            How It Works

                          </a>
                        </li>
                        <li className="">
                          <a href="#community">Community Contributions
                          </a>

                        </li>
                        {/* <li>
                          <a href="#liveFund">Success Stories</a>
                        </li> */}
                        <li>
                          <a href="#getInvolved">Get Involved</a>
                        </li>
                        <li>
                          <a href="#faq">FAQ</a>
                        </li>
                        <li>
                          <a href="#contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  
                    <div className="mobile-nav-toggler" onClick={handleClick}>
                      <i className="fas fa-bars"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu" style={isOpen ? { display: "contents" } : {}}
        >
          <nav className="menu-box">
            <div className="close-btn" onClick={handleClick}>
              <i className="fas fa-times"></i>
            </div>
            <div className="nav-logo">
              <a href="index.html">
                <img
                  src={Logo}
                  style={{ height: "18px" }}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="menu-outer"></div>
            <div className="social-links">
              <ul className="clearfix list-wrap">
                
              <li onClick={handleClick}>
                          <a href="#about" className="section-link">
                            How It Works

                          </a>
                        </li>
                        <li className="" onClick={handleClick}>
                          <a href="#community">Community Contributions
                          </a>

                        </li>
                        <li onClick={handleClick}>
                          <a href="#liveFund">Success Stories</a>
                        </li>
                        <li onClick={handleClick}>
                          <a href="#getInvolved">Get Involved</a>
                        </li>
                        <li onClick={handleClick}>
                          <a href="#faq">FAQ</a>
                        </li>
                        <li onClick={handleClick}>
                          <a href="#contact">Contact Us</a>
                        </li>
              
              </ul>
            </div>
          </nav>
        </div>
        <div className="menu-backdrop" ></div>
      </header>
      <Modal
        title={<p className="text-light">See Current User Details</p>}
        footer={
          <Button type="primary" onClick={modalClose}>
            Close
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Flex style={{width: "100%" , marginBottom: "10px"}} justify={"center"} align={"center"}>
        <Input type="text" placeholder="Name" value={userInput} onChange={(e)=>setUserInput(e.target.value)} style={{marginBottom: "0px"}}/>
        <Button shape="circle" icon={<SearchOutlined />} onClick={getDashboard}/>
        </Flex>
        {/* <Input type="email" placeholder="Email" style={{marginBottom: "10px"}}/>
        <Input type="tel" placeholder="Mobile No." style={{marginBottom: "10px"}}/>
        <Select
        className="w-100 mb-2"
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
        <TextArea rows={4} placeholder="Message" maxLength={6} style={{marginBottom: "10px"}}/> */}
        <p>User : {userDetails?.userId}</p>
        <p>Refferer : {userDetails?.referrerId}</p>
        <p>User Address : {userDetails?.user ? `${userDetails.user.slice(0, 8)}.......${userDetails.user.slice(-6)}` : ""}
        </p>
        <p>Referrer Address : {userDetails?.referrer ? `${userDetails.referrer.slice(0, 8)}.......${userDetails.referrer.slice(-6)}` : ""}</p>
        {/* <p>Income : <strong>100</strong></p>  */}
      </Modal>
    </>
  );
}
