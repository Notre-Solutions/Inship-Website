import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Markdown from "../components/markdown"
import ProductCard from "../components/productCard"
import Img from "gatsby-image"
import { graphql } from "gatsby"

function showSectionA(show, title, body, id, className) {
  if (show) {
    return (
      <section id={id} className={className}>
        <h2 className="section-a-heading">{title}</h2>
        <div className="text-box">
          <Markdown markdown={body} />
        </div>
        <a href="#" className="btn">
          Play our video
        </a>
      </section>
    )
  }
}

function showSectionB(show, title, body) {
  if (show) {
    return (
      <section className="section-b">
        <h2 className="section-b-heading">{title}</h2>
        <div className="text-box">
          <Markdown markdown={body} />
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
    sectionC,
    sectionD,
  } = data.markdownRemark.frontmatter.landingPage
  console.log(subtitle);
  const edges = data.allMarkdownRemark.edges

  return (
    <div>
      <Nav current={"Home"}></Nav>
      <header className="header">
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
            What We Do
          </a>
        </div>
      </header>
      <div className="main-page container">
        {showSectionA(
          sectionA.show,
          sectionA.title,
          sectionA.body,
          "what-we-do",
          "section-a"
        )}
        {showSectionB(sectionB.show, sectionB.title, sectionB.body)}
        <section className="section-c">
          <h2 className="section-c-heading">Products</h2>
          {displayProducts(edges)}
        </section>
        {/* {showSectionD(sectionD.show, sectionD.title)} */}
        <div className="section-d">
          <div className="section-d-title">The Process</div>
          <Img
            fluid={data.images.edges[0].node.childImageSharp.fluid}
            className="prosses-img"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            repudiandae eius quibusdam neque odit deserunt delectus, doloribus
            maxime recusandae, ad asperiores. Officia temporibus laborum
            voluptates sequi laudantium doloremque ratione vero nobis omnis
            corrupti. Nihil laboriosam est, iure excepturi nam omnis maiores
            velit? Id non molestias ad obcaecati fugiat ut, mollitia quasi
            distinctio inventore soluta aspernatur quis delectus iusto rem
            laborum, quidem facilis ipsa reiciendis! Ea quidem, placeat minima
            iure dolore incidunt nihil, voluptas cum pariatur facere harum
            obcaecati doloremque velit tempore corrupti eligendi numquam nam
            vitae! Commodi praesentium neque tempore, odio officia illo culpa in
            dolores reprehenderit quasi porro totam dolorem dolor magnam
          </p>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>

      {/* <footer>This is the footer woo</footer> */}
    </div>
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
          sectionA {
            body
            title
            show
          }
          sectionB {
            title
            show
            body
          }
          sectionC {
            show
          }
          sectionD {
            title
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
