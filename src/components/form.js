import React from "react"
import SocIcons from "../components/SocIcons"

const ContactSocIconsStyle = {
        display: "flex",
        WebkitBoxPack: "center",
        MsFlexPack: "center",
        justifyContent: "center",
        marginTop: "2rem"
      }

const ContactForm = () => (
      <form
         className="form__area"
         name="contact-form"
         method="post"
         action="/contact"
         data-netlify="true">
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
            <label>Message</label>
         </div>
         <div style={{display:"flex","WebkitBoxPack":"center","MsFlexPack":"center", justifyContent:"center"}}>
            <button className="contact-btn btn-light">Send</button>
         </div>
         <div style={ContactSocIconsStyle}>
            <SocIcons />
         </div>
      </form>
)
export default ContactForm