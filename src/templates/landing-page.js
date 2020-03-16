import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"

const Landing = () => {
  // const data = useStaticQuery(graphql`
  //   query Photos {
  //     images: allFile(filter: { relativeDirectory: { eq: "logo" } }) {
  //       nodes {
  //         id
  //         childImageSharp {
  //           fluid(maxWidth: 500, quality: 100) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Nav current={"Home"}></Nav>
      <header className="header">
        <div className="header-text-box">
          <h1 className="heading">
            <span className="main-header">InShip APS</span>
            <span className="sub-header">Revolutionizing Bookkeeping</span>
          </h1>
          <a href="#what-we-do" className="btn btn-white">
            What We Do
          </a>
        </div>
      </header>
      <div className="main-page">
        <section id="what-we-do" className="section-a">
          <h2 className="section-a-heading">What We Do</h2>
          <div className="text-box">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium, eligendi quia, mollitia nobis eaque voluptates fugiat
            molestiae perspiciatis cupiditate expedita temporibus neque modi
            velit nesciunt assumenda. Rerum ex sint quisquam blanditiis dolor!
            Amet earum dicta nemo repellendus cumque, ipsa delectus officia
            veritatis rerum quasi rem perspiciatis quas eligendi eveniet
            necessitatibus nostrum dolor nihil magni illum deserunt! Accusantium
            laudantium autem aperiam iste sequi quasi ut accusamus rem harum
            molestiae illum dolor tempora officiis, eligendi eveniet consequatur
            iure veniam dolorem asperiores fugiat. Aut laboriosam similique
            maxime sint consequuntur! Facilis quo, soluta laborum eum dolorem
            nihil, maxime dolore consectetur quae perspiciatis itaque nostrum.
          </div>
          <a href="#" className="btn">
            Play our video
          </a>
        </section>
        <section className="section-b">
          <h2 className="section-b-heading">The Problem</h2>
          <div className="text-box">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, eos tempora? Ea odio sequi hic facilis dolore?
            Praesentium tempore assumenda provident! Magnam in eligendi dolorum
            atque sint nulla, quibusdam sit laboriosam ea, deserunt nobis
            voluptates! Accusantium, voluptatem suscipit nesciunt at molestiae
            ipsa corporis dolorum alias commodi reprehenderit labore sequi!
            Debitis deleniti architecto itaque quasi exercitationem ipsum magni
            nobis magnam beatae! Excepturi, eligendi totam officiis corrupti,
            saepe aliquam voluptate voluptas ab aspernatur ipsum aperiam ipsa
            nihil non laboriosam incidunt sint? Illo harum ipsa velit ducimus
            nemo? Alias fuga minus culpa omnis tenetur! Quaerat tenetur facilis
            cumque accusamus, corrupti officiis possimus sequi ut voluptatem
            nobis iure repudiandae non temporibus porro veritatis corporis culpa
            dolores amet. Saepe omnis sunt architecto soluta, quaerat nemo et in
            quibusdam! Rerum nobis voluptas officia eaque id quia. Rem in nihil
            eaque provident sunt culpa soluta corporis molestiae perferendis
            iste asperiores molestias temporibus tenetur quas animi distinctio,
            maiores praesentium quia vero, dolore saepe minima maxime sit
            labore. Cupiditate fuga reprehenderit ducimus ea nisi doloribus
            consectetur qui inventore laboriosam quaerat velit dolores illo amet
            iusto expedita quibusdam ipsum porro, a, recusandae fugiat aliquam
            voluptatem! Quis soluta, iusto autem voluptate obcaecati mollitia
            rem atque reiciendis provident ipsa, hic libero exercitationem.
          </div>
        </section>
        <section className="section-c">
          <h2 className="section-c-heading">Products</h2>
          <div className="cards">
            <div className="card card-color-1">
              <img src="../img/logo/APC-logo.jpeg" alt="" />
              {/* <Img
                fluid={data.images.nodes.childImageSharp.fluid}
                objectFit="cover"
                className="img"
              /> */}
              <h3 className="card-title">Accounts Payable Combined</h3>
              <div className="text-box">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptas beatae eveniet, nihil ipsum voluptatem sequi nesciunt
                quia praesentium possimus ex fugit dicta veritatis consequatur
                quo sint, distinctio corporis. Odio.
              </div>
              <a href="" className="btn">
                Learn More
              </a>
            </div>
            <div className="card card-color-2">
              <img src="../img/logo/CAPS-logo.jpeg" alt="" />
              <h3 className="card-title">
                Complete Accounts Payable Solutions
              </h3>
              <div className="text-box">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptas beatae eveniet, nihil ipsum voluptatem sequi nesciunt
                quia praesentium possimus ex fugit dicta veritatis consequatur
                quo sint, distinctio corporis. Odio.
              </div>
              <a href="" className="btn">
                Learn More
              </a>
            </div>
            <div className="card card-color-3">
              <img src="../img/logo/T2P-logo.jpeg" alt="" />
              <h3 className="card-title">
                Tick To <span className="t2p">Post</span>
              </h3>
              <div className="text-box">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                voluptas beatae eveniet, nihil ipsum voluptatem sequi nesciunt
                quia praesentium possimus ex fugit dicta veritatis consequatur
                quo sint, distinctio corporis. Odio.
              </div>
              <a href="" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section className="section-d">
          <h1 className="title">Contact Us</h1>

          <form className="cf container">
            <div className="half left cf">
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="Name" title="Name"></label>
              </div>
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="email" title="Email"></label>
              </div>
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="subject" title="Subject"></label>
              </div>
            </div>
            <div className="half right cf">
              <div className="field">
                <input type="text" required autoComplete="off" />
                <label htmlFor="message" title="Message"></label>
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              id="input-submit"
              className="submit-btn"
            />
          </form>
        </section>
      </div>
      <Footer></Footer>
      {/* <footer>This is the footer woo</footer> */}
    </div>
  )
}

export default Landing
