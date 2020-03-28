import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import NewsCard from "../components/news-card"

const Automate = ({ data }) => {
  console.log(data)

  const edges = data.allMarkdownRemark.edges

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

          <section className="section-a">
            <div className="title">
              <h2>Articles</h2>
            </div>
            <div className="grid">
              {edges.map(edge => {
                const { featuredpost, article } = edge.node.frontmatter
                if (featuredpost) {
                  return <NewsCard article={article} />
                }
              })}
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Automate

export const pageQuery = graphql`
  query AutomateQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } },
      sort: {fields: frontmatter___article___date, order: DESC}
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
  }
`
