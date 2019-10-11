import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Transition from "../components/transition"
import "./layout.scss"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
     <Helmet>
          <meta name="google-site-verification" content="xFbNak1bwuauy4hcV2j7ZZTdp5cKIII1LBLq6xLDsY4" />
        </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
        <Transition location={location}>
        {children}
        </Transition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
