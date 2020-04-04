import * as React from "react"
import { motion } from "framer-motion"
import "@fortawesome/fontawesome-free/css/all.css"

function getLeftright(delay) {
  const leftRightContainer = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      x: "120%",
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: 20,
        duration: 2,
      },
    },
  }
  return leftRightContainer
}

function getFadeIn(delay) {
  const fadeIn = {
    hidden: { opacity: 1, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: 20,
        duration: 2,
      },
    },
  }
  return fadeIn
}


function getUpDownContainer(delay) {
  const upDownContainer = {
    hidden: { x: 0, y: 0, opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      y: "180%",
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: 20,
        duration: 2,
      },
    },
  }
  return upDownContainer
}

function getRightLeft(delay) {
  const rightLeftContainer = {
    hidden: { x: 0, opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      x: "-120%",
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: 20,
        duration: 2,
      },
    },
  }
  return rightLeftContainer
}

function getQuickFadeIn(delay) {
  const fadeIn = {
    hidden: { opacity: 1, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: 4,
        duration: 1,
      },
    },
  }
  return fadeIn
}
function leftRightQuick (delay){
  const leftRightQuickContainer = {
    hidden: { x: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      x: "130%",
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: 4,
        duration: 1,
      },
    },
  }
  return leftRightQuickContainer
  
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

const Example = () => {
  const container = "container container-"
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
  const quickDelays = [1,2,3,4]

  return (
    <div className="process-animation">
      <div className="manual">
        <h2>Manual Process</h2>
      </div>
      {iconStages.map(stage => {
        return animation(
          `${icon}${stage}`,
          getFadeIn(delays[stage]),
          icons[stage],
          titles[stage]
        )
      })}
      {leftRightStages.map(stage => {
        return animation(
          `${container}${stage}`,
          getLeftright(delays[stage], 8),
          "fas fa-user"
        )
      })}
      {animation(`${container}4`, getUpDownContainer(delays[4]), "fas fa-user")}
      {rightLeftStages.map(stage => {
        return animation(
          `${container}${stage}`,
          getRightLeft(delays[stage]),
          "fas fa-user"
        )
      })}
      <div className="automated">
        <h2>Automated Process</h2>
      </div>
      {fastIconStages.map(stage => {
        return animation(
          `${icon}${stage}`,
          getQuickFadeIn(quickDelays[stage-10]),
          icons[stage],
          titles[stage]
        )
      })}
      {fastLeftRightStages.map(stage => {
        return animation(
          `${container}${stage}`,
          leftRightQuick(quickDelays[stage-9]),
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

export default Example
