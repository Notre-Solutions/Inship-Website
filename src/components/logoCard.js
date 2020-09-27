import React from "react"
import Img from "gatsby-image"

const logoCard = ({ fluidImage }) => {
  return (
    <div>
      <div className={`card`}>
        <div className="img-container">
          <Img fluid={fluidImage} className="img" />
        </div>
      </div>
    </div>
  )
}

export default logoCard
