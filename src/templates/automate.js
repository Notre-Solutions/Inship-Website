import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import NewsCard from "../components/news-card"

const content = (
  <>
    <div className="automate-page">
      <section className="header">
        <div className="header-text-box">
          <h1 className="heading">
            <span className="main-header">
              Why<span className="bold"> Automate</span>
            </span>
          </h1>
          {/* Uncomment for animation ;)  */}
          {/* <div class="animation-wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div> */}
        </div>
      </section>

      <section className="section-a">
        <div className="grid-item">
          <NewsCard />
        </div>
        <div className="grid-item">
          <NewsCard />
        </div>
        <div className="grid-item">
          <NewsCard />
        </div>
        <div className="grid-item">
          <NewsCard />
        </div>
        <div className="grid-item">
          <NewsCard />
        </div>
        <div className="grid-item">
          <NewsCard />
        </div>
      </section>
    </div>
  </>
)

const Automate = () => {
  return (
    <>
      <Layout current={"Why Automate"} content={content}></Layout>
    </>
  )
}

export default Automate
