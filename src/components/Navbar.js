import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setMenuOpen, menuOpen }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="user-details">
        <div className="logo-container">
          <img className="logo" alt="D" src={`${process.env.PUBLIC_URL}/assets/duvvaphoto.jpg`} />
          <span className="status-indicator"></span>
        </div>
        <h1 className="my-name" onClick={() => navigate("/")}>Kishor Duvva</h1>
      </div>

      {/* Toggle Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
