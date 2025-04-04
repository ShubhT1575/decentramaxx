import { Button, Flex, Input, Modal } from "antd";
import React, { useState } from "react";

function ProfileRow() {

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

    const handleFileChange = async (e) => {
      let resume = e.target.files[0]
      let resumeFile = new FormData()
      console.log(resumeFile,"resume")
       resumeFile.append('file', resume)
       resumeFile.append('upload_preset', 'decentramax')
        let res = await axios.post('https://api.cloudinary.com/v1_1/dpkk76hbw/upload', resumeFile)
           let url = res.data.secure_url
            console.log(url,"xxyxx")
           setFormData({...formData, resume:url})
    };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="card custom-card profile-card secondary11">
            
            {/* <div className="profile-banner-img">
              <img
              src="https://laravelui.spruko.com/xintra/build/assets/images/media/media-3.jpg"
              className="card-img-top"
              alt="..."
              />
              </div> */}
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
                            src="https://laravelui.spruko.com/xintra/build/assets/images/faces/11.jpg"
                            alt="Profile"
                          />
                        </span>
                        <h5 className="fw-semibold mb-1">Spencer Robin</h5>
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
                            <span className="text-muted">Spencer Robin</span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">
                              Signle Leg :
                            </span>
                            <span className="text-muted">
                              Software Development Manager
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Today Income :</span>
                            <span className="text-muted">
                              spencer.robin22@example.com
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Weekly Income :</span>
                            <span className="text-muted">
                              +1 (222) 111 - 57840
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Total Level Income :</span>
                            <span className="text-muted">
                              +1 (222) 111 - 57840
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Total User Income :</span>
                            <span className="text-muted">
                              +1 (222) 111 - 57840
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item pt-2 border-0">
                          <div>
                            <span className="fw-medium me-2">Member Income :</span>
                            <span className="text-muted">
                              +1 (222) 111 - 57840
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
          <Button type="primary" onClick={modalClose}>
            Close
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Flex style={{width: "100%" , marginBottom: "10px" , flexDirection:"column",gap: "20px"}} justify={"center"} align={"center"}>
        <Input type="file" placeholder="Name" accept=".png,.jpeg,.jpg" value={userInput} onChange={handleFileChange} style={{marginBottom: "0px"}}/>
        <Input type="text" placeholder="Name"  style={{marginBottom: "0px"}}/>
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
