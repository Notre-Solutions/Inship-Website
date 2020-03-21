import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Markdown from "../components/markdown"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import TimeLine from "../components/timeline"

function showSectionA(show, title, body, id, className) {
  if (show) {
    console.log(title)
    return (
      <section id={id} className={className}>
        <h2 className="section-a-heading">{title}</h2>
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
      </section>
    )
  }
}

const Product = () => {
  const data = useStaticQuery(graphql`
    query Photos {
      images: allFile(
        filter: { relativeDirectory: { eq: "intergated-products" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)

  return (
    <div>
      <Nav current={"CAPS"}></Nav>

      <header className="product-header">
        <div className="header-text-box">
          <h1 className="heading">
            <span className="main-header">
              Complete Accounts Payable Solutions
            </span>
            <span className="sub-header">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </span>
          </h1>

          <a href="" className="btn">
            Watch a video
          </a>
        </div>
      </header>
      <div className="product-main container">
        <div className="product-main-section-a">
          <div className="product-main-section-a-title">Process Flow</div>
          <TimeLine></TimeLine>
        </div>
        <div className="product-main-section-b">
          <div className="product-main-section-b-title">Features</div>
          <div className="cards">
            <div className="card">
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className="card">
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className="card">
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className="card">
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
          </div>
        </div>
        <div className="product-main-section-c">
          <div className="product-main-section-c-title">
            Switching To Complete Accounts Payable Solutions
            <div className="product-main-section-c-title-sub">
              Custermers reported
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <div className="c100 p70 center green">
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
            <div className="card">
              <div className="c100 p93 center green">
                <span>93%</span>

                <div className="slice">
                  <div className="bar"></div>

                  <div className="fill"></div>
                </div>
              </div>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
            <div className="card">
              <div className="c100 p89 center green">
                <span>89%</span>

                <div className="slice">
                  <div className="bar"></div>

                  <div className="fill"></div>
                </div>
              </div>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
            <div className="card">
              <div className="c100 p100 center green">
                <span>100%</span>

                <div className="slice">
                  <div className="bar"></div>

                  <div className="fill"></div>
                </div>
              </div>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
          </div>
        </div>
        <div className="product-main-section-d">
          <div className="product-main-section-d-title">Integrations</div>
          <div className="cards">
            <div className="card">
              <i className="icon fa fa-file fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className="card">
              <i className="icon fa fa-calculator fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className="card">
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className="card">
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Product
