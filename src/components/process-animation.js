import * as React from "react"
import { Component } from "react"
import { motion } from "framer-motion"
import "@fortawesome/fontawesome-free/css/all.css"

function animate(x, y, opacity, scale, delay, repeatDelay, duration) {
  const motion = {
    hidden: { x: x[0], y: y[0], opacity: opacity[0], scale: scale[0] },
    visible: {
      x: x[1],
      y: y[1],
      opacity: opacity[1],
      scale: scale[1],
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: repeatDelay,
        duration: duration,
      },
    },
  }
  return motion
}

const animation = (style, variant, icon, title) => {
  if (title) {
    return (
      <motion.ul
        className={`${style}`}
        variants={variant}
        initial="hidden"
        animate="visible"
      >
        <div className="content">
          <i class={`${icon}`}></i>
          <h3>{title}</h3>
        </div>
      </motion.ul>
    )
  } else {
    return (
      <motion.ul
        className={`${style}`}
        variants={variant}
        initial="hidden"
        animate="visible"
      >
        <div className="content">
          <i class={`${icon}`}></i>
        </div>
      </motion.ul>
    )
  }
}

function main(lr, rl, ud, lrq) {
  const container = "container-animation container-animation-"
  const icon = "icon icon-"
  const icons = [
    "fas fa-file-invoice",
    "fas fa-print",
    "fas fa-envelope-open-text",
    "fas fa-sort-amount-down",
    "fas fa-compress-arrows-alt",
    "fas fa-thumbs-up",
    "fas fa-laptop",
    "fas fa-thumbs-up",
    "fas fa-file-alt",
    "fas fa-balance-scale",
    "fas fa-file-invoice",
    "fas fa-thumbs-up",
    "fas fa-thumbs-up",
    "fas fa-cloud-upload-alt",
  ]
  const titles = [
    "Generate Invoice",
    "Print",
    "Open Post",
    "Sort",
    "Match",
    "Approval",
    "Data Entry",
    "System Approval",
    "File",
    "Reconcile",
    "General Invoice",
    "Approval",
    "System Approval",
    "Upload",
  ]
  const iconStages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const leftRightStages = [0, 1, 2, 3]
  const rightLeftStages = [5, 6, 7, 8]
  const fastIconStages = [10, 11, 12, 13]
  const fastLeftRightStages = [9, 10, 11]
  const delays = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  const quickDelays = [1, 2, 3, 4]

  return (
    <div className="process-animation">
      <div className="manual">
        <h2>Manual Process</h2>
      </div>
      {iconStages.map(stage => {
        return animation(
          `${icon}${stage}`,
          animate([1, 1], [1, 1], [1, 1], [0.75, 1], delays[stage], 20, 2),
          icons[stage],
          titles[stage]
        )
      })}
      {leftRightStages.map(stage => {
        return animation(
          `${container}${stage}`,
          animate([0, lr], [0, 0], [0, 1], [1, 1], delays[stage], 20, 2),
          "fas fa-user"
        )
      })}
      {animation(
        `${container}4`,
        animate([0, 0], [0, ud], [0, 1], [1, 1], delays[4], 20, 2),
        "fas fa-user"
      )}
      {rightLeftStages.map(stage => {
        return animation(
          `${container}${stage}`,
          animate([0, rl], [0, 0], [1, 1], [1, 1], delays[stage], 20, 2),
          "fas fa-user"
        )
      })}
      <div className="automated">
        <h2>Automated Process</h2>
      </div>
      {fastIconStages.map(stage => {
        return animation(
          `${icon}${stage}`,
          animate(
            [0, 0],
            [0, 0],
            [1, 1],
            [0.75, 1],
            quickDelays[stage - 10],
            4,
            1
          ),
          icons[stage],
          titles[stage]
        )
      })}
      {fastLeftRightStages.map(stage => {
        return animation(
          `${container}${stage}`,
          animate(
            [0, lrq],
            [0, 0],
            [1, 1],
            [1, 1],
            quickDelays[stage - 9],
            4,
            1
          ),
          "fas fa-user"
        )
      })}
      <div className="keys">
        <i class={"fas fa-user green"}></i>
        <small>{"Automated"}</small>
        <p> </p>
        <i class={"fas fa-user orange"}></i>
        <small>{"Manual"}</small>
      </div>
    </div>
  )
}
function main2() {
  const container = "container-animation container-animation-"
  const icon = "icon icon-"
  const icons = [
    "fas fa-file-invoice",
    "fas fa-print",
    "fas fa-envelope-open-text",
    "fas fa-sort-amount-down",
    "fas fa-compress-arrows-alt",
    "fas fa-thumbs-up",
    "fas fa-laptop",
    "fas fa-thumbs-up",
    "fas fa-file-alt",
    "fas fa-balance-scale",
    "fas fa-file-invoice",
    "fas fa-thumbs-up",
    "fas fa-thumbs-up",
    "fas fa-cloud-upload-alt",
  ]
  const titles = [
    "Generate Invoice",
    "Print",
    "Open Post",
    "Sort",
    "Match",
    "Approval",
    "Data Entry",
    "System Approval",
    "File",
    "Reconcile",
    "General Invoice",
    "Approval",
    "System Approval",
    "Upload",
  ]
  const iconStages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const transitionStages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <div className="process-animation">
      <div className="manual">
        <h2>Manual Process</h2>
      </div>
      {iconStages.map(stage => {
        return (
          <div className={`${icon}${stage}`}>
            <div className="content content-mini">
              <i class={`${icons[stage]}`}></i>
              <h3>{titles[stage]}</h3>
            </div>
          </div>
        )
      })}
      <div className="automated">
        <h2>Automated Process</h2>
      </div>
      {transitionStages.map(stage => {
        return <div className={`pipe pipe-${stage}`} />
      })}
      <div className="keys">
        <i class={"fas fa-user green"}></i>
        <small>{"Automated"}</small>
        <p> </p>
        <i class={"fas fa-user orange"}></i>
        <small>{"Manual"}</small>
      </div>
    </div>
  )
}
class Example extends Component {
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
    const leftRightDistance = ["25rem", 0]
    const upDownDistance = ["18rem", 0]
    const rightLeftDistance = ["-25rem", 0]
    const leftRightQuickDistance = ["28rem", 0]

    if (this.state.width + 100 > 1270) {
      return main(
        leftRightDistance[0],
        rightLeftDistance[0],
        upDownDistance[0],
        leftRightQuickDistance[0]
      )
    } else {
      return main2()
    }
    //  else {
    //   return main(
    //     leftRightDistance[1],
    //     rightLeftDistance[1],
    //     upDownDistance[1],
    //     leftRightQuickDistance[1]
    //   )
    // }
  }
}

export default Example
