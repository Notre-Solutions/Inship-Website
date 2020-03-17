import React from "react"
import { useStaticQuery } from "gatsby"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"

const CAPS = () => {
  // const data = useStaticQuery(graphql`
  //   query Photos {
  //     images: allFile(filter: { relativeDirectory: { eq: "aboutUs" } }) {
  //       nodes {
  //         id

  //         childImageSharp {
  //           fixed(width: 350, height: 400) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //         name
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Nav current={"CAPS"}></Nav>
      <div className="product">
        <header className="header">
          <div className="header-text-box">
            <h1 className="heading">
              <span className="main-header">
                Complete Accounts Payable Solutions
              </span>
              <span className="sub-header">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </span>
            </h1>
            <a href="" className="btn btn-white">
              Ask for A Demo
            </a>
            <a href="" className="btn btn-white">
              Watch a video
            </a>
          </div>
        </header>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default CAPS
