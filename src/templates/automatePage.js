import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import NewsCard from "../components/news-card"
import Carousels from "../components/carousel"
import Animation from "../components/process-animation"
import Markdown from "../components/markdown"
import MY from "../components/masonry"

function sectionDfunction(caseStudy) {
  console.log(caseStudy)
  return (
    <section className="section-d">
      <div className="bg-img"></div>
      {caseStudy.map(element => {
        return (
          <div className="container">
            <div className="title-main" style={{ textAlign: "left" }}>
              {element.title}
            </div>
            <div className="grid" style={{ textAlign: "left" }}>
              <div className="card">
                <div className="title">The Issue</div>
                <div className="text-box">{element.theIssue}</div>
              </div>

              <div className="card">
                <div className="title">The Solution</div>
                <div className="text-box">{element.theSolution}</div>
              </div>
              <div className="card">
                <div className="title">The Brief</div>
                <div className="text-box">{element.theBrief}</div>
              </div>
              <div className="card">
                <div className="title">Client Feedback</div>
                <div className="text-box">{element.clientFeedback}</div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

const Automate = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const { automatePage } = data.markdownRemark.frontmatter
  const {
    animationTitle,
    newsTitle,
    sectionB,
    sectionC,
    sectionD,
  } = automatePage
  const { testimonials } = sectionB

  return (
    <>
      <Layout current={"Why Automate"}>
        <div className="automate-page">
          <section className="header">
            <div className="header-text-box">
              <h1 className="heading">
                <div className="main-header">
                  Why<span className="bold"> Automate</span>
                </div>
              </h1>
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
          <section className="section-animation">
            <div className="animation">
              <Animation />
            </div>
          </section>
          <secionn className="section-b container">
            <div class="process-card">
              <div class="description">
                <Markdown markdown={sectionC.description} />
              </div>
            </div>
          </secionn>
          {/* <section className="section-a">
            <div className="title">
              <h2>{newsTitle}</h2>
            </div>
            <div className="grid">
              {edges.map(edge => {
                const { article } = edge.node.frontmatter
                return <NewsCard article={article} />
              })}
            </div>
          </section> */}
          <section className="section-a">
            <div className="title">
              <h2>{newsTitle}</h2>
            </div>
            <div className="masonry">
              <MY articles={edges}></MY>
            </div>
          </section>
          <section className="section-d">
            {sectionDfunction(sectionD.caseStudies)}
          </section>
          <div className="line"></div>
          <div className="section-b large">
            <div className="title-main">
              <h2>{sectionB.title}</h2>
            </div>
            <Carousels testimonials={testimonials}></Carousels>
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
          animationTitle
          newsTitle
          sectionB {
            title
            testimonials {
              title
              stars
              name
              description
            }
          }
          sectionC {
            description
          }
          sectionD {
            caseStudies {
              title
              theIssue
              theBrief
              theSolution
              clientFeedback
            }
          }
        }
      }
    }
  }
`
