import { Button, Flex, Input, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../Config";
import toast from "react-hot-toast";
import {
  setProfileUrll,
  setStateChange
} from "../../Redux/Slice";

function ProfileRow() {
  const {profileUrll,dashboardData } = useSelector((state) => state.bitgold);
  console.log(profileUrll, "profileUrlllll");
  const dispatch = useDispatch();
  const {user} = dashboardData;
  // console.log(user, "user");
    const [isOpen,setIsOpen] = useState(false);
      const [userInput,setUserInput] = useState("")
      const [userDetails,setUserDetails] = useState("")

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

    const [formData, setFormData] = useState({
      name:"",
      profile:""
    })

    const [profileUrl,setProfileUrl] = useState("")
    const [inputValue,setInputValue] = useState("")

    const handleFileChange = async (e) => {
      try {
        let resume = e.target.files[0];
        let resumeFile = new FormData();
    
        resumeFile.append('file', resume);
        resumeFile.append('upload_preset', 'decentramax');
    
        console.log(resumeFile, "resume");
    
        let res = await axios.post(
          'https://api.cloudinary.com/v1_1/dqyws18nz/image/upload',
          resumeFile,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
    
        let url = res.data.secure_url;
        console.log(url, "xxyxx");
        setProfileUrl(url);
        
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };
    // console.log(profileUrl,inputValue, "profileUrl");
    let ress;
    const handleUploadProfile = async ()=>{
      try {
        const response = await axios.put(apiUrl + "updateUserProfile", {
          address: user,
          profileUrl: profileUrl,
          name: inputValue
        })
        if(response){
          modalClose();
        }
        console.log(response, "response");
        ress = response?.data?.data;
        dispatch(setStateChange(ress))

      }catch (error) {
        toast.error("Error while updating profile")
      }
    }

    // const [profileData,setProfileData] = useState({})

    // const getProfileData = async ()=>{
    //   const res = await axios.get(apiUrl + "getUserProfile",{
    //     params:{
    //       address: user
    //     }
    //   })
    //   console.log(res?.data?.data, "rescc");
    //   setProfileData(res?.data?.data)
    //   dispatch(setProfileUrll(res?.data?.data?.profileUrl))
    // }

    // useEffect(()=>{
    //   getProfileData()
    // },[user])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="card custom-card profile-card secondary11">
            
            <div className="card-body pb-0 position-relative">
                <div className="btn-group align-self-start mb-3" style={{position: "absolute",right: "0px"}}>
                      <button
                        type="button"
                        className="btn btn-success-ghost btn-wave"
                        onClick={showLoading}
                      >
                        Edit Profile
                      </button>
                    </div>
              <div className="row profile-content d-flex justify-content-center align-items-center">
                <div className="col-xl-3">
                  <div
                    className="card custom-card overflow-hidden border"
                    style={{ height: "100%" , marginTop: "105px"}}
                  >
                    <div className="card-body border-bottom border-block-end-dashed">
                      <div className="text-center">
                        <span className="avatar avatar-xxl avatar-rounded online mb-3">
                          <img
                            src={profileUrll?.profile?.profileUrl}
                            alt="Profile"
                          />
                        </span>
                        <h5 className="fw-semibold mb-1">{profileUrll?.profile?.name ?? ""}</h5>
                        {/* <span className="d-block fw-medium text-muted mb-2">
                          Software Development Manager
                        </span>
                        <p className="fs-12 mb-0 text-muted">
                          <span className="me-3">
                            <i className="ri-building-line me-1 align-middle"></i>{" "}
                            Hamburg
                          </span>
                          <span>
                            <i className="ri-map-pin-line me-1 align-middle"></i>{" "}
                            Germany
                          </span>
                        </p> */}
                      </div>
                    </div>

                    <div className="p-3 pb-1 d-flex flex-wrap justify-content-between">
                      <div className="fw-medium fs-15 text-primary1">
                        Basic Info :
                      </div>
                    </div>
                    <div className="card-body border-bottom border-block-end-dashed p-0">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">User Id :</span>
                            <span className="text-muted">DCNTRA58566</span>
                          </div>
                        </li>
                        {/* <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">
                              Single Leg :
                            </span>
                            <span className="text-muted">
                              Software Development Manager
                            </span>
                          </div>
                        </li> */}
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Today Income :</span>
                            <span className="text-muted">
                              $ {profileUrll?.todayIncome/1e18}
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Weekly Income :</span>
                            <span className="text-muted">
                            $ {profileUrll?.weeklyIncome/1e18}
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Total Income :</span>
                            <span className="text-muted">
                             $ {"0"}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={<p className="text-light">Edit Profile</p>}
        footer={
          <Button type="primary" onClick={handleUploadProfile}>
            Upload
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Flex style={{width: "100%" , marginBottom: "10px" , flexDirection:"column",gap: "20px"}} justify={"center"} align={"center"}>
        <Input type="file" placeholder="Name" accept=".png,.jpeg,.jpg" onChange={handleFileChange} style={{marginBottom: "0px"}}/>
        <Input type="text" placeholder="Name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  style={{marginBottom: "0px"}}/>
        {/* <Button shape="circle" icon={<SearchOutlined />} onClick={getDashboard}/> */}
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
        {/* <p>User : {userDetails?.userId}</p>
        <p>Refferer : {userDetails?.referrerId}</p>
        <p>User Address : {userDetails?.user ? `${userDetails.user.slice(0, 8)}.......${userDetails.user.slice(-6)}` : ""}
        </p>
        <p>Referrer Address : {userDetails?.referrer ? `${userDetails.referrer.slice(0, 8)}.......${userDetails.referrer.slice(-6)}` : ""}</p> */}
        {/* <p>Income : <strong>100</strong></p>  */}
      </Modal>
    </div>
  );
}

export default ProfileRow;