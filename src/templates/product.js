import React from "react"
import '../css/main.css'
const Product = ({ data }) => {
  const { html } = data.markdownRemark
  const { product } = data.markdownRemark.frontmatter
  console.log(product)
  return (
    <div class="product-main">
      <section class="product">
        <h1 class="product-heading">{product}</h1>
        <div class="text-box">
          <p>
            <section dangerouslySetInnerHTML={{ __html: html }} />
          </p>
        </div>
      </section>
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
        product
      }
    }
  }
`
