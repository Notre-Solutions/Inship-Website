import React from "react"
import "../css/main.css"
import Layout from "../components/layout"
import Animation from "../components/process-animation"

const Landing = () => {
  return (
    <>
      <Layout current={"Home"}>
        <div id="what-we-do" className="main-page container">
          <div className="section-d">
            <div className="section-d-title">The Process</div>
            <div>
              <div className="animation">
                <Animation />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              repudiandae eius quibusdam neque odit deserunt delectus, doloribus
              maxime recusandae, ad asperiores. Officia temporibus laborum
              voluptates sequi laudantium doloremque ratione vero nobis omnis
              corrupti. Nihil laboriosam est, iure excepturi nam omnis maiores
              velit? Id non molestias ad obcaecati fugiat ut, mollitia quasi
              distinctio inventore soluta aspernatur quis delectus iusto rem
              laborum, quidem facilis ipsa reiciendis! Ea quidem, placeat minima
              iure dolore incidunt nihil, voluptas cum pariatur facere harum
              obcaecati doloremque velit tempore corrupti eligendi numquam nam
              vitae! Commodi praesentium neque tempore, odio officia illo culpa
              in dolores reprehenderit quasi porro totam dolorem dolor magnam
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Landing
