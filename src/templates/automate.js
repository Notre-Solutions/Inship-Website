import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import NewsCard from "../components/news-card"
import Carousels from "../components/carousel"

function Testimonials(testimonal) {
  const { stars, title, description } = testimonal
  let array = []
  for (let i = 0; i < stars; i++) {
    array.push(<span className="fa fa-star"></span>)
  }
  return (
    <div className="card">
      <i className="icon fa fa-quote-right"></i>
      <i className="stars">{array}</i>
      <div className="title">{title}</div>
      <div className="textbox">{description}</div>
    </div>
  )
}

const Automate = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const { automatePage } = data.markdownRemark.frontmatter
  const { sectionB } = automatePage
  const { testimonials } = sectionB

  return (
    <>
      <Layout current={"Why Automate"}>
        <div className="automate-page">
          <section className="header">
            <div className="header-text-box">
              <h1 className="heading">
                <span className="main-header">
                  Why<span className="bold"> Automate</span>
                </span>
              </h1>
              {/* Uncomment for animation ;)  */}
              <div class="animation-wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </div>
          </section>

          <section className="section-a container">
            <div className="title">
              <h2>Articles</h2>
            </div>
            <div className="grid">
              {edges.map(edge => {
                const { article } = edge.node.frontmatter
                return <NewsCard article={article} />
              })}
            </div>
          </section>
          <div className="section-b">
            <div className="title-main">
              <h2>{sectionB.title}</h2>
            </div>
            <Carousels>
              {testimonials.map((testimonal, i) => {
                if (testimonials[i + 1]) {
                  return (
                    <div className="cards">
                      {Testimonials(testimonal)}
                      {Testimonials(testimonials[i + 1])}
                    </div>
                  )
                } else {
                  return <div className="cards">{Testimonials(testimonal)}</div>
                }
              })}
            </Carousels>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Automate

export const pageQuery = graphql`
  query AutomateQuery($id: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      sort: { fields: frontmatter___article___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            featuredpost
            article {
              title
              url
              date(formatString: "MMMM DD, YYYY")
              description
              thumbnail {
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
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        automatePage {
          title
          sectionB {
            title
            testimonials {
              title
              stars
              description
            }
          }
        }
      }
    }
  }
`
