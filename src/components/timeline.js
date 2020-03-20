import React from "react"
import "../css/main.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const TimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Easy to use</h3>
        <p>
          Accounts Payable is a very manual process, business received documents
          by post and email, they are then matched, sorted, approved by one or
          many people, entered into an accounting or e.r.p. system, then filed,
          reconciled and stored for years. This process is costly (based on pwc
          report) costs up to $4.50 per invoice, as all businesses are always
          looking for cost and efficiency improvements introducing a InShip
          process will reduce a 8-10 stage manual process to an automatic that
          is up to 9 times faster and removed between 80% and 90% of the cost.
          Reduce processing costs significantly
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Intergrates with your account package
        </h3>

        <p>
          Accounts Payable is a very manual process, business received documents
          by post and email, they are then matched, sorted, approved by one or
          many people, entered into an accounting or e.r.p. system, then filed,
          reconciled and stored for years. This process is costly (based on pwc
          report) costs up to $4.50 per invoice, as all businesses are always
          looking for cost and efficiency improvements introducing a InShip
          process will reduce a 8-10 stage manual process to an automatic that
          is up to 9 times faster and removed between 80% and 90% of the cost.
          Reduce processing costs significantly
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Statment Reconsiulation
        </h3>

        <p>
          {" "}
          Accounts Payable is a very manual process, business received documents
          by post and email, they are then matched, sorted, approved by one or
          many people, entered into an accounting or e.r.p. system, then filed,
          reconciled and stored for years. This process is costly (based on pwc
          report) costs up to $4.50 per invoice, as all businesses are always
          looking for cost and efficiency improvements introducing a InShip
          process will reduce a 8-10 stage manual process to an automatic that
          is up to 9 times faster and removed between 80% and 90% of the cost.
          Reduce processing costs significantly
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Grabbing infomation off your invoices
        </h3>

        <p>
          {" "}
          Accounts Payable is a very manual process, business received documents
          by post and email, they are then matched, sorted, approved by one or
          many people, entered into an accounting or e.r.p. system, then filed,
          reconciled and stored for years. This process is costly (based on pwc
          report) costs up to $4.50 per invoice, as all businesses are always
          looking for cost and efficiency improvements introducing a InShip
          process will reduce a 8-10 stage manual process to an automatic that
          is up to 9 times faster and removed between 80% and 90% of the cost.
          Reduce processing costs significantly
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default TimeLine
