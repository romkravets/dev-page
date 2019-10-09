import React from "react"

const FooterStyle = {
  textAlign: "center",
  padding: "1rem",
  background: "#2b2b2b",
  color: "#ffff",
  height: "60px",
}

const Footer = () => (
  <footer id="main-footer" style={FooterStyle}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org" style={{ color: 'rgb(238, 206, 26)' }}>Gatsby</a> | Inspired by <a href="https://github.com/bradtraversy" style={{ color: 'rgb(238, 206, 26)' }}>Brad Traversy</a>
  </footer>
)

export default Footer
