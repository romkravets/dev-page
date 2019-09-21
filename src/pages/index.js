import React from "react"

import SEO from "../components/seo"
import { IoIosMail } from "react-icons/io"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <main id="home" className="home">
      <div className="home__description">
        <h1 className="lg-heading">
          Rom
          <span className="text-secondary">Kravets</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, HTML & CSS Coder
        </h2>
        <div className="home__icons">
          <a
            className="home__link"
            href="https://www.facebook.com/romann.kravets"
          >
            <i className="fab fa-twitter fa-2x">
              {" "}
              <FaFacebookF />
            </i>
          </a>
          <a className="home__link" href="mailto:romann.kravets@gmail.com">
            <i className="fab fa-facebook fa-2x">
              <IoIosMail />
            </i>
          </a>
          <a className="home__link" href="https://github.com/romkravets">
            <i className="fab fa-linkedin fa-2x">
              <FaGithub />
            </i>
          </a>
          <a
            className="home__link"
            href="https://www.linkedin.com/in/romkravets"
          >
            <i className="fab fa-github fa-2x">
              <FaLinkedinIn />
            </i>
          </a>
          <a className="home__link" href=" https://t.me/romkravets">
            <i className="fab fa-github fa-2x">
              <FaTelegramPlane />
            </i>
          </a>
        </div>
      </div>
    </main>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </div>
)

export default IndexPage