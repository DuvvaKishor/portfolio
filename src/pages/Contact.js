import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t7bkp5f",  
        "template_h26xj5o", 
        form.current,
        "E_tbX4gyEHcRbUzAp"  
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });
  };

  return (
    <div className="main-section">
      <div className="main-section-header">
        <div className="main-container">
          <h2>Contact Me</h2>
        </div>
      </div>
      <div className="main-container">
        <div className="main-row">
          <div className="contact-info-section">
            {/* Address */}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FontAwesomeIcon className="icon" icon={faHome} />
              </div>
              <div className="contact-info-content">
                <h4>Address</h4>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>
            {/* Phone */}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FontAwesomeIcon className="icon" icon={faPhone} />
              </div>
              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>+91 8096194212</p>
              </div>
            </div>
            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FontAwesomeIcon  className="icon" icon={faEnvelope} />
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>duvvakishor@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form ref={form} onSubmit={sendEmail} id="contact-form">
              <h2>Send Message</h2>
              <div className="input-container">
                <input type="text" name="name" required />
                <span>Full Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" required />
                <span>Email</span>
              </div>
              <div className="input-container">
                <textarea name="message" required />
                <span>Type your Message...</span>
              </div>
              <div className="input-container">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
