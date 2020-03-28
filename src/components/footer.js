import React from "react"
import "../css/main.css"
import "@fortawesome/fontawesome-free/css/all.css"

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="inship-logo">
          <div className="main">
            <span className="thin">IN</span>SHIP
          </div>

          <div className="sub">
            Providing the Technology Behind{" "}
            <span className="secondLine">
              Automated Accounts Payable Processes
            </span>
          </div>
        </div>

        <div className="address">
          <div>Inship</div>
          <div>GW108</div>
          <div>Greenway Hub</div>
          <div>7 Grangegorman Lower</div>
          <div>Arran Quay</div>
          <div>Dublin,Ireland</div>
          <a href="tel:+353 1 556 3499" className="phone-number-line">
            +353 1 556 3499
          </a>
          <a
            href="mailto:info@inship.ie?subject=From InShip APS Website"
            className="email-line"
          >
            info@inshipaps.com
          </a>
        </div>
        <div>
          <div className="social-icons">
            <a href="#!">
              <i className="fab fa-twitter "></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook "></i>
            </a>
            <a href="#!">
              <i className="fab fa-instagram "></i>
            </a>
            <a href="#!">
              <i className="fab fa-youtube "></i>
            </a>
            <a href="#!">
              <i className="fab fa-linkedin "></i>
            </a>
          </div>
          <div className="copy-right">
            &copy; {new Date().getFullYear()} Inship Accounts Payable Solutions
            Ltd.
          </div>
        </div>
        <div className="line"></div>
      </section>
    </div>
  )
}

export default Footer
