import * as React from "react"
import { motion } from "framer-motion"
import "@fortawesome/fontawesome-free/css/all.css"

function getLeftright(delay, childrenDelay){
  const leftRightContainer = {
    hidden: { x: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      x: "120%",
      transition: {
        loop: Infinity,
        delay: delay,
        repeatDelay: 8,
        staggerDirection: 1,
        duration: 2,
      },
    },
  }
return leftRightContainer
}


const fadeIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
}

const upDownContainer = {
  hidden: { x: 0, y: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    y: "180%",
    transition: {
      loop: Infinity,
      delay: 0.5,
      duration: 4,
    },
  },
}

const rightLeftContainer = {
  hidden: { x: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    x: "-120%",
    transition: {
      loop: Infinity,
      delay: 0.5,
      duration: 4,
    },
  },
}

const leftRightQuickContainer = {
  hidden: { x: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    x: "130%",
    transition: {
      loop: Infinity,
      delay: 0.5,
      duration: 1.5,
    },
  },
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
  const delays = [0, 4, 6, 8]

  return (
    <div className="process-animation">
      <div className="manual">
        <h2>Manual Process</h2>
      </div>
      {iconStages.map(stage => {
        return animation(`${icon}${stage}`, fadeIn, icons[stage], titles[stage])
      })}
      {leftRightStages.map(stage => {
        return animation(
          `${container}${stage}`,
          getLeftright(delays[stage],8),
          "fas fa-user"
        )
      })}
      {animation(`${container}4`, upDownContainer, "fas fa-user")}
      {rightLeftStages.map(stage => {
        return animation(
          `${container}${stage}`,
          rightLeftContainer,
          "fas fa-user"
        )
      })}
      <div className="automated">
        <h2>Automated Process</h2>
      </div>
      {fastIconStages.map(stage => {
        return animation(`${icon}${stage}`, fadeIn, icons[stage], titles[stage])
      })}
      {fastLeftRightStages.map(stage => {
        return animation(
          `${container}${stage}`,
          leftRightQuickContainer,
          "fas fa-user"
        )
      })}
      <div className="keys">
        <i class={"fas fa-user green"}></i>
        <small>
          {"Automated"}
        </small>
        <p> </p>
        <i class={"fas fa-user orange"}></i>
        <small>{"Manual"}</small>
      </div>
    </div>
  )
}

export default Example
