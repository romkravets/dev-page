import React from "react"

import { IoIosMail } from "react-icons/io"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

const SocIcons = () => (
  <div className="home__icons">
    <a className="home__link" href="https://www.facebook.com/romann.kravets" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter" style={{ fontSize: "2em"}}>
        <FaFacebookF />
      </i>
    </a>
    <a className="home__link" href="mailto:romann.kravets@gmail.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook" style={{ fontSize: "2em"}}>
        <IoIosMail />
      </i>
    </a>
    <a className="home__link" href="https://github.com/romkravets" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin" style={{ fontSize: "2em"}}>
        <FaGithub />
      </i>
    </a>
    <a className="home__link" href="https://www.linkedin.com/in/romkravets" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github" style={{ fontSize: "2em"}}>
        <FaLinkedinIn />
      </i>
    </a>
    <a className="home__link" href=" https://t.me/romkravets" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github" style={{ fontSize: "2em"}}>
        <FaTelegramPlane />
      </i>
    </a>
  </div>
)

export default SocIcons
