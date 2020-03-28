import React from "react"
import "../css/main.css"
import PropTypes from "prop-types"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children, current, style }) => {
  return (
    <>
      <Nav current={current} style={style}></Nav>
      {children}
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
