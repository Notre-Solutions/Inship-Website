import Masonry from "react-masonry-css"
import React from "react"
import NewsCard from "./news-card"
import { Component } from "react"

//...
class MY extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: null,
    }
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      3000: 3,
      1000: 2,
      600: 1,
    }
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {this.props.articles.map(edge => {
          const { article } = edge.node.frontmatter
          return <NewsCard article={article} />
        })}
      </Masonry>
    )
  }
}

export default MY
