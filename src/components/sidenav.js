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
        <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </>
    )
  }
}
