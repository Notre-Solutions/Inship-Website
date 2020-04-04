import React from "react"
import "../css/main.css"
import TimeLine from "../components/timeline"
import Player from "../components/player"
import Layout from "../components/layout"
import "@fortawesome/fontawesome-free/css/all.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SideNav from "../components/sidenav"

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

function CustomerReports(style, customerReports) {
  return (
    <div className="card">
      <div className={`c100 p${customerReports.percentage} center ${style}`}>
        <span>{`${customerReports.percentage}%`}</span>
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
      <div className={`text-box text-box-${style}`}>
        {customerReports.description}
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

function Heading(alias, style, title, description, featuredimage) {
  if (alias === "CAPS") {
    return (
      <div className="header-text-box">
        <h1 className="heading">
          <span
            className={`main-header header-${style}`}
            style={{ color: "yellow" }}
          >
            {title}
          </span>
          <span
            className={`sub-header header-${style}`}
            style={{ color: "yellow" }}
          >
            {description}
          </span>
        </h1>

        <a href="#video" className={`btn-${style}`}>
          Watch a video
        </a>
        <div class="product-page-img-container">
          <Img
            fluid={featuredimage.childImageSharp.fluid}
            className="product-page-img-container-logo"
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="header-text-box">
        <h1 className="heading">
          <div class="product-page-img-container">
            <Img
              fluid={featuredimage.childImageSharp.fluid}
              className="product-page-img-container-logo"
            />
          </div>
          <span
            className={`main-header header-${style}`}
            style={{ color: "yellow" }}
          >
            {title}
          </span>
          <span
            className={`sub-header header-${style}`}
            style={{ color: "yellow" }}
          >
            {description}
          </span>
        </h1>

        <a href="#video" className={`btn-${style}`}>
          Watch a video
        </a>
      </div>
    )
  }
}

const Product = ({ data }) => {
  const {
    alias,
    description,
    style,
    title,
    url,
    productpage,
    featuredimage,
  } = data.markdownRemark.frontmatter
  const { timeline, features, customerReports, integrations } = productpage
  const {
    sectionATitle,
    sectionBTitle,
    sectionDTitle,
    sectionETitle,
    sectionCTitles,
    sideNavBar,
  } = data.allMarkdownRemark.edges[0].node.frontmatter.productPageTemplate

  return (
    <>
      <Layout current={alias} style={style}>
        <SideNav list={sideNavBar}></SideNav>

        <div className="product-page">
          <header className={`product-header-${style}`}>
            {Heading(alias, style, title, description, featuredimage)}
          </header>
          <div className="product-main container">
            <div id="process" className="product-main-section-a">
              <div className={`product-main-section-a-title ${style}`}>
                {sectionATitle}
              </div>
              <TimeLine timeline={timeline} style={style}></TimeLine>
            </div>
            <div className={`line ${style}-line`}></div>
            <div id="features" className="product-main-section-b">
              <div className={`product-main-section-b-title ${style}`}>
                {sectionBTitle}
              </div>
              <div className="cards">
                {features.map(feature => {
                  return featureCard(style, feature)
                })}
              </div>
            </div>
            <div id="customers-reported" className="product-main-section-c">
              <div className={`product-main-section-c-title ${style}`}>
                {sectionCTitles.title}
                <div className={`product-main-section-c-title-sub ${style}`}>
                  {sectionCTitles.subtitle}
                </div>
              </div>
              <div className="cards">
                {customerReports.map(report => {
                  return CustomerReports(style, report)
                })}
              </div>
            </div>
            <div id="integration-options" className="product-main-section-d">
              <div className={`product-main-section-d-title ${style}`}>
                {sectionDTitle}
              </div>
              <div className="cards">
                {integrations.map(intergration => {
                  return IntergrationOptions(style, intergration)
                })}
              </div>
            </div>
            <div id="video" className="product-main-section-d">
              <div className="product-main-section-d-title">
                {sectionETitle}
              </div>
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
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "productPageTemplate" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            productPageTemplate {
              sectionATitle
              sectionBTitle
              sectionDTitle
              sectionETitle
              sectionCTitles {
                subtitle
                title
              }
              sideNavBar {
                name
                link
                icon
              }
            }
          }
        }
      }
    }

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
          customerReports {
            description
            percentage
          }
          integrations {
            icon
            description
          }
        }

        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
