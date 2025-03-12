import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faPython,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
// import DevImage from "./public/assets/image.jpg";
import "./About.css"; // Import CSS for styling

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
      <div className="about-flex">
        <h1 className="about-title"> About <span className="highlight">Me</span></h1>
        <h2 className="about-myname">Hello! My name is <span className="myname">Kishor Duvva</span></h2>
        <p className="about-text">
        I am a self-taught programmer with a passion for learning and exploring new technologies. I have a strong background in 
        <span className="underline-green"> FrontEnd Development and improving full-stack development </span> 
         and am always eager to expand my skillset and take on new challenges.
        In my free time, I enjoy sipping on a cup of tea (or coffee) and watching a game of cricket. As a dedicated and driven individual, 
        I am constantly seeking out opportunities to grow and improve as a programmer.
        </p>
        {/* <p className="about-text">
        I am a self-taught programmer with a passion for learning and exploring new technologies.<span className="underline-green"> Full Stack Web Developer </span>I have a strong background in FrontEnd Development and improving full-stack development and am always eager to expand my skillset and take on new challenges. In my free time, I enjoy sipping on a cup of tea (or coffee) and watching a game of cricket. As a dedicated and driven individual, I am constantly seeking out opportunities to grow and improve as a programmer.
        </p> */}
        <p className="about-text">Some of the Stack I know</p>

        {/* Tech Stack Logos */}
        <div className="tech-stack">
          <FontAwesomeIcon icon={faHtml5} className="tech-icon html" />
          <FontAwesomeIcon icon={faCss3Alt} className="tech-icon css" />
          <FontAwesomeIcon icon={faBootstrap} className="tech-icon bootstrap" />
          <FontAwesomeIcon icon={faJs} className="tech-icon js" />
          <FontAwesomeIcon icon={faReact} className="tech-icon react" />
          <FontAwesomeIcon icon={faNodeJs} className="tech-icon node" />
          <FontAwesomeIcon icon={faPython} className="tech-icon python" />
          <FontAwesomeIcon icon={faGithub} className="tech-icon github" />
          <FontAwesomeIcon icon={faAws} className="tech-icon aws" />
        </div>
        
        </div>
      <div className="about-image-container">
            <img src={`${process.env.PUBLIC_URL}/assets/image.jpg`} alt="Developer Working" className="about-image" />
      </div>
</div>
    </section>
  );
}

export default About;
