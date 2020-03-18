import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Markdown from "../components/markdown"
import Img from "gatsby-image"

function showSectionA(show, title, body, id, className) {
  if (show) {
    console.log(title)
    return (
      <section id={id} className={className}>
        <h2 className="section-a-heading">{title}</h2>
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
      </section>
    )
  }
}

const Product = ({ data }) => {
  const {
    title,
    description,
    featuredimage,
    alias
  } = data.markdownRemark.frontmatter
  return (
    <div>
      <Nav current={"CAPS"}></Nav>

      <header className="product-header">
        <div className="header-text-box">
          <h1 className="heading">
            <span className="main-header">
              Complete Accounts Payable Solutions
            </span>
            <span className="sub-header">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </span>
          </h1>
          <a href="" className="btn">
            Ask for A Demo
          </a>
          <a href="" className="btn">
            Watch a video
          </a>
        </div>
      </header>
      <div className="product-main">
        <div className="product-main-about">
          <div className="product-main-about-title">About</div>
          <div className="product-main-about-item">
            <div className="product-main-about-item">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </div>
            <div className="product-main-about-item">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </div>
            <div className="product-main-about-item">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </div>
          </div>
        </div>
        <div className="product-main-features">
          <div className="product-main-features-title">Features</div>
          <div className="cards">
            <div className="card">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </div>
            <div className="card">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </div>
            <div className="card">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </div>
            <div className="card">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
              molestiae perspiciatis cupiditate expedita temporibus neque modi
              velit nesciunt assumenda.
            </div>
          </div>
        </div>
        <div className="product-main-video">
          <div className="product-main-video-title">Video</div>
          <div className="product-main-video-container"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Product

export const pageQuery = graphql`
  query NewsArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        alias
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
