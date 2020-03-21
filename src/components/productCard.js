import React from "react"
import Markdown from "./markdown"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProductCard = ({ title, body, cardStyle, fluidImage, alias }) => {
  return (
    <div className={cardStyle}>
      <Img fluid={fluidImage} className="img" />
      <h3 className="card-title">
        <Markdown markdown={title} />
      </h3>
      <div className="text-box">
        <Markdown markdown={body} />
      </div>
      <Link to={"/products/" + alias} className="btn">
        Learn More
      </Link>
    </div>
  )
}

export default ProductCard
