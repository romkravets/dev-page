import React, { Component } from "react"
import FullpageWrapper from "../components/fullpageWrapper"
import SEO from "../components/seo"
import Footer from "../components/footer"
class WorkPage extends Component {
  render() {
    return (
      <div>
      <SEO title="Work" />
      <main id="work" className="work">
        <FullpageWrapper />
      </main>
      <Footer />
    </div>
    )
  }
}

export default WorkPage