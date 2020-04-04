import React from "react"
import "../css/main.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Markdown from "../components/markdown"

function getComponentStyle(style) {
  if (style === "color-1") {
    return "#a67440"
  } else if (style === "color-2") {
    return "rgb(250,133,29)"
  } else if (style === "color-3") {
    return "#252941"
  } else {
    return "black"
  }
}

function getTimelineElement(item, style) {
  var contentStyle = {
    color: "#fff",
    fontSize: "2.5rem",
    lineHeight: "120%",
  }
  const background = getComponentStyle(style)
  contentStyle["background"] = background

  var arrowStyle = {
    borderRight: `7px solid  ${background}`,
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={contentStyle}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <div className="description">
        <Markdown markdown={item.description} />
      </div>
    </VerticalTimelineElement>
  )
}

const TimeLine = ({ timeline, style }) => {
  return (
    <VerticalTimeline>
      {timeline.map((item, i) => {
        if (i % 2) {
          return getTimelineElement(item, "black")
        } else {
          return getTimelineElement(item, style)
        }
      })}
    </VerticalTimeline>
  )
}

export default TimeLine
