import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"

function showSectionA(show, title, body) {
  if (show) {
    return (
      <section id="what-we-do" className="section-a">
        <h2 className="section-a-heading">{title}</h2>
        <div className="text-box">{body}</div>
        <a href="#" className="btn">
          Play our video
        </a>
      </section>
    )
  }
}

function showSectionB(show, title, body) {
  if (show) {
    return (
      <section className="section-b">
        <h2 className="section-b-heading">{title}</h2>
        <div className="text-box">{body}</div>
      </section>
    )
  }
}

function showSectionD(show, title) {
  if (show) {
    // return (
    // <section className="section-d">
    //   <h1 className="title">{title}</h1>
    //   <form className="cf container">
    //     <div className="half left cf">
    //       <div className="field">
    //         <input type="text" required autoComplete="off" />
    //         <label htmlFor="Name" title="Name"></label>
    //       </div>
    //       <div className="field">
    //         <input type="text" required autoComplete="off" />
    //         <label htmlFor="email" title="Email"></label>
    //       </div>
    //       <div className="field">
    //         <input type="text" required autoComplete="off" />
    //         <label htmlFor="subject" title="Subject"></label>
    //       </div>
    //     </div>
    //     <div className="half right cf">
    //       <div className="field">
    //         <input type="text" required autoComplete="off" />
    //         <label htmlFor="message" title="Message"></label>
    //       </div>
    //     </div>
    //     <input
    //       type="submit"
    //       value="Submit"
    //       id="input-submit"
    //       className="submit-btn"
    //     />
    //   </form>
    // </section>
    // )
  }
}

function showSectionC(show) {
  if (show) {
    return (
      <section className="section-c">
        <h2 className="section-c-heading">Products</h2>
        <div className="cards">
          <div className="card card-color-1">
            <img src="../img/logo/APC-logo.jpeg" alt="" />
            <h3 className="card-title">Accounts Payable Combined</h3>
            <div className="text-box">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              voluptas beatae eveniet, nihil ipsum voluptatem sequi nesciunt
              quia praesentium possimus ex fugit dicta veritatis consequatur quo
              sint, distinctio corporis. Odio.
            </div>
            <a href="" className="btn">
              Learn More
            </a>
          </div>
          <div className="card card-color-2">
            <img src="../img/logo/CAPS-logo.jpeg" alt="" />
            <h3 className="card-title">Complete Accounts Payable Solutions</h3>
            <div className="text-box">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              voluptas beatae eveniet, nihil ipsum voluptatem sequi nesciunt
              quia praesentium possimus ex fugit dicta veritatis consequatur quo
              sint, distinctio corporis. Odio.
            </div>
            <a href="" className="btn">
              Learn More
            </a>
          </div>
          <div className="card card-color-3">
            <img src="../img/logo/T2P-logo.jpeg" alt="" />
            <h3 className="card-title">
              Tick To <span className="t2p">Post</span>
            </h3>
            <div className="text-box">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              voluptas beatae eveniet, nihil ipsum voluptatem sequi nesciunt
              quia praesentium possimus ex fugit dicta veritatis consequatur quo
              sint, distinctio corporis. Odio.
            </div>
            <a href="" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    )
  }
}

const Landing = ({ data }) => {
  const {
    title,
    subtitle,
    sectionA,
    sectionB,
    sectionC,
    sectionD,
  } = data.markdownRemark.frontmatter.landingPage

  return (
    <div>
      <Nav current={"Home"}></Nav>
      <header className="header">
        <div className="header-text-box">
          <h1 className="heading">
            <span className="main-header">
              IN<span className="bold">SHIP</span> APS
            </span>
            <span className="sub-header">{subtitle}</span>
          </h1>
          <a href="#what-we-do" className="btn btn-white">
            What We Do
          </a>
        </div>
      </header>
      <div className="main-page">
        {showSectionA(sectionA.show, sectionA.title, sectionA.body)}
        {showSectionB(sectionB.show, sectionB.title, sectionB.body)}
        {showSectionC(sectionC.show)}
        {showSectionD(sectionD.show, sectionD.title)}
      </div>
      <Footer></Footer>
      {/* <footer>This is the footer woo</footer> */}
    </div>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          title
          subtitle
          sectionA {
            body
            title
            show
          }
          sectionB {
            title
            show
            body
          }
          sectionC {
            show
          }
          sectionD {
            title
            show
          }
        }
      }
    }
  }
`
