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
      CAPS = "menu-nav__item",
      T2P = "menu-nav__item",
      Pricing = "menu-nav__item"

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
      case "T2P":
        T2P = active
        break
      case "Contact":
        contact = active
        break
      case "News":
        news = active
        break
      case "Pricing":     
        Pricing = active
        break 
    }

    return (
      <div>
        <div className="navigation">
          <div className="navigation__button" onClick={this.toggleClass}>
            <span
              className={classnames("navigation__icon", {
                "open-button": !this.state.active,
              })}
            >
              &nbsp;
            </span>
          </div>
          <div
            className={classnames("navigation__background", {
              "open-background": !this.state.active,
            })}
          >
            &nbsp;
          </div>
          <nav
            className={classnames("navigation__nav", {
              "open-nav": !this.state.active,
            })}
          >
            <ul className="navigation__list">
              <li className="">
                <Link to="/" className="navigation__link">
                  Home
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/products/APC" className="navigation__link">
                  APC
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/products/CAPS" className="navigation__link">
                  CAPS
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/products/T2P" className="navigation__link">
                  T2P
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/pricing" className="navigation__link">
                  Pricing
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/contact" className="navigation__link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="nav">
          <ul
            className={classnames("menu-nav", {
              "menu-nav-scrolling": !this.state.visible,
            })}
          >
            <li className={home}>
              <Link to="/" className="menu-nav__link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className={APC}>
              <Link to="/products/APC" className="menu-nav__link ">
                {" "}
                APC{" "}
              </Link>
            </li>

            <li className={CAPS}>
              <Link to="products/CAPS" className="menu-nav__link ">
                {" "}
                CAPS{" "}
              </Link>
            </li>
            <li className={T2P}>
              <Link to="products/T2P" className="menu-nav__link ">
                {" "}
                T2P{" "}
              </Link>
            </li>
            <li className={Pricing}>
              <Link to="/pricing" className="menu-nav__link ">
                {" "}
                Pricing{" "}
              </Link>
            </li>
            <li className={contact}>
              <Link to="/contact" className="menu-nav__link ">
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
