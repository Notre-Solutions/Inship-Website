import React from "react"
import Img from "gatsby-image"

const NewsCard = ({ article }) => {
  const { date, title, url, thumbnail } = article
  return (
    <div className="card">
      <div className="img">
        <Img fluid={thumbnail.childImageSharp.fluid} />
      </div>
      <div className="card__content">
        <div className="text-component">
          <h4>{title}</h4>
        </div>
        <small>{date}</small>
        <div className="margin-top-sm">
          <a className="btn " href={url} target="_blank">
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
