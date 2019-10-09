import React from "react"
import SocIcons from "../components/SocIcons"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <main id="home" className="home">
      <div className="home__description">
        <h1 className="lg-heading">
          Rom
          <span className="text-secondary" style={{ color: 'rgb(238, 206, 26)' }}>Kravets</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, HTML & CSS Coder
        </h2>
        <SocIcons />
      </div>
    </main>
  </div>
)

export default IndexPage
