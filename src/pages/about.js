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
            <h3 className="text-secondary" style={{ color: 'rgb(238, 206, 26)' }}>BIO</h3>
            <p>
              I am a freelance Front-end developer with a passion for providing my clients with modern, clean and fully validated sites.
              My skills include React, Redux, HTML5, CSS3, Bootstrap, jQuery and others.
              In over 4 years, I have worked for a variety of clients, from individuals to corporations. I pride myself on providing frequent and professional communication to all of my clients. 
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
        </div>
      </main>
      <Footer />
    </div>
  </Scrollbars>
)

export default AboutPage
