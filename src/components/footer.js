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

          <div className="sub">Invoice Parternship</div>
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
              <i className="fa fa-twitter fa-4x"></i>
            </a>
            <a href="#!">
              <i className="fa fa-facebook fa-4x"></i>
            </a>
            <a href="#!">
              <i className="fa fa-instagram fa-4x"></i>
            </a>
            <a href="#!">
              <i className="fa fa-youtube fa-4x"></i>
            </a>
            <a href="#!">
              <i className="fa fa-linkedin fa-4x"></i>
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
