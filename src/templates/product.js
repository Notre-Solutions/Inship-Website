import React from "react"
import "../css/main.css"
import Nav from "../components/nav"

const Product = ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  console.log(title)
  return (
    <div>
      <Nav current={title}></Nav>
      <div className="product-main">
        <section className="product">
          <h1 className="product-heading">{title}</h1>
          <div className="text-box">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </div>
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
        
      }
    }
  }
`
