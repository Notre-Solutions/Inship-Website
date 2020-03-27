import React from "react"
import "../css/main.css"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ content, current, style }) => {
  return (
    <>
      <Nav current={current} style={style}></Nav>
      {content}
      <Footer></Footer>
    </>
  )
}

export default Layout
