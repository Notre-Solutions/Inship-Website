import VisibilitySensor from "react-visibility-sensor"
import React from "react"
function onChange1(isVisible) {
  console.log("Element is now %s", isVisible ? "visible1" : "hidden1")
}

function onChange2(isVisible) {
  console.log("Element is now %s", isVisible ? "visible2" : "hidden2")
}

function onChange3(isVisible) {
  console.log("Element is now %s", isVisible ? "visible3" : "hidden3")
}

function MyComponent(props) {
  return (
    <div className='scroll-sensor'>
      <div className='scrollBar'/>
      <div className='scrollSections'/>
      <VisibilitySensor onChange={onChange1}>
        <div>...content goes here...</div>
      </VisibilitySensor>
      <div style={{ height: "100vh" }} />
      <VisibilitySensor onChange={onChange2}>
        <div>...content goes here...</div>
      </VisibilitySensor>
      <div style={{ height: "100vh" }} />
      <VisibilitySensor onChange={onChange3}>
        <div>...content goes here...</div>
      </VisibilitySensor>
    </div>
  )
}

export default MyComponent
