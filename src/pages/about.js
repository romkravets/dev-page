import React from "react"
import Scrollbars from "react-custom-scrollbars"
import SEO from "../components/seo"
import portrait from "../images/portrait.jpg"
import Footer from "../components/footer"

const AboutPage = () => (
  <Scrollbars style={{ width: "100%", height: "100vh" }}>
    <div>
      <SEO title="About" />
      <main id="about" className="main-block">
        <h1 className="lg-heading">
          About
          <span className="text-secondary" style={{ color: 'rgb(238, 206, 26)' }}>Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img
            src={portrait}
            alt="Roman Kravets Web Developer, Programmer, HTML & CSS Coder"
            className="bio-image"
          />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              – Hello! I’m a skilled front-end developer with +1 years of
              experience. I'm involved in self education in web development
              area: completing additional courses, studying online and
              practicing at development studio and freelance. I strive to craft
              precise, responsive, fast, easy-to-use environments with both
              strong purpose and great looks.
            </p>
          </div>

          <div className="job job-1">
            <h3>HTML&CSS code</h3>
            {/* <h6></h6>
            <p></p> */}
          </div>

          <div className="job job-2">
            <h3>Front End Developer</h3>
            {/* <h6></h6>
            <p></p> */}
          </div>

          <div className="job job-3">
            <h3>Graphic Designer</h3>
            {/* <h6></h6>
            <p></p> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </Scrollbars>
)

export default AboutPage
