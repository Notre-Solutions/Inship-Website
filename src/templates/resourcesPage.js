import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import ProblemSection from "../components/problemSection"

const Resources = ({ data }) => {
  const {
    title,
    titleBlurb,
    cards,
  } = data.markdownRemark.frontmatter.resourcesPage
  return (
    <>
      <Layout current={"Resources"}>
        <div className="resources">
          <header className="resources-header">
            <div className="resources-header-text-box">
              <h1 className="main-header">
                <span className="">
                  Re<span className="bold">sources</span>
                </span>
                <span className="sub-header">{titleBlurb}</span>
              </h1>
            </div>
          </header>
          <section className="resources-body container">
            {/* <Markdown markdown={description} /> */}
            <ProblemSection array={cards}></ProblemSection>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Resources

export const pageQuery = graphql`
  query ResourcesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        resourcesPage {
          title
          titleBlurb
          cards {
            description
            icon
            showReadMore
            title
            readMore
            subtitle
            titleOverlayIcon
            description
          }
        }
      }
    }
  }
`
