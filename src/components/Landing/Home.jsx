import React from "react";
import "./css/style.css";
import "./css/responsive.css";
import "./css/default.css";
import "./css/Button.css";
import "./css/Newbutton.css";

import trans from "../../assets/img/security.png";
import effe from "../../assets/img/efficacy.png";
import investor from "../../assets/img/crowdfunding.png";
import dcent from "../../assets/img/blockchain1.png";
import blockchain from "../../assets/img/blockchain.png";
import Header from "./Header";
import { Link } from "react-router-dom";
import blockchain1 from "../../assets/img/blockchain1.png";
import creator from "../../assets/img/creator.png";
import security from "../../assets/img/security.png";
import crowdfunding from "../../assets/img/crowdfunding.png";
import economy from "../../assets/img/economy.png";
import loan from "../../assets/img/loan.png";
import deal from "../../assets/img/deal (1).png";
import TestimonialCarousel from "./TestimonialCarousel";
import Footer from "./Footer";
import InteractiveVisualization from "../InteractiveVisualization";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}

      <div
        className="hero-wrapper hero-1 hero-bg bg-img w-100 d-flex"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-column-reverse flex-lg-row gap-3 gap-lg-5 w-100 justify-content-center align-items-center py-5">
          {/* Text Content */}
          <div className="col-12 col-lg-6 px-3 px-lg-5 order-2 order-lg-1">
            <div className="hero-style1">
              <div className="row">
                <div className="col-12">
                  {/* Animated Title */}
                  <h1 className="hero-title text-center animated-text mb-4">
                    {[
                      "D",
                      "E",
                      "C",
                      "E",
                      "N",
                      "T",
                      "R",
                      "A",
                      "M",
                      "A",
                      "X",
                    ].map((letter, index) => (
                      <span
                        key={index}
                        className="word"
                        style={{ display: "inline-block", minWidth: "0.5em" }}
                      >
                        {letter}
                      </span>
                    ))}
                  </h1>

                  {/* Description */}
                  <div className="text-center px-2 px-lg-0">
                    <h2
                      className="text-light mb-3"
                      style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
                    >
                      The Future of Decentralized Finance
                    </h2>
                    <p
                      className="text-light opacity-75"
                      style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                    >
                      A 100% decentralized platform with auto USDT payouts,
                      secure smart contracts, and a revolutionary referral
                      system. No owners, no central control - just pure
                      blockchain-powered financial freedom.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mt-4 mt-lg-5 px-3 px-lg-0">
                    <Link to="/SignUp" className="text-decoration-none">
                      <button className="buttons">
                        <span className="boxx">Join Now</span>
                      </button>
                    </Link>
                    <Link
                      to="/SignIn"
                      className="text-decoration-none d-lg-none"
                    >
                      <button className="buttons">
                        <span className="boxx">Sign In</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
            <div className="overflow-hidden" style={{ maxHeight: "90vh" }}>
              <img
                src="/Home.png"
                alt="Decentramax Platform"
                className="img-fluid floating-animation"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us hero-1 bg-img" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="titleText">Core Features</h2>
            <p>
              DECENTRAMAX revolutionizes decentralized finance with its
              autonomous smart contract system, eliminating all central control
              while ensuring complete transparency and security.
            </p>
          </div>
          <div className="about-principles">
            <div className="principle glow-box">
              <span className="">
               <img src="/No central .png" alt="" width={75}/>
              </span>
              <h3>No Central Control</h3>
              <p>
                Truly decentralized with no owners or administrators - the smart
                contract runs autonomously.
              </p>
            </div>
            <div className="principle glow-box">
              <span className="emoji">
              <img src="/Auto Pay out.png" alt="" width={75}/>
              </span>
              <h3>Auto USDT Payouts</h3>
              <p>
                Direct wallet withdrawals in USDT with no manual processing
                required.
              </p>
            </div>
            <div className="principle glow-box">
              <span className="emoji">
              <img src="/Auto Recycle.png" alt="" width={75}/>
              </span>
              <h3>Auto-Recycle System</h3>
              <p>
                Automatic rebirth triggered by first income for continuous
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className="why-choose-us hero-1 bg-img"
        id="why-us"
        style={{ paddingTop: "160px", paddingBottom: "150px" }}
      >
        <h2 className="section-title text-light titleText">Why DECENTRAMAX?</h2>

        <div className="value-propositions">
          <div className="value-box glow-box border-curve">
            <img className="img-img" src="Decentrelized.png" alt="" />
            <h3>100% Decentralized</h3>
            <p>No central authority - fully community-driven platform</p>
          </div>

          <div className="value-box glow-box border-curve">
            <img className="img-img" src="Smart Contract.png" alt="" />
            <h3>Immutable Smart Contract</h3>
            <p>Tamper-proof code ensures complete security</p>
          </div>

          <div className="value-box glow-box border-curve">
            <img className="img-img" src="Refferal Income.png" alt="" />
            <h3>Referral Income System</h3>
            <p>Multi-level rewards for network growth</p>
          </div>

          <div className="value-box glow-box border-curve">
            <img className="img-img" src="Low Cost Transaction.png" alt="" />
            <h3>Low-Cost Transactions</h3>
            <p>Minimal gas fees with high-speed processing</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        className="fundraising-categories hero-1 bg-img"
        id="categories"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <h2 className="section-title text-light titleText">How It Works</h2>

        <div className="categories-container">
          <div className="category-box glow-box">
            <span className="icon">
              <i className="fa-solid fa-1" style={{ fontSize: "35px" }}></i>
            </span>
            <h3>One-Time $50 Investment</h3>
            <p>Single entry point with no reinvestment needed</p>
          </div>

          <div className="category-box glow-box">
            <span className="icon">
              <i className="fa-solid fa-2" style={{ fontSize: "35px" }}></i>
            </span>
            <h3>Build Your Network</h3>
            <p>Refer others and earn through 5 levels</p>
          </div>

          <div className="category-box glow-box">
            <span className="icon">
              <i className="fa-solid fa-3" style={{ fontSize: "35px" }}></i>
            </span>
            <h3>Auto USDT Withdrawals</h3>
            <p>Direct to your connected wallet</p>
          </div>

          <div className="category-box glow-box">
            <span className="icon">
              <i className="fa-solid fa-4" style={{ fontSize: "35px" }}></i>
            </span>
            <h3>Automatic Recycling</h3>
            <p>System reboots after first payout</p>
          </div>
        </div>
      </div>

      {/* Wallet Integration Section */}
      <div
        className="security hero-1 bg-img"
        id="security"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <h2 className="section-title text-light titleText">
          <img className="img-img" src={security} alt="" />
          Seamless Wallet Integration
        </h2>
        <p className="section-description">
          Connect your favorite wallet and start earning in USDT immediately
        </p>

        <div className="security-container">
          <div className="security-box glow-box">
            <div className="icon">
             <img src="/Metamask.png" alt="" width={75}/>
            </div>
            <h3>MetaMask</h3>
            <p>The most popular Ethereum wallet for browsers and mobile</p>
          </div>

          <div className="security-box glow-box">
            <div className="icon">
            <img src="/Trust Wallet.png" alt="" width={75}/>
            </div>
            <h3>Trust Wallet</h3>
            <p>Secure mobile wallet with built-in DApp browser</p>
          </div>

          <div className="security-box glow-box">
            <div className="icon">
            <img src="/Safepal.png" alt="" width={75}/>
            </div>
            <h3>SafePal</h3>
            <p>Hardware and software wallet combination for maximum security</p>
          </div>

          <div className="security-box glow-box">
            <div className="icon">
            <img src="/Token Pocket.png" alt="" width={75}/>
            </div>
            <h3>TokenPocket</h3>
            <p>Multi-chain wallet supporting various blockchain networks</p>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="testimonials hero-1 bg-img" id="success-stories">
        <h2 className="section-title text-light titleText">
          Member Success Stories
        </h2>
        <TestimonialCarousel />
      </div>

      {/* Comparison Section */}
      <div
        className="community-impact hero-1 bg-img"
        id="community"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <h2 className="section-title text-light titleText">
          {/* <img className="img-img" src={crowdfunding} alt="" /> */}
          Traditional vs. DECENTRAMAX
        </h2>

        <div className="impact-container">
          <div className="impact-box glow-box border-curve">
            <div className="icon">
              <img src="Centrelized.png" alt="" width={75}/>
            </div>
            <h3>Centralized Systems</h3>
            <ul className="list-unstyled">
              <li>Controlled by companies</li>
              <li>Can freeze funds</li>
              <li>High fees</li>
            </ul>
          </div>

          <div className="impact-box  glow-box border-curve">
            <div className="icon">
            <img src="Diffrence.png" alt="" width={75}/>
            </div>
            <h3>The Difference</h3>
            <p>DECENTRAMAX eliminates all these vulnerabilities</p>
          </div>

          <div className="impact-box glow-box border-curve">
            <div className="icon">
            <img src="Decentrelized Max.png" alt="" width={75}/>
            </div>
            <h3 className="">DECENTRAMAX</h3>
            <ul className="list-unstyled">
              <li>No central control</li>
              <li>Funds cannot be frozen</li>
              <li>Minimal fees</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="full-width hero-1 bg-img" id="faq">
        <div
          className="faq-section hero-1 bg-img"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <h2 className="text-light titleText">Frequently Asked Questions</h2>

          <div className="faq-wrapper">
            <div className="faq-category">
              <h3>General Questions</h3>
              <div className="faq-container" id="generalQuestionsAccordion">
                <div className="faq-box">
                  <div
                    className="faq-question accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#howItWorks"
                  >
                    <h3 style={{ textAlign: "left" }}>
                      Is DECENTRAMAX really decentralized?
                    </h3>
                    <span className="faq-toggle ms-auto">+</span>
                  </div>
                  <p
                    className="faq-answer accordion-collapse collapse"
                    id="howItWorks"
                    data-bs-parent="#generalQuestionsAccordion"
                  >
                    Yes! There is no owner, admin, or central management. The
                    smart contract runs autonomously on the blockchain.
                  </p>
                </div>

                <div className="faq-box">
                  <div
                    className="faq-question accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#hiddenFees"
                  >
                    <h3 style={{ textAlign: "left" }}>
                      What's the investment requirement?
                    </h3>
                    <span className="faq-toggle ms-auto">+</span>
                  </div>
                  <p
                    className="faq-answer accordion-collapse collapse"
                    id="hiddenFees"
                    data-bs-parent="#generalQuestionsAccordion"
                  >
                    Just a one-time $50 investment in USDT. No reinvestment is
                    ever required.
                  </p>
                </div>

                <div className="faq-box">
                  <div
                    className="faq-question accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#startFundraiser"
                  >
                    <h3 style={{ textAlign: "left" }}>
                      How does the auto-recycle work?
                    </h3>
                    <span className="faq-toggle ms-auto">+</span>
                  </div>
                  <p
                    className="faq-answer accordion-collapse collapse"
                    id="startFundraiser"
                    data-bs-parent="#generalQuestionsAccordion"
                  >
                    After your first income payment, the system automatically
                    recycles your position to keep you earning.
                  </p>
                </div>
              </div>
            </div>

            <div className="faq-category">
              <h3>Payments & Security</h3>
              <div className="faq-container" id="securityAccordion">
                <div className="faq-box">
                  <div
                    className="faq-question accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#donationSecure"
                  >
                    <h3 style={{ textAlign: "left" }}>
                      How are payouts processed?
                    </h3>
                    <span className="faq-toggle ms-auto">+</span>
                  </div>
                  <p
                    className="faq-answer accordion-collapse collapse"
                    id="donationSecure"
                    data-bs-parent="#securityAccordion"
                  >
                    All payouts are automatic USDT transfers directly to your
                    connected wallet.
                  </p>
                </div>

                <div className="faq-box">
                  <div
                    className="faq-question accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#withdrawFunds"
                  >
                    <h3 style={{ textAlign: "left" }}>
                      What's the referral structure?
                    </h3>
                    <span className="faq-toggle ms-auto">+</span>
                  </div>
                  <p
                    className="faq-answer accordion-collapse collapse"
                    id="withdrawFunds"
                    data-bs-parent="#securityAccordion"
                  >
                    Earn through 5 levels of referrals with percentage-based
                    rewards at each level.
                  </p>
                </div>

                <div className="faq-box">
                  <div
                    className="faq-question accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#trackContributions"
                  >
                    <h3 style={{ textAlign: "left" }}>
                      Can the contract be changed?
                    </h3>
                    <span className="faq-toggle ms-auto">+</span>
                  </div>
                  <p
                    className="faq-answer accordion-collapse collapse"
                    id="trackContributions"
                    data-bs-parent="#securityAccordion"
                  >
                    No. The smart contract is immutable once deployed to the
                    blockchain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="get-involved hero-1 bg-img" id="getInvolved">
        <h2 className="titleText">Ready to Join the Revolution?</h2>
        <div className="involved-boxes">
          <div className="involved-box glow-box">
            <h3>
              <img src="Investment.png" alt="" width={25} className="mx-3"/>
              Make Your Investment
            </h3>
            <p>Start with just $50 USDT and begin building your network</p>
            <Link to="/signup" className="cta">
              Invest Now
            </Link>
          </div>
          <div className="involved-box glow-box">
            <h3>
            <img src="Build Your team.png" alt="" width={30} className="mx-3"/>
              Build Your Team
            </h3>
            <p>Refer others and earn through 5 levels</p>
            <Link to="/referral" className="cta">
              Referral Program
            </Link>
          </div>
          <div className="involved-box glow-box">
            <h3>
            <img src="Track Your Earning.png" alt="" width={30} className="mx-3"/>
              Track Your Earnings
            </h3>
            <p>Watch your USDT balance grow automatically</p>
            <Link to="/dashboard" className="cta">
              View Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Features */}
      <div className="get-involved hero-1 bg-img">
        <h2 className="titleText">Why DECENTRAMAX is Trustless</h2>
        <div className="involved-boxes">
          <div className="involved-box glow-box border-curve">
            <h3>
            <img src="Open Source.png" alt="" width={30} className="mx-3"/>
              Open Source
            </h3>
            <p>Smart contract code is verifiable by anyone</p>
          </div>
          <div className="involved-box glow-box border-curve">
            <h3>
            <img src="No withdraw limit.png" alt="" width={30} className="mx-3"/>
              No Withdrawal Limits
            </h3>
            <p>Withdraw your USDT anytime with no restrictions</p>
          </div>
          <div className="involved-box glow-box border-curve">
            <h3>
            <img src="Blockchain Verified.png" alt="" width={30} className="mx-3"/>
              Blockchain-Verified
            </h3>
            <p>All transactions permanently recorded on-chain</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
