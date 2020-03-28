import React from "react"
import Markdown from "./markdown"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Testimonials = ({ title, body, style, fluidImage, alias }) => {
  return (
    <Link to={"/products/" + alias}>
      <div className={`card card-${style}`}>
        <Img fluid={fluidImage} className="img" />
        <h3 className="card-title title">
          <Markdown markdown={title} />
        </h3>
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
        <Link to={"/products/" + alias} className="btn">
          Learn More
        </Link>
      </div>
    </Link>
  )
}

export default Testimonials
