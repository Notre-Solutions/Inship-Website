import React from "react"
import "../css/main.css"
import "font-awesome/css/font-awesome.min.css"

const Footer = () => {
  return (
    <div>
      <section className="footer">
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
            <span className="copy-right">
              &copy; 2020 Inship Accounts Payable Solutions Ltd.
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
