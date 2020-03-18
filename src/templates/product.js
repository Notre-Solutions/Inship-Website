import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Markdown from "../components/markdown"
import Img from "gatsby-image"

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

const Product = ({ data }) => {
  const {
    title,
    description,
    featuredimage,
    alias,
  } = data.markdownRemark.frontmatter
  return (
    <div>
      <Nav current={alias}></Nav>
      <div className="product">
        <header className="header">
          <Img className="image" fluid={featuredimage.childImageSharp.fluid} />
          <div className="header-text-box">
            <h1 className="heading">
              <span className="main-header">{title}</span>
              <span className="sub-header">
                <Markdown markdown={description} />
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
      <div className="main-page container">
        {showSectionA(true, "About", description, "what-we-do", "section-a")}
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Product

export const pageQuery = graphql`
  query NewsArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        alias
        description
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
