import React, { Component } from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
              <AnchorLink
                href={`#${item.link}`}
                offset={() => 100}
                className="icon tooltip "
              >
                <span className={`fa fa-${item.icon}`}></span>
                <AnchorLink
                  href={`#${item.link}`}
                  offset={() => 100}
                  className="tooltiptext "
                >
                  {item.name}
                </AnchorLink>
              </AnchorLink>
            )
          })}
        </div>
      </>
    )
  }
}
