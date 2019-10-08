import React from "react"
import Scrollbars from "react-custom-scrollbars"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <Scrollbars style={{ width: "100%", height: "100vh" }}>
    <div>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Scrollbars>
)

export default NotFoundPage
