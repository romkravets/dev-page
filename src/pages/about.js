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
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img src={portrait} alt="Roman Kravets Web Developer, Programmer, HTML & CSS Coder" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
            I have a pedagogical education and I have been working as a teacher of Computer Science in two schools at the same time for last 4 years. In my free from the work time I'm involved in self education  in web development area: completing additional courses, studying online and practicing at home. Now I have enough knowledge and skills to work as a web developer.
            </p>
          </div>

          <div className="job job-1">
            <h3>Freelancer</h3>
            <h6>Full Stack Developer</h6>
            <p>
            – Hello! I’m a skilled front-end developer with +1 years of experience in UI/UX design, application development. I'm involved in self education in web development area: completing additional courses, studying online and practicing at development studio or freelance.  I strive to craft precise, responsive, fast, easy-to-use environments with both strong purpose and great looks.
            </p>
          </div>

          <div className="job job-2">
            <h3>Designers</h3>
            <h6>Front End Developer</h6>
            <p>
            – Hello! I’m a skilled front-end developer with +1 years of experience in UI/UX design, application development. I'm involved in self education in web development area: completing additional courses, studying online and practicing at development studio or freelance.  I strive to craft precise, responsive, fast, easy-to-use environments with both strong purpose and great looks.
            </p>
          </div>

          <div className="job job-3">
            <h3>Graphic works</h3>
            <h6>Graphic Designer</h6>
            <p>
            – Hello! I’m a skilled front-end developer with +1 years of experience in UI/UX design, application development. I'm involved in self education in web development area: completing additional courses, studying online and practicing at development studio or freelance.  I strive to craft precise, responsive, fast, easy-to-use environments with both strong purpose and great looks.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </Scrollbars>
)

export default AboutPage