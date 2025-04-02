import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";

function CoreBody() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [transaction, setTransaction] = useState([]);
  const [directUser, setDirectUser] = useState([]);
  const [currentPageTable1, setCurrentPageTable1] = useState(1);
  const [currentPageTable2, setCurrentPageTable2] = useState(1);
  const itemsPerPage = 10;
  // const totalPages = Math.ceil(transaction.length / itemsPerPage);
  const totalPagesTable1 = Math.ceil(
    transaction.length / itemsPerPage
  );

  const showTransaction = async () => {
    const res = await axios.get(apiUrl + "/userIncomeByUser", {
      params: {
        receiver: address,
        // receiver: "0xf0c90d0E550AFA5C4d557A7BeBfB89B1ea4d97f8",
        // user: "0x8a62CcdFFb086c190A869E49761E6F9E422214E7",
      },
    });
    console.log(res?.data?.user, "income");
    setTransaction(res?.data?.user);
  };
  useEffect(() => {
    if (address) showTransaction();
  }, [address]);

  const handlePreviousPageTable1 = () => {
    if (currentPageTable1 > 1) setCurrentPageTable1(currentPageTable1 - 1);
  };

  const handleNextPageTable1 = () => {
    if (currentPageTable1 < totalPagesTable1)
      setCurrentPageTable1(currentPageTable1 + 1);
  };


  const paginatedTable1 = transaction
    .slice(
      (currentPageTable1 - 1) * itemsPerPage,
      currentPageTable1 * itemsPerPage
    );

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden new-card secondary11">
          <div className="card-header justify-content-between color-light">
            <div className="card-title">
              User Income Report
            </div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                  <th scope="col" style={{ color: "white" }}>
                      S. No.
                    </th>
                    <th scope="col" style={{ color: "white" }}>
                      Tx Hash
                    </th>
                    <th scope="col" style={{ color: "white" }}>
                      Sender
                    </th>
                    <th scope="col" style={{ color: "white" }}>
                      Level
                    </th>
                    <th scope="col" style={{ color: "white" }}>
                      Amount
                    </th>
                    {/* <th scope="col">Sender</th> */}
                    {/* <th scope="col" style={{color: "black"}}>Transaction Hash</th> */}
                    {/* <th sscope="col" style={{color: "black"}}>Amount</th> */}
                    {/* <th scope="col">Level</th> */}
                    {/* <th scope="col" style={{color: "black"}}>Time Stamp</th> */}
                    <th scope="col" style={{ color: "white" }}>
                      Time Stamp
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTable1?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}.</td>
                        {/* <td className="text-warning">
                          {item?.user.slice(0, 5)}...{item?.user.slice(-5)}
                        </td> */}
                        <td>
                          <a
                            href={`https://opbnb-testnet.bscscan.com/tx/${item.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "rgb(0, 166, 255)" }}
                          >
                            {item?.txHash.slice(0, 6)}...
                            {item?.txHash.slice(-6)}
                          </a>
                        </td>
                        <td style={{ color: "white" }}>{item?.userId}</td>
                        <td style={{ color: "white" }}>{item?.level}</td>
                        <td style={{ color: "white" }}>$ {item.amount/1e18}</td>
                        {/* <td>{item.level}</td> */}
                        <td style={{ color: "white" }}>
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        {/* <td>
                          <span className="badge bg-success-transparent">
                            success
                          </span>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {paginatedTable1?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3 color-light">
                    No Data Found.
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between color-white">
              <div>
                Showing {paginatedTable1?.length || 0} Earning Report
                <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
              </div>
              <div>
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <button
                      className="btn btn-primary page-item btn-pagination"
                      style={{ marginRight: "10px" }}
                      disabled={currentPageTable1 === 1}
                      onClick={handlePreviousPageTable1}
                    >
                      Prev
                    </button>

                    <button
                      className="btn btn-warning-gradient page-item btn-pagination"
                      disabled={currentPageTable1 === totalPagesTable1}
                      onClick={handleNextPageTable1}
                    >
                      Next
                    </button>
                  </ul>
                </nav>
              </div>
              <div>
                <span>
                  Page {currentPageTable1} of {totalPagesTable1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default CoreBody;
