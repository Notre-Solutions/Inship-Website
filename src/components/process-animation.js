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

var autoCounter = 0
var manualCounter = 0

const animation = (style, variant, icon, title, callback) => {
  if (callback && title) {
    return (
      <motion.ul
        className={`${style}`}
        variants={variant}
        initial="hidden"
        animate="visible"
        onUpdate={callback}
      >
        <div className="content">
          <i class={`${icon}`}></i>
          <h3>{title}</h3>
        </div>
      </motion.ul>
    )
  } else if (title) {
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

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      autoCounter: 0,
      manualCounter: 0,
    }
  }

  addAutoCount(latest) {
    if (latest.scale == 1) {
      var increment = this.state.autoCounter + 1
      this.setState({ autoCounter: increment })
    }
  }
  addManualCount(latest) {
    if (latest.scale == 1) {
      var increment = this.state.manualCounter + 1
      this.setState({ manualCounter: increment })
      console.log(this.state.manualCounter)
    }
  }

  render() {
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
    const iconStages = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const leftRightStages = [0, 1, 2, 3]
    const rightLeftStages = [5, 6, 8]
    const fastIconStages = [10, 11, 12]
    const delays = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const quickDelays = [1, 2, 4, 5]

    return (
      <div className="process-animation">
        <div className="content counter counter-manual">
          <h2>{this.state.manualCounter}</h2>
          <h3>Manual Invoices</h3>
        </div>
        <div className="content counter counter-auto">
          <h2>{this.state.autoCounter}</h2>
          <h3>Auto Invoices</h3>
        </div>
        <h2 className="manual-counter">{this.state.manualCounter}</h2>
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
        <motion.ul
          className={`${icon}9`}
          variants={animate(
            [1, 1],
            [1, 1],
            [1, 1],
            [0.75, 1],
            delays[9],
            20,
            2
          )}
          initial="hidden"
          animate="visible"
          onUpdate={this.addManualCount.bind(this)}
        >
          <div className="content">
            <i class={`${icons[9]}`}></i>
            <h3>{titles[9]}</h3>
          </div>
        </motion.ul>
        {leftRightStages.map(stage => {
          return animation(
            `${container}${stage}`,
            animate(
              [0, this.props.lr],
              [0, 0],
              [0, 1],
              [1, 1],
              delays[stage],
              20,
              2
            ),
            "fas fa-file-invoice"
          )
        })}
        {animation(
          `${container}7`,
          animate([0, this.props.rl], [0, 0], [0, 1], [1, 1], delays[7], 21, 1),
          "fas fa-file-invoice"
        )}
        {animation(
          `${container}4`,
          animate([0, 0], [0, this.props.ud], [0, 1], [1, 1], delays[4], 20, 2),
          "fas fa-file-invoice"
        )}
        {rightLeftStages.map(stage => {
          return animation(
            `${container}${stage}`,
            animate(
              [0, this.props.rl],
              [0, 0],
              [1, 1],
              [1, 1],
              delays[stage],
              20,
              2
            ),
            "fas fa-file-invoice"
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
              5,
              1
            ),
            icons[stage],
            titles[stage]
          )
        })}
        <motion.ul
          className={`${icon}13`}
          variants={animate(
            [0, 0],
            [0, 0],
            [1, 1],
            [0.75, 1],
            quickDelays[3],
            5,
            1
          )}
          initial="hidden"
          animate="visible"
          onUpdate={this.addAutoCount.bind(this)}
        >
          <div className="content">
            <i class={`${icons[13]}`}></i>
            <h3>{titles[13]}</h3>
          </div>
        </motion.ul>
        {animation(
          `${container}9`,
          animate(
            [0, this.props.lrq],
            [0, 0],
            [1, 1],
            [1, 1],
            quickDelays[0],
            5,
            1
          ),
          "fas fa-file-invoice"
        )}
        {animation(
          `${container}10`,
          animate(
            [0, this.props.lrq],
            [0, 0],
            [1, 1],
            [1, 1],
            quickDelays[1],
            4,
            2
          ),
          "fas fa-file-invoice"
        )}
        {animation(
          `${container}11`,
          animate(
            [0, this.props.lrq],
            [0, 0],
            [1, 1],
            [1, 1],
            quickDelays[2],
            5,
            1
          ),
          "fas fa-file-invoice"
        )}
        <div className="keys">
          <i class={"fas fa-file-invoice green"}></i>
          <small>{"Automated"}</small>
          <p> </p>
          <i class={"fas fa-file-invoice orange"}></i>
          <small>{"Manual"}</small>
        </div>
      </div>
    )
  }
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
        <i class={"fas fa-file-invoice green"}></i>
        <small>{"Automated"}</small>
        <p> </p>
        <i class={"fas fa-file-invoice orange"}></i>
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
    const leftRightDistance = "25rem"
    const upDownDistance = "18rem"
    const rightLeftDistance = "-25rem"
    const leftRightQuickDistance = "28rem"

    if (this.state.width + 100 > 1100) {
      return (
        <Main
          lr={leftRightDistance}
          rl={rightLeftDistance}
          ud={upDownDistance}
          lrq={leftRightQuickDistance}
        />
      )
    } else {
      return main2()
    }
  }
}

export default Example
