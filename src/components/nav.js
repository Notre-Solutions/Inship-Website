import React, { Component } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import "../css/main.css"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
      prevScrollpos:
        typeof window !== `undefined` ? window.pageYOffset : undefined,
      visible: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos =
      typeof window !== `undefined` ? window.pageYOffset : undefined
    const visible =
      prevScrollpos !== currentScrollPos &&
      this.state.active &&
      currentScrollPos !== 0
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  render() {
    var active = "menu-nav__item active"
    var home = "menu-nav__item",
      APC = "menu-nav__item",
      news = "menu-nav__item",
      contact = "menu-nav__item",
      CAPS = "menu-nav__item"

    switch (this.props.current) {
      case "Home":
        home = active
        break
      case "Accounts Payable Combined":
        APC = active
        break
      case "CAPS":
        CAPS = active
        break
      case "Contact":
        contact = active
        break
      case "News":
        news = active
        break
    }
    console.log(this.state.prevScrollpos)
    console.log(this.state.active)
    console.log(this.state.visible)

    return (
      <div>
        <div className="menu-btn" onClick={this.toggleClass}>
          <span
            className={
              this.state.active ? "menu-btn__burger" : "menu-btn__burger open"
            }
          ></span>
        </div>
        <nav className={this.state.active ? "nav" : "nav open"}>
          <ul
            // className={this.state.active ? "menu-nav" : "menu-nav open"}
            className={classnames("menu-nav", {
              "menu-nav-scrolling": !this.state.visible,
              open: !this.state.active,
            })}
          >
            <li className={this.state.active ? home : home + " open"}>
              <Link
                to="/"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className={this.state.active ? APC : APC + " open"}>
              <Link
                to="/products/APC"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                APC{" "}
              </Link>
            </li>
            {/* <li className={this.state.active ? news : news + " open"}>
              <Link
                to="/news"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                News{" "}
              </Link>
            </li> */}
            <li className={this.state.active ? CAPS : CAPS + " open"}>
              <Link
                to="/CAPS"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                CAPS{" "}
              </Link>
            </li>
            <li className={this.state.active ? contact : contact + " open"}>
              <Link
                to="/contact"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
