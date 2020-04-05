import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import Markdown from "../components/markdown"

const Resources = ({ data }) => {
  const {
    title,
    titleBlurb,
    description,
  } = data.markdownRemark.frontmatter.resourcesPage
  return (
    <>
      <Layout current={"Resources"}>
        <div className="resources">
          <header className="header">
            <div className="header-text-box">
              <h1 className="main-header">
                <span className="">
                  Re<span className="bold">sources</span>
                </span>
                <span className=""></span>
              </h1>
            </div>
          </header>
          <div className="">{title}</div>
          <div className="">{titleBlurb}</div>
          <Markdown markdown={description} />
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
          description
        }
      }
    }
  }
`
