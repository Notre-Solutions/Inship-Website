import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "font-awesome/css/font-awesome.min.css"
import "../css/main.css"
import Nav from "./nav"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ content }) => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="container">{content}</div>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
