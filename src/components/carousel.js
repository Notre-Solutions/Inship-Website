import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"
import PropTypes from "prop-types"
import React, { Component } from "react"

function Testimonials(testimonal) {
  const { stars, title, description, name } = testimonal
  let array = []
  for (let i = 0; i < stars; i++) {
    array.push(<span className="fa fa-star"></span>)
  }
  return (
    <div className="card" style={{ color: "black" }}>
      <i className="icon fa fa-quote-right" style={{ color: "#914E75" }}></i>
      <i className="stars" style={{ color: "#EA845B" }}>
        {array}
      </i>
      <div className="title">{title}</div>
      <div className="textbox">{description}</div>
      <div className="line"></div>
      <div className="sing-off ">
        <i className="fa fa-quote-left quote-left "></i>
        <span style={{ color: "#914E75" }}>{name} - Recycle Compnay</span>
        <i className="fa fa-quote-right quote-right"></i>
      </div>
    </div>
  )
}

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max))
// }

function TestimonalsThree(a) {
  var array = []
  a.forEach((testimonal, i) => {
    if (a[i + 2]) {
      for (let j = 0; j < 3; j++) {
        a[i + j].marked = true
      }
      array.push(
        <div className="cards">
          {Testimonials(testimonal)}
          {Testimonials(a[i + 1])}
          {Testimonials(a[i + 2])}
        </div>
      )
    } else if (a[i + 1] && a[i + 1].marked !== true) {
      for (let j = 0; j < 2; j++) {
        a[i + j].marked = true
      }
      array.push(
        <div className="cards">
          {Testimonials(testimonal)}
          {Testimonials(a[i + 1])}
        </div>
      )
    } else if (a[i].marked !== true) {
      array.push(<div className="cards">{Testimonials(testimonal)}</div>)
    }
  })
  console.log(array)
  return array
}

export default class Carousels extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: null,
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    let update_width = window.innerWidth - 100
    this.setState({ width: update_width })
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  render() {
    if (this.state.width < 937) {
      return (
        <Carousel
          autoPlay
          transitionTime={3000}
          showThumbs={false}
          interval={9000}
          infiniteLoop
          showStatus={false}
          useKeyboardArrows
        >
          {this.props.testimonials.map(test => {
            return <div className="cards single">{Testimonials(test)}</div>
          })}
        </Carousel>
      )
    } else {
      return (
        <Carousel
          autoPlay
          transitionTime={3000}
          showThumbs={false}
          interval={9000}
          infiniteLoop
          showStatus={false}
          useKeyboardArrows
        >
          {TestimonalsThree(this.props.testimonials)}
        </Carousel>
      )
    }
  }
}

Carousels.propTypes = {
  children: PropTypes.node.isRequired,
}
