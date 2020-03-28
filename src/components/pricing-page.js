import React from "react"
import Markdown from "./markdown"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "./layout"
import PricingTable from "./pricing-table"

const Pricing = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const productFeatures = {}
  edges.map(edge => {
    productFeatures[edge.node.frontmatter.id] = {
      alias: edge.node.frontmatter.alias,
      name: edge.node.frontmatter.title,
      feature1: edge.node.frontmatter.features.feature1,
      feature2: edge.node.frontmatter.features.feature2,
      feature3: edge.node.frontmatter.features.feature3,
      feature4: edge.node.frontmatter.features.feature4,
    }
  })

  const content = (
    <div className="pricing-page">
      <section className="header">
        <section className="section-c">
          <div className="section-c-heading">Pricing</div>
          <div className="cards">
            {edges.map(edge => {
              const {
                title,
                features,
                featuredpost,
                style,
                featuredimage,
              } = edge.node.frontmatter
              if (featuredpost) {
                return (
                  <div className={`card card-${style}`}>
                    <Img
                      fluid={featuredimage.childImageSharp.fluid}
                      className="img"
                    />
                    <h3 className="card-title">
                      <Markdown markdown={title} />
                    </h3>
                    <div className="text-box">
                      <ul>
                        {Object.keys(features).map((key, index) => {
                          return <li> Amazing feature </li>
                        })}
                      </ul>
                    </div>
                    <a href="" className="btn">
                      Learn More
                    </a>
                  </div>
                )
              }
            })}
          </div>
        </section>
      </section>

      <PricingTable productFeatures={productFeatures} />
    </div>
  )

  return (
    <>
      <Layout current={"Pricing"} content={content}></Layout>
    </>
  )
}

export default Pricing

export const pageQuery = graphql`
  query PricingPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            style
            alias
            id
            featuredpost
            features {
              feature1
              feature2
              feature3
              feature4
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
    }
  }
`
