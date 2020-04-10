import React from "react"
import "../css/main.css"
import MyForm from "../components/form"
import Layout from "../components/layout"
import "@fortawesome/fontawesome-free/css/all.css"
import Background from "../components/header"
const Contact = ({ data }) => {
  const { contactPage } = data.markdownRemark.frontmatter
  const { location, phone, email, backgroundimage } = contactPage
  return (
    <>
      <Layout current={"Contact"}>
        <div className="contact-page">
          <header className="contact">
            <Background images={[backgroundimage]}>
              <div className="contact-text-box">
                <h1 className="contact-header">
                  <div className="contact-main-header right">
                    {contactPage.title}
                  </div>
                  <div className="contact-main-header left">
                    {contactPage.subtitle}{" "}
                    <i className="icon fa fa-phone 4x spin"></i>
                  </div>
                </h1>
              </div>
            </Background>
          </header>
          <div className="container">
            <section className="section-a">
              <div className="cards">
                <div className="card">
                  <h1 className="title">{location.title}</h1>
                  <i className={`fas fa-${location.icon} icon`}></i>
                  <div className="addressContainer">
                    <div className="address">
                      <div>{location.description.line1}</div>
                      <div>{location.description.line2}</div>
                      <div>{location.description.line3}</div>
                      <div>{location.description.line4}</div>
                      <div>{location.description.line5}</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  {" "}
                  <h1 className="title">{phone.title}</h1>
                  <i className={`fas fa-${phone.icon} icon`}></i>
                  <a href="tel:+353 1 556 3499" className="phone-number">
                    {phone.description}
                  </a>
                </div>
                <div className="card">
                  {" "}
                  <h1 className="title">{email.title}</h1>
                  <i className={`fas fa-${email.icon} icon`}></i>
                  <a
                    href="mailto:info@inship.ie?subject=From InShip APS Website"
                    className="email"
                  >
                    {email.description}
                  </a>
                </div>
              </div>
            </section>

            <section className="section-b">
              <MyForm formTitle={"General Inquiry"}></MyForm>
              {/* <Form formTitle={"General Inquiry"}></Form> */}
            </section>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact

export const contactQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        contactPage {
          title
          subtitle
          backgroundimage
          location {
            title
            icon
            description {
              line1
              line2
              line3
              line4
              line5
            }
          }
          phone {
            title
            icon
            description
          }
          email {
            title
            icon
            description
          }
        }
      }
    }
  }
`
