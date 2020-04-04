import React, { Component } from "react"
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"

export default class SideNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="side-nav">
          {this.props.list.map(item => {
            return (
              <div className="icon tooltip ">
                <span className={`fa fa-${item.icon}`}></span>
                <a href={`#${item.link}`} className="tooltiptext ">
                  {item.name}
                </a>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}
