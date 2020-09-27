import React from "react"
import "../css/main.min.css"
import "../css/fonts.css"
import PropTypes from "prop-types"
import Nav from "./nav"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import DemoButton from "./book-demo-button"

const Layout = ({ children, current, style }) => {
  return (
    <>
      <Helmet></Helmet>
      <Nav current={current} style={style}></Nav>
      {children}
      <DemoButton></DemoButton>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
