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
    return "#252941"
  } else if (style === "color-3") {
    return "#576aa6"
  } else {
    return "rgb(33, 150, 243)"
  }
}

function getTimelineElement(item, style) {
  var contentStyle = {
    color: "#fff",
    fontSize: "2.5rem",
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
      <Markdown markdown={item.description} />
    </VerticalTimelineElement>
  )
}

const TimeLine = ({ timeline, style }) => {
  return (
    <VerticalTimeline>
      {timeline.map(item => {
        return getTimelineElement(item, style)
      })}
    </VerticalTimeline>
  )
}

export default TimeLine
