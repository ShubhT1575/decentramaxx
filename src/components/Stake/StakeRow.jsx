import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";

function StakeRow() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress } = wallet;
  const address = walletAddress;
  const [directUser, setDirectUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(apiUrl + "/getTeam", {
        params: {
          address: address,
        },
      });
        // console.log(response,'=============================')
        setDirectUser(response?.data);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  console;
  useEffect(() => {
    if (address) getUser();
  }, [address]);


  console.log(directUser,';;;;;;;;;;;;;')
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden secondary11">
          <div className="card-header justify-content-between">
            <div className="card-title">Team Direct</div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
              <thead>
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">User</th>
                    <th scope="col">Referrer</th>
                    <th scope="col">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {directUser?.length > 0 &&
                    directUser.map((item, index) => (
                      <tr key={item?._id || index}>
                        <td>{index + 1}</td>
                        <td className="">
                          {item?.user
                            ? `${item.user.slice(0, 6)}...${item.user.slice(
                                -6
                              )}`
                            : "N/A"}
                        </td>
                        <td className="">
                          {item?.user
                            ? `${item.referrer.slice(0, 6)}...${item.referrer.slice(
                                -6
                              )}`
                            : "N/A"}
                        </td>
                        <td>
                          {item.timestamp
                            ? new Date(item.timestamp).toLocaleString()
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer">
            <div className="d-flex align-items-center">
              <div>
                Showing {directUser?.length || 0} Team Direct
                <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
              </div>
              {/* <div className="ms-auto">
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link text-primary" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakeRow;
