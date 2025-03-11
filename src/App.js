import React , { useState, useEffect }  from "react";
import { BrowserRouter as Router, Route, Routes , useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-container">
    <Router>
    <ForceHomeOnReload />
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className={`content ${menuOpen ? "dimmed" : ""}`} onClick={() => setMenuOpen(false)}>

      <Routes>
        <Route path="/" element={<Home menuOpen={menuOpen} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
}


const ForceHomeOnReload = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [firstLoad, setFirstLoad] = useState(true); // Track if it's the first load

  useEffect(() => {
    if (firstLoad) {
      navigate("/");
      setFirstLoad(false); // Set to false so navigation works after the first load
    }
  }, [firstLoad, navigate]);

  return null;
};

export default App;
