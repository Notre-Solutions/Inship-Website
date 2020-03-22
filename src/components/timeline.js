import React from "react"
import "../css/main.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Markdown from '../components/markdown'

function getTimelineElement(item){
  return(
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          fontSize: "2.5rem",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <Markdown markdown={item.description}/>
      </VerticalTimelineElement>

  )
}

const TimeLine = ({timeline}) => {

  return (
    <VerticalTimeline>
      {timeline.map(item=>{
        return getTimelineElement(item) 
      })}
    </VerticalTimeline>
  )
}

export default TimeLine
