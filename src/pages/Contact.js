import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";  // Import styles for responsiveness

const Contact = () => {
  const form = useRef(); // Creates a reference to the form

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_t7bkp5f',  // Replace with your actual Service ID
        'template_h26xj5o', // Replace with your actual Template ID
        e.target,
        'E_tbX4gyEHcRbUzAp'      // Replace with your actual User ID (if required)
    )
    .then((result) => {
        console.log('Email successfully sent!', result.text);
    })
    .catch((error) => {
        console.error('Email send error:', error);
    });
};



  return (
    <section className="contact">
      <h2 className="contact-name">Let's Connect</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button className="submit" type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
