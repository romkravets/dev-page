import React from "react"
import Scrollbars from "react-custom-scrollbars"
import ContactForm from "../components/form"
import SEO from "../components/seo"
import Footer from "../components/footer"

const ContactPage = () => (
  <Scrollbars style={{ width: "100%", height: "100vh" }}>
    <div>
      <SEO title="Contact" />
      <main
        id="contact"
        className="main-block contact"
        style={{
          paddingTop: "0",
        }}
      >
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary" style={{ color: 'rgb(238, 206, 26)' }}>Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="container-form">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  </Scrollbars>
)

export default ContactPage
