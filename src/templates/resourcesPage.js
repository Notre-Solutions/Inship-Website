import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import ProblemSection from "../components/problemSection"
import Background from "../components/header"
import Img from "gatsby-image"
import Markdown from "../components/markdown"

const Resources = ({ data }) => {
  const {
    title,
    theTeam,
    titleBlurb,
    benefitsSection,
    cards,
    backgroundimage,
  } = data.markdownRemark.frontmatter.resourcesPage
  console.log(theTeam)
  return (
    <>
      <Layout current={"Resources"}>
        <div className="resources">
          <header className="resources-header">
            <Background images={[backgroundimage]}>
              <div className="resources-header-text-box">
                <h1 className="main-header">
                  <span className="">
                    Re<span className="bold">sources</span>
                  </span>
                  <span className="sub-header">{titleBlurb}</span>
                </h1>
              </div>
            </Background>
          </header>
          <section className="resources-body container">
            <ProblemSection array={cards}></ProblemSection>
            <section className="benefits-section">
              <h2>{benefitsSection.title}</h2>
              <div className="top-3-benefits">
                {benefitsSection.top3.map(item => {
                  return (
                    <>
                      <div className="benefits-container">
                        <div className="icon-container">
                          <div className={`fas fa-${item.icon}`}></div>
                        </div>
                        <div className="text-box-container">
                          <div className="text-box">{item.text}</div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className="features">
                {benefitsSection.features.map(item => {
                  return (
                    <div className="flex-container">
                      <div className="icon">
                        <div className={`fas fa-${item.icon}`}></div>
                      </div>

                      <div className="text-box-container">
                        <h3>{item.heading}</h3>
                        <Markdown className="text-box" markdown={item.text} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
            <section className="team-section">
              <h2>{theTeam.title}</h2>
              <h3>{theTeam.subTitle}</h3>
              <div className="ceo">
                <div className="container">
                  <Img
                    fluid={theTeam.ceo.img.childImageSharp.fluid}
                    className="image"
                  />
                  <div className="jobTitle">{theTeam.ceo.title}</div>
                  <div className="name">{theTeam.ceo.name}</div>
                  <div className="section">{theTeam.ceo.section}</div>
                </div>
              </div>
              <div className="cs">
                {theTeam.cSweet.map(cSweet => {
                  return (
                    <div className="container">
                      <Img
                        fluid={cSweet.img.childImageSharp.fluid}
                        className="image"
                      />
                      <div className="jobTitle">{cSweet.title}</div>
                      <div className="name">{cSweet.name}</div>
                      <div className="section">{cSweet.section}</div>
                    </div>
                  )
                })}
              </div>
              <div className="employees">
                {theTeam.employees.map(employee => {
                  return (
                    <div className="container">
                      <Img
                        fluid={employee.img.childImageSharp.fluid}
                        className="image"
                      />
                      <div className="jobTitle">{employee.title}</div>
                      <div className="name">{employee.name}</div>
                      <div className="section">{employee.section}</div>
                    </div>
                  )
                })}
              </div>
            </section>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Resources

export const pageQuery = graphql`
  query ResourcesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        resourcesPage {
          title
          backgroundimage
          titleBlurb
          cards {
            description
            icon
            showReadMore
            title
            readMore
            subtitle
            titleOverlayIcon
            description
          }
          theTeam {
            title
            subTitle
            ceo {
              img {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              name
              title
              section
            }
            cSweet {
              img {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              name
              title
              section
            }
            employees {
              img {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              name
              title
              section
            }
          }
          benefitsSection {
            title
            top3 {
              icon
              text
            }
            features {
              icon
              text
              heading
            }
          }
        }
      }
    }
  }
`
