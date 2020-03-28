import React from "react"
import "../css/main.css"
import Markdown from "../components/markdown"
import { useStaticQuery, graphql } from "gatsby"
import TimeLine from "../components/timeline"
import Player from "../components/player"
import Layout from "../components/layout"
import "@fortawesome/fontawesome-free/css/all.css"

function featureCard(style, feature) {
  return (
    <div className={`card dark-${style}`}>
      <div>
        <h1 className={`${style}`}>{feature.title}</h1>
        <div className={`text-box ${style}`}>{feature.description}</div>
      </div>
    </div>
  )
}

function CustermerReports(style, custermerReports) {
  return (
    <div className="card">
      <div className={`c100 p${custermerReports.percentage} center ${style}`}>
        <span>{`${custermerReports.percentage}%`}</span>
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
      <div className={`text-box text-box-${style}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
        eligendi quia
      </div>
    </div>
  )
}

function IntergrationOptions(style, intergrationOption) {
  return (
    <div className={`card ${style}-line`}>
      <i className={`icon fa fa-${intergrationOption.icon} `}></i>
      <div className="text-box">{intergrationOption.description}</div>
    </div>
  )
}

const Product = ({ data }) => {
  const {
    alias,
    description,
    style,
    title,
    url,
    productpage,
  } = data.markdownRemark.frontmatter
  console.log(productpage)
  const { timeline, features, custermerReports, integrations } = productpage

  return (
    <>
      <Layout current={alias} style={style}>
        <div className="product-page">
          <header className={`product-header-${style}`}>
            <div className="header-text-box">
              <h1 className="heading">
                <span className={`main-header header-${style}`}>{title}</span>
                <span className={`sub-header header-${style}`}>
                  {description}
                </span>
              </h1>

              <a href="#video" className={`btn-${style}`}>
                Watch a video
              </a>
            </div>
          </header>
          <div className="product-main container">
            <div className="product-main-section-a">
              <div className={`product-main-section-a-title ${style}`}>
                Process Flow
              </div>
              <TimeLine timeline={timeline} style={style}></TimeLine>
            </div>
            <div className={`line ${style}-line`}></div>
            <div className="product-main-section-b">
              <div className={`product-main-section-b-title ${style}`}>
                Features
              </div>
              <div className="cards">
                {features.map(feature => {
                  return featureCard(style, feature)
                })}
              </div>
            </div>
            <div className="product-main-section-c">
              <div className={`product-main-section-c-title ${style}`}>
                Switching To Complete Accounts Payable Solutions
                <div className={`product-main-section-c-title-sub ${style}`}>
                  Custermers reported
                </div>
              </div>
              <div className="cards">
                {custermerReports.map(report => {
                  return CustermerReports(style, report)
                })}
              </div>
            </div>
            <div className="product-main-section-d">
              <div className={`product-main-section-d-title ${style}`}>
                Integration Options
              </div>
              <div className="cards">
                {integrations.map(intergration => {
                  return IntergrationOptions(style, intergration)
                })}
              </div>
            </div>
            <div id="video" className="product-main-section-d">
              <div className="product-main-section-d-title">How it works</div>
              <Player url={url}></Player>
            </div>
          </div>
        </div>
      </Layout>
    </>
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
        style
        url
        productpage {
          timeline {
            description
            title
          }
          features {
            description
            title
          }
          custermerReports {
            description
            percentage
          }
          integrations {
            icon
            description
          }
        }
      }
    }
  }
`
