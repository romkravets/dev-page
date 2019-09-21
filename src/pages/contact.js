import React from "react"
import  Scrollbars from "react-custom-scrollbars"
import SEO from "../components/seo"
import Footer from "../components/footer"

const ContactPage = () => (
  <Scrollbars style={{ width: "100%", height: "100vh" }}>
    <div>
      <SEO title="Contact" />
      <main id="contact" className="main-block">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="container">
        <form method="POST" data-netlify="true">
          <div className="group">
            <input type="text" name="name" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
          </div>
          <div className="group">
            <input type="text" name="email" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
          <div className="group">
            <textarea type="text" name="message" required  rows="4" cols="50"/>
            <span className="highlight" />
            <span className="bar" />
            <label>Massage</label>
          </div>
          <div className="actions">
            <input type="submit" value="Send Message" className="button"></input>
          </div>
        </form>
      </div>
      </main>
      <Footer />
    </div>
  </Scrollbars>
)

export default ContactPage