import React, { Component } from "react"
import FullpageWrapper from "../components/fullpageWrapper"
// import  Scrollbars from "react-custom-scrollbars"
import SEO from "../components/seo"
import Footer from "../components/footer"
class WorkPage extends Component {
  render() {
    return (
      // <Scrollbars style={{ width: "100%", height: "100vh" }}>
      <div>
        <SEO title="Work" />
        <main id="work" className="work">
          <FullpageWrapper />
        </main>
        <Footer />
      </div>
      //  </Scrollbars>
    )
  }
}

export default WorkPage
