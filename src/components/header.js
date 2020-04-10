import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from 'gatsby-image-background-slider'

const Layout = ({ children, images }) => (
  <>
    <main>{children}</main>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={4} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={2} // transition duration between images
      duration={6} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={images} 
      className='slide'
      // pass down standard element props
      
    > 
      {/* Captions in sync with background images*/}
      {/* <div>Woof</div>
      <div>Meow</div> */}
    </BackgroundSlider>
  </>
)  

export default Layout