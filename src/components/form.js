import React from "react"
import "../css/main.css"
import "@fortawesome/fontawesome-free/css/all.css"

// const Form = ({ formTitle }) => {
//   return (
//     <>
//       <section className="form">
//         <h1 className="title">{formTitle}</h1>
//         <form
//           className="cf container"
//           action="https://formspree.io/xeqzwvpv"
//           method="POST"
//         >
//           <div className="half left cf">
//             <div className="field">
//               <input type="text" required autoComplete="off" name="name" />
//               <label htmlFor="Name" title="Name"></label>
//             </div>
//             <div className="field">
//               <input type="email" required autoComplete="off" name="email" />
//               <label htmlFor="email" title="Email"></label>
//             </div>
//             <div className="field">
//               <input type="text" required autoComplete="off" name="subject" />
//               <label htmlFor="subject" title="Subject"></label>
//             </div>
//           </div>
//           <div className="half right cf">
//             <div className="field">
//               <textarea
//                 type="text"
//                 required
//                 autoComplete="off"
//                 name="message"
//               ></textarea>
//               <label htmlFor="message" title="Message"></label>
//             </div>
//           </div>
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>
//       </section>
//     </>
//   )
// }

// export default Form

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <section className="form">
        <h1 className="title">{this.props.formTitle}</h1>
        <form
          className="cf container"
          onSubmit={this.submitForm}
          action="https://formspree.io/xeqzwvpv"
          method="POST"
        >
          <div className="half left cf">
            <div className="field">
              <input type="text" required autoComplete="off" name="name" />
              <label htmlFor="Name" title="Name :"></label>
            </div>
            <div className="field">
              <input type="email" required autoComplete="off" name="email" />
              <label htmlFor="email" title="Email :"></label>
            </div>
            <div className="field">
              <input type="text" required autoComplete="off" name="subject" />
              <label htmlFor="subject" title="Subject :"></label>
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
              <label htmlFor="message" title="Message :"></label>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
