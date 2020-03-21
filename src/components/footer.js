import React from "react"
import "../css/main.css"
import "font-awesome/css/font-awesome.min.css"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  // const map = useStaticQuery(graphql`
  //   query LocationQuery {
  //     allLocationData {
  //       edges {
  //         node {
  //           results {
  //             geometry {
  //               location_type
  //               location {
  //                 lat
  //                 lng
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div>
      <section className="footer">
        <div className="inship-logo">
          <div className="main">
            <span className="bold">IN</span>SHIP
          </div>

          <div className="sub">
            Providing the Technology Behind{" "}
            <span className="secondLine">
              Automated Accounts Payable Processes
            </span>
          </div>
        </div>

        <div className="address">
          <div className="address-line">Inship</div>
          <div className="address-line">GW108</div>
          <div className="address-line">Greenway Hub</div>
          <div className="address-line">7 Grangegorman Lower</div>
          <div className="address-line">Arran Quay</div>
          <div className="address-line">Dublin,Ireland</div>
          <div className="phone-number-line">+353 1 556 3499</div>
          <a href="info@inship.ie" className="email-line">
            info@inship.ie
          </a>
        </div>
        <div className="line"></div>
        <div>
          <div className="social-icons">
            <a href="#!">
              <i className="fa fa-twitter "></i>
            </a>
            <a href="#!">
              <i className="fa fa-facebook "></i>
            </a>
            <a href="#!">
              <i className="fa fa-instagram "></i>
            </a>
            <a href="#!">
              <i className="fa fa-youtube "></i>
            </a>
            <a href="#!">
              <i className="fa fa-linkedin "></i>
            </a>
          </div>
          <div className="copy-right">
            &copy; 2020 Inship Accounts Payable Solutions Ltd.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
