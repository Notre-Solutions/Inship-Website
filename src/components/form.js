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
              <label htmlFor="Name" title="Name" name="name"></label>
            </div>
            <div className="field">
              <input type="text" required autoComplete="off" />
              <label htmlFor="email" title="Email" name="email"></label>
            </div>
            <div className="field">
              <input type="text" required autoComplete="off" />
              <label htmlFor="subject" title="Subject" name="subject"></label>
            </div>
          </div>
          <div className="half right cf">
            <div className="field">
              <input type="text" required autoComplete="off" />
              <label htmlFor="message" title="Message" name="message"></label>
            </div>
          </div>
          <button
            type="submit"
            value="Submit"
            id="input-submit"
            className="submit-btn"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Form
