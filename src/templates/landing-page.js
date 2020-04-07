import React from "react"
import "../css/main.css"
import Markdown from "../components/markdown"
import ProductCard from "../components/productCard"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactModal from "../components/modal"
import Player from "../components/player"
import Animation from "../components/process-animation"
import ProblemSection from "../components/problemSection"
import { Link } from "gatsby"

function showSectionE(show, title, cards, slogan) {
  if (show) {
    return (
      <>
        <div className="section-e">
          <div className="title">{title}</div>
          <div className="cards">
            {cards.map(element => {
              return (
                <>
                  <div className="card">
                    <i className={`fa fa-${element.icon} card-icon`}></i>
                    <div className="card-title">{element.title}</div>
                    <div className="card-text">{element.text}</div>
                  </div>
                </>
              )
            })}
          </div>
          <div className="slogan">{slogan}</div>
        </div>
      </>
    )
  }
}

function showSectionA(show, title, body, id, className, url) {
  if (show) {
    return (
      <section className={className}>
        <h2 className="section-a-heading">{title}</h2>
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
        <ReactModal
          content={<Player url={url}></Player>}
          buttonStyle="btn"
          buttonName="Play our video"
        ></ReactModal>
      </section>
    )
  }
}

function showSectionB(sectionB) {
  const { show, title, cards } = sectionB
  if (show) {
    return (
      <section className="section-b">
        <div className="section-b-1">
          <h2 className="section-b-heading">{title}</h2>
        </div>

        <div className="section-b-2">
          <div className="text-box">
            <h3>{cards[0].title}</h3>
            <Markdown markdown={cards[0].description} />
          </div>
          <div className="text-box">
            <h3>{cards[1].title}</h3>
            <Markdown markdown={cards[1].description} />
          </div>
        </div>
        <div className="bottom">
          <div className="text-box">
            <h3>{cards[2].title}</h3>
            <Markdown markdown={cards[2].description} />
          </div>
        </div>
      </section>
    )
  }
}

function displayProducts(edges) {
  const products = {}
  edges.map(edge => {
    const {
      title,
      description,
      id,
      featuredpost,
      style,
      featuredimage,
      alias,
    } = edge.node.frontmatter
    products[id] = {
      title: title,
      description: description,
      featuredpost: featuredpost,
      style: style,
      featuredimage: featuredimage,
      alias: alias,
    }
  })

  return (
    <div className="cards">
      <ProductCard
        title={products["1"].title}
        body={products["1"].description}
        style={products["1"].style}
        fluidImage={products["1"].featuredimage.childImageSharp.fluid}
        alias={products["1"].alias}
      />
      <ProductCard
        title={products["2"].title}
        body={products["2"].description}
        style={products["2"].style}
        fluidImage={products["2"].featuredimage.childImageSharp.fluid}
        alias={products["2"].alias}
      />
      <ProductCard
        title={products["3"].title}
        body={products["3"].description}
        style={products["3"].style}
        fluidImage={products["3"].featuredimage.childImageSharp.fluid}
        alias={products["3"].alias}
      />
    </div>
  )
}

const Landing = ({ data }) => {
  const {
    subtitle,
    sectionA,
    sectionB,
    sectionB_alt,
    sectionC,
    sectionD,
    sectionE,
  } = data.markdownRemark.frontmatter.landingPage
  const edges = data.allMarkdownRemark.edges
  console.log(data)

  return (
    <>
      <Layout current={"Home"}>
        <header className="header">
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <div className="header-text-box">
            <h1 className="heading">
              <span className="main-header">
                IN<span className="bold">SHIP</span> APS
              </span>
              <span className="sub-header">{subtitle.line1}</span>
              <span className="sub-header">{subtitle.line2}</span>
              <span className="sub-header">{subtitle.line3}</span>
            </h1>
            <a href="#what-we-do" className="btn btn-white bottom">
              {sectionA.title}
            </a>
          </div>
        </header>

        <div id="what-we-do" className="main-page container">
          {showSectionE(
            sectionE.show,
            sectionE.title,
            sectionE.cards,
            sectionE.slogon
          )}
          {showSectionA(
            sectionA.show,
            sectionA.title,
            sectionA.body,
            "what-we-do",
            "section-a",
            sectionA.url
          )}
          {showSectionB(sectionB)}

          <ProblemSection
            array={sectionB_alt.cards}
            show={sectionB_alt.show}
          ></ProblemSection>
          <div className="line-1"></div>
          <section className="section-c">
            <h2 className="section-c-heading">{sectionC.title}</h2>
            {displayProducts(edges)}
          </section>
          <div className="line"></div>
          <div className="section-d">
            <div className="section-d-title">{sectionD.title}</div>
            {/* <Img
              fluid={data.images.edges[0].node.childImageSharp.fluid}
              className="prosses-img"
            />  */}
            <div className="animation">
              <Animation />
            </div>

            <Link to="/automate">
              {" "}
              <div className="btn">Learn More</div>{" "}
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product" } } }
    ) {
      edges {
        node {
          frontmatter {
            alias
            id
            title
            description
            style
            featuredpost
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
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          subtitle {
            line1
            line2
            line3
          }
          sectionE {
            title
            show
            slogon
            cards {
              icon
              title
              text
            }
          }
          sectionA {
            url
            body
            title
            show
          }
          sectionB_alt {
            title
            show
            cards {
              title
              subtitle
              photo
              description
            }
          }
          sectionB {
            title
            show
            cards {
              title
              description
            }
          }
          sectionC {
            title
            show
          }
          sectionD {
            title
            description
            show
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { eq: "Process.jpg" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 10000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`
