import React, { Component } from "react"
import ReactPlayer from "react-player"
import "../css/main.css"

export default class Player extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          url={this.props.url}
          className="react-player"
          playing
          muted
          controls
          width="100%"
          height="100%"
        />
      </div>
    )
  }
}
