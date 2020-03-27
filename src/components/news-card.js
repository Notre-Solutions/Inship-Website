import React from "react"
import Img from 'gatsby-image'

const NewsCard = () => {
  return (
    <div class="card">
      <figure class="card__img">
        <img
          src="../img/boats.jpg"
          alt="Card preview img"
        />
      </figure>

      <div class="card__content">
        <div class="text-component">
          <h4>Title of the Card</h4>
          <p class="text-sm color-contrast-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            suscipit.
          </p>
        </div>

        <div class="margin-top-sm">
          <a class="btn btn--subtle btn--sm" href="#0">
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
