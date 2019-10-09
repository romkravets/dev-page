import React from "react"
import Scrollbars from "react-custom-scrollbars"
import SocIcons from "../components/SocIcons"
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
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="container-form">
          <form
            className="form__area"
            name="contact-form"
            method="post"
            action="/contact"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="group">
              <input type="text" name="personal-name" required />
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
              <textarea
                type="text"
                name="message"
                required
                rows="4"
                cols="50"
                style={{ resize: 'none' }}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Massage</label>
            </div>
            <div className="actions" style={{display:"flex","WebkitBoxPack":"center","MsFlexPack":"center", justifyContent:"center"}}>
              <button className="contact-btn btn-light">Send</button>
            </div>
            <div className="contact-soc-icons">
              <SocIcons />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  </Scrollbars>
)

export default ContactPage
