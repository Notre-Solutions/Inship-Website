import React from "react"
import "../css/main.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import TimeLine from "../components/timeline"

function featureCard(feature, style) {
  return (
    <div className={`card dark-${style}`}>
      {/* <i className="icon fa fa-check-circle fa-2x"></i>  */}
      <div >
        <h1 className={`${style}`}>{feature.title}</h1>
        <div className={`text-box ${style}`}>{feature.description}</div>
      </div>
    </div>
  )
}

const Product = ({ data }) => {
  const {
    alias,
    description,
    style,
    title,
    productpage,
  } = data.markdownRemark.frontmatter
  const { timeline, features } = productpage
  console.log(`btn-${style}`);
  return (
    <div className='product-page'>
      <Nav current={alias} style={style}></Nav>
      <header className="product-header">
        <div className="header-text-box">
          <h1 className="heading">
            <span className={`main-header header-${style}`}>{title}</span>
            <span className={`sub-header header-${style}`}>{description}</span>
          </h1>

          <a href="" className={`btn-${style}`}>
            Watch a video
          </a>
        </div>
      </header>
      <div className="product-main container">
        <div className="product-main-section-a">
          <div className={`product-main-section-a-title ${style}`}>Process Flow</div>
          <TimeLine timeline={timeline} style={style}></TimeLine>
        </div>
        <div className={`line ${style}-line`}></div>
        <div className="product-main-section-b">
          <div className={`product-main-section-b-title ${style}`}>Features</div>
          <div className="cards">
            {features.map(feature => {
              return featureCard(feature, style)
            })}
          </div>
        </div>
        <div className="product-main-section-c">
          <div className={`product-main-section-c-title ${style}`}>
            Switching To Complete Accounts Payable Solutions
            <div className={`product-main-section-c-title-sub ${style}`}>
              Custermers reported
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className={`c100 p70 center ${style}`}>
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className={`text-box text-box-${style}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
            <div className="card">
              <div className={`c100 p93 center ${style}`}>
                <span>93%</span>

                <div className="slice">
                  <div className="bar"></div>

                  <div className="fill"></div>
                </div>
              </div>
              <div className={`text-box text-box-${style}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
            <div className="card">
              <div className={`c100 p89 center ${style}`}>
                <span>89%</span>

                <div className="slice">
                  <div className="bar"></div>

                  <div className="fill"></div>
                </div>
              </div>
              <div className={`text-box text-box-${style}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
            <div className="card">
              <div className={`c100 p100 center ${style}`}>
                <span>100%</span>

                <div className="slice">
                  <div className={`bar`}></div>

                  <div className="fill"></div>
                </div>
              </div>
              <div className={`text-box text-box-${style}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia
              </div>
            </div>
          </div>
        </div>
        <div className="product-main-section-d">
          <div className={`product-main-section-d-title ${style}`}>Integration Options</div>
          <div className="cards">
            <div className={`card ${style}-line`}>
              <i className="icon fa fa-file fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className={`card ${style}-line`}>
              <i className="icon fa fa-calculator fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className={`card ${style}-line`}>
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
            <div className={`card ${style}-line`}>
              <i className="icon fa fa-check-circle fa-2x"></i>
              <div className="text-box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium, eligendi quia, mollitia nobis eaque voluptates
                fugiat molestiae perspiciatis cupiditate expedita temporibus
                neque modi velit nesciunt assumenda.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Product

export const pageQuery = graphql`
  query ProductQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        alias
        style
        productpage {
          timeline {
            description
            title
          }
          features {
            description
            title
          }
        }
      }
    }
  }
`
