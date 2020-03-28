import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"
import PropTypes from "prop-types"

const Carousels = ({ children }) => (
  <Carousel
    autoPlay
    transitionTime={3000}
    showThumbs={false}
    interval={9000}
    infiniteLoop
    showStatus={false}
    useKeyboardArrows
    className="presentation-mode"
  >
    {children}
  </Carousel>
)

Carousels.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousels
