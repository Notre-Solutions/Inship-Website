import React, { Component } from "react"
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
import Markdown from "./markdown"

export default class ProblemSection extends React.Component {
  constructor(props) {
    super(props)
  }

  section2(params) {
    let array = []
    params.forEach((element, i) => {
      if (i % 2) {
        array.push(
          <div class="problem-card-2">
            <div class="meta">
              <div class={`fa fa-${element.icon} icon`}></div>
              <div class="details">
                <div className="img-writing">{element.titleOverlayIcon}</div>
              </div>
            </div>
            <div class="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        )
      } else {
        array.push(
          <div class="problem-card-2 alt">
            <div class="meta">
              <div class={`fa fa-${element.icon} icon`}></div>
              <div class="details">
                <div className="img-writing">{element.titleOverlayIcon}</div>
              </div>
            </div>
            <div class="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        )
      }
    })
    return array
  }

  section(params) {
    let array = []
    params.forEach((element, i) => {
      if (i % 2) {
        array.push(
          <div class="problem-card">
            <div class="meta">
              <div class={element.photo}></div>
              <div class="details">
                <div className="img-writing">{element.title}</div>
              </div>
            </div>
            <div class="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        )
      } else {
        array.push(
          <div class="problem-card alt">
            <div class="meta">
              <div class={element.photo}></div>
              <div class="details">
                <div className="img-writing">{element.title}</div>
              </div>
            </div>
            <div class="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        )
      }
    })
    return array
  }

  render() {
    console.log(this.props)
    if (this.props.show) {
      return <>{this.section(this.props.array)}</>
    } else {
      return <>{this.section2(this.props.array)}</>
    }
  }
}
