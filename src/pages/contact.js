import React from "react"
import { useStaticQuery } from "gatsby"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"

const Contact = () => {
  return (
    <div>
      <Nav current={"Contact"}></Nav>
      <header className="contact">
        <div className="contact-text-box">
          <h1 className="contact-header">
            <div className="contact-main-header right">Contact</div>
            <div className="contact-main-header left">
              Us <i className="icon fa fa-phone 4x spin"></i>
            </div>
          </h1>
        </div>
      </header>
      <Footer></Footer>
    </div>
  )
}

export default Contact
