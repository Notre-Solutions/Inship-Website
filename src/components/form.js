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
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="half left cf">
            <div className="field">
              <input type="text" required autoComplete="off" name="name" />
              <label htmlFor="Name" title="Name"></label>
            </div>
            <div className="field">
              <input type="email" required autoComplete="off" name="email" />
              <label htmlFor="email" title="Email"></label>
            </div>
            <div className="field">
              <input type="text" required autoComplete="off" name="subject" />
              <label htmlFor="subject" title="Subject"></label>
            </div>
          </div>
          <div className="half right cf">
            <div className="field">
              <textarea
                type="text"
                required
                autoComplete="off"
                name="message"
              ></textarea>
              <label htmlFor="message" title="Message"></label>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Form
