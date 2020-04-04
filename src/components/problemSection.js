import React, { Component } from "react"
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
import Markdown from "./markdown"

export default class ProblemSection extends React.Component {
  constructor(props) {
    super(props)
  }

  section(params) {
    let array = []
    params.forEach((element, i) => {
      if (i % 2) {
        array.push(
          <div class="problem-card">
            <div class="meta">
              <div class={element.photo}></div>
              <div class="details">
                <div className="img-writing">{element.title}</div>
              </div>
            </div>
            <div class="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        )
      } else {
        array.push(
          <div class="problem-card alt">
            <div class="meta">
              <div class={element.photo}></div>
              <div class="details">
                <div className="img-writing">{element.title}</div>
              </div>
            </div>
            <div class="description">
              <h1>{element.title}</h1>
              <h2>{element.subtitle}</h2>
              <Markdown markdown={element.description} />
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        )
      }
    })
    return array
  }

  render() {
    if (this.props.show) {
      return <>{this.section(this.props.array)}</>
    } else {
      return <></>
    }
  }
}

{
  /* <div className="problem-section">
          <div class="problem-card">
            <div class="meta">
              <div class="photo-1"></div>
              <div class="details">
                <div className="img-writing">The Problem</div>
              </div>
            </div>
            <div class="description">
              <h1>Problem</h1>
              <h2>Apparently a messy place</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus velit sunt ipsum, et soluta corrupti! Numquam iusto
                nihil quasi ipsa magni neque minus nesciunt molestiae debitis?
                Culpa, ea. Dolores neque, veniam sed ipsum commodi quis et nam
                ex assumenda iusto tempore dolorem fuga magnam suscipit minima
                officiis asperiores nihil mollitia, voluptate placeat
                reprehenderit libero sit harum quos. Blanditiis deserunt iste
                doloribus assumenda, quisquam voluptate aspernatur soluta
                facere, quia ducimus quam error recusandae ex quo iure
                perferendis omnis optio dolorem sint sapiente.
              </p>
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
          <div class="problem-card alt">
            <div class="meta">
              <div class="photo-2"></div>
              <ul class="details">
                <div className="img-writing">How We Solve it</div>
              </ul>
            </div>
            <div class="description">
              <h1>How We Solve It</h1>
              <h2>Automate the SHITE out of it</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus velit sunt ipsum, et soluta corrupti! Numquam iusto
                nihil quasi ipsa magni neque minus nesciunt molestiae debitis?
                Culpa, ea. Dolores neque, veniam sed ipsum commodi quis et nam
                ex assumenda iusto tempore dolorem fuga magnam suscipit minima
                officiis asperiores nihil mollitia, voluptate placeat
                reprehenderit libero sit harum quos. Blanditiis deserunt iste
                doloribus assumenda, quisquam voluptate aspernatur soluta
                facere, quia ducimus quam error recusandae ex quo iure
                perferendis omnis optio dolorem sint sapiente.
              </p>
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
          <div class="problem-card">
            <div class="meta">
              <div class="photo-3"></div>
              <ul class="details">
                <div className="img-writing">The Solution</div>
              </ul>
            </div>
            <div class="description">
              <h1>The Solution</h1>
              <h2>Sumary of our different Solutions</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus velit sunt ipsum, et soluta corrupti! Numquam iusto
                nihil quasi ipsa magni neque minus nesciunt molestiae debitis?
                Culpa, ea. Dolores neque, veniam sed ipsum commodi quis et nam
                ex assumenda iusto tempore dolorem fuga magnam suscipit minima
                officiis asperiores nihil mollitia, voluptate placeat
                reprehenderit libero sit harum quos. Blanditiis deserunt iste
                doloribus assumenda, quisquam voluptate aspernatur soluta
                facere, quia ducimus quam error recusandae ex quo iure
                perferendis omnis optio dolorem sint sapiente.
              </p>
              <p class="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div> */
}
