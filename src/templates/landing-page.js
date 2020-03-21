import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Markdown from "../components/markdown"
import ProductCard from "../components/productCard"
import { graphql } from 'gatsby'

function showSectionA(show, title, body, id, className) {
  if (show) {
    return (
      <section id={id} className={className}>
        <h2 className="section-a-heading">{title}</h2>
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
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
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
      </section>
    )
  }
}

function showSectionD(show, title) {
  if (show) {
    return (
      <section className="section-d">
        <h1 className="title">{title}</h1>
        <form className="cf container">
          <div className="half left cf">
            <div className="field">
              <input type="text" required autoComplete="off" />
              <label htmlFor="Name" title="Name"></label>
            </div>
            <div className="field">
              <input type="text" required autoComplete="off" />
              <label htmlFor="email" title="Email"></label>
            </div>
            <div className="field">
              <input type="text" required autoComplete="off" />
              <label htmlFor="subject" title="Subject"></label>
            </div>
          </div>
          <div className="half right cf">
            <div className="field">
              <input type="text" required autoComplete="off" />
              <label htmlFor="message" title="Message"></label>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            id="input-submit"
            className="submit-btn"
          />
        </form>
      </section>
    )
  }
}

function showSectionC(show, edges) {
  if (show) {
    return (
      <section className="section-c">
        <h2 className="section-c-heading">Products</h2>
        <div className="cards">
          {edges.map(edge => {
            const {
              title,
              description,
              featuredpost,
              cardStyle,
              featuredimage,
            } = edge.node.frontmatter
            if (featuredpost) {
              return (
                <ProductCard
                  title={title}
                  body={description}
                  cardStyle={cardStyle}
                  fluidImage={featuredimage.childImageSharp.fluid}
                />
              )
            }
          })}
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
  const edges = data.allMarkdownRemark.edges
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
      <div className="main-page container">
        {showSectionA(
          sectionA.show,
          sectionA.title,
          sectionA.body,
          "what-we-do",
          "section-a"
        )}
        {showSectionB(sectionB.show, sectionB.title, sectionB.body)}
        {showSectionC(sectionC.show, edges)}
        {showSectionD(sectionD.show, sectionD.title)}
      </div>
      <footer>
        <Footer></Footer>
      </footer>

      {/* <footer>This is the footer woo</footer> */}
    </div>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            cardStyle
            featuredpost
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
    }
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

