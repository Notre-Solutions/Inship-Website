import React from "react"
import "../css/main.css"
import ReactModal from "../components/modal"
import Form from "../components/form"
import Layout from "../components/layout"
import "@fortawesome/fontawesome-free/css/all.css"

const content = (
  <div className="contact-page">
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
    <div className="container">
      <section className="section-a">
        <div className="cards">
          <div className="card">
            <h1 className="title">Location</h1>
            <i className="fas fa-map-marked icon"></i>
            <div className="address">
              <div>GW108,</div>
              <div>Greenway Hub,</div>
              <div>7 Grangegorman Lower,</div>
              <div>Arran Quay,</div>
              <div>Dublin, Ireland</div>
            </div>
          </div>
          <div className="card">
            {" "}
            <h1 className="title">Contact Number</h1>
            <i className="fas fa-phone icon "></i>
            <a href="tel:+353 1 556 3499" className="phone-number">
              +353 1 556 3499
            </a>
          </div>
          <div className="card">
            {" "}
            <h1 className="title">Email</h1>
            <i className="fas fa-envelope-open-text icon"></i>
            <a
              href="mailto:info@inship.ie?subject=From InShip APS Website"
              className="email"
            >
              info@inshipaps.com
            </a>
          </div>
        </div>
      </section>

      <section className="section-b">
        <Form formTitle={"General Inquiry"}></Form>
      </section>
    </div>
  </div>
)

const Contact = () => {
  return (
    <>
      <Layout current={"Contact"} content={content}></Layout>
    </>
  )
}

export default Contact
