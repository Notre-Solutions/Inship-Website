import React from "react"
import Markdown from "./markdown"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProductCard = ({ title, body, style, fluidImage, alias }) => {
  return (
    <Link to={"/products/" + alias}>
      <div className={`card card-${style}`}>
        <div class="img-container">
          <Img fluid={fluidImage} className="img" />
        </div>
        <h3 className="card-title title">
          <div className="inner-title">
            <Markdown markdown={title} />
          </div>
        </h3>
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
        {/* <div className='btn-container'>
          
        <Link to={"/products/" + alias} className="btn">
          Learn More
        </Link>
        </div> */}
      </div>
    </Link>
  )
}

export default ProductCard
