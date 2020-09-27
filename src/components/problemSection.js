import React, { Component } from "react"
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
import Markdown from "./markdown"
import classnames from "classnames"

export default class ProblemSection extends React.Component {
  constructor(props) {
    super(props)
  }

  renderLink(link) {
    if (link !== "#") {
      return (
        <p className="read-more">
          <a href={link}>Read More</a>
        </p>
      )
    }
  }

  section2(params) {
    let array = []

    params.forEach((element, i) => {
      if (i % 2) {
        array.push(
          <div className="problem-card-2">
            <div className="meta">
              <div className={`fa fa-${element.icon} icon`}></div>
              <div className="details">
                <div className="img-writing"></div>
              </div>
            </div>
            <div className="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p
                className={classnames("read-more", {
                  hidden: !element.showReadMore,
                })}
              >
                <a href={element.readMore}>Read More</a>
              </p>
            </div>
          </div>
        )
      } else {
        array.push(
          <div className="problem-card-2 alt">
            <div className="meta">
              <div className={`fa fa-${element.icon} icon`}></div>
              <div className="details">
                <div className="img-writing"></div>
              </div>
            </div>
            <div className="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p
                className={classnames("read-more", {
                  hidden: !element.showReadMore,
                })}
              >
                <a href={element.readMore}>Read More</a>
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
          <div className="problem-card">
            <div className="meta">
              <div className={element.photo}></div>
              <div className="details">
                <div className="img-writing">{element.title}</div>
              </div>
            </div>
            <div className="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p
                className={classnames("read-more", {
                  hidden: !element.showReadMore,
                })}
              >
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        )
      } else {
        array.push(
          <div className="problem-card alt">
            <div className="meta">
              <div className={element.photo}></div>
              <div className="details">
                <div className="img-writing">{element.title}</div>
              </div>
            </div>
            <div className="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p
                className={classnames("read-more", {
                  hidden: !element.showReadMore,
                })}
              >
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
    if (this.props.show) {
      return <>{this.section(this.props.array)}</>
    } else {
      return <>{this.section2(this.props.array)}</>
    }
  }
}
