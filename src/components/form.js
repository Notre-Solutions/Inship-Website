import React from "react"
import "../css/main.css"
import "@fortawesome/fontawesome-free/css/all.css"

const Form = ({ formTitle }) => {
  return (
    <>
      <section className="form">
        <h1 className="title">{formTitle}</h1>
        <form
          className="cf container"
          name="contact"
          method="POST"
          data-netlify="true"
        >
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
    </>
  )
}

export default Form
