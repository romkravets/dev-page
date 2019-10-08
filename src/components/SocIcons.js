import React from "react"

import { IoIosMail } from "react-icons/io"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

const SocIcons = () => (
  <div className="home__icons">
    <a className="home__link" href="https://www.facebook.com/romann.kravets">
      <i className="fab fa-twitter fa-2x">
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
    <a className="home__link" href="https://www.linkedin.com/in/romkravets">
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
)

export default SocIcons
