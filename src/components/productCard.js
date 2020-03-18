import React from "react"
import Markdown from "./markdown"
import Img from "gatsby-image"

const ProductCard = ({ title, body, cardStyle, fluidImage }) => {
  return (
    <div className={cardStyle}>
      <Img fluid={fluidImage} className="img" />
      <h3 className="card-title">
        <Markdown markdown={title} />
      </h3>
      <div className="text-box">
        <Markdown markdown={body} />
      </div>
      <a href="" className="btn">
        Learn More
      </a>
    </div>
  )
}

export default ProductCard
