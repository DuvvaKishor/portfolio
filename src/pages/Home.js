import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faGithub, faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const Home = ({ menuOpen }) => {
  const [showResume, setShowResume] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`home-container ${menuOpen ? "dimmed" : ""}`}>
      <div className="background-animation">
        <h1 className="styled-heading">Welcome to my</h1>
        <span className="highlight">Portfolio!</span>
        <p className="description">
          I'm a <span className="desc-highlight">Full Stack Web Developer</span> with 3 years of proven experience in the field.
          I am passionate about creating interactive and beautiful user interfaces, 
          along with the required functionalities on the front end. 
          One of my favourite technologies to work with is React.js, particularly within the <span className="mern">MERN</span> stack.
        </p>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <a href="#contact" onClick={() => navigate("/contact")} className="cta-button hire-me">Hire Me</a>

        {/* Resume Dropdown */}
        <div className="resume-dropdown">
          <button className="cta-button" onClick={() => setShowResume(!showResume)}>
            My Resume <span className={`dropdown-icon ${showResume ? "rotate" : ""}`}>&#9660;</span>
          </button>
          
          {/* Resume Preview */}
          {showResume && (
            <div className="resume-preview">
              <h3>My Resume (Click to Open)</h3>
              <a href={`${process.env.PUBLIC_URL}/assets/KishorDuvvaResume.pdf`} >
                <img className="resume-img" src={`${process.env.PUBLIC_URL}/assets/KishorDuvvaResume.jpg`}  alt="Resume Preview" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/thenameis._.duvva/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.facebook.com/duvva.kishor/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/kishor-duvva-a82a25211/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
