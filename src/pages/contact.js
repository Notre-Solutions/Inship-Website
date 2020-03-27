import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import ReactModal from "../components/modal"
import Form from "../components/form"

const Contact = () => {
  return (
    <div className="contact-page">
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
      <div className="container">
        <section className="section-a">
          <div className="cards">
            <div className="card">
              <h1 className="title">Demo</h1>
              <i className="fas fa-laptop icon"></i>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.{" "}
              </p>
              <ReactModal
                content={<Form formTitle="Ask For A Demo"></Form>}
                buttonStyle="btn"
                buttonName="Ask for a Demo"
              ></ReactModal>
              {/* <a href="" className="btn">
                Ask for a Demo
              </a> */}
            </div>
            <div className="card">
              {" "}
              <h1 className="title">Support</h1>
              <i className="fas fa-users icon "></i>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.{" "}
              </p>
              <ReactModal
                content={<Form formTitle="Contact Support"></Form>}
                buttonStyle="btn"
                buttonName="Contact Support"
              ></ReactModal>
            </div>
            <div className="card">
              {" "}
              <h1 className="title">Sales</h1>
              <i className="fas fa-phone icon"></i>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.{" "}
              </p>
              <ReactModal
                content={<Form formTitle="Contact Sales"></Form>}
                buttonStyle="btn"
                buttonName="Contact Sales"
              ></ReactModal>
            </div>
          </div>
        </section>

        <section className="section-b">
          <h1 className="title">General Inquiry</h1>
          <form className="cf container">
            <div className="half left cf">
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="Name" title="Name"></label>
              </div>
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="email" title="Email"></label>
              </div>
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="subject" title="Subject"></label>
              </div>
            </div>
            <div className="half right cf">
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="message" title="Message"></label>
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              id="input-submit"
              className="submit-btn"
            />
          </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact
