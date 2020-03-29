import React, { Component } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import "../css/main.css"
import ReactModal from "../components/modal"
import MyForm from "../components/form"
import DD from "../components/dropedown"

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
    const active = "menu-nav__item active"
    const pages = [
      {
        link: "/",
        name: "Home",
        className: "menu-nav__item",
      },
      {
        link: "/automate",
        name: "Why Automate",
        className: "menu-nav__item",
      },
      {
        name: "Solutions",
      },
      {
        link: "/resources",
        name: "Resources",
        className: "menu-nav__item",
      },
      {
        name: "Pricing",
        className: "menu-nav__item",
      },
      {
        link: "/contact",
        name: "Contact",
        className: "menu-nav__item",
      },
      {
        link: "/",
        name: "INSHIP",
        className: "menu-nav__item nav-logo",
      },
    ]

    pages.map(page => {
      if (page.name === this.props.current) {
        page.className = active
      }
    })

    return (
      <div>
        <div className="burger-navigation">
          <div className="burger-navigation__button" onClick={this.toggleClass}>
            <span
              className={classnames("burger-navigation__icon", {
                "open-button": !this.state.active,
              })}
            >
              &nbsp;
            </span>
          </div>
          <div
            className={classnames(`burger-navigation__background`, `${this.props.style}`, {
              "open-background": !this.state.active,
            })}
          >
            &nbsp;
          </div>
          <nav
            className={classnames("burger-navigation__nav", {
              "open-nav": !this.state.active,
            })}
          >
            <ul className="burger-navigation__list">
              {pages.map(page => {
                if (page.name === "Pricing") {
                  return (
                    <li
                      className="burger-navigation__item"
                      onClick={this.toggleClass}
                    >
                      <ReactModal
                        content={
                          <MyForm
                            formTitle={"Contact Team for Pricing"}
                          ></MyForm>
                        }
                        buttonStyle="burger-navigation__link nav-pricing"
                        buttonName="Pricing"
                      ></ReactModal>
                    </li>
                  )
                } else {
                  return (
                    <li className="burger-navigation__item">
                      <Link to={page.link} className="burger-navigation__link">
                        {page.name}
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </nav>
        </div>
        <nav className="nav">
          <ul
            className={classnames(`menu-nav ${this.props.style}`, {
              "menu-nav-scrolling": !this.state.visible,
            })}
          >
            {pages.map(page => {
              if (page.name === "Pricing") {
                return (
                  <li className={page.className}>
                    <ReactModal
                      content={
                        <MyForm formTitle={"Contact Team for Pricing"}></MyForm>
                      }
                      buttonStyle="menu-nav__link nav-pricing"
                      buttonName="Pricing"
                    ></ReactModal>
                  </li>
                )
              } else if (page.name === "INSHIP") {
                return (
                  <li className={page.className}>
                    <Link to={page.link} className="menu-nav__link">
                      <span className="thin">IN</span>SHIP
                    </Link>
                  </li>
                )
              } else if (page.name === "Solutions") {
                return <DD bgStyle={this.props.style}></DD>
              } else {
                return (
                  <li className={page.className}>
                    <Link to={page.link} className="menu-nav__link">
                      {page.name}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </div>
    )
  }
}
