import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Markdown from "../components/markdown"
import { useStaticQuery, graphql } from "gatsby"
import TimeLine from "../components/timeline"
import Player from "../components/player"

function featureCard(feature) {
  return (
    <div className="card">
      <i className="icon fa fa-check-circle fa-2x"></i>
      <div>
        <h1>{feature.title}</h1>
        <div className="text-box">{feature.description}</div>
      </div>
    </div>
  )
}

const Product = ({ data }) => {
  const {
    alias,
    description,
    title,
    productpage,
  } = data.markdownRemark.frontmatter
  const { timeline, features } = productpage
  return (
    <div>
      <Nav current={alias}></Nav>
      <header className="product-header">
        <div className="header-text-box">
          <h1 className="heading">
            <span className="main-header">{title}</span>
            <span className="sub-header">{description}</span>
          </h1>

          <a href="#video" className="btn">
            Watch a video
          </a>
        </div>
      </header>
      <div className="product-main container">
        <div className="product-main-section-a">
          <div className="product-main-section-a-title">Process Flow</div>
          <TimeLine timeline={timeline}></TimeLine>
        </div>
        <div className="line"></div>
        <div className="product-main-section-b">
          <div className="product-main-section-b-title">Features</div>
          <div className="cards">
            {features.map(feature => {
              return featureCard(feature)
            })}
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
          <div className="product-main-section-d-title">
            Integration Options
          </div>
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
        <div id="video" className="product-main-section-d">
          <div className="product-main-section-d-title">How it works</div>
          <Player url="https://www.youtube.com/watch?v=Itm3x-4rgL0"></Player>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Product

export const pageQuery = graphql`
  query ProductQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        alias
        productpage {
          timeline {
            description
            title
          }
          features {
            description
            title
          }
        }
      }
    }
  }
`
