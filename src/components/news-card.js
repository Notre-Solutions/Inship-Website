import React from "react"
import Img from "gatsby-image"

const NewsCard = ({article }) => {
  const { date, title, url, description, thumbnail } = article
  console.log(title);
  return (
    <div class="card">
      <div className="img">
        <Img fluid={thumbnail.childImageSharp.fluid} />
      </div>
      <div class="card__content">
        <div class="text-component">
          <h4>{title}</h4>
          <p class="text-sm color-contrast-medium">{description}</p>
        </div>
        <small>{date}</small>
        <div class="margin-top-sm">
          <a class="btn " href={url} target="_blank">
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
