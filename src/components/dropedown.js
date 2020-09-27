import React, { Component } from "react"
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"

export default class DD extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <li className="dropdown menu-nav__item">
          <a href="javascript:void(0)" className="dropbtn">
            {this.props.name} <i className="fa fa-angle-down"></i>
          </a>
          <div
            className={`dropdown-content dropdown-content-${this.props.bgStyle}`}
          >
            <Link to="/products/APC">APC</Link>
            <Link to="/products/T2P">T2P</Link>
            <Link to="/products/CAPS">CAPS</Link>
          </div>
        </li>
      </>
    )
  }
}
